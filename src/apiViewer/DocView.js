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
  }

  render() {
    const {classes} = this.props;
    return (
      <div>
        <InputBoxPreview textValue = {this.props.api.name} onApiChange={this.props.onApiChange}/>
        <JsonEditor />
        <TextEditor />
      </div>

    );
  }
}
