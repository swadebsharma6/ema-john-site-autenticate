import { Link } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import './style.css';

const Register = () => {
    return (
        <section className='form-container'>
         <h2 className='form-title'>Register</h2> 
         
         <div className='form-box'>
            <form>
            <div className="form-control">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder='abc@gmail.com' id=""  required/>
            </div>
            <div className="form-control">
            <label htmlFor="email">Password</label>
            <input type="password" name="password" placeholder='701012sm' id=""  required/>
            </div>
            <div className="form-control">
            <label htmlFor="email">Confirm Password</label>
            <input type="password" name="confirm" placeholder='701012sm' id=""  required/>
            </div>
            <div className="form-control">
             <button className='btn-submit' type='submit'>Login</button>
            </div>
            <p className='navigate-link'>Already have an account? <Link to='/login'>Login</Link></p>
            </form>
            <p className='or'>----------------Or-------------------</p>
            <SocialLogin></SocialLogin>
         </div>
        </section>
    );
};

export default Register;