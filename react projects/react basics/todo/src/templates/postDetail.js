import React from 'react'
import { connect } from 'react-redux'

function postDetail(props) {
    return (
        props.post ?(
            <div className='container'>
                <div className="row mt-5">
                    <div className="col-8 mx-auto">
                        <div class="card">
                            <div className="card-header">
                                <h3 class="card-title">{props.post.title}</h3>
                            </div>
                            <div className="card-body">
                                <p className="card-text">
                                    {props.post.body}
                                </p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

        ) : (
            <div className='container'>
                <div className="row mt-5">
                    <div className="col-8 mx-auto">
                        <div class="card">
                            <div className="card-body bg-info">
                                <h3 className="card-text">
                                    Loading...
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    )
}

const mapStateToProps = (state, props) => {
    const id = props.match.params.post_id
    return {
        post: state.posts.find(post => post.id == id)
    }
}

export default connect(mapStateToProps)(postDetail)
