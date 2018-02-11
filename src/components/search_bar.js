import React, {Component } from 'react';

class SearchBar extends Component {
 constructor(props){
     super(props);

     this.state = {
         term: ''
     }


 }

onInputChange = (event) => {
    console.log(event.target.value);
    this.setState({term: event.target.value}); 
}




 render(){
     return <input onChange = {this.onInputChange} />;
 }


}

export default SearchBar;