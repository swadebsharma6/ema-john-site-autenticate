import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const SocialLogin = () => {
    const {googleSign} = useContext(AuthContext);

    const handleGoogleSign = ()=>{
        googleSign()
        .then(result =>{
            const user = result.user;
            console.log('google user', user);
            alert('Google sign in successfully')
        })
        .catch(error =>[
            console.log(error.message)
        ])
    }

    return (
        <div className="">
            <button onClick={handleGoogleSign} className="google-btn">Google</button>
        </div>
    );
};

export default SocialLogin;