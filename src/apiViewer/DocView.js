import React from 'react';
import injectSheet from 'react-jss';
import {cssConstants} from '../common/cssConstants';

import JsonEditor from '../jsonEditor/JsonEditor';
import TextEditor from '../common/textEditor';
import InputBoxPreview from '../common/InputBoxPreview';
import ToggleButton from '../common/ToggleButton';
import KeyValue from '../common/KeyValue';
import MethodPicker from './MethodPicker';

const styles = {
  basicDetailsCont:{
    background:cssConstants.bgBlue,
    minHeight:'50px',
    margin:'0 -70px'
  }
}

@injectSheet(styles)
export default class DocView extends React.Component {
  constructor(props) {
    super(props);
  }

  onRequestChange = (value) => {
    this.props.onApiChange({sampleRequest : value})
  }

  onResponseChange = (value) => {
    this.props.onApiChange({sampleResponse : value})
  }
  // set requestEditState = request when you want to save the values

  onChangeHeaders = (headers) => {
    console.log(headers);
  }

  render() {
    const {classes} = this.props;
    return (
      <div>
        <div className={classes.basicDetailsCont}>
        <InputBoxPreview
          textValue = {this.props.api.name}
          onApiChange={this.props.onApiChange}/>
        <MethodPicker />
        </div>
        <KeyValue onChange={this.onChangeHeaders} />
        <div>Request</div>
        <JsonEditor
          value={this.props.api.sampleRequest}
          onChange={this.onRequestChange.bind(this)}
          height={'200px'}
          editable={true} />
        <div>Response</div>
        <JsonEditor
          value={this.props.api.sampleResponse}
          onChange={this.onResponseChange.bind(this)}
          editable={true} />
        <TextEditor />
      </div>

    );
  }
}
