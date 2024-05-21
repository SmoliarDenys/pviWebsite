import { useState } from 'react';
import { Link } from 'react-router-dom';
import useSignup from '../../hooks/useSignup';

const SignUp = () => {
    const [inputs, setInputs] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        gender: 'male',
        group: 'pz-21',
        date: '2012-12-12'
    });

    const { loading, signup } = useSignup();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs);
    }

    return <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
            <h1 className="text-3xl font-semibold text-center text-gray-600">
                Sing Up
                <span className="text-blue-500"> CMS</span>
            </h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label className="label p-2">
                        <span className="text-base label-text">Username</span>
                    </label>
                    <input 
                        value={inputs.username}
                        onChange={(e) => setInputs({...inputs, username: e.target.value})}
                        type="text" 
                        placeholder="Enter username" 
                        className="w-full input input-bordered h-10" 
                    />
                </div>

                <div>
                    <label className="label p-2">
                        <span className="text-base label-text">Password</span>
                    </label>
                    <input 
                        value={inputs.password}
                        onChange={(e) => setInputs({...inputs, password: e.target.value})}
                        type="password" 
                        placeholder="Enter password" 
                        className="w-full input input-bordered h-10" 
                    />
                </div>

                <div>
                    <label className="label p-2">
                        <span className="text-base label-text">Confirm password</span>
                    </label>
                    <input 
                        value={inputs.confirmPassword}
                        onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
                        type="password" 
                        placeholder="Enter password" 
                        className="w-full input input-bordered h-10" 
                    />
                </div>

                <div>
                    <label className="label p-2">
                        <span className="text-base label-text">Gender</span>
                    </label>
                    <select
                        value={inputs.gender} 
                        onChange={(e) => setInputs({...inputs, gender: e.target.value})}
                        className="select select-bordered w-full h-10"
                    >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>

                <div>
                    <label className="label p-2">
                        <span className="text-base label-text">Group</span>
                    </label>
                    <select 
                        value={inputs.group} 
                        onChange={(e) => setInputs({...inputs, group: e.target.value})}
                        className="select select-bordered w-full h-10"
                    >
                        <option value="pz-21">PZ-21</option>
                        <option value="pz-22">PZ-22</option>
                        <option value="pz-23">PZ-23</option>
                    </select>
                </div>

                <div>
                    <label className="label p-2">
                        <span className="text-base label-text">Birthday date</span>
                    </label>
                    <input 
                        value={inputs.date} 
                        onChange={(e) => setInputs({...inputs, date: e.target.value})}
                        type="date" 
                        placeholder="Enter password" 
                        className="w-full input input-bordered h-10" 
                    />
                </div>


                <Link to="/login" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
                    Already have an account?
                </Link>

                <div>
                    <button 
                        className="btn btn-block btn-sm mt-2"
                        disabled={loading}
                    >
                        {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
                    </button>
                </div>
            </form>
        </div>
    </div>     
}

export default SignUp;