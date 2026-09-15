import Banner from '@/Components/Home/Banner';

import React from 'react';
import ProductsPage from './products/page';

const HomePage = () => {
  return (
    <div className='space-y-20'>
     {/* Banner Section */}
     <Banner></Banner>
     {/* Products */}
     <ProductsPage></ProductsPage>
    </div>
  );
};

export default HomePage;