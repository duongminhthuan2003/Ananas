import { motion } from "framer-motion";
import { useState } from "react";

interface ButtonProps {
    label: string;
    onClick: () => void;
}

const Button = ({ label, onClick }: ButtonProps) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <motion.button
            onClick={onClick}
            onHoverStart={() => setIsActive(true)}
            onHoverEnd={() => setIsActive(false)}
            onTapStart={() => setIsActive(true)}  // 👈 hiệu ứng khi ấn (mobile)
            onTap={() => {
                setTimeout(() => setIsActive(false), 300);
            }}
            onTapCancel={() => {
                setTimeout(() => setIsActive(false), 300);
            }}
            className="relative font-BeVietnamRegular text-white rounded-lg md:py-3 md:px-6 py-2 px-6 z-20 overflow-hidden bg-[#F15E2C]"
            style={{
                boxShadow: isActive
                    ? "0 8px 20px rgba(241, 94, 44, 0.5)" // glow effect
                    : "none",
                transition: "box-shadow 0.4s ease",
            }}
        >
            {/* Overlay gradient */}
            <motion.div
                animate={{ opacity: isActive ? 1 : 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 bg-gradient-to-r from-[#fca144] via-[#FF6530] to-[#FF6530] rounded-lg pointer-events-none"
            />

            {/* Button label */}
            <span className="relative z-10">{label}</span>
        </motion.button>
    );
};

export default Button;
