const DetailsSkeleton = () => {
    return (
        <div className="container mx-auto px-4 py-10">

            <div className="grid lg:grid-cols-2 gap-10">

                {/* Image Skeleton */}
                <div className="skeleton h-[500px] w-full rounded-3xl"></div>

                {/* Content Skeleton */}
                <div className="space-y-5">

                    <div className="skeleton h-8 w-32"></div>

                    <div className="skeleton h-12 w-full"></div>

                    <div className="skeleton h-6 w-1/2"></div>

                    <div className="skeleton h-10 w-40"></div>

                    <div className="space-y-3">
                        <div className="skeleton h-4 w-full"></div>
                        <div className="skeleton h-4 w-full"></div>
                        <div className="skeleton h-4 w-5/6"></div>
                        <div className="skeleton h-4 w-4/6"></div>
                    </div>

                    <div className="space-y-2 pt-3">
                        <div className="skeleton h-5 w-48"></div>
                        <div className="skeleton h-4 w-full"></div>
                        <div className="skeleton h-4 w-5/6"></div>
                        <div className="skeleton h-4 w-4/6"></div>
                    </div>

                    <div className="flex gap-3 pt-6">
                        <div className="skeleton h-12 w-40"></div>
                        <div className="skeleton h-12 w-40"></div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default DetailsSkeleton;