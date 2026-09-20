'use client'
import { postUser } from '@/actions/auth';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import Swal from 'sweetalert2';

const RegisterForm = () => {
    const params = useSearchParams();
    const callback = params.get('callbackUrl');
    const router = useRouter()
    //? handlerRegisterSubmited 
    const handlerRegisterSubmited = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = {
            name: form.name.value,
            email: form.email.value,
            password: form.password.value
        }
        const result = await postUser(formData);
        // console.log(result);
        if (result.insertedId) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Account Successfully Created!",
                showConfirmButton: false,
                timer: 1500
            });
            router.push(callback)
        }
        //? Sweet Aleart.
        if (!result.insertedId) {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "user already exist!",
                showConfirmButton: false,
                timer: 1500
            });
        }

    }
    return (
        <div>
            <form onSubmit={handlerRegisterSubmited} className="space-y-4">
                <div>
                    <label className="label">
                        <span className="label-text">Full Name</span>
                    </label>
                    <input
                        type="text"
                        name='name'
                        placeholder="Enter your name"
                        className="input input-bordered w-full focus:outline-none focus:border-primary"
                    />
                </div>

                <div>
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        name='email'
                        placeholder="Enter your email"
                        className="input input-bordered w-full focus:outline-none focus:border-primary"
                    />
                </div>

                <div>
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        type="password"
                        name='password'
                        placeholder="Create password"
                        className="input input-bordered w-full focus:outline-none focus:border-primary"
                    />
                </div>

                <button
                    type="submit"
                    className="btn w-full text-white border-none"
                    style={{
                        background:
                            "linear-gradient(135deg, oklch(65% 0.23 35), oklch(58% 0.23 25))",
                    }}
                >
                    Create Account
                </button>

            </form>
        </div>
    );
};

export default RegisterForm;