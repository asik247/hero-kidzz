import { fontBangla } from '@/app/layout';
import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <section className="min-h-[80vh] flex flex-col-reverse lg:flex-row items-center gap-10 px-2 lg:px-4 max-w-7xl mx-auto py-12">

            {/* Left Content */}
            <div className="flex-1 space-y-6">
                <div className={`${fontBangla.className} badge badge-primary badge-lg`}>
                    🎉 নতুন কালেকশন এসেছে
                </div>

                <h1 className={`${fontBangla.className} text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight`}>
                    শিশুদের জন্য
                    <span className="text-primary block">
                        নিরাপদ ও মানসম্মত
                    </span>
                    খেলনা ও পোশাক
                </h1>

                <p className="text-base md:text-lg text-base-content/70 max-w-xl">
                    Discover premium-quality toys, trendy clothing, and educational
                    products designed to bring joy, comfort, and creativity to your
                    little ones.
                </p>

                <div className="flex flex-wrap gap-4">
                    <button className="btn btn-primary btn-lg">
                        Shop Now
                    </button>

                    <button className="btn btn-outline btn-primary btn-lg">
                        Explore Products
                    </button>
                </div>

                {/* Stats */}
                <div className="flex gap-8 pt-4">
                    <div>
                        <h3 className="text-2xl font-bold text-primary">
                            500+
                        </h3>
                        <p className="text-sm text-base-content/70">
                            Products
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold text-primary">
                            1K+
                        </h3>
                        <p className="text-sm text-base-content/70">
                            Happy Customers
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold text-primary">
                            99%
                        </h3>
                        <p className="text-sm text-base-content/70">
                            Satisfaction Rate
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Image */}
            <div className="flex-1 relative">
                {/* Background Blur */}
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>

                <div className="relative">
                    <Image
                        src="/assest/hero.png"
                        alt="Hero Kidzz"
                        width={600}
                        height={500}
                        className="w-full max-w-xl mx-auto drop-shadow-2xl"
                        priority
                    />
                </div>
            </div>
        </section>
    );
};

export default Banner;