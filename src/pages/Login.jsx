import React, { useState } from 'react'
import logo from "/Logo.svg"
import google from "/google.svg"
import twitter from "/twitter.svg"
import { Link } from 'react-router-dom'
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";

export const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' })
    const [showPwd, setShowPwd] = useState(false)

    function handleData(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    return (
        <>
            <main className="w-full h-full overflow-x-hidden flex items-center justify-center font-Dm bg-[#FFFFFF] ">
                <div className='w-[404px] flex items-center justify-center flex-col my-[93px] gap-5'>
                    <img src={logo} alt="galileo Logo" />
                    <div className='bg-[#FFFFFF] border border-[#D9D8DD] drop-shadow-md rounded-2xl w-full pt-[25px]  pb-[50px] '>
                        <div className='flex flex-col items-center justify-center text-center gap-[8px] px-[31px]'>
                            <button className='w-full py-4 rounded-lg flex items-center gap-2 justify-center border border-[#D9D8DD] text-[#353333] font-[500] leading-[18px]'><img src={google} alt="" /> sign up with google</button>
                            <button className='w-full py-4 rounded-lg flex items-center gap-2 justify-center border border-[#D9D8DD] text-[#353333] font-[500] leading-[18px]'><img src={twitter} alt="" /> sign up with twitter</button>
                            <div className='flex gap-2 items-center my-[15px] w-full *:w-full *:border *:border-[#D9D8DD] text-[#D9D8DD] font-medium leading-[18.23px] '>
                                <hr /> OR <hr />
                            </div>

                        </div>

                        <form action="" className='flex gap-6 px-4 flex-col mt-2'>
                            <div className='flex flex-col items-start text-left justify-start gap-2'>
                                <label htmlFor="email" className='text-[#000000] font-medium text-base'>Email*</label>
                                <input type="email" id='email' name='email' placeholder='Enter your email' className='py-[11px] px-3 rounded-lg border border-[#D9D8DD] placeholder:text-[#AFAFAF] placeholder:font-medium w-full outline-[#AFAFAF]' value={formData.email} onChange={handleData} />
                            </div>
                            <div className='flex flex-col items-start text-left justify-start gap-2'>
                                <label htmlFor="password" className='text-[#000000] font-medium text-base'>Password*</label>
                                <div className='flex w-full items-center'><input type={showPwd ? "text" : "password"} id='password' name='password' placeholder='Enter your password' className='py-[11px] px-3 rounded-lg border border-[#D9D8DD] placeholder:text-[#AFAFAF] placeholder:font-medium w-full outline-[#AFAFAF]' value={formData.password} onChange={handleData} />
                                    <p className='ml-[-9%] *:text-base *:cursor-pointer *:font-extralight bg-white py-2 px-1' onClick={() => setShowPwd(!showPwd)}>{showPwd ? <FiEyeOff /> : <FiEye />}</p>
                                </div>
                            </div>
                            <div className='flex flex-col items-center w-full gap-4'>
                                <button className='w-full py-4 rounded-lg flex items-center gap-2 justify-center text-[#FFFFFF] font-[500] leading-[18px] bg-[#6172F3]'> Login</button>
                                <p className='text-[#000000] font-medium text-base text-center *:text-[#6172F3]'>Don't have an account? <Link to="/"><span>sign up</span></Link></p>
                            </div>
                        </form>
                    </div>

                </div>
            </main>
        </>
    )
} 
