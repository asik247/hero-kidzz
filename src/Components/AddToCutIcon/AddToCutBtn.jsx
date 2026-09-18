'use client'
import { redirect, usePathname, useRouter } from 'next/navigation';
import React from 'react';

const AddToCutBtn = ({product}) => {
    // console.log(product);
    const isLogin = false;
    const route = useRouter();
    const path = usePathname();
    const handlerAddToCut = ()=>{
        if(isLogin){
            alert(product.title)
            // redirect(path)
        }
        else{
            route.push(`/login?callbackUrl=${path}`)
        }
    }
    return (
        <div>
            <button onClick={handlerAddToCut} className="btn btn-primary btn-lg">
                Add To Cart
            </button>
        </div>
    );
};

export default AddToCutBtn;