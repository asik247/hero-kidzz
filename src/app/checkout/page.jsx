
import { getCardData } from '@/actions/server/cards';
import CheckOutForm from '@/Components/CheckoutForm/CheckOutForm';
import React from 'react';

const CheckOutPage =async () => {
    const cartItems = await getCardData();
    const fromattedItems = cartItems.map(item=>({
        ...item,
        _id:item._id.toString()
    }))
    return (
        <div>
           {/* CheckOut form */}
           
            <CheckOutForm cartItems={fromattedItems}></CheckOutForm>
        </div>
    );
};

export default CheckOutPage;