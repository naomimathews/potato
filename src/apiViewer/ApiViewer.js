import React from 'react';
import injectSheet from 'react-jss';
import {cssConstants} from '../common/cssConstants';

import DocView from './DocView';
import TestView from './TestView';
import MainTab from './MainTab';

const styles = {
  container : {
    flex:1,
    padding: '30px 70px'
  }

}

@injectSheet(styles)
export default class SideMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs:[
        {
          viewId: 1,
          name: "Docs"
        }, {
          viewId: 2,
          name: "Test"
        }
      ],
      selectedViewId: 1,
      api: this.props.currApi,
      isDocsEdited: false

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

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.container}>
        <MainTab tabs={this.state.tabs} selectedTabId={this.state.selectedViewId} changeTab={this.changeTab.bind(this)} />
        {
          this.state.selectedViewId == 2 ?
            <TestView api={this.state.api} onApiChange={this.onApiChange.bind(this)}/> :
            <DocView api={this.state.api} onApiChange={this.onApiChange.bind(this)}/>
        }
      </div>

    );
  }
}
