'use client';
import { createOrder } from "@/actions/server/order";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import Swal from "sweetalert2";
const CheckOutForm = ({ cartItems }) => {
    //? session.
    const session = useSession();
    const router = useRouter()
    const [items, setItems] = useState(cartItems);
    //? Total Items.
    const totalItems = useMemo(() => items.reduce((acc, item) => acc + item.quentity, 0), [items])
    //? price
    const totalPrice = useMemo(
        () => items.reduce((sum, item) => sum + (item.cardPrice
            * item.quentity), 0),
        [items]
    );


    const handleSubmit =async (e) => {
        e.preventDefault();

        const form = e.target;

        const orderInfo = {
            name: form.name.value,
            email: form.email.value,
            phone: form.phone.value,
            address: form.address.value,
            note: form.note.value,
        };

        //Todo createOrder get.
        const result = await createOrder(orderInfo)
        if(result.success){
            Swal.fire("success","Order Added","success")
            router.push('/')
        }else{
             Swal.fire("error","Something went wrong","error")
        }
    };
    //? loaidng..
    if(session.status =='loading'){
        return <h2>Loading...</h2>
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Side */}
            <div className="lg:col-span-2">
                <div className="card bg-base-100 border">
                    <div className="card-body">
                        <h2 className="card-title text-2xl mb-4">
                            Delivery Information
                        </h2>

                        <form
                            onSubmit={handleSubmit}
                            className="space-y-4"
                        >
                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                className="input input-bordered w-full"
                                required
                                readOnly
                                value={session?.data?.user?.name}
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="E-mail"
                                className="input input-bordered w-full"
                                required
                                value={session?.data?.user?.email}
                                readOnly
                            />

                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                className="input input-bordered w-full"
                                required
                            />

                            <textarea
                                name="address"
                                placeholder="Full Address"
                                className="textarea textarea-bordered w-full h-28"
                                required
                            />

                            <textarea
                                name="note"
                                placeholder="Order Note (Optional)"
                                className="textarea textarea-bordered w-full h-20"
                            />

                            <button
                                type="submit"
                                className="btn btn-primary w-full"
                            >
                                Place Order
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Right Side */}
            <div>
                <div className="card bg-base-100 border sticky top-24">
                    <div className="card-body">
                        <h2 className="card-title text-xl">
                            Order Summary
                        </h2>



                        <div className="divider" />

                        <div className="flex justify-between">
                            <span>Total Items</span>
                            <span>{totalItems}</span>
                        </div>

                        <div className="flex justify-between">
                            <span>Subtotal</span>
                            {/* <span>৳{subtotal}</span> */}
                        </div>

                        <div className="flex justify-between">
                            <span>Shipping</span>
                            {/* <span>৳{shipping}</span> */}
                        </div>

                        <div className="divider my-2" />

                        <div className="flex justify-between font-bold text-lg">
                            <span>Total</span>
                            <span>৳{totalPrice}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOutForm;