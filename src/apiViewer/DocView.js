import React from 'react';
import injectSheet from 'react-jss';
import {cssConstants} from '../common/cssConstants';
import classnames from 'classnames';

import JsonEditor from '../jsonEditor/JsonEditor';
import TextEditor from '../common/textEditor';
import InputBoxPreview from '../common/InputBoxPreview';
import ToggleButton from '../common/ToggleButton';
import KeyValue from '../common/KeyValue';
import MethodPicker from './MethodPicker';
import MainTab from './MainTab';

const styles = {
  basicDetailsCont:{
    background:cssConstants.bgBlue,
    minHeight:'50px',
    margin:'0 -70px',
    padding:'10px 70px 0'
  },
  urlCont: {
    display: 'flex',
    paddingBottom: '10px'
  },
  urlBar: {
    flex: '1',
    paddingLeft: '30px',
    fontFamily: 'Proxima',
    fontSize: '16px',
    color: '#55586f',
    borderBottomRightRadius: '8px',
    borderTopRightRadius: '8px',
    border: 'solid 1px #e1e1e1',
    background: '#EEE'
  },
  subHeading: {
    marginTop: '20px',
    color:'#55586f'
  },
  subTabs: {
    marginBottom: '20px'
  },
  saveButton: {
    height: '42px',
    marginLeft: '10px',
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
  },
  deleteButton: {
    padding: '0',
    fontSize: '18px',
    width: '42px',
    lineHeight: '42px',
    transition: '200ms',
    '&:hover': {
      transition: '200ms',
      backgroundColor: '#7f0000'
    }
  }
}

const tabs = [
  {
    viewId: 1,
    name: "Headers"
  }, {
    viewId: 2,
    name: "Body"
  }
];
const tabsGet = [
  {
    viewId: 1,
    name: "Headers"
  }
]

@injectSheet(styles)
export default class DocView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: this.props.api.method === 'GET' ? tabsGet : tabs,
      selectedViewId: 1,
    };
  }

  componentWillReceiveProps = (newProps) => {
    if (newProps.api.method !== this.props.api.method) {
      this.setState({
        tabs: newProps.api.method === 'GET' ? tabsGet : tabs,
        selectedViewId: 1
      })
    }
  }

  onRequestChange = (value) => {
    this.props.onApiChange({sampleRequest : value})
  }

  onResponseChange = (value) => {
    this.props.onApiChange({sampleResponse : value})
  }

  onMethodChange = (value) => {
    this.props.onApiChange({method : value.trim()})
  }

  onNotesChange = (value) => {
    this.props.onApiChange({notes : value.trim()})
  }

  onChangeUrl = (e) => {
    this.props.onApiChange({_id : e.target.value.trim()})
  }

  onChangeHeaders = (headers) => {
    console.log(JSON.stringify(headers));
  }

  changeTab = (tab) => {
    this.setState({
      selectedViewId: tab
    })
  }

  render() {
    const {classes} = this.props;
    return (
      <div>
        <div className={classes.basicDetailsCont}>
          <InputBoxPreview
            textValue = {this.props.api.name}
            onApiChange={this.props.onApiChange}/>
          <div className ={classes.urlCont}>
            <MethodPicker selectedProp={this.props.api.method} onChange={this.onMethodChange.bind(this)}/>
            <input value={this.props.api._id} className={classes.urlBar} type="text" onChange={this.onChangeUrl} />
            <button className={classes.saveButton} onClick={this.props.testApi}>test</button>
            <button className={classes.saveButton} onClick={this.props.saveApi}>save</button>
            <button className={classnames(classes.saveButton, classes.deleteButton)} onClick={this.props.deleteApi}>⨯</button>
          </div>
          <h2 className={classes.subHeading}>Request</h2>
          <MainTab tabs={this.state.tabs} selectedTabId={this.state.selectedViewId} changeTab={this.changeTab.bind(this)} className={classes.subTabs} smaller={true}/>
        </div>
        {
          this.state.selectedViewId === 1 ?
            <div>
              <KeyValue data={this.props.api.headers} onChange={this.onChangeHeaders} />
            </div>  :
            this.props.api.method.toUpperCase() !== 'GET' &&
          <div>
            <JsonEditor
              value={this.props.api.request}
              onChange={this.onRequestChange.bind(this)}
              height={'200px'}
              editable={true} />
          </div>
        }
        <h2 className={classes.subHeading}>Response</h2>
        <JsonEditor
          value={this.props.api.response}
          onChange={this.onResponseChange.bind(this)}
          editable={true} />
        <h2 className={classes.subHeading}>Notes</h2>
        <TextEditor key={this.props.api._id} value={this.props.api.notes} onChange={this.onNotesChange.bind(this)} />
      </div>

    );
  }
}
