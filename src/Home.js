import React from 'react';
import injectSheet from 'react-jss';
import Header from './header/Header';
import SideMenu from './sideMenu/SideMenu';
import ApiViewer from './apiViewer/ApiViewer';
import sheet from './fonts';

const styles = {
  mainContainer: {
    display: 'flex'
  }
}

@injectSheet(sheet) // do this, else the styles won't come... very important
@injectSheet(styles) // do this, else the styles won't come... very important

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {classes} = this.props;
    return (
      <div>
        <Header/>
        <div className={classes.mainContainer}>
          <SideMenu />
          <ApiViewer />
        </div>
      </div>
    );
  }
}
