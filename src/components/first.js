import React, { Component } from 'react'

import '../css/first.css'
import second from './second.jpg'

class first extends Component {
    constructor(props) {
        super(props)
        this.state = {

             
        }
    }
    
    render() {
        return (
            <div>
                <div className="login bg-secondary">
                    <h1>Simplilearn</h1>
                    <div>
                        <button className="btn btn-primary m-2" onClick={()=>{this.props.history.push('login')}}> Login </button>
                        <button className="btn btn-primary m-2" onClick={()=>{this.props.history.push('register')}}> Register </button>
                    </div>
                </div>
                <div >
                    <img src={second} className="image"></img>
                </div>
            </div>
        )
    }
}

export default first 
