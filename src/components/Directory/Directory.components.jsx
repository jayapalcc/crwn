import React from 'react';
import './directory.styles.scss';
import MenuItem from '../MenuItem/MenuItem.component';
import {connect} from 'react-redux';

class Directory extends React.Component{
   
    render(){
      return (<div className="directory"> 
                  {this.props.sections.map(item=> (<MenuItem key={`Menu${item.id}`} {...item}></MenuItem>))};
              </div>);

    }  
}

function mapStateToProps(state){
  return{
    sections : state.dir.sections
  }
}

export default connect(mapStateToProps, null)(Directory);