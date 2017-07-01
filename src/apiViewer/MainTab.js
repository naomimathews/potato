import React from 'react';
import injectSheet from 'react-jss';
import {cssConstants} from '../common/cssConstants';
import classNames from 'classnames';

const styles = {
  container : {
    width:'200px',
    height:'40px',
    display:'flex',
    lineHeight:'40px',
    position:'relative'
  },
  tab:{
    color:cssConstants.darkBlue,
    width:'50%',
    textAlign:'center',
    cursor: 'pointer',
    opacity:0.5,
    fontSize:'24px'
  },
  selectedTab:{
    opacity:1
  },
  selectedTabMarker:{
    position:'absolute',
    bottom:0,
    left:0,
    height:'3px',
    width:'50%',
    transition:'left 200ms',
    backgroundColor: cssConstants.green
  },
  secondPosition:{
    left:'50%'
  }
}

@injectSheet(styles)
export default class MainTab extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const {classes} = this.props;
    let markerStyle = classNames({
      [classes.selectedTabMarker]:true,
      [classes.secondPosition]: this.props.selectedTabId ==2
    })
    return (
      <div className={classNames(this.props.className, classes.container)}>
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
        <div className={markerStyle}></div>
      </div>

    );
  }
}
