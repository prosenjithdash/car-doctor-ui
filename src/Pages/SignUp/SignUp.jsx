import { Link } from 'react-router-dom';
import signInImage from '../../../src/assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
const SignUp = () => {

    const { createUser } = useContext(AuthContext);

    const handleSignUp = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const user = { name, email, password };
        console.log(user)

        console.log(name, email, password)

        createUser(email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user)
                alert('Successfully register done ')
                // ...
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
                // ..
            });
        
    }
    return (
        <div className='lg:flex gap-[70px] justify-between items-center max-w-[1240px] mx-auto '>
            <img className='w-1/2' src={signInImage} alt="" />
            <div className="w-1/2 max-w-md p-[75px] space-y-3 rounded-xl border border-gray-300  bg-white dark:bg-gray-900 text-black dark:text-gray-800">
                <h1 className="text-[40px] font-bold text-center">Sign Up</h1>
                <form onSubmit={handleSignUp} className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="name" className="block text-black dark:text-gray-600">Name</label>
                        <input type="text" name="name" id="name" placeholder="Name" className="w-full px-4 py-3 rounded-md border-gray-300 border  text-black dark:text-gray-800 focus:border-orange-400 focus:dark:border-orange-600" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block text-black dark:text-gray-600">Email</label>
                        <input type="email" name="email" id="username" placeholder="Email" className="w-full px-4 py-3 rounded-md border-gray-300 border  text-black dark:text-gray-800 focus:border-orange-400 focus:dark:border-orange-600" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block text-gray-400 dark:text-gray-600">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-300 border  text-black dark:text-gray-800 focus:border-orange-400 focus:dark:border-orange-600" />
                        
                    </div>
                    <button className="block w-full p-3 text-center rounded-sm text-gray-900 dark:text-gray-50 bg-[#FF3811] dark:bg-[#FF3811]">Sign Up</button>
                </form>
                
                
                <p className="text-xs text-center sm:px-6 text-gray-400 dark:text-gray-600">Already have an account?
                    <Link to='/signIn' className="underline text-[#FF3811] dark:text-gray-800">Sign In </Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;