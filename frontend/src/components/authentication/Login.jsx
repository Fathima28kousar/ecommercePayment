import styles from './Login.module.css'
import {Link} from 'react-router-dom'
import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import Button from '../home/button/Button';



const Login = () => {

  const history = useHistory();
  const [input,setInput] = useState({
    email: "",
    password: "",
  })

  const handleLogin = (e) => {
    e.preventDefault()
    const loggedUser = JSON.parse(localStorage.getItem('user'));
    if(
      loggedUser && input.email === loggedUser.email && 
      input.password === loggedUser.password
    ){
      
      localStorage.setItem("loggedIn",true);
      onClick();
      setTimeout(() => {
        // history.push('/');
        window.location = "/";
      }, 1000);
    }else{
      toast.error(`Wrong email or password`, {
        position: "top-center",}
    )
    }    
  }

  const onClick = () => {
    toast.success(`You are logged in!`, {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
  

  return (
     
    <div className={styles.login}>
      <div className={styles.display}>
      <div className={styles.imageContainer}>
        <img src="/images/cherrie.jpg" alt="cherry" width="400"/>
      </div>
      <div className={styles.form}>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <div className={styles.divs}>
            <label>Email</label> <br/>
            <input type="email"
            name="email"
            value={input.email}
            onChange={(e) => 
              setInput({
              ...input,
              [e.target.name] : e.target.value,
            })}
            />
          </div>
          <div>
          <label>Password</label> <br/>
          <input 
          type="password"
          name="password"
            value={input.password}
            onChange={(e) => 
              setInput({
              ...input,
              [e.target.name] : e.target.value,
            })}
          />
          </div>
          <Button text="Login" type="submit"/>
        </form>
        <p>Don't have an account? <Link to="/register"> Register here</Link></p>
      </div>
      </div>
    </div>
  )
}

export default Login

