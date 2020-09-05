import React from 'react'


const FromField = () =>{
    return (
        <form
            onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input onChange={(e) => { setPost(handleInput(e.target, e.target.value)) }} type="text" id='title' className=' form-control' />
            </div>
            <div className="form-group">
                <label htmlFor="body">Description</label>
                <input onChange={(e) => { setPost(handleInput(e.target, e.target.value)) }} type="text" id='body' className=' form-control' />
            </div>
            <button type="submit" class="btn btn-outline-danger" onSubmit={handleSubmit}>Submit</button>
        </form>
    )
}

export default FromField