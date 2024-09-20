import React, { useState } from 'react';
import logo from "/Logo.svg";
import google from "/google.svg";
import twitter from "/twitter.svg";
import { Link } from 'react-router-dom';
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { validation } from '../utils/Validation';
import toast from 'react-hot-toast';
import { auth, googleAuth, twitterAuth } from '../../firebase/config';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import spinner from '/spinner.svg'

export const SignUp = () => {
    //state is for formData. To collect data from the input fields
    const [formData, setFormData] = useState({ name: '', email: '', password: '' })
    //state is to toggle password - {to show or hide}
    const [showPwd, setShowPwd] = useState(false)
    // state is to handle errors if user fails to input correct data/inputs
    const [errors, setErrors] = useState({})
    //this is the Loading state for button
    const [loading, setLoading] = useState(false)



    //This function handles the collection of user inputs
    function handleData(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    //this is the form submit async function
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        //creating user with email and password
        try {
            if (validation(formData.email, formData.password, formData.name, setErrors)) {
                const user = await createUserWithEmailAndPassword(auth, formData.email, formData.password);

                toast.success(`Account created successfully `);

                if (user) {
                    console.log(user);
                }
            } else {
                return;
            }
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                toast.error('Email already in use');
                console.error(error);
            } else {

                console.error(error);
                // toast.error(error.message);
                toast.error('Ooops😔 an error occurred');

            }
        } finally {
            setLoading(false);
        }
    };

    //SIgnUp with google
    const googleSignIn = async () => {
        try {
            const user = await signInWithPopup(auth, googleAuth);
            toast.success('Hurrayyy🎉 Google sign-up successful! ')

            console.log(user)
        } catch (error) {
            toast.error("Ooops😔 an error occurred")
            console.log(error.message)
        }
    }



    return (
        <>
            <main className="w-full h-full overflow-x-hidden flex items-center justify-center font-Dm bg-[#FFFFFF] ">
                <div className='w-[404px] flex items-center justify-center flex-col my-[93px] gap-5'>
                    <img src={logo} alt="galileo Logo" />

                    <div className='bg-[#FFFFFF] border border-[#D9D8DD] drop-shadow-md rounded-2xl w-full pt-[25px]  pb-[50px] '>
                        <div className='flex flex-col items-center justify-center text-center gap-[8px] px-[31px]'>
                            <button type='button' className='w-full py-4 rounded-lg flex items-center gap-2 justify-center border border-[#D9D8DD] text-[#353333] font-[500] leading-[18px]'><img src={google} alt="" onClick={googleSignIn} /> sign up with google</button>
                            <button type='button' className='w-full py-4 rounded-lg flex items-center gap-2 justify-center border border-[#D9D8DD] text-[#353333] font-[500] leading-[18px]'><img src={twitter} alt="" /> sign up with twitter</button>
                            <div className='flex gap-2 items-center my-[15px] w-full *:w-full *:border *:border-[#D9D8DD] text-[#D9D8DD] font-medium leading-[18.23px] '>
                                <hr /> OR <hr />
                            </div>

                        </div>

                        <form onSubmit={handleSubmit} className='flex gap-6 px-4 flex-col mt-2'>
                            <div className='flex flex-col items-start text-left justify-start gap-2'>
                                <label htmlFor="name" className='text-[#000000] font-medium text-base'>Name*</label>
                                <input type="text" id='name' name='name' placeholder='What is your name?' className={`py-[11px] px-3 rounded-lg border ${errors.name ? 'border-[#F84D4D] outline-[#F84D4D]' : 'border-[#D9D8DD]'} placeholder:text-[hsl(0,0%,69%)] placeholder:font-medium w-full outline-[#AFAFAF]`} value={formData.name} onChange={handleData} />
                                {errors.name && <p className='text-[#F84D4D] font-medium text-sm'>{errors.name}</p>
                                }
                            </div>
                            <div className='flex flex-col items-start text-left justify-start gap-2'>
                                <label htmlFor="email" className='text-[#000000] font-medium text-base'>Email*</label>
                                <input type="email" id='email' name='email' placeholder='Enter your email' className={`py-[11px] px-3 rounded-lg border ${errors.email ? 'border-[#F84D4D] outline-[#F84D4D]' : 'border-[#D9D8DD]'} placeholder:text-[hsl(0,0%,69%)] placeholder:font-medium w-full outline-[#AFAFAF]`} value={formData.email} onChange={handleData} />
                                {errors.email && <p className='text-[#F84D4D] font-medium text-sm'>{errors.email}</p>
                                }
                            </div>
                            <div className='flex flex-col items-start text-left justify-start gap-2'>
                                <label htmlFor="password" className='text-[#000000] font-medium text-base'>Password*</label>
                                <div className='flex w-full items-center'><input type={showPwd ? "text" : "password"} id='password' name='password' placeholder='Enter your password' className={`py-[11px] px-3 rounded-lg border ${errors.password ? 'border-[#F84D4D] outline-[#F84D4D]' : 'border-[#D9D8DD]'} placeholder:text-[hsl(0,0%,69%)] placeholder:font-medium w-full outline-[#AFAFAF]`} value={formData.password} onChange={handleData} />
                                    <p className='ml-[-9%] *:text-base *:cursor-pointer *:font-extralight bg-white py-2 px-1' onClick={() => setShowPwd(!showPwd)}>{showPwd ? <FiEyeOff /> : <FiEye />}</p>
                                </div>
                                {errors.password && <p className='text-[#F84D4D] font-medium text-sm'>{errors.password}</p>
                                }
                            </div>
                            <div className='flex flex-col items-center w-full gap-4'>
                                <button type='submit' className='w-full py-4 rounded-lg flex items-center gap-2 justify-center text-[#FFFFFF] font-[500] leading-[18px] bg-[#6172F3]' > {loading ? <img src={spinner} alt="" /> : 'Sign up'}</button>
                                <p className='text-[#000000] font-medium text-base text-center *:text-[#6172F3]'>Already have an account? <Link to="login"><span>login</span></Link></p>
                            </div>
                        </form>
                    </div>

                </div>
            </main>
        </>
    )
} 
