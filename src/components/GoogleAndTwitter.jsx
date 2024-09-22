import React from 'react'
import { auth, googleAuth, twitterAuth } from '../../firebase/config';
import { signInWithPopup } from 'firebase/auth';
import google from "/google.svg";
import twitter from "/twitter.svg";
import toast from 'react-hot-toast';


export function GoogleAndTwitter({ navigate }) {

    //SIgnUp with google
    const googleSignIn = async () => {
        try {
            const user = await signInWithPopup(auth, googleAuth);
            toast.success('Hurrayyy🎉 Google sign-up successful! ')
            console.log(user)
            return (navigate("/home"))

        } catch (error) {
            toast.error("Ooops😔 an error occurred")
            console.log(error.message)
        }
    }


    return (
        <>
            <div className='flex flex-col items-center justify-center text-center gap-[8px] px-[31px]'>
                <button type='button' className='w-full py-4 rounded-lg flex items-center gap-2 justify-center border border-[#D9D8DD] text-[#353333] font-[500] leading-[18px]'><img src={google} alt="" onClick={googleSignIn} /> sign up with google</button>
                <button type='button' className='w-full py-4 rounded-lg flex items-center gap-2 justify-center border border-[#D9D8DD] text-[#353333] font-[500] leading-[18px]'><img src={twitter} alt="" /> sign up with twitter</button>
                <div className='flex gap-2 items-center my-[15px] w-full *:w-full *:border *:border-[#D9D8DD] text-[#D9D8DD] font-medium leading-[18.23px] '>
                    <hr /> OR <hr />
                </div>

            </div>
        </>
    )
}
