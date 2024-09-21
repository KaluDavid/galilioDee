import React, { useState } from 'react'
import { loginVal } from '../utils/loginVal'
import { auth } from '../../firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth'
import toast from 'react-hot-toast';
import { Button } from '../components/Button';
import { LabelsAndInputs } from '../components/LabelsAndInputs';
import { Password } from '../components/Password';
import { Body } from '../components/Body';

export const Login = ({ loading, setLoading, errors, setErrors }) => {
    const [formData, setFormData] = useState({ email: '', password: '' })

    function handleData(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            if (loginVal(formData.email, formData.password, setErrors)) {
                const user = await signInWithEmailAndPassword(auth, formData.email, formData.password);

                toast.success("Login Successful");

                if (user) {
                    console.log(user);
                }
            } else {
                return;
            }

        } catch (error) {
            console.log(error.message);
            if (error.code === 'auth/invalid-credential') {
                toast.error("Email or password incorrect");

            } else {
                toast.error("Ooops😔 an error occurred")
            }

        } finally {
            setLoading(false)
        };
    };


    return (
        <>
            <Body handleSubmit={handleSubmit}>

                <LabelsAndInputs labelName="Email" labelFor="email" inputType="email" placeholder="Enter your email" errors={errors.email} value={formData.email} onChange={handleData} />

                <Password errors={errors.password} value={formData.password} onChange={handleData} />

                <Button loading={loading} btnText="Login" linkTo="/" text="Don't have an account?" span="sign up" />


            </Body>
        </>
    )
} 
