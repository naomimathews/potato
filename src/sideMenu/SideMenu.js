import React from 'react';
import injectSheet from 'react-jss';
import {cssConstants} from '../common/cssConstants';
import Button from '../common/Button';
import ApiListItem from './ApiListItem';


const styles = {
  container : {
    background: cssConstants.lightPurple,
    minHeight: 'calc(100vh - 55px)',
    width: '250px',
    fontSize: '16px',
    padding: '20px 10px'
  },
  newApi:{
    padding:'10px',
    borderBottom:'solid 1px '+ cssConstants.linePurple,
    margin:'0 -10px',
    color:cssConstants.purple
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
