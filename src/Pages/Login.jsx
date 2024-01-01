import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import SocialLogin from './SocialLogin';
import './style.css';

const Login = () => {
    const {signInUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signInUser(email,password)
        .then(result =>{
            const user = result.user;
            console.log('login' , user);
            alert('User Login successfully');
            form.reset();
            navigate(from, {replace: true})
        })
        .catch(error =>{
            console.log(error.message)
        })
    
        console.log(email, password)
    }



    return (
        <section className='form-container'>
         <h2 className='form-title'>Login</h2> 
         
         <div className='form-box'>
            <form onSubmit={handleSubmit}>
            <div className="form-control">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder='abc@gmail.com' id=""  required/>
            </div>
            <div className="form-control">
            <label htmlFor="email">Password</label>
            <input type="password" name="password" placeholder='701012sm' id=""  required/>
            </div>
            <div className="form-control">
             <button className='btn-submit' type='submit'>Login</button>
            </div>
            <p className='navigate-link'>New to this site? <Link to='/register'>Register</Link></p>
            </form>
            <p className='or'>----------------Or-------------------</p>
            <SocialLogin></SocialLogin>
         </div>
        </section>
    );
};

export default Login;