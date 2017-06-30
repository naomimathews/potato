import React from 'react';
import injectSheet from 'react-jss';
import {cssConstants} from '../common/cssConstants';
import classNames from 'classnames';

const styles = {
  apiListItem:{
    padding:'10px',
    borderBottom:'solid 1px '+ cssConstants.linePurple,
    margin:'0 -10px'
  },
  selectedApi:{
    background:cssConstants.linePurple
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
      <div className={btnClass}>{this.props.api.name}</div>


    );
  }
}
