import React from 'react';
import injectSheet from 'react-jss';
import {cssConstants} from '../common/cssConstants';
import classNames from 'classnames';

const styles = {
  container : {
    padding:'2px 0',
    position:'relative',
    display: 'inline-block'
  },
  triggerContainer : {
    height: '12px',
    width: '28px',
    borderRadius: '100px',
    background: cssConstants.toggleBg,
    display: 'inline-block'
  },
  trigger: {
    height: '18px',
    width: '18px',
    borderRadius:'50%',
    background: cssConstants.toggleInactive,
    position: 'absolute',
    left: 0,
    top: 0,
    transition:'left 200ms, background 200ms'
  },
  triggerActive : {
    left: '10px',
    background: cssConstants.toggleActive,
    transition:'left 200ms, background 200ms'
  }
}

@injectSheet(styles)
export default class ToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleState : this.props.toggleState || false
    };
  }
  changeToggleState(e){
    this.setState({toggleState: !this.state.toggleState}, () => {
      if(this.props.onChange)this.props.onChange(this.state.toggleState);
    });
  }
  render() {
    const {classes} = this.props;
    let trigger = classNames({
      [classes.trigger]: true,
      [classes.triggerActive]: this.state.toggleState
    })
    return (
      <div className={classes.container} onClick={this.changeToggleState.bind(this)}>
        <div className={classes.triggerContainer}></div>
        <div className={trigger}></div>
      </div>

    );
  }
}
