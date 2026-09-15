import { getProducts } from '@/actions/server/getProducts';
import ProductsCard from '@/Components/ProductsRelaive/ProductsCard';
import React from 'react';
export const metadata = {
  title: "All Products",

  description:
    "Browse all educational toys, learning boards, puzzles, and creative learning products at Hero Kidzz. Discover fun and engaging toys designed to support children's growth and development.",

  keywords: [
    "Hero Kidzz Products",
    "Educational Toys",
    "Kids Learning Toys",
    "Learning Board",
    "Children Toys",
    "Puzzle Toys",
    "Montessori Toys",
    "Kids Store Bangladesh",
  ],

  openGraph: {
    title: "All Products | Hero Kidzz",
    description:
      "Explore our collection of educational toys, learning boards, puzzles, and creative products for children.",

    url: "https://hero-kidzz-eight.vercel.app/products",

    images: [
      {
        url: "https://i.ibb.co.com/d4ZbBQN8/Screenshot-136.png",
        width: 1200,
        height: 630,
        alt: "Hero Kidzz Products Page",
      },
    ],

    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "All Products | Hero Kidzz",
    description:
      "Explore educational toys, learning boards, puzzles, and fun learning products for kids.",
    images: [
      "https://i.ibb.co.com/d4ZbBQN8/Screenshot-136.png",
    ],
  },

  alternates: {
    canonical: "https://hero-kidzz-eight.vercel.app/products",
  },
};
const ProductsPage = async () => {
    //Todo get products data in server component
    const products = await getProducts();
    return (
        <div>
            <p className='text-primary font-bold text-3xl text-center my-5'>Total Products: {products.length}</p>
            {/* Map */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    products.map(product => <ProductsCard key={product._id} product={product}></ProductsCard>)
                }
            </div>
        </div>
    );
};

export default ProductsPage;