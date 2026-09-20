import Banner from '@/Components/Home/Banner';
import React from 'react';
import ProductsPage from './products/page';
import { getServerSession } from 'next-auth';
import Test from '@/Components/Test';
import { authOptions } from '@/lib/outhOption';


const HomePage = async () => {
  const serverData = await getServerSession(authOptions);
  return (
    <div className='space-y-20'>
      <Test></Test>
      {/* server */}
      <p>{JSON.stringify(serverData)}</p>

      {/* Banner Section */}
      <Banner></Banner>
      {/* Products */}
      <ProductsPage></ProductsPage>
    </div>
  );
};

export default HomePage;