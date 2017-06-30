import React from 'react';
import injectSheet from 'react-jss';
import {cssConstants} from '../common/cssConstants';

import DocView from './docView';
import MainTab from './MainTab';

const styles = {
  container : {
    flex:1,
    padding: '10px'
  }

}

@injectSheet(styles)
export default class SideMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs:[{viewId:1, name:"Docs View"}, {viewId:2, name:"Test View"}],
      selectedViewId:1
    }
  }

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.container}>
        <MainTab tabs={this.state.tabs} selectedTabId={this.state.selectedViewId} />
        <DocView />
      </div>

    );
  }
}
