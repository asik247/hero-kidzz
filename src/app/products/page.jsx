import { getProducts } from '@/actions/server/getProducts';
import ProductsCard from '@/Components/ProductsRelaive/ProductsCard';
import React from 'react';
export const metadata = {
    title:"All Products",
  description: 'The React Framework for the Web',
}
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