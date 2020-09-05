import React, {createContext, useReducer, useEffect} from 'react'

export const PostContext =  createContext()

const PostContextProvider = (props) => {
    const damnReducer =(state, action)  =>{
        switch(action.type){
            case 'ADD_POST':
                return [...state, action.post]
            case 'UPDATE_POST':
                return [...state.filter(post => post.id != action.id), action.post]

            case 'DELETE_POST':
                return [...state.filter(post => post.id != action.id)]
            default:
                return state
        }
    }
    const [posts, dispatch] = useReducer(damnReducer, [], ()=>{
        const localData = localStorage.getItem('posts')
            return localData ? JSON.parse(localData) : [
                
            ]
    })
    useEffect(()=>{
        console.log('wooooow')
        localStorage.setItem('posts', JSON.stringify(posts))
    }, [posts])
    return (
        <PostContext.Provider value={{posts, dispatch}}>
            {props.children}
        </PostContext.Provider>
    )
}

export default PostContextProvider
