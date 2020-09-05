import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Nav from './templates/nav'
import About from './templates/about'
import Home from './templates/home'
import AddPost from './templates/addPost'
import PostDetail from './templates/postDetail'
import TheamContextProvider from './context/theamContext'
import PostContextProvider from './context/postContext'


const App = ()=> {
    return (
      <BrowserRouter>
        <div className="App">
          <TheamContextProvider>
            <Nav/>
            <Switch>
              <PostContextProvider>
                <Route exact path='/' component={Home}/>
                <Route path='/addPost' component={AddPost}/>
                <Route path='/post/:post_id' component={PostDetail}/>
                <Route path='/about' component={About}/>
              </PostContextProvider>
            </Switch>
          </TheamContextProvider>
        </div>
      </BrowserRouter>
    );

}

export default App;
