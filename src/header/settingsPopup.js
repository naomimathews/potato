import React from 'react';
import injectSheet from 'react-jss';
import {cssConstants} from '../common/cssConstants';
import superagent from 'superagent';
import jsConstants from '../common/jsConstants';

const styles = {
  settingsPopup: {
    position: 'fixed',
    top: '0',
    left: '0',
    height: '100%',
    width: '100%',
    zIndex: '10',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px'
  },
  overlay: {
    position: 'fixed',
    top: '0',
    left: '0',
    height: '100%',
    width: '100%',
    background: 'rgba(0,0,0,0.6)'
  },
  content: {
    height: '100%',
    width: '100%',
    background: 'white',
    maxHeight: '500px',
    maxWidth: '900px',
    zIndex: '11',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    borderRadius: '4px',
    alignItems: 'center'
  },
  closeBtn: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'transparent',
    border: 'none',
    textTransform: 'uppercase',
    fontSize: '10px',
    cursor: 'pointer',
    fontWeight: 'bold'
  },
  heading: {
    color: 'black',
    marginBottom: '40px'
  },
  baseUrl: {
    width: '95%',
    maxWidth: '700px',
    padding: '10px',
    textAlign: 'center',
    marginBottom: '30px',
    borderRadius: '4px',
    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.1)',
    border: '1px solid #DDD'
  },
  saveBtn: {
    height: '40px',
    borderRadius: '4px',
    backgroundColor: '#56596f',
    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.1)',
    border: 'none',
    fontSize: '12px',
    fontWeight: 'bold',
    letterSpacing: '2px',
    textAlign: 'center',
    color: '#ffffff',
    textTransform: 'uppercase',
    cursor: 'pointer',
    padding: '10px 30px'
  }
}

@injectSheet(styles)

export default class SettingsPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      baseUrl: this.props.baseUrl
    }
  }

  componentWillReceiveProps = (newProps) => {
    if (newProps.baseUrl !== this.props.baseUrl) {
      this.setState({
        baseUrl: newProps.baseUrl
      });
    }
  }

  saveBaseUrl = () => {
    let url = this.state.baseUrl;
    if (url[url.length - 1] !== '/') url = '/' + url;
    superagent
    .post(jsConstants.baseUrl+'/api/potato-crud/write/v1.0/createBaseUrl')
    .send({
      url: this.state.baseUrl
    })
    .then(data => {
      this.props.onClose();
    })
  }

  onChangeBaseUrl = (e) => {
    this.setState({
      baseUrl: e.target.value
    })
  }

  render() {
    const {classes, open} = this.props;
    if (!open) return false;
    return (
      <div className={classes.settingsPopup}>
        <div className={classes.overlay}></div>
        <div className={classes.content}>
          <button className={classes.closeBtn} onClick={this.props.onClose}>close</button>
          <h2 className={classes.heading}>Enter base URL of your app</h2>
          <input ref="baseUrl" value={this.state.baseUrl} onChange={this.onChangeBaseUrl.bind(this)} placeholder="Base URL" className={classes.baseUrl} />
          <button className={classes.saveBtn} onClick={this.saveBaseUrl.bind(this)}>Save</button>
        </div>
      </div>
    );
  }
}
