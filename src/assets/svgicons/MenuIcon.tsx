import { motion } from "framer-motion";

interface MenuIconProps {
    isOpen: boolean;
    onClick: () => void;
}

export default function MenuIcon({isOpen, onClick}: MenuIconProps) {
    return (
        <button onClick={onClick}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="32"
                height="32"
                color="#000000"
                fill="none"
            >
                <motion.path
                    d="M4 8.5L20 8.5"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    animate={isOpen ? { rotate: 45, y: 3.5 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.3 }}
                />
                <motion.path
                    d="M4 15.5L20 15.5"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    animate={isOpen ? { rotate: -45, y: -3.5 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.3 }}
                />
            </svg>
        </button>
    );
}
