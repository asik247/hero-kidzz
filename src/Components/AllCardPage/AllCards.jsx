'use client'
import { deleteCardData } from "@/actions/server/cards";
import Image from "next/image";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa6";
import Swal from "sweetalert2";

const AllCards = ({ item, onIncrease, onDecrease }) => {
    const { _id } = item;
    const handlerDelete = async () => {
        const swalResult = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        });

        if (swalResult.isConfirmed) {
            const result = await deleteCardData(_id);

            if (result.success) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your item has been deleted.",
                    icon: "success"
                });
            } else {
                Swal.fire({
                    title: "Error!",
                    text: "Failed to delete item.",
                    icon: "error"
                });
            }
        }
    };
    return (
        <div className="group relative bg-base-100 border border-base-200 hover:border-base-300 rounded-3xl p-4 md:p-5 shadow-sm hover:shadow-xl transition-all duration-300 ease-out">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6">

                {/* Product Image */}
                <div className="relative w-full sm:w-28 h-40 sm:h-28 shrink-0 overflow-hidden rounded-2xl bg-base-200">
                    <Image
                        src={item.cardImg}
                        alt={item.cardTitle}
                        fill
                        sizes="(max-width: 640px) 100vw, 112px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                </div>

                {/* Product Details & Actions */}
                <div className="flex-1 flex flex-col justify-between w-full h-full min-h-28 gap-3">
                    {/* Top Row: Title, Added By, & Delete Button */}
                    <div className="flex items-start justify-between gap-2">
                        <div className="space-y-1">
                            <h3 className="font-semibold text-base md:text-lg text-base-content leading-snug line-clamp-1 hover:text-primary transition-colors">
                                {item.cardTitle}
                            </h3>
                            {item.name && (
                                <p className="text-xs text-base-content/50 font-medium">
                                    Added by <span className="text-base-content/70">{item.name}</span>
                                </p>
                            )}
                        </div>

                        {/* Delete Button */}
                        <button
                            onClick={handlerDelete}
                            aria-label="Remove item"
                            className="p-2.5 rounded-full text-base-content/40 hover:text-error hover:bg-error/10 transition-colors duration-200 focus:outline-none"
                        >
                            <FaTrash className="w-3.5 h-3.5" />
                        </button>
                    </div>

                    {/* Bottom Row: Price & Stepper */}
                    <div className="flex items-center justify-between pt-2 border-t border-base-200/60 mt-auto">
                        <div className="flex items-baseline gap-1">
                            <span className="text-xs font-semibold uppercase tracking-wider text-base-content/40">
                                Price
                            </span>
                            <span className="text-lg md:text-xl font-bold text-primary ml-1">
                                ৳{item.cardPrice}
                            </span>
                        </div>

                        {/* Stepper Controls */}
                        <div className="inline-flex items-center bg-base-200/70 backdrop-blur-sm border border-base-300/40 rounded-full p-1 gap-1">
                            <button
                                onClick={onDecrease}
                                aria-label="Decrease quantity"
                                className="w-7 h-7 rounded-full flex items-center justify-center bg-base-100 hover:bg-base-300 text-base-content shadow-xs transition-colors active:scale-95 disabled:opacity-40"
                                disabled={item.quentity <= 1}
                            >
                                <FaMinus className="w-2.5 h-2.5" />
                            </button>

                            <span className="font-semibold text-sm min-w-7 text-center select-none text-base-content">
                                {item.quentity}
                            </span>

                            <button
                                onClick={onIncrease}
                                aria-label="Increase quantity"
                                className="w-7 h-7 rounded-full flex items-center justify-center bg-primary hover:opacity-90 text-primary-content shadow-xs transition-colors active:scale-95"
                            >
                                <FaPlus className="w-2.5 h-2.5" />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AllCards;