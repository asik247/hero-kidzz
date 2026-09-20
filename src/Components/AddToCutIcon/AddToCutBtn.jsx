'use client'
import { handlerAdd } from '@/actions/server/cards';
import { useSession } from 'next-auth/react';
import { redirect, usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { FaCartPlus } from 'react-icons/fa';

const AddToCutBtn = ({ product }) => {
    const route = useRouter();
    const path = usePathname();
    const session = useSession();
    const isLogin = session?.status == 'authenticated'
    const handlerAddToCut = async() => {
       const result = await handlerAdd({product})
       if(result.success){
        alert("ADD CARD DATA")
       }
        if (isLogin) {
            alert(product.title)
        }
        else {
            route.push(`/login?callbackUrl=${path}`)
        }
    }
    return (
        <div>
            <button onClick={handlerAddToCut} className="btn btn-primary flex-1">
                <FaCartPlus />
                Add To Cart
            </button>
        </div>
    );
};

export default AddToCutBtn;