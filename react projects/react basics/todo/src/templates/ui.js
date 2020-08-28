import React, { Component } from 'react'


class UI extends Component{

    handleComplete = (e) => {
        if (e.target.classList.contains('cross')) {
            this.props.completedHandler(e.target.id, false)
        } else {
            this.props.completedHandler(e.target.id, true)
        }
    }

    handleDelete = (e) =>{
        let d$item = e.target.parentElement.firstChild
        this.props.handleDelete(d$item.id)
    }

    render() {

    const todos  = this.props.todos

    return (
        <div className="container">
            <div className="row mt-4 mx-2">
                <ol className="list-group col rounded">
                    {

                    todos.length ? ( todos.map((list) => {
                                return list.completed ?
                                    <li className="list-group-item d-flex align-items-center flex-wrap" key={list.id}>

                                        <h6 id={list.id} 
                                            onClick={this.handleComplete} className="text-monospace cross">{list.task}
                                        </h6>
                                        <button onClick={this.handleDelete} className="btn btn-outline-danger d-inline-block ml-auto btn-sm">x</button>

                                    </li>

          
       
                                :
                                <li className="list-group-item d-flex align-items-center" key={list.id}>

                                    <h6 id={list.id} onClick={this.handleComplete}className="text-monospace d-inline">{list.task}</h6>
                                    <button onClick={this.handleDelete} className="btn btn-outline-danger d-inline-block ml-auto btn-sm">x</button>
                                </li>
                    })
) : (
    <li className=" text-center d-block"> <h4>You have no todo's left</h4> </li>
)
                }
            </ol>
            </div> 
        </div>
    )
}

}



export default UI