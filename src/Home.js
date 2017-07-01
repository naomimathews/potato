import React from 'react';
import injectSheet from 'react-jss';
import Header from './header/Header';
import SideMenu from './sideMenu/SideMenu';
import ApiViewer from './apiViewer/ApiViewer';
import jsConstants from './common/jsConstants';
import superagent from 'superagent';

const styles = {
  mainContainer: {
    display: 'flex',
    alignItems:'stretch'
  },
  home: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh'
  }
}

@injectSheet(styles) // do this, else the styles won't come... very important

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiList: [{
        _id: '',
        method: 'GET',
        name: '',
        request: {},
        response: {},
        notes: null,
        headers: [],
        proxy: true
      }],
      currApiId: '',
      baseUrl: ''
    }
  }

  fetchApis = () => {
    superagent
    .get(jsConstants.baseUrl+'/api/potato-crud/read/v1.0/listApis')
    .then(res => {
      let newState = {
        apiList: [],
        currApiId: this.state.currApiId
      };
      newState.apiList = [{
        _id: '',
        method: 'GET',
        name: '',
        request: {},
        response: {},
        notes: null,
        headers: [],
        proxy: true
      }, ...res.body];
      newState.currApiId = '';
      this.setState(newState);
    }, err => {
      console.log(err);
    })
  }

  componentDidMount = () => {
    this.fetchApis();
    superagent
    .get(jsConstants.baseUrl+'/api/potato-crud/read/v1.0/getBaseUrl')
    .then(res => {
      this.setState({
        baseUrl: res.body.baseUrl
      })
    })
  }

  selectApi = (id) => {
    this.setState({
      currApiId: id
    });
  }

  newApi = () => {
    this.setState({
      currApiId: ''
    })
  }

  render() {
    const {classes} = this.props;
    let currApiObj;
    for(let i=0;i<this.state.apiList.length;i++){
      if(this.state.apiList[i]._id == this.state.currApiId){
        currApiObj= this.state.apiList[i];
      }
    }
    const newApiMode = this.state.currApiId.length ? false : true;
    return (
      <div className={classes.home}>
        <Header baseUrl={this.state.baseUrl} />
        <div className={classes.mainContainer}>
          <SideMenu
            apiList={this.state.apiList}
            fetchApis={this.fetchApis}
            currApiId={this.state.currApiId}
            onSelectApi={this.selectApi.bind(this)}
            newApi={this.newApi.bind(this)} />
          <ApiViewer
            baseUrl={this.state.baseUrl}
            currApi={currApiObj}
            newApiMode={newApiMode}
            fetchApis={this.fetchApis} />
        </div>
      </div>
    );
  }
}
