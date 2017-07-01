import React from 'react';
import injectSheet from 'react-jss';
import {cssConstants} from '../common/cssConstants';
import Button from '../common/Button';
import ApiListItem from './ApiListItem';


const styles = {
  container : {
    background:  'linear-gradient(to bottom, #717989, #2e3446)',
    minHeight: 'calc(100vh - 55px)',
    width: '250px',
    fontSize: '16px',
    color:cssConstants.white,
    overflow: 'auto'
  },
  newApi:{
    background:cssConstants.greenGradient,
    height:'70px',
    lineHeight:'70px',
    color:'white',
    padding:'14px 20px',
    cursor: 'pointer'
  },
  saveButton: {
    margin:'0px auto',
    display:'block',
    height: '42px',
    borderRadius: '4px',
    backgroundColor: '#56596f',
    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.1)',
    border: 'none',
    fontSize: '12px',
    fontWeight: 'bold',
    letterSpacing: '2px',
    textAlign: 'center',
    color: '#ffffff',
    textTransform: 'uppercase',
    cursor: 'pointer',
    padding: '10px 30px'
  }
}

@injectSheet(styles)

export default class SideMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  selectApi = (apiId) => {
    if (this.props.onSelectApi) this.props.onSelectApi(apiId);
  }

  render() {
    const {classes} = this.props;
    var apiList= this.props.apiList.map((api, index) => {
      if (index === 0) return <div className={classes.newApi} key={api._id}>  <button className={classes.saveButton}  onClick={this.props.newApi}>new</button></div>
      return <ApiListItem api={api} currApiId={this.props.currApiId} key={api._id} fetchApis={this.props.fetchApis} onClick={() => this.selectApi(api._id)}/>
    });
    return (
      <div className={classes.container}>
        {apiList}
      </div>

    );
  }
}
