import React from 'react';
import JSONEditor from 'jsoneditor';
import injectSheet from 'react-jss';
import classnames from 'classnames';
import ToggleButton from '../common/ToggleButton';

const styles = {
  editor: {
    position: 'relative'
  },
  jsoneditor: {
    height: '500px',
  },
  switch: {
    marginBottom: '10px',
    textAlign: 'right',
    position: 'absolute',
    top: '9px',
    left: '75px',
    zIndex: '2',
    color: 'white'
  },
  toggleSwitch: {
    margin: '0 10px'
  }
}

@injectSheet(styles) // do this, else the styles won't come... very important
class JsonEditor extends React.Component {
  constructor(props) {
    super(props);
    this.editor = null;
    this.state = {
      editable: this.props.editable || false,
      view: 'code'
    };
  }

  onChange = () => {
    try {
      const value = this.editor.get();
      if (this.props.onChange) {
        this.props.onChange(value);
      }
    } catch (err) {}
  }

  componentDidMount = () => {

    var container = this.refs.jsoneditor;
    var options = {
      mode: this.state.view,
      history: false,
      search: true,
      onChange: this.onChange
    };
    this.editor = new JSONEditor(container, options);
    var json = this.props.value;
    this.editor.set(json);
    if (!this.state.editable) {
      this.editor.aceEditor.setReadOnly(true);
    }
  }

  componentWillReceiveProps = (newProps) =>  {
    if (newProps.value !== this.props.value) {
      this.editor.set(newProps.value);
    }
    if (newProps.editable !== this.props.editable) {
      this.editor.aceEditor.setReadOnly(newProps.editable);
    }
  }

  changeEditMode = () => {
    this.editor.aceEditor.setReadOnly(this.state.editable);
    this.setState({
      editable: !this.state.editable
    })
  }

  toggleView = (value) => {
    this.setState({
      view: value ? 'view' : 'code'
    }, () => {
      this.editor.setMode(value ? 'view' : 'code');
    });
  }

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.editor}>
        <div className={classes.switch}>
          <span>JSON</span>
          <ToggleButton onChange={this.toggleView} className={classes.toggleSwitch} />
          <span>Tree</span>
        </div>
        <div ref="jsoneditor" className={classes.jsoneditor} style={{height: this.props.height}}></div>
      </div>
    );
  }
}

JsonEditor.defaultProps = {
  value: {}
};

export default JsonEditor;
