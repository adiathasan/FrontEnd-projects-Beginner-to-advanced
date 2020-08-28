import React, { Component } from 'react'
import { connect } from 'react-redux'

class Home extends Component {
    render(){
        console.log(this.props)
        const { posts } = this.props
        const info = posts.length ? (
            
            posts.map(jsx =>{

            return (
                <div className='mb-2 bg-danger text-light'>
                    <p>{jsx.id}</p>
                    <p>{jsx.title}</p>
                </div>
            )

            })
        ) : (
                    <h5>Loading...</h5>
            )
                    

        return(
            <div className='text-center container mt-3'>
                <h3>Home</h3>
                <div className='row'>
                    <div className='card mx-auto mt-4'>
                    <div className="card-body">
                        <h6>{ info }</h6>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = state=>{
    return(
        {
            posts: state.posts
        }
    )
}

export default connect(mapStateToProps)(Home)