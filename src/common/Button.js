import React from 'react';
import injectSheet from 'react-jss';
import {cssConstants} from '../common/cssConstants';
import classNames from 'classnames';
// var classNames = require('classnames');

const styles = {
  btn:{
    borderRadius:"2px",
    height:"40px",
    lineHeight:"40px",
    color:cssConstants.white,
    padding:"0 10px",
    minWidth:"100px"
  },
  purpleBtn : {
    background: cssConstants.purple,
  },
  blueBtn : {
    background: cssConstants.darkBlue
  }
}

@injectSheet(styles)
export default class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {classes} = this.props;
    let btnClass = classNames({
      btn: true,
      purpleBtn : this.props.style == "purple",
      blueBtn : this.props.style == "blue",
    });

    return (
      <button className={btnClass}>{this.props.text}</button>
    );
  }
}
