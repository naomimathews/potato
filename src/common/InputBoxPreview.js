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
    let changedText = e.target.value;
    this.setState({value: changedText});
    this.props.onApiChange({name : changedText})
  }
  toggleEdit = (e) =>{
    this.setState({isReadOnly: !this.state.isReadOnly});
  }

  render() {
    const {classes} = this.props;
    let inputClass = classNames({
      [classes.input]: true,
      [classes.disabledView] : this.state.isReadOnly
    });
    var inputHtml,editTrigger;
    if(this.state.isReadOnly){
      inputHtml = <input className={inputClass} value={this.state.value} onChange = {this.onChange} disabled />;
      editTrigger = <span onClick={this.toggleEdit}>Edit</span>;
    }
    else{
      inputHtml =  <input className={inputClass} value={this.state.value} onChange = {this.onChange} />;
      editTrigger = <span onClick={this.toggleEdit}>Done</span>;
    }
    return (
      <div>
        {inputHtml}
        {editTrigger}
      </div>
    );
  }
}
