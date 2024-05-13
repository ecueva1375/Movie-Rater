import React, { useState, useEffect  } from "react";  //useContext
import { API } from '../api-service';
// import { TokenContext } from "../index";
import { useCookies } from "react-cookie";

function Auth(){

    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ isLoginView, setIsLoginView] = useState(true);

    // const {token, setToken} = useContext(TokenContext);
    const [token, setToken] = useCookies(['mr-token']);    
    

    useEffect( () => {
        console.log('En Auth:',token);  //token['mr-token']  ["mr-token"] !== undefined
         var valorToken = token['mr-token'];    //valorToken !== undefined
        // console.log('Tipo:',typeof(valorToken)); 
        // console.log('Valor:',valorToken); 
        // console.log('1:',typeof(undefined)); 
        // console.log('2:',typeof("undefined")); 
        if ( valorToken !== 'undefined' &&  typeof(valorToken) !==  typeof(undefined)) 
        {
            //console.log('Elii:',valorToken);
            window.location.href = '/movies';
        }
    }, [token])

    const loginClicked = () => { 
        API.loginUser({username, password})
            .then( resp => setToken('mr-token', resp.token))
            .catch( error => console.log(error))
    }

    const registerClicked = () => { 
        API.registerUser({username, password})
            .then( () => loginClicked())
            .catch( error => console.log(error))
    }

    const isDisabled = username.length === 0 || password.length === 0;

    return (
        <div className="App">
            <header className="App-header">
                {isLoginView ? <h1>Login</h1> : <h1>Register</h1>}
            </header>
            <div className="login-container">
                <label htmlFor="username">Username</label><br/>
                <input id="username" type="text" placeholder="username" value={username}
                    onChange={ evt => setUsername(evt.target.value)} /><br/>
                <label htmlFor="password">Password</label><br/>
                <input id="password" type="password" placeholder="password" value={password}
                    onChange={ evt => setPassword(evt.target.value) }
                /><br/>        
                {isLoginView ? 
                    <button onClick={ loginClicked()} disabled={isDisabled}>Login</button> : 
                    <button onClick={ registerClicked()} disabled={isDisabled}>Register</button>
                }    
                
                {isLoginView ? 
                    <p onClick={()=> setIsLoginView(false)}>You don't have an account? Register here!</p> :
                    <p onClick={()=> setIsLoginView(true)}>You already have an account? Login here!</p>
                }
            </div>
        </div>
    )
}

export default Auth;