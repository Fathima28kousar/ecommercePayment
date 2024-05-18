import styles from './Register.module.css'
import {Link} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import {useState} from 'react'
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import Button from '../home/button/Button';


const Register = () => {

  const history = useHistory()
  const [input,setInput] = useState({
    name: "",
    email: "",
    password: "",

  })
  // to store value in local storage
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(input)) //to store in localStorage
    onClick();
      setTimeout(() => {
        history.push('/login');
      }, 2000);
  }

  const onClick = () => {
    toast.success(`Successfully Registered !`, {
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
    <div className={styles.register}>
      <div className={styles.display}>
      <div className={styles.imageContainer}>
        <img src="/images/cherrie.jpg" alt="cherry" width="400"/>
      </div>
      <div className={styles.form}>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
        <div>
            <label>Name</label> <br/>
            <input 
            type="text"
            name="name"
            value={input.name}
            onChange={(e) => 
              setInput({
              ...input,
              [e.target.name] : e.target.value,
            })}
            />
          </div>
          <div>
            <label>Email</label> <br/>
            <input 
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
          {/* <button type="submit">Login</button> */}
          <Button type="submit" text="Register" />
        </form>
        <p>Already have an account? <Link to="/login"> Login here</Link></p>
      </div>
      </div>
      
    </div>
  )
}

export default Register
