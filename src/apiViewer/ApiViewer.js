import React from 'react';
import injectSheet from 'react-jss';
import {cssConstants} from '../common/cssConstants';

import DocView from './docView';

const styles = {
  container : {
    flex:1,
    padding: '10px'
  }

}

@injectSheet(styles)
export default class SideMenu extends React.Component {
  constructor(props) {
    super(props);
    console.log(cssConstants);
  }

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.container}>
        <DocView />
      </div>

    );
  }
}
