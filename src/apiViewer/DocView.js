import React from 'react';
import injectSheet from 'react-jss';
import {cssConstants} from '../common/cssConstants';

import JsonEditor from '../jsonEditor/JsonEditor';
import TextEditor from '../common/textEditor';
import InputBoxPreview from '../common/InputBoxPreview';
import ToggleButton from '../common/ToggleButton';

const styles = {
  basicDetailsCont:{
    background:cssConstants.lightBlue
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

  render() {
    const {classes} = this.props;
    return (
      <div>
        <div className={classes.basicDetailsCont}></div>
        <InputBoxPreview
          textValue = {this.props.api.name}
          onApiChange={this.props.onApiChange}/>
        <div>Request</div>
        <JsonEditor
          value={this.props.api.sampleRequest}
          onChange={this.onRequestChange.bind(this)}
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
