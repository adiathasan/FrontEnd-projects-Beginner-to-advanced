import React, { useState, useContext, useEffect } from 'react'
import {connect} from 'react-redux'
import { addPostAction } from '../actions/postAction'
import {PostContext} from '../context/postContext'

function AddPost(props){
    const { updateId, updateHandler} = props
    console.log(props)
    const {dispatch, posts} = useContext(PostContext)
    const [post, setPost] = useState({
        id: Math.random(),
        title: '',
        body: ''
    })
    const postUpdate = updateId ? posts.filter(post => post.id == updateId)[0] : null
    const handleInput = (target, value) =>{
        return !postUpdate ? {
            id: post.id,
            title: target.id == 'title' ? value : post.title,
            body: target.id == 'body' ? value : post.body
        } : {
                id: postUpdate.id,
                title: target.id == 'title' ? value : post.title,
                body: target.id == 'body' ? value : post.body
        }
    }

    useEffect(()=>{
        if(postUpdate){
            document.getElementById('title').value = postUpdate.title
            document.getElementById('body').value = postUpdate.body
            setPost({
                id: postUpdate.id,
                title: postUpdate.title,
                body: postUpdate.body
            })
        }
    }, [])

    const handleSubmit = (e)=>{
        e.preventDefault()
        if (postUpdate){
            dispatch({
                type: 'UPDATE_POST',
                id: updateId,
                post
            })
            updateHandler()
        }else{
            dispatch({
                type: 'ADD_POST',
                post
            })
            props.history.push('/post/'+ post.id)
        }
        e.target.reset()  
        
    }

        return (
            <div className='container'>
                <div className="row mt-5">
                    <div className="col-8 mx-auto bg-light p-4 rounded shadow">
                        <form
                        onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <input onChange={(e) => { setPost(handleInput(e.target, e.target.value)) }} type="text" id='title' className=' form-control' />
                            </div>
                            <div className="form-group">
                                <label htmlFor="body">Description</label>
                                <input onChange={(e) => { setPost(handleInput(e.target, e.target.value)) }} type="text" id='body' className=' form-control'/>
                            </div>
                            <button type="submit" class="btn btn-outline-danger" onSubmit={handleSubmit}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }


const mapDispatchToProps = (dispatch) =>{
    return {
        actionPost: (post)=>{
            dispatch(addPostAction(post))
        }
    }
}

export default connect(null, mapDispatchToProps)(AddPost)
