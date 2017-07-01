import React, {Component, PropTypes} from 'react';
import RichTextEditor from 'react-rte';
import injectSheet from 'react-jss';
import {cssConstants} from '../common/cssConstants';

const styles = {
  textEditor: {
    // height: '300px'
  }
}

@injectSheet(styles)
export default class TextEditor extends Component {
  static propTypes = {
    onChange: PropTypes.func
  };

  state = {
    value: this.props.value ? RichTextEditor.createValueFromString(this.props.value, 'html') : RichTextEditor.createEmptyValue()
  }

  onChange = (value) => {
    this.setState({value});
    if (this.props.onChange) {
      this.props.onChange(
        value.toString('html')
      );
    }
  };

  // componentWillReceiveProps = (newProps) => {
  //   if(newProps.value !== this.props.value) {
  //     this.setState({
  //       value: newProps.value ? RichTextEditor.createValueFromString(newProps.value, 'html') : RichTextEditor.createEmptyValue()
  //     })
  //   }
  // }

  render () {
    const toolbarConfig = {
      // Optionally specify the groups to display (displayed in the order listed).
      display: ['INLINE_STYLE_BUTTONS', 'BLOCK_TYPE_BUTTONS', 'LINK_BUTTONS', 'HISTORY_BUTTONS'],
      INLINE_STYLE_BUTTONS: [
        {label: 'Bold', style: 'BOLD', className: 'custom-css-class'},
        {label: 'Italic', style: 'ITALIC'},
        {label: 'Underline', style: 'UNDERLINE'}
      ],
      BLOCK_TYPE_BUTTONS: [
        {label: 'UL', style: 'unordered-list-item'},
        {label: 'OL', style: 'ordered-list-item'}
      ]
    };
    const {classes} = this.props;
    return (
      <RichTextEditor
        className={classes.textEditor}
        toolbarConfig={toolbarConfig}
        value={this.state.value}
        onChange={this.onChange}
      />
    );
  }
}
