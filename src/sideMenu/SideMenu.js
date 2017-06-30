import React from 'react';
import injectSheet from 'react-jss';
import {cssConstants} from '../common/cssConstants';
import Button from '../common/Button';

const styles = {
  container : {
    background: cssConstants.lightPurple,
    minHeight: 'calc(100vh - 53px)',
    width: '250px'

  }
}

@injectSheet(styles)
export default class SideMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.container}>
        <Button text="Add API" btnColor="purple"/>
      </div>

    );
  }
}
