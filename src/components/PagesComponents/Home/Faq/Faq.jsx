import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Faq(props) {
    const [isAccordionOpen, setAccordion] = useState(false);

    const toggleAccordion = () => {
        setAccordion(!isAccordionOpen);
    };

    return (
        <div className="flex flex-col gap-4 py-4 px-6 border rounded-3xl mt-4">
            <div
                onClick={toggleAccordion}
                className="flex items-center justify-between gap-2 sm:text-lg font-semibold cursor-pointer"
            >
                <span className="text-white font-normal md:font-medium">{props.question}</span>
                <div className="w-4 h-4 ml-3">
                    {isAccordionOpen ? (
                        <motion.svg
                            className="w-3"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            initial={{ rotate: 0 }}
                            animate={{ rotate: 180 }}
                            exit={{ rotate: 0 }}
                        >
                            <motion.path
                                fill="#ffffff"
                                d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"
                            />
                        </motion.svg>
                    ) : (
                        <motion.svg
                            className="w-3"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            initial={{ rotate: 0 }}
                            animate={{ rotate: 180 }}
                            exit={{ rotate: 0 }}
                        >
                            <motion.path
                                fill="#ffffff"
                                d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
                            />
                        </motion.svg>
                    )}
                </div>
            </div>
            <AnimatePresence>
                {isAccordionOpen && (
                    <motion.p
                        initial={{ opacity: 0, maxHeight: 0 }}
                        animate={{ opacity: 1, maxHeight: "100%" }}
                        exit={{ opacity: 0, maxHeight: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="text-sm sm:text-base text-gray-400 overflow-hidden"
                    >
                        {props.answer}
                    </motion.p>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Faq;
