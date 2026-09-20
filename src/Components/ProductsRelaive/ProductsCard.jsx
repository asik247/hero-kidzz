import Image from "next/image";
import Link from "next/link";
import { FaCartPlus, FaStar } from "react-icons/fa";
import AddToCutBtn from "../AddToCutIcon/AddToCutBtn";

const ProductsCard = ({ product }) => {
    const {
        _id,
        title,
        image,
        price,
        discount,
        ratings,
        sold
    } = product;

    const discountedPrice =
        price - (price * discount) / 100;

    return (
        <div className="card bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-300 border border-base-300">

            <figure className="relative h-64 overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                />

                <div className="badge badge-primary absolute top-3 right-3 font-semibold">
                    -{discount}%
                </div>
            </figure>

            <div className="card-body">
                <h2 className="card-title line-clamp-2 text-lg">
                    {title}
                </h2>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-warning">
                        <FaStar />
                        <span>{ratings}</span>
                    </div>

                    <span className="text-sm opacity-70">
                        {sold}+ Sold
                    </span>
                </div>

                <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-primary">
                        ৳{discountedPrice}
                    </span>

                    <span className="line-through text-gray-400">
                        ৳{price}
                    </span>
                </div>

                <div className="card-actions mt-4">
                    <Link
                        href={`/products/${_id}`}
                        className="btn btn-outline btn-primary flex-1"
                    >
                        View Details
                    </Link>
                    {/* AddToCut Btn */}
                    <AddToCutBtn product={{...product,_id: _id.toString()}}></AddToCutBtn>
                </div>
            </div>
        </div>
    );
};

export default ProductsCard;