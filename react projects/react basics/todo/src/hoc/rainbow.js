import React from 'react'

const Rainbow = (WrappedComponent)=>{
    const arr = ['dark, primary', 'info', 'danger']
    const color = arr[Math.floor(Math.random() * 3)]
    return (props)=>{
        return (

                    <div className={'text-'+color}>
                        <WrappedComponent {...props}/>
                    </div>

        )
    }   
}

export default Rainbow