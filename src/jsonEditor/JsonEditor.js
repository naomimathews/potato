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
export default class JsonEditor extends React.Component {
  constructor(props) {
    super(props);
    this.editor = null;
    this.state = {
      editable: this.props.editable || false
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
      mode: 'code',
      history: false,
      search: true,
      onChange: this.onChange,
      modes: ['view', 'code']
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

  render() {
    const {classes} = this.props;
    return (
      <div>
        <button onClick={this.changeEditMode.bind(this)} className={classnames(classes.switch, 'button')} >{ this.state.editable ? 'save' : 'edit' }</button>
        <button onClick={this.changeView} >switch</button>
        <div ref="jsoneditor" className={classes.jsoneditor} style={{height: this.props.height}}></div>
      </div>
    );
  }
}
