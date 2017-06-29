import React from 'react';
import injectSheet from 'react-jss';
import {cssConstants} from '../common/cssConstants';

const styles = {
  container : {
    background: cssConstants.darkBlue,
    color: cssConstants.white,
    position: 'relative',
    padding:'8px 10px'
  },
  logo: {
    margin:0
  },
  settingsBtn :{
    position: 'absolute',
    top: '50%',
    right:'10px',
    transform : 'translateY(-50%)',
    textTransform: 'capitalize'
  }

}

@injectSheet(styles)
export default class Header extends React.Component {
  constructor(props) {
    super(props);
    console.log(cssConstants);
  }

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.container}>
        <h1 className={classes.logo}>Logo</h1>
        <div className={classes.settingsBtn}>Settings</div>
      </div>

    );
  }
}
