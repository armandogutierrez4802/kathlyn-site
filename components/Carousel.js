import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { wrap } from "popmotion";
// import { images } from "./image-data";
import { carouselImages } from "@/public/images";


// export default function Carousel({ image }) {
export default function Carousel({ image }) {
    return (
        <>
            {/* <h1>hi</h1> */}
            <img src={image} />
            {/* <h1>HELLO</h1> */}

            {/* <AnimatePresence>
                {carouselImages.map((img) =>
                    <motion.img
                        key={img}
                        src={img}
                        initial={{ opacity: 0, y: 200 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />
                )}
            </AnimatePresence> */}

            {/* <AnimatePresence>
                <motion.img
                    key={image}
                    src={image}
                    initial={{ opacity: 0, y: 200 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                />
            </AnimatePresence> */}
        </>
    )
};