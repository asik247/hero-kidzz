'use client'
import { handlerAdd } from '@/actions/server/cards';
import { useSession } from 'next-auth/react';
import { redirect, usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AddToCutBtn = ({ product }) => {
    const route = useRouter();
    const [loading, setLoading] = useState(false)
    const path = usePathname();
    const session = useSession();
    const isLogin = session?.status == 'authenticated'
    //! handler addToCut.
    const handlerAddToCut = async () => {
        setLoading(true)
        if (isLogin) {
            //! handler add.
            const result = await handlerAdd({ product, inc: true })
            if (result.success) {
                Swal.fire("Added To Cut", product?.title, "success")
            }
            else {
                Swal.fire("Opps!", "Something Worn Hapen!", "error")
            }
            setLoading(false)
        }
        else {
            route.push(`/login?callbackUrl=${path}`)
            setLoading(false)
        }
    }
    return (
        <div>
            <button disabled = {session.status == 'loading' || loading} onClick={handlerAddToCut} className="btn btn-primary flex-1">
                <FaCartPlus />
                Add To Cart
            </button>
        </div>
    );
};

export default AddToCutBtn;