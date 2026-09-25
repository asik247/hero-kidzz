import { getCardData } from '@/actions/server/cards';
import ClientCard from '@/Components/AllCardPage/ClientCard';
import React from 'react';

const CartPage = async() => {
    const cartItems = await getCardData()
    const formating = cartItems.map(item=>({...item,_id:item._id.toString()}))
    console.log(cartItems[0]);
    return (
        <div>
            <ClientCard  cartItems={formating}></ClientCard>
        </div>
    );
};

export default CartPage;



// import { getCardData } from '@/actions/server/cards';
// import AllCards from '@/Components/AllCardPage/AllCards';
// import Link from 'next/link';
// import React from 'react';
// import { FaBagShopping, FaArrowRight, FaShieldHalved } from 'react-icons/fa6';

// const CartPage = async () => {
//   const cartItems = (await getCardData()) || [];

//   // Calculations
//   const subtotal = cartItems.reduce((acc, item) => {
//     const price = Number(item.cardPrice) || 0;
//     const qty = Number(item.quentity) || 1;
//     return acc + price * qty;
//   }, 0);

//   const deliveryCharge = cartItems.length > 0 ? 60 : 0; // Standard inside-city rate
//   const total = subtotal + deliveryCharge;

//   return (
//     <main className="min-h-screen bg-base-200/40 py-8 md:py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Page Header */}
//         <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-6 border-b border-base-300/60 mb-8">
//           <div className="flex items-center gap-3">
//             <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-base-content">
//               Shopping Cart
//             </h1>
//             <span className="badge badge-primary badge-sm font-semibold">
//               {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
//             </span>
//           </div>

//           <Link
//             href="/"
//             className="text-sm font-medium text-primary hover:underline underline-offset-4 inline-flex items-center gap-1.5"
//           >
//             Continue Shopping
//             <FaArrowRight className="w-3 h-3" />
//           </Link>
//         </div>

//         {cartItems.length === 0 ? (
//           /* Empty State */
//           <div className="flex flex-col items-center justify-center text-center py-20 px-4 bg-base-100 rounded-3xl border border-base-200 shadow-sm max-w-lg mx-auto">
//             <div className="w-16 h-16 rounded-full bg-base-200 flex items-center justify-center text-base-content/40 mb-4">
//               <FaBagShopping className="w-7 h-7" />
//             </div>
//             <h2 className="text-xl font-bold text-base-content mb-1">Your cart is empty</h2>
//             <p className="text-sm text-base-content/60 mb-6">
//               Looks like you haven't added any items to your bag yet.
//             </p>
//             <Link href="/" className="btn btn-primary rounded-full px-8">
//               Explore Products
//             </Link>
//           </div>
//         ) : (
//           /* Cart Grid */
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
//             {/* Left Column: Items List */}
//             <div className="lg:col-span-8 flex flex-col gap-4">
//               {cartItems.map((item) => (
//                 <AllCards key={item._id.toString()} item={item} />
//               ))}
//             </div>

//             {/* Right Column: Order Summary Card */}
//             <div className="lg:col-span-4 lg:sticky lg:top-8">
//               <div className="bg-base-100 border border-base-200 rounded-3xl p-6 shadow-sm space-y-6">
//                 <h2 className="text-lg font-bold text-base-content">Order Summary</h2>

//                 <div className="space-y-3 text-sm">
//                   <div className="flex justify-between text-base-content/70">
//                     <span>Subtotal</span>
//                     <span className="font-semibold text-base-content">৳{subtotal.toLocaleString()}</span>
//                   </div>

//                   <div className="flex justify-between text-base-content/70">
//                     <span>Estimated Shipping</span>
//                     <span className="font-semibold text-base-content">৳{deliveryCharge}</span>
//                   </div>

//                   <div className="pt-3 border-t border-base-200 flex justify-between items-baseline">
//                     <span className="text-base font-bold text-base-content">Total</span>
//                     <div className="text-right">
//                       <span className="text-2xl font-bold text-primary">
//                         ৳{total.toLocaleString()}
//                       </span>
//                       <p className="text-xs text-base-content/50 mt-0.5">VAT included where applicable</p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Checkout CTA */}
//                 <button className="btn btn-primary btn-block rounded-2xl gap-2 shadow-sm hover:shadow-md transition-shadow">
//                   Proceed to Checkout
//                   <FaArrowRight className="w-3.5 h-3.5" />
//                 </button>

//                 {/* Trust Badge */}
//                 <div className="flex items-center justify-center gap-2 text-xs text-base-content/50 pt-1">
//                   <FaShieldHalved className="w-3.5 h-3.5 text-success" />
//                   <span>Secure checkout & verified payments</span>
//                 </div>
//               </div>
//             </div>

//           </div>
//         )}
//       </div>
//     </main>
//   );
// };

// export default CartPage;