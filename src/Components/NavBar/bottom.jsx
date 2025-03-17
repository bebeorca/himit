"use client"

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const items = ["Lapor", "Verifikasi", "Proses", "Feedback", "Selesai"]

const Item = ({ item, active, setActive }) => {
    const handleClick = useCallback(() => setActive(item), [item, setActive]);

    return (
        <motion.div
            key={item}
            onClick={handleClick}
        >
            {active === item && (
                <motion.div
                    layoutId="activeTab"
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
            )}
            <div className="flex flex-col  justify-center items-center gap-1">
                <span className={`text-xs md:text-sm relative z-10 text-pgreen ${active === item ? "font-bold" : "font-normal"}`}>
                    {item}
                </span>
                <Image src={`./${active === item ? item + "-c.svg" : item + ".svg"}`} className="md:w-8 w-6" width={30} height={30} alt={item} />
            </div>
        </motion.div>
    )
}

const BottomNav = () => {
    const [active, setActive] = useState("Lapor");
    return (
        <div className="flex items-center md:w-full gap-2 md:gap-0 md:px-10 font-jakarta pt-9 ">
            {/* Navigation */}
            <div className="flex-1 flex justify-center">
                <div className="bg-white flex  rounded-md px-4 md:px-20 py-2 md:py-10 gap-3 md:gap-10 items-center justify-center">
                    {items.map((item) => (
                        <Item key={item} item={item} active={active} setActive={setActive} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BottomNav