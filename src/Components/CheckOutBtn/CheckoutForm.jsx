"use client";

import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

export default function CheckoutForm() {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const order = {
      name: form.name.value,
      phone: form.phone.value,
      address: form.address.value,
    };
    console.log(order);

  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <input
        name="name"
        placeholder="Full Name"
        className="input input-bordered w-full"
        required
      />

      <input
        name="phone"
        placeholder="Phone Number"
        className="input input-bordered w-full"
        required
      />

      <textarea
        name="address"
        placeholder="Delivery Address"
        className="textarea textarea-bordered w-full"
        required
      />

      <button
        type="submit"
        className="btn btn-primary w-full"
      >
        Place Order
      </button>
    </form>
  );
}