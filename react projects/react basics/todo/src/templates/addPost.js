import React, { Component } from 'react'
import {connect} from 'react-redux'
import { addPostAction } from '../actions/postAction'

class addPost extends Component {
    state = {
        id: Math.random(),
        title: '',
        body: ''
    }

    handleInput = e =>{
        this.setState({
            [e.target.id]: e.target.value
        })
        
    }

    handleSubmit = (e)=>{
        e.preventDefault()
        this.props.actionPost(this.state)
        e.target.reset()
        this.props.history.push('/post/'+ this.state.id)
    }

    render() {
        return (
            <div className='container'>
                <div className="row mt-5">
                    <div className="col-8 mx-auto bg-light p-4 rounded shadow">
                        <form
                        onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <input onChange={this.handleInput}  type="text" id='title' className=' form-control'/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="body">Description</label>
                                <input onChange={this.handleInput} type="text" id='body' className=' form-control'/>
                            </div>
                            <button type="submit" class="btn btn-outline-danger">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        actionPost: (post)=>{
            dispatch(addPostAction(post))
        }
    }
}

export default connect(null, mapDispatchToProps)(addPost)
