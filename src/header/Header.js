import React from 'react';
import injectSheet from 'react-jss';
import cssConstants from '../common/cssConstants';

const styles = {
  container : {
    background: cssConstants.darkBlue,
    color: cssConstants.white,
    position: 'relative'
  },
  logo: {
    margin:0
  },
  settingsBtn :{
    position: 'absolute',
    top: '50%',
    transform : 'translate3d'
  }

}

@injectSheet(styles)
export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {classes} = this.props;
    return (
      <div>
        <h1 className={classes.heading}>You are on the home page</h1>
      </div>
    );
  }
}
