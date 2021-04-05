import React from 'react'
import './Login.css'
import logo from '../../Resources/Learnzilla.svg'
import {useForm} from 'react-hook-form';

function Login() {

    const {register,errors,handleSubmit} = useForm();

    const onSubmitHandler =(data)=>{
        console.log(data);
    }
    return (
        <div className="Container">
            <div className="Login">
                <img src={logo} alt="Learnzilla" width="150px" height="150px"/> 
                     
                <form  className="Form" name="form" onSubmit={handleSubmit(onSubmitHandler)}>
                  
                   <input type="Text" placeholder="UserName" name="UserName" 
                   ref={register({required:true})}/>
                   {errors.UserName && <p>UserName is required</p>}

                   <input type="password" placeholder="Password" name="Password" autoComplete="false"
                   ref={register({required:true,pattern:/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/})}/>
                   {errors.Password && <p>please enter valid password</p>}

                   <button>Log-In</button>

                </form>
                <h4>new to the Learnzilla let's <a href="/">Sign Up</a></h4>
            </div>
            <div className="Image">
                <img src="https://preview.pixlr.com/images/800wm/1245/2/1245202364.jpg" alt="Workspace"/>
            </div>
        </div>
    )
}

export default Login;
