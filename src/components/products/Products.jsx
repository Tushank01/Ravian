import React, { useState } from "react"
import Product from "./Product"
import { motion } from "framer-motion"

import arqitel from "../../../public/videos/arqitel.webm"
import ttr from "../../../public/videos/ttr.webm"
import yir from "../../../public/videos/yir.webm"
import yahoo from "../../../public/videos/yahoo.webm"

const Products = () => {
    const products = [
        {
            title: "AI Analyst",
            description:
                "Meet Your AI Data Analyst Unlock the full potential of your data with RAVIAN AI’s Data Analyst—an intelligent platform designed to transform raw data into actionable insights. Our AI Data Analyst is equipped with the latest machine learning algorithms and cutting-edge technologies to analyze, interpret, and visualize data with precision and speed. ",
            live: true,
            case: false,
        },
        {
            title: "AI Vision",
            description:
                "Introducing the Gen AI Vision Analyst: Redefining Visual Intelligence At RAVIAN AI, we're excited to introduce our revolutionary Gen AI Vision Analyst—a next-generation solution that sets a new standard for visual intelligence and data analysis.",
            live: true,
            case: false,
        },
        
        
    ]

    const [pos, setPos] = useState(null)

    const mover = (val) => {
        setPos(val * 20)
    }

    return (
        <div className="mt-40 relative">
            {products.map((item, index) => (
                <Product key={index} val={item} mover={mover} count={index} />
            ))}
            <div className="absolute top-0 w-full h-full pointer-events-none">
                <motion.div
                    initial={{ y: pos, x: "-50%" }}
                    animate={{ y: pos + `rem` }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
                    className="window absolute w-[30rem] h-[20rem] bg-white left-[44%] overflow-hidden"
                >
                    <motion.div
                        animate={{ y: -pos + `rem` }}
                        transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
                        className=" w-full h-full bg-zinc-900"
                    >
                        {pos === 0 && (
                            <video autoPlay muted loop>
                                <source src={yahoo} type="video/webm" />
                                Your browser does not support the video tag.
                            </video>
                        )}
                    </motion.div>

                    <motion.div
                        animate={{ y: -pos + `rem` }}
                        transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
                        className=" w-full h-full"
                    >
                        <video autoPlay muted loop>
                            <source src={yir} type="video/webm" />
                            Your browser does not support the video tag.
                        </video>
                    </motion.div>

                    <motion.div
                        animate={{ y: -pos + `rem` }}
                        transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
                        className=" w-full h-full"
                    >
                        <video autoPlay muted loop>
                            <source src={yir} type="video/webm" />
                            Your browser does not support the video tag.
                        </video>
                    </motion.div>

                    <motion.div
                        animate={{ y: -pos + `rem` }}
                        transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
                        className=" w-full h-full "
                    >
                        <video autoPlay muted loop>
                            <source src={yahoo} type="video/webm" />
                            Your browser does not support the video tag.
                        </video>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default Products
