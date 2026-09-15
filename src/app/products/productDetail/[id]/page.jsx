import { getDetails } from '@/actions/server/getProducts';
import React from 'react';

const ProductDetilsPage =async ({params}) => {
    const {id} = await params;
    const detisl = await getDetails(id);
    console.log(detisl);
    return (
        <div>
            welcome detial{id}
        </div>
    );
};

export default ProductDetilsPage;