'use server'
import CheckoutForm from '@/Components/CheckOutBtn/CheckoutForm';
import { authOptions } from '@/lib/outhOption';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

import React from 'react';

const CheckOutPage =async () => {
    const session =await getServerSession(authOptions);
    if(!session){
         redirect("/login?callbackUrl=/checkout");
    }
    return (
        <div>
            <h1>CheckOut</h1>
            <CheckoutForm></CheckoutForm>
            
        </div>
    );
};

export default CheckOutPage;