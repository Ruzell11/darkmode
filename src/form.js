import React from 'react';
import useLocalStorage from 'use-local-storage'
import { useState } from 'react';



function Form(props){

    const [theme , setTheme] = useLocalStorage('theme' ? "dark" : "light")
    const[isShown , setIsShown] = useState(false)
    const [toggle , setToggle] = useState({
        isToggle :true
    })
    const toggleIcon = props.isToggle ? <i class='fas fa-toggle-on'></i> : <i class='fas fa-toggle-off'></i>
  

    const switchTheme = () => {
       
      
        const newTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(newTheme)
        setIsShown(prevShown => !prevShown)
        setToggle(prevToggle =>{
            return {
                isToggle : !prevToggle.isToggle
            }
        })
       
    }

   
    



        return(
            <div className='app-container' data-theme={theme}>
                <div className='header'>
                    <h1>Login Form</h1>
                </div>
                <div className='form-container'>
                <div className='top'>
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-google"></i>
               </div>
               <div className='divider'>
                   <span>OR</span>
                   </div>
                       <form>
                           <label>Email</label>
                           <input type='email' placeholder='Enter your email'></input>
                           <label>Password</label>
                           <input type='password' placeholder='Enter your password'></input>
                           <label>Name</label>
                           <input type='name' placeholder='Enter your name'></input>
                           <div className='remember'>
                               <input type='checkbox'></input>
                               <label>Remember Me</label>
                                </div>
                                <button>Login</button>
                                </form>
                                <div className='bottom'>
                                   <a href='#' ><p className='forgot'>Forgot you password</p></a>
                                   <a href='#' >  <p className='create'>Create a Account</p></a>
                                </div>
                                <div className='toggle'>
                                <p>{isShown ? "Turn On darkmode" : "Turn off darkmode"}</p>
                                <i onClick={switchTheme}>{isShown ? <i class='fas fa-toggle-off'></i> : <i class='fas fa-toggle-on'></i>}</i>
                                    
                                   
                                </div>
               </div>
               </div>

    )
    
}
















export default Form;