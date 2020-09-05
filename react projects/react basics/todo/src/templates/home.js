import React, {useContext} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { PostContext } from '../context/postContext'

const Home = ()=> {
        const {posts} = useContext(PostContext)
        const info = posts.length ? (
            
            posts.map(jsx =>{

            return (
                <div className='row' key={jsx.id}>
                    <div className='card mx-5 mt-4 mx-auto col-8'>
                        <div className="card-header">
                            <h4>{jsx.title}</h4>
                        </div>
                        <div className="card-body">
                            <div className='mb-2 text-dark'>
                                <Link to={'post/'+ jsx.id} className=' text-info text-decoration-none'>{jsx.body}</Link>
                            </div>
                        </div>
                    </div>
                </div>

            )

            })
        ) : (
                    <h5>Loading...</h5>
            )
                    

        return(
            <div className='text-center container mt-3'>
                    {info}
            </div>
        )
    }


const mapStateToProps = state=>{
    return {
            posts: state.posts
        }
 
}

export default connect(mapStateToProps)(Home)