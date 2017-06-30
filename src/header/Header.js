import React from 'react';
import injectSheet from 'react-jss';
import {cssConstants} from '../common/cssConstants';

const styles = {
  container : {
    background: cssConstants.darkBlue,
    color: cssConstants.white,
    position: 'relative',
    padding:'3px 10px',
    height:"54px"
  },
  logo: {
    height:"48px"
  },
  settingsBtn :{
    position: 'absolute',
    top: '50%',
    right:'10px',
    transform : 'translateY(-50%)',
    textTransform: 'capitalize',
    fontFamily:'Ubuntu'
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
        <img src={require('../../assets/images/logo.png')} className={classes.logo}/>
        <div className={classes.settingsBtn}>Settings</div>
      </div>

    );
  }
}
