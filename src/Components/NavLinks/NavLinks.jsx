'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLinks = ({ href, children }) => {
    const path = usePathname();
    const isActive = href === "/"?path==="/":path.startsWith(href)
    return (
        <div>
            <Link href={href} className={`${isActive? 'text-primary font-bold':""}`}>{children}</Link>
        </div>
    );
};

export default NavLinks;