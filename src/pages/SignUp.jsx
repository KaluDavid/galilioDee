import React, { useState } from 'react';
import logo from "/Logo.svg";
import { validation } from '../utils/Validation';
import toast from 'react-hot-toast';
import { auth } from '../../firebase/config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Button } from '../components/Button';
import { LabelsAndInputs } from '../components/LabelsAndInputs';
import { Password } from '../components/Password';
import { Body } from '../components/Body';

export const SignUp = ({ loading, setLoading, errors, setErrors }) => {
    //state is for formData. To collect data from the input fields
    const [formData, setFormData] = useState({ name: '', email: '', password: '' })



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



    return (
        <>
            <Body handleSubmit={handleSubmit}>

                <LabelsAndInputs labelName="Name" labelFor="name" inputType="text" placeholder="What is your name?" errors={errors.name} value={formData.name} onChange={handleData} />

                <LabelsAndInputs labelName="Email" labelFor="email" inputType="email" placeholder="Enter your email" errors={errors.email} value={formData.email} onChange={handleData} />

                <Password errors={errors.password} value={formData.password} onChange={handleData} />

                <Button loading={loading} btnText="Sign up" linkTo="login" text="Already have an account?" span="login" />
            </Body>
        </>
    )
} 
