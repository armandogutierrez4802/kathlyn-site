// import { Accordion } from "flowbite-react";
// import { AccordionOptions, AccordionItem, AccordionInterface } from "flowbite-react";

import { useState } from "react"


export default function FAQ() {

    const [open, setOpen] = useState({ q1: false, q2: false, q3: false, q4: false, q5: false, q6: false, q7: false, q8: false, q9: false, q10: false, q11: false, });
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
                    <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-900 border border-b-0 border-gray-200 rounded-t-xl dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800">
                        <span>1. What type of artwork do you offer?</span>
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
                    <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-900 border border-b-0 border-gray-200  dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" aria-expanded="false" >
                        <span>2. How do I request a quote for a drawing?</span>
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

                <h2 onClick={() => handleClick('q3')}>
                    <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-900 border border-b-0 border-gray-200  dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" aria-expanded="false" >
                        <span>3. What types of customizations can I request?</span>
                        <svg data-accordion-icon className={`w-3 h-3 shrink-0  ${open['q3'] === false ? 'rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                        </svg>
                    </button>
                </h2>
                <div className={`${open['q3'] === false ? 'hidden' : ''}`}>
                    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                        <p className="mb-2 text-gray-500 dark:text-gray-400">EXAMPLE ANSWER</p>
                        <p className="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" className="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
                    </div>
                </div>
                {/* ------------ */}

                <h2 onClick={() => handleClick('q4')}>
                    <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-900 border border-b-0 border-gray-200  dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" aria-expanded="false" >
                        <span>4. How long does it take to receive a quote?</span>
                        <svg data-accordion-icon className={`w-3 h-3 shrink-0  ${open['q4'] === false ? 'rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                        </svg>
                    </button>
                </h2>
                <div className={`${open['q4'] === false ? 'hidden' : ''}`}>
                    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                        <p className="mb-2 text-gray-500 dark:text-gray-400">EXAMPLE ANSWER</p>
                        <p className="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" className="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
                    </div>
                </div>
                {/* ------------ */}

                <h2 onClick={() => handleClick('q5')}>
                    <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-900 border border-b-0 border-gray-200  dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" aria-expanded="false" >
                        <span>5. Is there a fee to request a quote?</span>
                        <svg data-accordion-icon className={`w-3 h-3 shrink-0  ${open['q5'] === false ? 'rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                        </svg>
                    </button>
                </h2>
                <div className={`${open['q5'] === false ? 'hidden' : ''}`}>
                    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                        <p className="mb-2 text-gray-500 dark:text-gray-400">EXAMPLE ANSWER</p>
                        <p className="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" className="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
                    </div>
                </div>

                {/* ------------ */}

                <h2 onClick={() => handleClick('q6')}>
                    <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-900 border border-b-0 border-gray-200  dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" aria-expanded="false" >
                        <span>6. How long does it take to complete a custom artwork?</span>
                        <svg data-accordion-icon className={`w-3 h-3 shrink-0  ${open['q6'] === false ? 'rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                        </svg>
                    </button>
                </h2>
                <div className={`${open['q6'] === false ? 'hidden' : ''}`}>
                    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                        <p className="mb-2 text-gray-500 dark:text-gray-400">EXAMPLE ANSWER</p>
                        <p className="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" className="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
                    </div>
                </div>

                {/* ------------ */}

                <h2 onClick={() => handleClick('q7')}>
                    <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-900 border border-b-0 border-gray-200  dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" aria-expanded="false" >
                        <span>7. How do I make a payment?</span>
                        <svg data-accordion-icon className={`w-3 h-3 shrink-0  ${open['q7'] === false ? 'rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                        </svg>
                    </button>
                </h2>
                <div className={`${open['q7'] === false ? 'hidden' : ''}`}>
                    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                        <p className="mb-2 text-gray-500 dark:text-gray-400">EXAMPLE ANSWER</p>
                        <p className="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" className="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
                    </div>
                </div>

                {/* ------------ */}

                <h2 onClick={() => handleClick('q8')}>
                    <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-900 border border-b-0 border-gray-200  dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" aria-expanded="false" >
                        <span>8. What is your cancellation/refund policy?</span>
                        <svg data-accordion-icon className={`w-3 h-3 shrink-0  ${open['q8'] === false ? 'rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                        </svg>
                    </button>
                </h2>
                <div className={`${open['q8'] === false ? 'hidden' : ''}`}>
                    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                        <p className="mb-2 text-gray-500 dark:text-gray-400">EXAMPLE ANSWER</p>
                        <p className="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" className="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
                    </div>
                </div>

                {/* ------------ */}

                <h2 onClick={() => handleClick('q9')}>
                    <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-900 border border-b-0 border-gray-200  dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" aria-expanded="false" >
                        <span>9. Do you ship internationally?</span>
                        <svg data-accordion-icon className={`w-3 h-3 shrink-0  ${open['q9'] === false ? 'rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                        </svg>
                    </button>
                </h2>
                <div className={`${open['q9'] === false ? 'hidden' : ''}`}>
                    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                        <p className="mb-2 text-gray-500 dark:text-gray-400">EXAMPLE ANSWER</p>
                        <p className="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" className="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
                    </div>
                </div>

                {/* ------------ */}


                <h2 onClick={() => handleClick('q10')}>
                    <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-900 border border-gray-200  dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800">
                        <span>10. Is there a limit to the number of custom orders I can make?</span>
                        <svg data-accordion-icon className={`w-3 h-3 shrink-0  ${open['q10'] === false ? 'rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                        </svg>
                    </button>
                </h2>
                <div className={`${open['q10'] === false ? 'hidden' : ''}`}>
                    <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                        <p className="mb-2 text-gray-500 dark:text-gray-400">EXAMPLE ANSWER</p>
                    </div>
                </div>


            </div>



            {/* HOW MUCH DOES IT COST? */}


        </div >
    )
}

