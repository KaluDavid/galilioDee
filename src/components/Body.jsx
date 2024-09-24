import React from 'react'
import logo from "/Logo.svg"
import { GoogleAndTwitter } from './GoogleAndTwitter'
import { useNavigate } from 'react-router-dom'


export function Body({ children, handleSubmit }) {
    const navigate = useNavigate();
    return (
        <>
            <main className="w-full h-full overflow-x-hidden flex items-center justify-center font-Dm bg-[#FFFFFF] ">
                <div className='w-[404px] flex items-center justify-center flex-col my-[93px] gap-5 max-[430px]:mx-[5%]'>
                    <img src={logo} alt="galileo Logo" />
                    <div className='bg-[#FFFFFF] border border-[#D9D8DD] drop-shadow-md rounded-2xl w-full pt-[25px]  pb-[50px] '>
                        <GoogleAndTwitter navigate={navigate} />

                        <form onSubmit={handleSubmit} className='flex gap-6 px-4 flex-col mt-2'>
                            {children}
                        </form>
                    </div>
                </div >
            </main >
        </>)
}
