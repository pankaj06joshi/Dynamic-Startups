import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Image from 'next/image';

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'Home', href: '#home-section', current: false },
    { name: 'About us', href: '#about-section', current: false },
    { name: 'What we do', href: '#whatWeDo-section', current: false },
    { name: 'How we operate', href: '#howWeOperate-section', current: false },
    { name: 'Contact us', href: '#contact-section', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {

    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <Disclosure as='nav' className='navbar'>
            <>
                <div className='mx-auto max-w-7xl p-2 md:p-4 lg:px-8'>
                    <div className='relative flex h-12 sm:h-20 items-center'>
                        <div className='flex flex-1 items-center sm:justify-between'>
                            {/* LOGO */}

                            <div className='flex sm:hidden flex-shrink-0 items-center border-right'>
                                <Image src='/DynamicStartupsLogo.png' alt='logo' width={36} height={36} />
                                <Link href='/' className='text-2xl font-semibold text-black ml-4'>
                                    Dynamic Startups
                                </Link>
                            </div>
                            <div className='hidden sm:flex flex-shrink-0 items-center border-right'>
                                <Image src='/DynamicStartupsLogo.png' alt='logo' width={56} height={56} />
                                <Link href='/' className='text-2xl font-semibold text-black ml-4'>
                                    Dynamic Startups
                                </Link>
                            </div>

                            {/* LINKS */}

                            <div className='hidden lg:flex items-center border-right '>
                                <div className='flex justify-end space-x-4'>
                                    {navigation.map(item => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current ? 'bg-black' : 'navlinks hover:opacity-100',
                                                'px-3 py-4 rounded-md text-lg font-normal opacity-50 hover:text-black space-links'
                                            )}
                                            aria-current={item.href ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* DRAWER FOR MOBILE VIEW */}

                        {/* DRAWER ICON */}

                        <div className='block lg:hidden'>
                            <Bars3Icon className='block h-6 w-6' aria-hidden='true' onClick={() => setIsOpen(true)} />
                        </div>

                        {/* DRAWER LINKS DATA */}

                        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                            <Drawerdata />
                        </Drawer>
                    </div>  
                </div>
            </>
        </Disclosure>
    );
}

export default Navbar;
