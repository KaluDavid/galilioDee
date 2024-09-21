import React, { useState } from 'react'
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";

export function Password({ errors, value, onChange }) {
    //state is to toggle password - {to show or hide}
    const [showPwd, setShowPwd] = useState(false)
    return (

        <div className='flex flex-col items-start text-left justify-start gap-2'>
            <label htmlFor="password" className='text-[#000000] font-medium text-base'>Password*</label>
            <div className='flex w-full items-center'><input type={showPwd ? "text" : "password"} id='password' name='password' placeholder='Enter your password' className={`py-[11px] px-3 rounded-lg border ${errors ? 'border-[#F84D4D] outline-[#F84D4D]' : 'border-[#D9D8DD]'} placeholder:text-[hsl(0,0%,69%)] placeholder:font-medium w-full outline-[#AFAFAF]`} value={value} onChange={onChange} />
                <p className='ml-[-9%] *:text-base *:cursor-pointer *:font-extralight bg-white py-2 px-1 max-[430px]:ml-[-11%]  max-[375px]:ml-[-14%]' onClick={() => setShowPwd(!showPwd)}>{showPwd ? <FiEyeOff /> : <FiEye />}</p>
            </div>
            {errors && <p className='text-[#F84D4D] font-medium text-sm'>{errors}</p>
            }
        </div>
    )
}
