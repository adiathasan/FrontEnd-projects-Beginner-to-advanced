import React , {createContext} from 'react'
import { Component } from 'react';

export const TheamContext = createContext()


class TheamContextProvider extends Component {
    state = {
        isLight: true,
        light: { color: 'text-dark', bgColor: 'bg-light', ui1: 'btn-dark',  name: 'dark '},
        dark: { color: 'text-light', bgColor: 'bg-dark', ui1: 'btn-outline-light', name: 'light '}
    }

    themeChange = ()=>{
        this.setState({
            isLight: !this.state.isLight
        })
    }
    render() {
        return (
            <div>
                <TheamContext.Provider value={{...this.state, themeChange: this.themeChange}}>
                    {this.props.children}
                </TheamContext.Provider>
            </div>
        );
    }
}

export default TheamContextProvider;