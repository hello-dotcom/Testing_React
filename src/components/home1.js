import React, { Component } from 'react'
import Cookies from 'universal-cookie'
 class home1 extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              cookies :new Cookies(),
         }
     }
     
    render() {
        
        return (
            this.state.cookies.get('token')?<div>
            <h1>welcome to home page</h1>
            </div>:<div><h1>sorry you are not authorized to access it</h1></div>
           
        )
    }
}

export default home1
