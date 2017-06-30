import React from 'react';
import JSONEditor from 'jsoneditor';
import injectSheet from 'react-jss';
import classnames from 'classnames';

const styles = {
  jsoneditor: {
    height: '500px'
  },
  switch: {
    marginBottom: '20px'
  }
}

@injectSheet(styles) // do this, else the styles won't come... very important
export default class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.editor = null;
    this.state = {
      view: 'code'
    };
  }

  componentDidMount = () => {

    var container = this.refs.jsoneditor;
    var options = {
      mode: this.state.view
    };
    this.editor = new JSONEditor(container, options);
    var json = {
      a: 1,
      str: 'good',
      arr: [{
        1: 'one',
        2: 'two',
        3: 'three'
      }]
    };
    this.editor.set(json);
  }

  switchView = () => {
    this.setState({
      view: (this.state.view === 'code') ? 'tree' : 'code'
    }, () => {
      this.editor.setMode(this.state.view)
    });
  }

  render() {
    const {classes} = this.props;
    return (
      <div>
        <button onClick={this.switchView.bind(this)} className={classnames(classes.switch, 'button')}>switch mode</button>
        <div ref="jsoneditor" className={classes.jsoneditor}></div>
      </div>
    );
  }
}
