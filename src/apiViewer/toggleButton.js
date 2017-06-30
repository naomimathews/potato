import React from 'react';
import injectSheet from 'react-jss';
import {cssConstants} from '../common/cssConstants';

const styles = {
  container : {
    background: cssConstants.darkBlue,
    padding:'2px 0',
    position:'relative'
  },
  triggerContainer : {
    height: '10px',
    width: '20px',
    borderRadius: '100px'
  }
  trigger: {
    height: '14px',
    width: '14px',
    borderRadius:'50%',
    background: cssConstants.toggleInactive,
    position: 'absolute',
    left:0,
    top:0,
    transition:'left 200ms'
  },
  triggerActive : {
    left:'7px',
    background: cssConstants.toggleActive,
  }
}

@injectSheet(styles)
export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state({
      toggleState : this.props.toggleState
    })
  }
  changeToggleState(e){
    setState({toggleState: !this.state.toggleState})
  }
  render() {
    const {classes} = this.props;
    let trigger = classNames({
      trigger: true,
      triggerActive: this.state.toggleState
    })
    return (
      <div className={classes.container}>
        <div className={classes.triggercontainer} onClick={this.changeToggleState}></div>
        <div className={trigger}></div>
      </div>

    );
  }
}
