import React from 'react';
import injectSheet from 'react-jss';
import {cssConstants} from '../common/cssConstants';
import classNames from 'classnames';

const styles = {
  container : {
    border:'solid 1px'+cssConstants.purple,
    borderRadius: '5px',
    width:'200px',
    height:'40px',
    display:'flex',
    lineHeight:'40px'
  },
  tab:{
    color:'#666',
    width:'50%',
    textAlign:'center',
    cursor: 'pointer'
  },
  selectedTab:{
    backgroundColor:cssConstants.purple,
    color:cssConstants.white
  },
  tab1:{
    borderRight:'solid 1px'+cssConstants.purple
  }
}

@injectSheet(styles)
export default class MainTab extends React.Component {
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
              [classes.selectedTab] : tab.viewId == this.props.selectedTabId,
              [classes.tab1] : tab.viewId==1
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
