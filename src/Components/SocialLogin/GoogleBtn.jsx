'use client'
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import { FaGoogle } from 'react-icons/fa';
const GoogleBtn = () => {
    //Todo search params.
    const params = useSearchParams();
    const handlerGoogleLogin = async () => {
        await signIn('google', {
            callbackUrl: params.get("callbackUrl") || "/",
            redirect: false
        })
    }
    return (
        <div>
            <button onClick={handlerGoogleLogin} className="btn btn-outline w-full">
                <FaGoogle className="text-lg text-primary" />
                Continue with Google
            </button>
        </div>
    );
};

export default GoogleBtn;