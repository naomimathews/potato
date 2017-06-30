import React from 'react';
import injectSheet from 'react-jss';
import {cssConstants} from '../common/cssConstants';

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
    let className = {
      classes.btn: true,
      classes.purpleBtn : this.props.style == "purple",
      classes.blueBtn : this.props.style == "blue",
    }
    return (
      <button className={className}>{this.props.text}</button>
    );
  }
}
