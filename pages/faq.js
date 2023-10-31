// import { Accordion } from "flowbite-react";
// import { AccordionOptions, AccordionItem, AccordionInterface } from "flowbite-react";

import { useState } from "react"


export default function FAQ() {

    const [open, setOpen] = useState({ q1: false, q2: false, q6: false });
    // const [open, setOpen] = useState([]);
    // const [open, setOpen] = useState(false);


    const handleClick = (question) => {
        const newOpenState = { ...open, };
        newOpenState[question] = !open[question];

        setOpen(newOpenState);
        console.log(open);
    }


    // const obj = { '0': false, '1': true, '2': false };
    // console.log(obj[1]);

    return (
        <div className="mt-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div>
                <h2 onClick={() => handleClick('q1')}>
                    <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800">
                        <span>Question 1</span>
                        <svg data-accordion-icon className={`w-3 h-3 shrink-0  ${open['q1'] === false ? 'rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                        </svg>
                    </button>
                </h2>
                <div className={`${open['q1'] === false ? 'hidden' : ''}`}>
                    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                        <p className="mb-2 text-gray-500 dark:text-gray-400">EXAMPLE ANSWER</p>
                    </div>
                </div>

                {/* ------------ */}
                <h2 onClick={() => handleClick('q2')}>
                    <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200  dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" aria-expanded="false" >
                        <span>Question 2</span>
                        <svg data-accordion-icon className={`w-3 h-3 shrink-0  ${open['q2'] === false ? 'rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                        </svg>
                    </button>
                </h2>
                <div className={`${open['q2'] === false ? 'hidden' : ''}`}>
                    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                        <p className="mb-2 text-gray-500 dark:text-gray-400">EXAMPLE ANSWER</p>
                        <p className="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" className="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
                    </div>
                </div>
                {/* ------------ */}


                <h2 onClick={() => handleClick('q6')}>
                    <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200  dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800">
                        <span>Question 3</span>
                        <svg data-accordion-icon className={`w-3 h-3 shrink-0  ${open['q6'] === false ? 'rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                        </svg>
                    </button>
                </h2>
                <div className={`${open['q6'] === false ? 'hidden' : ''}`}>
                    <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                        <p className="mb-2 text-gray-500 dark:text-gray-400">EXAMPLE ANSWER</p>
                    </div>
                </div>


            </div>




        </div >
    )
}

