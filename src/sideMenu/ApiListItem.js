import React from 'react';
import injectSheet from 'react-jss';
import {cssConstants} from '../common/cssConstants';
import classNames from 'classnames';
import superagent from 'superagent';
import jsConstants from '../common/jsConstants';

import ToggleButton from '../common/ToggleButton';

const styles = {
  apiListItem:{
    padding:'10px 20px',
    borderBottom:'solid 1px '+ cssConstants.lightBlue,
    cursor: 'pointer',
    position:'relative',
    textTransform: 'capitalize'
  },
  selectedApi:{
    background:cssConstants.darkBlue
  },
  toggleButton:{
    position: 'absolute',
    top: '50%',
    right:'20px',
    transform : 'translateY(-50%)'
  }
}

@injectSheet(styles)

export default class ApiListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  onToggleProxy = (isProxyEnabled) => {
    superagent
    .post(jsConstants.baseUrl+'/api/potato-crud/write/v1.0/setProxy')
    .send({
      api: this.props.api._id,
      proxy: isProxyEnabled
    })
    .then(res => this.props.fetchApis(), err => console.log(err))
  }

  render() {
    const {classes} = this.props;
    let btnClass = classNames({
      [classes.apiListItem]: true,
      [classes.selectedApi] : this.props.api._id == this.props.currApiId
    });
    return (
      <div className={btnClass} onClick={this.props.onClick}>
        <div >{this.props.api.name}</div>
        <div className={classes.toggleButton}><ToggleButton toggleState={this.props.api.proxy} onChange={this.onToggleProxy} /></div>
      </div>
    );
  }
}
