import React, { Component } from 'react'
import '../css/register.css'
import url from '../config';

 class register extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              id:"",
              password:"",
         }
     }
     onChangeHandler=(event)=>{
        this.setState({
            ...this.state,
            [event.target.name]:event.target.value,
        })
    }
    Register=()=>{
        if(this.state.id.trim()!="" && this.state.password.trim()!="")
        {
            const emailregex = /^([a-z-9A-Z\.-]+)@([a-z0-9A-Z-]+)\.([a-z]{2,8})(.[a-z]{2,8})?$/;
		    const passwordregex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+()]).{8,20}$/;
            if(!emailregex.test(this.state.id))
            {
                alert('email is not valid');
            }
            else if(!passwordregex.test(this.state.password))
            {
                alert('password is not valid');
            }
            else{
                fetch(`${url}/register`,{
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
                        alert(res.status);
                        this.props.history.push('/');
                    }
                    else if(res.status==400)
                    {
                        alert(res.status);
                    }
                })
                .catch(err=>alert('some thing went wrong'));
            }
        }
        else
        {
            alert("fields cannot be empty");
        }

    }


    render() {
        return (
            <div className="reg">
               
                <div className="login-box">
                    <div className="text-center"><h1 className="text-primary">Sign Up</h1></div>
               
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
                        <button className="btn btn-success"  onClick={()=>this.Register()}>Register</button>
                        <button class="btn btn-secondary" onClick={()=>{this.props.history.push('/')}}>Back</button>
                    </div>
                </div>
                
            </div>
         
        )
    }
}

export default register
