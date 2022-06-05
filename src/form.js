import React from 'react';
import useLocalStorae from 'use-local-storage'
import { useState } from 'react';



function Form(){

    const [theme , setTheme] = useLocalStorae('theme' ? "dark" : "light")
    const[isShown , setIsShown] = React.useState(false)


    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(newTheme)
        setIsShown(prevShown => !prevShown)
       
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
                                 <button onClick={switchTheme}>{isShown ? "Dark Mode" : "Light Mode"}</button>
                                  
                                    
                                   
                                </div>
               </div>
               </div>

    )
    
}
















export default Form;