import React from 'react';
import injectSheet from 'react-jss';
import {cssConstants} from '../common/cssConstants';
import classNames from 'classnames';
// var classNames = require('classnames');

const styles = {
  container:{
    textTransform : 'uppercase',
    color:cssConstants.fontBlue,
    position:'relative'
  },
  button:{
    background:cssConstants.bgLightBlue,
    width: '160px',
    height: '44px',
    borderTopLeftRadius: '8px',
    borderBottomLeftRadius: '8px'
  },
  dropdownList:{
    background:cssConstants.bgLightBlue,
    position: 'absolute',
    left:0,
    top:'46px'
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
    this.state = {
      methods :['GET','POST', 'PUT', 'DELETE'],
      selectedMethod: this.props.selectedProp || 'GET'
    };
  }
  changeMethod(method){
    this.setState({selectedMethod:method});
    this.props.onChange(method);
  }

  render() {
    const {classes} = this.props;
    return (
      <div>
        <div className={classes.button}></div>
        <div className={classes.dropdownList}>
          {
            this.state.methods.map((method, index) => {
              return (<div key={index} className={classes.dropdownListItem} onClick={ () => { this.changeMethod(method) }}>{method}</div>)
            })
          }
        </div>
      </div>
    );
  }
}
