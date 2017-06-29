import React from 'react';
import injectSheet from 'react-jss';
import JsonEditor from './jsonEditor/JsonEditor';

const styles = {
  heading: {
    fontWeight: 'bold',
    color: 'red'
  }
}

@injectSheet(styles) // do this, else the styles won't come... very important
export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {classes} = this.props;
    return (
      <div>
        <h1 className={classes.heading}>You are on the home page</h1>
        <JsonEditor/>
      </div>
    );
  }
}
