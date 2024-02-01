import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {Link} from "react-router-dom";
import {mainData} from "../../../constants/homeData";

function PriceLine(props) {
    const [isPriceOpen, setPriceOpen] = useState(false);

    const toggleAccordion = () => {
        setPriceOpen(!isPriceOpen);
    };

    return (
        <div className="flex flex-col gap-4 py-4 px-6 border rounded-3xl mt-4">
            <div
                onClick={toggleAccordion}
                className="flex items-center justify-between gap-2 sm:text-lg font-semibold cursor-pointer"
            >
                <span className="text-white font-normal text-sm md:font-semibold">{props.title}</span>
                <div className="flex items-center">
                    {!isPriceOpen && (
                        <p className="text-white w-[5rem] font-semibold text-sm hidden md:block">
                            {props.price}
                        </p>
                    )}
                    <div className="w-4 h-4 ml-3">
                        {isPriceOpen ? (
                            <motion.svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-3"
                                viewBox="0 0 448 512"
                                initial={{rotate: 0}}
                                animate={{rotate: 180}}
                                exit={{rotate: 0}}
                            >
                                <motion.path
                                    fill="#ffffff"
                                    d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"
                                />
                            </motion.svg>
                        ) : (
                            <motion.svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-3"
                                viewBox="0 0 448 512"
                                initial={{rotate: 0}}
                                animate={{rotate: 180}}
                                exit={{rotate: 0}}
                            >
                                <motion.path
                                    fill="#ffffff"
                                    d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
                                />
                            </motion.svg>
                        )}
                    </div>
                </div>
            </div>
            <AnimatePresence>
                {isPriceOpen && (
                    <motion.div initial={{opacity: 0, maxHeight: 0}}
                                animate={{opacity: 1, maxHeight: "100%"}}
                                exit={{opacity: 0, maxHeight: 0}}
                                transition={{duration: 0.3, ease: "easeInOut"}}
                                className="text-sm sm:text-base text-gray-400 overflow-hidden">
                        <p className="pb-5">{props.description}</p>
                        <p className="pb-2">{props.subDescription}</p>
                        <div className="flex justify-between md:justify-end items-center pt-7 pb-1">
                            <p className="text-white font-semibold text-2xl">
                                {props.price}
                            </p>
                            <Link to={props.link} target="_blank" rel="noopener noreferrer"
                                  className="py-3 px-3 bg-white rounded-2xl ml-8 text-black border-2 border-white/30 hover:bg-transparent hover:text-white transition duration-300">
                                {mainData.buyButton}
                            </Link>

                        </div>

                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default PriceLine;
