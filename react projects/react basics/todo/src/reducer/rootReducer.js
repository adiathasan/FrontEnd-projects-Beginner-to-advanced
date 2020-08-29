const initState = {
    posts: [
        {id:1, title:'abd ads sd', body: 'shit post al;l say no man to cum de,'},
        {id:2, title:'abd adssadfsae', body: 'shit post al;l say no man to cum SZSZxcde,'},
        {id:3, title:'abd ads sdfafas zdvfsd', body: 'shit post al;l say no man to cum sdafzdxc   zxcdde,'},
    ]
}
const rootReducer = (state = initState, action)=>{
    switch(action.type){
        case 'ADD_POST':
            return {
                ...state,
                posts: [...state.posts, action.post]
            }
        default:
            return state
    }
}

export default rootReducer