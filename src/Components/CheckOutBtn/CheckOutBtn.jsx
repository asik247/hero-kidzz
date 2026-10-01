'use client'
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import React from 'react';

const CheckOutBtn = () => {
    const route = useRouter();
    const path = usePathname()
    const session = useSession();
    const isLogin = session?.status == 'authenticated';

    const handlerCheckout = () => {
        if (isLogin) {
            route.push('/checkout')
        } else {
            route.push(`/login?callbackUrl=/checkout`)
        }
    }
    return (
        <div>
            <button onClick={handlerCheckout}
                className="btn btn-primary mt-3 w-full rounded-xl"
            >
                Proceed to Checkout
            </button>
        </div>
    );
};

export default CheckOutBtn;