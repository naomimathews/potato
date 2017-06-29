import React from 'react';
import injectSheet from 'react-jss';
import {cssConstants} from '../common/cssConstants';

// import JsonEditor from './jsonEditor/JsonEditor';
// import TextEditor from './common/textEditor';

const styles = {
  container : {
    flex:1
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
      </div>

    );
  }
}
