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
    color:cssConstants.white

  },
  newApi:{
    background:cssConstants.greenGradient,
    height:'70px',
    lineHeight:'70px',
    color:'white',
    padding:'0px 10px'
  }
}

@injectSheet(styles)

export default class SideMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {classes} = this.props;
    var apiList= this.props.apiList.map((api, index) => {
      return <ApiListItem api={api} currApiId={this.props.currApiId} key={api.id}/>
    });
    return (
      <div className={classes.container}>
        <div className={classes.newApi}>+ Add API</div>
        {apiList}
      </div>

    );
  }
}
