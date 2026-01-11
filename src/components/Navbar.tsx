'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { HomeIcon, CalculatorIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
    const pathname = usePathname();

    const navItems = [
        { name: 'Home', href: '/', icon: HomeIcon },
        { name: 'BBS Calculator', href: '/calculator', icon: CalculatorIcon },
    ];

    return (
        <nav className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="flex-shrink-0 flex items-center">
                            <Link href="/" className="text-2xl font-bold text-teal-700 flex items-center gap-3">
                                <Image
                                    src="/logo.png?v=2"
                                    alt="AKSM Logo"
                                    width={48}
                                    height={48}
                                    className="h-12 w-auto"
                                    priority
                                    unoptimized
                                />
                                <span>AKSM Physio</span>
                            </Link>
                        </div>
                        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                            {navItems.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${isActive
                                            ? 'border-teal-500 text-gray-900'
                                            : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                                            }`}
                                    >
                                        <item.icon className="h-4 w-4 mr-2" />
                                        {item.name}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
