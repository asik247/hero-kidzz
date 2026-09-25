'use client'

import { useMemo, useState } from "react";
import AllCards from "./AllCards";

const ClientCard = ({ cartItems }) => {
    const [items, setItems] = useState(cartItems)
    const totalItems = useMemo(() => items.reduce((acc, item) => acc + item.quentity, 0), [items])
    //! Total Price...
    const totalPrice = useMemo(
        () => items.reduce((sum, item) => sum + (item.cardPrice
            * item.quentity), 0),
        [items]
    );
    // console.log(items);

    // const totalPrice = items.map(item=>console.log(item.price))
    //Todo ui thaek remove.
    const handleRemove = (id) => {
        setItems((preItem) => preItem.filter(item => item._id !== id));
    }
    //? update ui quentity using incremnt.
    const updateQuentityUI = (id, q) => {
        setItems((prevItem) => prevItem.map(item => item._id == id ? { ...item, quentity: q } : item))
    }

    return (
        <div >
            <div className="flex items-center gap-3 mb-4">
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-base-content">
                    Shopping Cart
                </h1>
                <span className="badge badge-primary badge-sm font-semibold rounded-full px-2.5 py-3">
                    {items.length} {items.length === 1 ? 'item' : 'items'}
                </span>
            </div>
            {/* Titile end */}
            <div className="flex">
                <div className='flex-3 items-center gap-4 '>
                    {items?.map(item => <AllCards handleRemove={handleRemove} updateQuentityUI={updateQuentityUI} key={item._id?.toString()} item={item}></AllCards>)}
                </div>
                {/* Oder summay */}
                <div className="flex-1 ml-5 rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm">
                    <h2 className="mb-5 text-xl font-bold">
                        Order Summary
                    </h2>

                    <div className="space-y-4 text-sm">
                        {/* Total Items */}
                        <div className="flex items-center justify-between">
                            <span className="text-base-content/60">
                                Total Items
                            </span>

                            <span className="font-semibold">
                                {totalItems}
                            </span>
                        </div>

                        {/* Subtotal */}
                        <div className="flex items-center justify-between">
                            <span className="text-base-content/60">
                                Subtotal
                            </span>

                            <span className="font-semibold">
                                ৳ {totalPrice.toFixed(2)}
                            </span>
                        </div>

                        {/* Shipping */}
                        <div className="flex items-center justify-between">
                            <span className="text-base-content/60">
                                Shipping
                            </span>

                            <span className="font-semibold text-success">
                                Free
                            </span>
                        </div>

                        <div className="border-t border-base-300 pt-4">
                            {/* Grand Total */}
                            <div className="flex items-center justify-between">
                                <span className="text-lg font-bold">
                                    Total
                                </span>

                                <span className="text-xl font-bold text-primary">
                                    ৳ {totalPrice.toFixed(2)}
                                </span>
                            </div>
                        </div>

                        {/* Checkout Button */}
                        <button
                            className="btn btn-primary mt-3 w-full rounded-xl"
                        >
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientCard;