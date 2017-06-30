import React from 'react';
import injectSheet from 'react-jss';
import Header from './header/Header';
import SideMenu from './sideMenu/SideMenu';
import ApiViewer from './apiViewer/ApiViewer';

const styles = {
  mainContainer: {
    display: 'flex',
    alignItems:'stretch'
  }
}

@injectSheet(styles) // do this, else the styles won't come... very important

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiList:[
        {id:1, name:"Get recipes", type:"GET", header:{contentType :"application/json"}, sampleResponse: {recipes:[{id:100, name:"Chicken curry", ingredients :["chicken"]}]} },
        {id:2, name:"Add recipes", type:"POST", header:{contentType :"application/json"}, sampleRequest: {name:"Scallops with apple gastrique", ingredients :["scallops"]}, sampleResponse:{message:'Recipe added successfully', status:1, data:{id:123}}}
      ]}
  }


  render() {
    const {classes} = this.props;
    return (
      <div>
        <Header/>
        <div className={classes.mainContainer}>
          <SideMenu apiList={this.state.apiList}/>
          <ApiViewer apiList={this.state.apiList}/>
        </div>
      </div>
    );
  }
}
