'use client'
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

const AuthBtn = () => {
    const session = useSession();
    return (
        <div>
            {
                session.status == 'authenticated' ? <>
                    <Link onClick={()=>signOut()} className='btn btn-primary outline-none' href={''}>LogOut</Link>

                </> : <>
                    <Link className='btn btn-primary outline-none' href={'/login'}>LogIn</Link>

                </>
            }
        </div>
    );
};

export default AuthBtn;