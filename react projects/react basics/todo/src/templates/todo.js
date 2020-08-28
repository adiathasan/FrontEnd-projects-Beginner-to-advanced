import React , { Component } from 'react'

class Todo extends Component{

    state = {
        task: null
    }

    handleState = (e) =>{
        this.setState({
            task: e.target.value
        })
    }
    
    handleSubmit = (e) =>{
        e.preventDefault()
        var task = e.target.firstChild.value
        this.props.addListHandler(this.state)
        e.target.firstChild.value = ''

    }

    render(){
        return(
            <div className="container">

                <div className=" row p-2 mt-5">
                    <h1>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui repellendus sunt a aperiam nisi incidunt accusantium minima accusamus optio sint sit ad quam ea, hic voluptate quod pariatur dignissimos nobis.
                    </h1>

                    <div className="col">
                        <h3 className=" text-center p-2 mb-4 border-danger border-bottom text-danger">Todo <span className=" text-info">React</span></h3>

                        <form className='form row' onSubmit={
                            this.handleSubmit
                        }>
                            <input type="text" onChange={this.handleState} placeholder='add Task here..' name='task' className=' col-7 text-center  m-auto form-control' required/>
                            <button className=" btn col-3 mr-auto btn-danger">+</button>

                        </form>
                    </div>
                </div>
            </div>
        )
    }

}

export default Todo