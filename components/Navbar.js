
// import Link from 'next/link';
import ActiveLink from './ActiveLink';
import Link from 'next/link';
import { useRouter } from 'next/router';

// Font Awesome Imports
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';

//Tailwind UI Imports
// import { Fragment } from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

// function classNames(...classes) {
//     return classes.filter(Boolean).join(' ')
// }


export default function Navbar() {
    const router = useRouter();

    return (
        <Disclosure as="nav" className="bg-white shadow">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        {/* <div className="flex min-w-[100%] h-16 justify-between"> */}
                        <div className="flex flex-1 h-16 justify-between">
                            <div className="font-bold flex flex-shrink-0 items-center">
                                <h1>Kathlyn Gutierrez</h1>
                            </div>
                            {/* <div className="hidden space-x-[20px] sm:ml-16 sm:flex sm:space-x-8 md:ml-40 lg:ml-64 xl:ml-80"> */}
                            <div className="hidden space-x-[20px] sm:flex pr-4">
                                {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}

                                <ActiveLink
                                    href="/"
                                    className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                                    activeClassName="inline-flex items-center border-b-2 border-yellow-300 px-1 pt-1 text-sm font-medium text-black"
                                >
                                    Home
                                </ActiveLink>
                                <ActiveLink
                                    href="/order"
                                    className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                                    activeClassName="inline-flex items-center border-b-2 border-yellow-300 px-1 pt-1 text-sm font-medium text-black"
                                >
                                    Order
                                </ActiveLink>
                                <ActiveLink
                                    href="/about"
                                    className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                                    activeClassName="inline-flex items-center border-b-2 border-yellow-300 px-1 pt-1 text-sm font-medium text-black"
                                >
                                    About
                                </ActiveLink>
                                <ActiveLink
                                    href="/faq"
                                    className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                                    activeClassName="inline-flex items-center border-b-2 border-yellow-300 px-1 pt-1 text-sm font-medium text-black"
                                >
                                    FAQ
                                </ActiveLink>
                            </div>
                            <div className="hidden sm:ml-6 sm:flex sm:items-center">
                                <Link href="/order">
                                    <button
                                        type="button"
                                        // className="py-1 px-2 border-2 border-yellow-300"
                                        className="rounded-md bg-yellow-300 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                    >
                                        Request Quote
                                    </button>
                                </Link>

                            </div>

                            <div className="-mr-2 flex items-center sm:hidden">
                                {/* Mobile menu button */}
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                        </div>
                    </div>

                    {/* HAMBURGER MENU */}
                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 pb-3 pt-2">
                            {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                            <Disclosure.Button
                                as="a"
                                href="/"
                                className={`block border-l-4 ${router.pathname == "/" ? "border-yellow-300" : "border-transparent"} py-2 pl-3 pr-4 text-base font-medium text-gray-700`}
                            >
                                Home
                            </Disclosure.Button>
                            <Disclosure.Button
                                as="a"
                                href="/order"
                                className={`block border-l-4 ${router.pathname == "/order" ? "border-yellow-300" : "border-transparent"} py-2 pl-3 pr-4 text-base font-medium text-gray-700 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700`}
                            >
                                Order
                            </Disclosure.Button>
                            <Disclosure.Button
                                as="a"
                                href="/about"
                                className={`block border-l-4 ${router.pathname == "/about" ? "border-yellow-300" : "border-transparent"} py-2 pl-3 pr-4 text-base font-medium text-gray-700 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700`}
                            >
                                About
                            </Disclosure.Button>
                            <Disclosure.Button
                                as="a"
                                href="/faq"
                                className={`block border-l-4 ${router.pathname == "/faq" ? "border-yellow-300" : "border-transparent"} py-2 pl-3 pr-4 text-base font-medium text-gray-700 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700`}
                            >
                                FAQ
                            </Disclosure.Button>
                        </div>
                    </Disclosure.Panel>
                </>
            )
            }
        </Disclosure >
    )
}