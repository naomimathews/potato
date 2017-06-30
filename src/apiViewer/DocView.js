import React from 'react';
import injectSheet from 'react-jss';
import {cssConstants} from '../common/cssConstants';

import JsonEditor from '../jsonEditor/JsonEditor';
import TextEditor from '../common/textEditor';
import InputBoxPreview from '../common/InputBoxPreview';

const styles = {
}

@injectSheet(styles)
export default class DocView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      request: {
        a: 1,
        str: 'good',
        arr: [{
          1: 'one',
          2: 'two',
          3: 'three'
        }]
      },
      requestEditState: {}
    }
  }

  onRequestChange = (value) => {
    this.setState({
      requestEditState: value
    });
  }

  // set requestEditState = request when you want to save the values

  render() {
    const {classes} = this.props;
    return (
      <div>
        <InputBoxPreview
          textValue = {this.props.api.name}
          onApiChange={this.props.onApiChange}/>
        <JsonEditor
          value={this.state.request}
          onChange={this.onRequestChange.bind(this)}
          editable={true} />
        <TextEditor />
      </div>

    );
  }
}
