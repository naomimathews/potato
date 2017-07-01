import React from 'react';
import injectSheet from 'react-jss';
import {cssConstants} from '../common/cssConstants';
import classNames from 'classnames';

const styles = {
  container : {
    border:'solid 1px'+cssConstants.bgBlue,
    borderRadius: '5px',
    width:'160px',
    height:'25px',
    display:'flex',
    lineHeight:'25px',
    overflow: 'hidden'
  },
  tab:{
    color:'#666',
    width:'50%',
    textAlign:'center',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 'lighter',
    background: 'white'
  },
  selectedTab:{
    backgroundColor:cssConstants.bgBlue,
    color:cssConstants.darkBlue
  }
}

@injectSheet(styles)
export default class Tabs extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.container}>
        {
          this.props.tabs.map((tab, index) => {
            let tabClass = classNames({
              [classes.tab]: true,
              [classes.selectedTab] : tab.viewId == this.props.selectedTabId
            });

            return (
              <div className={tabClass} key={tab.viewId} onClick={ () => { this.props.changeTab(tab.viewId) }}>{tab.name}</div>
            );
          })
        }
      </div>

    );
  }
}
