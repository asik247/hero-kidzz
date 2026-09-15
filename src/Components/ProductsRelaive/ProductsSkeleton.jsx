const ProductsSkeleton = () => {
    return (
        <div className="container mx-auto px-4 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                {[...Array(8)].map((_, index) => (
                    <div
                        key={index}
                        className="card bg-base-100 shadow-md border border-base-200"
                    >
                        <div className="skeleton h-64 w-full rounded-t-2xl"></div>

                        <div className="card-body space-y-3">
                            <div className="skeleton h-5 w-full"></div>
                            <div className="skeleton h-5 w-3/4"></div>

                            <div className="flex justify-between">
                                <div className="skeleton h-4 w-20"></div>
                                <div className="skeleton h-4 w-16"></div>
                            </div>

                            <div className="skeleton h-8 w-28"></div>

                            <div className="flex gap-2 pt-3">
                                <div className="skeleton h-10 flex-1"></div>
                                <div className="skeleton h-10 flex-1"></div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default ProductsSkeleton;