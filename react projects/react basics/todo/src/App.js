import React, { Component } from 'react'
import Todo from './templates/todo'
import UI from './templates/ui'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Nav from './templates/nav'
import About from './templates/about'
import Home from './templates/home'
import addPost from './templates/addPost'
import postDetail from './templates/postDetail'



class App extends Component {
  // state = {
  //   list:[
      
  //   ]
  // }

  // addListHandler = (value) =>{
  //   value.id = Math.random()
  //   value.completed = false
  //   const newLists = [value,...this.state.list]
  //   this.setState({
  //     list: newLists
  //   })

  // }

  // handleDelete = (pk) =>{
  //   let newList = this.state.list.filter(element=>{
  //     return element.id != pk  
  //   })
  //   this.setState({
  //     list: newList
  //   })
  // }

  // completedHandler = (pk, tf) =>{

  //   this.state.list.forEach(element =>{
  //     if(element.id == pk){
  //       element.completed = tf
  //     }

  //   })
   
  //   this.setState(
  //     {
  //       list: this.state.list
  //     }
  //   )

  // }


  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/addPost' component={addPost}/>
            <Route path='/post/:post_id' component={postDetail}/>
          </Switch>
          {/* <Todo addListHandler={this.addListHandler} />
          <UI handleDelete={this.handleDelete} completedHandler={this.completedHandler} todos={this.state.list} /> */}
        </div>
      </BrowserRouter>

    );
  }

}

export default App;
