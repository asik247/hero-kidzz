import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
        <div >
            <Link className='flex gap-1  items-center font-bold' href={'/'}>
                <div>
                    <Image src={'/assest/logo.png'} alt='logo image' width={40} height={40}></Image>
                </div>
                <div>
                    Hero<span className='text-primary'>Kidzz</span>
                </div>
            </Link>
        </div>
    );
};

export default Logo;