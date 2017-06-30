import React from 'react';
import injectSheet from 'react-jss';
import {cssConstants} from '../common/cssConstants';
import classNames from 'classnames';
// var classNames = require('classnames');

const styles = {
  input:{
    border:'solid 1px '+cssConstants.grey,
    borderRadius:'5px'
  },
  disabledView:{
    border:'none',
    background:cssConstants.white
  }

}

@injectSheet(styles)
export default class InputBoxPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      isReadOnly: true,
      value: this.props.textValue
    }
  }
  onChange = (e) =>{
    this.setState({value:this.value})
    alert(this.state.value);
    //this.props.onApiChange("abcd")
  }

  render() {
    const {classes} = this.props;
    let inputClass = classNames({
      [classes.input]: true,
      [classes.disabledView] : this.state.isReadOnly
    });
    return (
      <input className={inputClass} value={this.state.value} onChange = {this.onChange()}/>
    );
  }
}
