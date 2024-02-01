import React from 'react';
import { motion } from 'framer-motion';
import loaderImage from '../../app/assets/icons/logo.svg';
import {mainData} from "../../constants/homeData";

export const PageLoader = () => {
    return (
        <div className="w-full h-full bg-black">
            <div className="flex items-center justify-center w-full h-full fixed  bg-black z-40">
                <motion.div initial={{opacity: 1, scale: 0.8}}
                            animate={{opacity: [0.96, 1.06, 0.96], scale: [0.96, 1.06, 0.96]}}
                            transition={{duration: 1, repeat: Infinity, ease: 'easeInOut', repeatType: 'loop',}}
                >
                    <img src={loaderImage ?? undefined} height={150} width={150} alt={mainData.title}
                         className="fill-black"/>
                </motion.div>
            </div>
        </div>

    );
};