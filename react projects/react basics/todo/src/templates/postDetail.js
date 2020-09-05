import React, { useContext, useState } from 'react'
import { connect } from 'react-redux'
import { TheamContext } from '../context/theamContext'
import { PostContext } from '../context/postContext'
import AddPost from './addPost'

const PostDetail = (props) =>{
    const [postUpdate, postUpdateFunc] = useState({
        willUpdate : false  
    })
    const { isLight, dark, light, themeChange} = useContext(TheamContext)
    const {posts, dispatch} = useContext(PostContext)
    const post = posts.filter(post => post.id == props.match.params.post_id)[0]
    // const { isLight, dark, light, themeChange } = useContext(TheamContext)
    const theme = isLight ? light : dark
    const deleteHandler = e =>{
        dispatch({
            type: 'DELETE_POST', id: post.id
        })
        return props.history.push('/')
    }
    const updateHandler = () =>{
        postUpdateFunc({
            willUpdate: !postUpdate.willUpdate
        })
    }
    return ( <div className='container'>
                <div className="row mt-5">
                    <div className="col-md-9 col-12 mx-auto">
                        <div class="card">
                            <div className="card-header  bg-secondary d-flex justify-content-between">
                        <h3 class="card-title text-light">{post && post.title}</h3>
                                <button onClick={themeChange} className={`btn ${theme.ui1} ml-auto`}>{theme.name}</button>
                            </div>
                            <div className={`card-body ${theme.bgColor} d-flex justify-content-between`}>
                                <p className={`card-text ${theme.color}`}>
                                {post && post.body}
                                </p>
                                <div className="">   
                                    <button onClick={updateHandler} className={`btn btn-outline-info`}>update</button>
                                    <button onClick={deleteHandler} className={`btn btn-outline-danger`}>Delete!</button>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
                <div className="row mt-2">
                    {
                postUpdate.willUpdate ? <AddPost updateHandler={updateHandler} updateId={post.id}/> : null
                    }
                </div>
            </div>)
    }


const mapStateToProps = (state, props) => {
    const id = props.match.params.post_id
    return {
        post: state.posts.find(post => post.id == id)
    }
}

export default connect(mapStateToProps)(PostDetail)
