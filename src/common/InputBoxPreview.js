import React from 'react';
import injectSheet from 'react-jss';
import {cssConstants} from '../common/cssConstants';
import classNames from 'classnames';
// var classNames = require('classnames');

const styles = {
  inputBoxPreview: {
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
    background: '#ddd',
    borderRadius: '8px'
  },
  input:{
    border:'solid 1px '+cssConstants.grey,
    borderRadius: '5px',
    fontWeight: 'bold',
    fontSize: '16px',
    width: '100%',
    background:cssConstants.white,
    padding: '10px',
    flex: '1',
    border: 'none',
  },
  disabledView:{
    border:'none',
    background:cssConstants.bgLightBlue
  },
  edit:{
    fontWeight:'lighter',
    color:cssConstants.darkBlue,
    opacity: '0.5',
    fontSize: '12px',
    marginLeft: '10px',
    marginRight: '10px',
    cursor: 'pointer'
  }
}

@injectSheet(styles)
export default class InputBoxPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      isReadOnly: true,
      value: this.props.textValue || 'API Name'
    }
  }
  onChange = (e) =>{
    let changedText = e.target.value;
    this.setState({value: changedText});
  }
  componentWillReceiveProps = (newProps) => {
    if (newProps.textValue  !== this.props.textValue) {
      this.setState({
        value: newProps.textValue
      })
    }
  }
  toggleEdit = (e) =>{
    e.stopPropagation();
    this.setState({isReadOnly: !this.state.isReadOnly}, () => {
      if (this.state.isReadOnly) {
        this.props.onApiChange({name : this.state.value});
      } else {
        this.refs.input.focus();
      }
    });
  }

  render() {
    const {classes} = this.props;
    let inputClass = classNames({
      [classes.input]: true,
      [classes.disabledView] : this.state.isReadOnly
    });
    var inputHtml,editTrigger;
    if(this.state.isReadOnly){
      inputHtml = <input className={inputClass} value={this.state.value} onChange = {this.onChange} placeholder="API Name" disabled ref="input" />;
      editTrigger = <span className={classes.edit} onClick={this.toggleEdit.bind(this)}>Edit</span>;
    }
    else{
      inputHtml =  <input className={inputClass} value={this.state.value} onChange = {this.onChange} placeholder="API Name" onBlur={this.toggleEdit.bind(this)} ref="input" />;
    }
    return (
      <div className={classes.inputBoxPreview}>
        {inputHtml}
        {editTrigger}
      </div>
    );
  }
}
