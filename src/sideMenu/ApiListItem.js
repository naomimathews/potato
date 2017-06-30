import React from 'react';
import injectSheet from 'react-jss';
import {cssConstants} from '../common/cssConstants';
import classNames from 'classnames';

import ToggleButton from '../common/ToggleButton';

const styles = {
  apiListItem:{
    padding:'10px',
    borderBottom:'solid 1px '+ cssConstants.darkBlue,
    margin:'0 -10px'
  },
  selectedApi:{
    background:cssConstants.darkBlue
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
        <ToggleButton />
      </div>


    );
  }
}
