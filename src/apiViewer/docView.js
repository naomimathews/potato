import React from 'react';
import injectSheet from 'react-jss';
import {cssConstants} from '../common/cssConstants';

import JsonEditor from '../jsonEditor/JsonEditor';
import TextEditor from '../common/textEditor';

const styles = {
}

@injectSheet(styles)
export default class DocView extends React.Component {
  constructor(props) {
    super(props);
    console.log(cssConstants);
  }

  render() {
    const {classes} = this.props;
    return (
      <div>
              <h1>working apiviewer</h1>
        <JsonEditor />
        <TextEditor />
      </div>

    );
  }
}
