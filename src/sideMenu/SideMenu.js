import React from 'react';
import injectSheet from 'react-jss';
import {cssConstants} from '../common/cssConstants';
import Button from '../common/Button';

const styles = {
  container : {
    background: cssConstants.lightPurple,
    minHeight: 'calc(100vh - 55px)',
    width: '250px',
    fontSize: '16px',
    padding: '20px 10px'
  },
  apiListContainer:{
    'marginTop': '20px'
  }
}

@injectSheet(styles)

class ApiListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {classes} = this.props;

    return (
      <div className={classes.apiListContainer}>{this.props.api.name}</div>

    );
  }
}

class ApiList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {classes} = this.props;
    var apiCtaList= this.props.currEx.apiList.map((api, index) => {
      return <ApiListItem api={api} currApiId={this.props.currApiId}/>
    });
    return (
      <div className={classes.apiListContainer}>
        {apiCtaList}
      </div>

    );
  }
}

export default class SideMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.container}>
        <Button text="Add API" btnColor="purple"/>
        <ApiList apiList={this.props.apiList} />
      </div>

    );
  }
}
