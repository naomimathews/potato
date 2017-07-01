import React from 'react';
import injectSheet from 'react-jss';
import {cssConstants} from '../common/cssConstants';
import classNames from 'classnames';

import ToggleButton from '../common/ToggleButton';

const styles = {
  apiListItem:{
    padding:'10px 20px',
    borderBottom:'solid 1px '+ cssConstants.lightBlue,
    position:'relative'
  },
  selectedApi:{
    background:cssConstants.darkBlue
  },
  toggleButton:{
    position: 'absolute',
    top: '50%',
    right:'20px',
    transform : 'translateY(-50%)'
  }
}

@injectSheet(styles)

export default class ApiListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {classes} = this.props;
    let btnClass = classNames({
      [classes.apiListItem]: true,
      [classes.selectedApi] : this.props.api.id == this.props.currApiId
    });
    return (
      <div className={btnClass}>
        <div >{this.props.api.name}</div>
        <div className={classes.toggleButton}><ToggleButton  /></div>

      </div>


    );
  }
}
