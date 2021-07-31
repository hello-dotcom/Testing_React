import React, { Component } from 'react'
import Cookies from 'universal-cookie'
import '../css/register.css'
 class login extends Component {
     constructor(props) {
         super(props)
         this.state = {
              id:"",
              password:"",
              cookies:new Cookies(),
         }
     }
     onChangeHandler=(event)=>{
         this.setState({
             ...this.state,
             [event.target.name]:event.target.value,
         })
     }
     Login=()=>{
         if(this.state.id.trim()!="" && this.state.password.trim()!="")
         {
             fetch('http://localhost:5000/login',{
                 method:"POST",
                 headers:{'Content-Type':'application/json'},
                 body:JSON.stringify({
                     email:this.state.id,
                     password:this.state.password,
                 })
             })
             .then(res=>res.json())
             .then(res=>{
                 if(res.status==200)
                 {
                    this.state.cookies.set('email',this.state.id);
                    this.state.cookies.set('token','Bearer '+res.token);
                    alert('login successful');
                     this.props.history.push('/');
                 }
                 else if(res.status==400 || res.status==401)
                 {
                     alert(res.result);
                 }
             })
             .catch(err=>alert('some thing went wrong'));
         }
         else
         {
             alert('fields cannot be empty');
         }
     }

    render() {
        return (
            <div>
                <div className="reg">
               
               <div className="login-box">
               <div className="text-center"><h1 className="text-primary">Sign In</h1></div>
                   <div className="input-area">
                       <label>Mail Id</label>
                       <input type="text" name="id" 
                       value={this.state.id}
                       onChange={this.onChangeHandler}></input>
                   </div>
                   <div class="input-area">
                       <label>Password</label>
                       <input type="password" name="password"
                       value={this.state.password}
                       onChange={this.onChangeHandler}></input>
                   </div>
                   <div class="btn-container"> 
                       <button className="btn btn-success" onClick={()=>this.Login()}>Login</button>
                       <button class="btn btn-secondary" onClick={()=>this.props.history.push('/')}>Back</button>
                   </div>
               </div>
           </div>
            </div>
        )
    }
}

export default login
