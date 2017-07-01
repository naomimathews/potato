import React from 'react';
import injectSheet from 'react-jss';
import {cssConstants} from '../common/cssConstants';
import SettingsPopup from './settingsPopup';

const styles = {
  container : {
    background: cssConstants.darkBlue,
    color: cssConstants.white,
    position: 'relative',
    padding:'7px 10px',
    height:"54px"
  },
  logo: {
    height:"40px"
  },
  settingsBtn :{
    position: 'absolute',
    top: '50%',
    right:'10px',
    transform : 'translateY(-50%)',
    textTransform: 'capitalize',
    cursor: 'pointer',
  }

}

@injectSheet(styles)
export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      settingsOpen: false
    }
  }

  openSettings = () => {
    this.setState({
      settingsOpen: true
    });
  }

  closeSettings = () => {
    this.setState({
      settingsOpen: false
    });
  }

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.container}>
        <img src={require('../../assets/images/logo.png')} className={classes.logo}/>
        <div className={classes.settingsBtn} onClick={this.openSettings}>Settings</div>
        <SettingsPopup baseUrl={this.props.baseUrl} open={this.state.settingsOpen} onClose={this.closeSettings} />
      </div>
    );
  }
}
