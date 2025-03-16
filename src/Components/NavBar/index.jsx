"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";

const navItems = ["Home", "Data", "Lapor"];

const NavItem = ({ item, active, setActive }) => {
    const handleClick = useCallback(() => setActive(item), [item, setActive]);

    return (
        <motion.div
            key={item}
            className="px-4 py-1 rounded-full cursor-pointer relative"
            onClick={handleClick}
            whileTap={{ scale: 0.9 }}
        >
            {active === item && (
                <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-pyellow rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
            )}
            <span className={`text-sm md:text-2xl relative z-10 ${active === item ? "font-bold" : "font-normal"}`}>
                {item}
            </span>
        </motion.div>
    );
};

const NavBar = () => {
    const [active, setActive] = useState("Home");
    
    const mobile = () => {
        return(
            <div>

            </div>
        )
    }

    return (
        <div className="flex items-center md:w-full gap-2 md:gap-0 md:px-10">
            {/* Navigation */}
            <div className="flex-1 flex justify-center">
                <div className="bg-myellow flex rounded-full px-1 py-1 gap-10 items-center justify-center">
                    {navItems.map((item) => (
                        <NavItem key={item} item={item} active={active} setActive={setActive} />
                    ))}
                </div>
            </div>

            {/* Tombol Login */}
            <div className="ml-auto">
                <div className="bg-pgreen rounded-full px-4 py-1">
                    <a className="text-xs md:text-2xl text-white" href="">
                        Login
                    </a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;