'use client'
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import { FaGoogle } from 'react-icons/fa';

const GoogleBtn = () => {
    //Todo search params.
    const params = useSearchParams();
    // console.log('params',params.get('callbackUrl'));
    const handlerGoogleLogin = async ()=>{
      const result = await  signIn('google',{
         callbackUrl:params.get("callbackUrl")||"/",
        //  callbackUrl:"/",
        redirect:false
      })
      console.log('login users',result);
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