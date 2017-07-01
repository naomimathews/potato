import React from 'react';
import injectSheet from 'react-jss';
import {cssConstants} from '../common/cssConstants';
import classNames from 'classnames';
// var classNames = require('classnames');

const styles = {
  container:{
    textTransform : 'uppercase',
    color:cssConstants.fontBlue,
    position:'relative',
    cursor: 'pointer'
  },
  button:{
    background:cssConstants.bgLightBlue,
    width: '100px',
    height: '44px',
    borderBottomLeftRadius: '8px',
    borderTopLeftRadius: '8px',
    lineHeight: '44px',
    padding: '0 20px',
    background: '#DDD'
  },
  dropdownList:{
    background:cssConstants.bgLightBlue,
    position: 'absolute',
    left:0,
    top:'calc(100% - 10px)',
    width: '100%',
    padding: '10px 0 20px 10px',
    borderBottomLeftRadius: '8px',
    borderBottomRightRadius: '8px',
    background: '#DDD',
    zIndex: '5'
  },
  dropdownListItem:{
    height: '30px',
    padding: '10px'
  }
}

@injectSheet(styles)
export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.methods = ['GET','POST', 'PUT', 'DELETE'];
    this.state = {
      selectedMethod: this.props.selectedProp || 'GET',
      open: false
    };
  }

  componentWillReceiveProps = (newProps) => {
    if (newProps.selectedProp !== this.props.selectedProp) {
      this.setState({
        selectedMethod: newProps.selectedProp
      })
    }
  }

  toggleDropDown = () => {
    this.setState({
      open: !this.state.open
    });
  }

  closeDropDown = () => {
    this.setState({
      open: false
    });
  }

  changeMethod = (method)=>{
    this.setState({selectedMethod:method});
    this.props.onChange(method);
    this.closeDropDown();
  }

  render() {
    const {classes} = this.props;
    return (
      <div tabIndex="1" onBlur={this.closeDropDown} className={classes.container}>
        <div className={classes.button} onClick={this.toggleDropDown}>{this.state.selectedMethod}</div>
        {
          this.state.open &&
          <div className={classes.dropdownList}>
            {
              this.methods.map((method, index) => {
                return (<div key={index} className={classes.dropdownListItem} onClick={ () => { this.changeMethod(method) }}>{method}</div>)
              })
            }
          </div>
        }
      </div>
    );
  }
}
