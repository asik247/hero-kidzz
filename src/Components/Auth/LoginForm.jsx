'use client'

import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

import Swal from 'sweetalert2';


const LoginForm = () => {
    const params = useSearchParams();
    const callbackUrl = params.get("callbackUrl");
    const router = useRouter();
    const handleLoginForm = async (e) => {

        e.preventDefault();

        const form = e.target;

        const result = await signIn("credentials", {
            email: form.email.value,
            password: form.password.value,
            redirect: false,

        });

        // console.log(result);
        if (!result?.ok) {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Login faild",
                showConfirmButton: false,
                timer: 1500
            });

        }
        else {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Login successfully",
                showConfirmButton: false,
                timer: 1500,


            });
            router.push(callbackUrl )

        }
    };

    return (
        <form onSubmit={handleLoginForm} className="space-y-4">

            <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
            />

            <input
                type="password"
                name="password"
                placeholder="Enter password"
                className="input input-bordered w-full"
            />

            <button type="submit" className="btn btn-primary w-full">
                Login
            </button>
            <p className="text-center mt-4 text-sm">
                Don't have an account?{" "}
                <Link
                    href={`/register?callbackUrl=${callbackUrl}`}
                    className="font-semibold text-primary"
                >
                    Register
                </Link>
            </p>

        </form>
    );
};

export default LoginForm;