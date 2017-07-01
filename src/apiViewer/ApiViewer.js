import React from 'react';
import injectSheet from 'react-jss';
import {cssConstants} from '../common/cssConstants';
import jsConstants from '../common/jsConstants';
import superagent from 'superagent';

import DocView from './DocView';
import TestView from './TestView';
import MainTab from './MainTab';

const styles = {
  container : {
    flex:1,
    padding: '30px 70px',
    overflow: 'auto'
  }

}

@injectSheet(styles)
export default class ApiViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs:[
        {
          viewId: 1,
          name: "Docs"
        }
      ],
      selectedViewId: 1,
      api: this.props.currApi,
      isDocsEdited: false

    }
  }

  componentWillReceiveProps = (newProps) => {
    if (newProps.currApi !== this.props.currApi) {
      this.setState({
        api: newProps.currApi
      })
    }
  }

  changeTab = (tab) => {
    this.setState({
      selectedViewId: tab
    })
  }

  onApiChange = (apiChanges) => {
    let changeApiObj = Object.assign({}, this.state.api, apiChanges);
    this.setState({api: changeApiObj, isDocsEdited: true});
  }

  saveResponse = (res) => {
    console.log(res);
    let newState = Object.assign({}, this.state);
    newState.api.response = res.body;
    this.setState(newState);
  }

  testApi = () => {
    if (this.state.api.method.toLowerCase() === 'get') {
      let url = (this.state.api._id);
      if (url[0] === '/') {
        url = url.substring(1, url.length);
      }
      superagent
      .get(this.props.baseUrl+url)
      .then(res => this.saveResponse.bind(this)(res), err => console.log(err))
    } else {
      let newState = Object.assign({}, this.state);
      if (newState.api.sampleRequest) {
        newState.api.request = newState.api.sampleRequest;
        delete newState.api.sampleRequest;
      }
      superagent[this.state.api.method.toLowerCase()](this.props.baseUrl+url)
      .send(this.state.api.request)
      .then(res => this.saveResponse.bind(this)(res), err => console.log(err));
    }
  }

  saveApi = () => {
    let newState = Object.assign({}, this.state);
    if (newState.api.sampleRequest) {
      newState.api.request = newState.api.sampleRequest;
      delete newState.api.sampleRequest;
    }
    if (newState.api.sampleResponse) {
      newState.api.response = newState.api.sampleResponse;
      delete newState.api.sampleResponse;
    }
    this.setState(newState, () => {
      console.log(this.state.api);

      const url = this.props.newApiMode ? 'createApi' : 'editApi';

      superagent
      .post(jsConstants.baseUrl+'/api/potato-crud/write/v1.0/'+url)
      .send(this.state.api)
      .then(res => this.props.fetchApis(), err => console.log(err))
    });
  }

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.container}>
        <MainTab tabs={this.state.tabs} selectedTabId={this.state.selectedViewId} changeTab={this.changeTab.bind(this)} />
        {
          this.state.selectedViewId == 2 ?
            <TestView api={this.state.api} onApiChange={this.onApiChange.bind(this)}/> :
            <DocView
              api={this.state.api}
              onApiChange={this.onApiChange.bind(this)}
              testApi={this.testApi.bind(this)}
              saveApi={this.saveApi.bind(this)}/>
        }
      </div>
    );
  }
}
