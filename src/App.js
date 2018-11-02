import React, { Component } from 'react';


class App extends Component {
  render() {
    return (
    
        <NewTodo></NewTodo>
     
    );
  }
}


class NewTodo extends Component {
 
  constructor(){
    super();
    this.state = {items: []}
  
  }

  addNewtodo(e){
    let newitem = document.getElementById('myInput').value;
    
    this.setState({
        items: [...this.state.items, newitem]
      }) 
    document.getElementById('myInput').value = '';    
  }
  removeItem(itemkey){
    this.setState({items: this.state.items.filter(function(item) { 
      return item !== itemkey 
    })});
    //console.log(it);
  }
  render(){
    return (
      <div>
        <div id="myDIV" className="header">
             <input type="text" id="myInput"  placeholder="Title..."/>
            <span onClick={this.addNewtodo.bind(this)} className="addBtn">Add</span>
        </div>
      
        <ul id="myUL">
         {this.state.items.map(item =>
            <div>
             <Todos text={item}><span id="close" onClick={this.removeItem.bind(this, item)}>&times;</span></Todos> 
             </div>
          )}
        
        </ul>
      
     </div>
    )
  }
}

class Todos extends Component{
   
  constructor(){
    super();
    this.state = {checked: false}
  
  }
  
  markItem(e){
  
   
    this.setState(prevState => ({
      checked: !prevState.checked
    }));
  }
  render(){
    return (
    <li className={ (this.state.checked ? 'checked' : '')} onClick={this.markItem.bind(this)} key={this.props.text}>{this.props.text}{this.props.children}</li>
    )
  }
}

 

export default App;
