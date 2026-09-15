import { getDetails } from "@/actions/server/getProducts";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const ProductDetails = async ({ params }) => {
    const { id } = await params;
    const product = await getDetails(id);
    const discountedPrice =
        product.price - (product.price * product.discount) / 100;

    return (
        <section className="max-w-7xl mx-auto px-4 py-10">

            <div className="grid lg:grid-cols-2 gap-10">

                <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl">
                    <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="space-y-5">

                    <span className="badge badge-primary">
                        Educational Toy
                    </span>

                    <h1 className="text-4xl font-bold">
                        {product.title}
                    </h1>

                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1 text-warning">
                            <FaStar />
                            {product.ratings}
                        </div>

                        <span>
                            {product.reviews} Reviews
                        </span>

                        <span>
                            {product.sold}+ Sold
                        </span>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="text-4xl font-bold text-primary">
                            ৳{discountedPrice}
                        </span>

                        <span className="text-xl line-through opacity-50">
                            ৳{product.price}
                        </span>
                    </div>

                    <p className="text-base-content/80 whitespace-pre-line">
                        {product.description}
                    </p>

                    <div>
                        <h3 className="font-bold text-xl mb-3">
                            Key Features
                        </h3>

                        <ul className="space-y-2">
                            {product.info.map((item, index) => (
                                <li key={index}>
                                    ✅ {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex gap-4">
                        <button className="btn btn-primary btn-lg">
                            Add To Cart
                        </button>

                        <button className="btn btn-outline btn-primary btn-lg">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetails;