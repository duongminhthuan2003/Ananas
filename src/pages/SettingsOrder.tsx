import {HugeiconsIcon} from "@hugeicons/react";
import {ArrowRight01Icon, ArrowDown01Icon} from "@hugeicons/core-free-icons";
import Footer from "../components/Footer.tsx";
import {AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import product1 from "../assets/index/Pro_AV00122_1.webp"

export function ContextMenu() {
    const navigate = useNavigate();

    return (
        <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col navbar mx-8 rounded-xl px-3 pt-5 pb-3 gap-5 font-BeVietnamRegular items-center">
            <div onClick={()=>{navigate("/settings/profile")}}>
                Hồ sơ của tôi
            </div>
            <div
                className="text-Ananas">
                Đơn hàng của tôi
            </div>
            <div onClick={()=>{navigate("/settings/payment")}}>
                Phương thức thanh toán
            </div>
            <div onClick={()=>{navigate("/settings/password")}}>
                Đổi mật khẩu
            </div>
            <div className="bg-red-500 text-white w-full flex items-center justify-center py-3 rounded-lg"
                 onClick={() => {
                     localStorage.setItem('isLoggedIn', 'false');
                     localStorage.setItem('userData', JSON.stringify({name: '', email: ''}));
                     navigate('/');
                 }}>
                Đăng xuất
            </div>
        </motion.div>
    )
}
function SettingsOrder() {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <div>
            <div className="h-14"> </div>

            <AnimatePresence>
                {isOpen && (
                    <div className="absolute z-50 top-36 w-full">
                        <ContextMenu />
                    </div>
                )}
            </AnimatePresence>

            <div className="flex flex-row mx-8 gap-3 mt-8 items-center" onClick={() => setIsOpen(!isOpen)}>
                <motion.div animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.2 }}>
                    <HugeiconsIcon icon={ArrowRight01Icon} />
                </motion.div>

                <div>
                    <p className="font-BeVietnamBold text-xl">THÔNG TIN CÁ NHÂN</p>
                    <p className="font-BeVietnamRegular text-sm">Đơn hàng của tôi</p>
                </div>
            </div>

            <div className="mx-8 space-y-3 my-5">
                <div className="border-2 border-gray-300 px-4 py-3 rounded-xl">
                    <div className="flex flex-row text-sm font-BeVietnamRegular">
                        <p>Mã đơn hàng: #14251</p>
                        <div className="flex-1"></div>
                        <p>Đã đặt</p>
                    </div>
                    <div className="flex flex-row gap-3 my-3">
                        <img src={product1} alt="Product 1"  className="w-[20vw] aspect-square rounded-lg"/>
                        <div className="flex flex-col justify-center gap-1">
                            <p className="font-BeVietnamBold text-sm line-clamp-2">Basas Bumper Gum EXT NE - High Top - Offwhite/Gum</p>
                            <p className="font-BeVietnamRegular text-[13px] text-gray-500">650.000 VNĐ</p>
                            <p className="font-BeVietnamRegular text-[13px] text-gray-500">Kích cỡ: 35</p>
                        </div>
                        <p className="text-sm font-BeVietnamRegular mt-[6px]">
                            x1
                        </p>
                    </div>
                    <div className="flex flex-row justify-center gap-1 items-center">
                        <HugeiconsIcon icon={ArrowDown01Icon} />
                        <p className="font-BeVietnamRegular text-sm">Xem thêm</p>
                    </div>
                </div>
                <div className="border-2 border-gray-300 px-5 py-4 rounded-xl">
                    <div className="flex flex-row text-sm font-BeVietnamRegular">
                        <p>Mã đơn hàng: #60903</p>
                        <div className="flex-1"></div>
                        <p>Đang giao</p>
                    </div>
                    <div className="flex flex-row gap-3 my-3">
                        <img src={product1} alt="Product 1"  className="w-[20vw] aspect-square rounded-lg"/>
                        <div className="flex flex-col justify-center gap-1">
                            <p className="font-BeVietnamBold text-sm line-clamp-2">Basas Bumper Gum EXT NE - High Top - Offwhite/Gum</p>
                            <p className="font-BeVietnamRegular text-[13px] text-gray-500">650.000 VNĐ</p>
                            <p className="font-BeVietnamRegular text-[13px] text-gray-500">Kích cỡ: 35</p>
                        </div>
                        <p className="text-sm font-BeVietnamRegular mt-[6px]">
                            x1
                        </p>
                    </div>
                </div>
                <div className="border-2 border-gray-300 px-5 py-4 rounded-xl">
                    <div className="flex flex-row text-sm font-BeVietnamRegular">
                        <p>Mã đơn hàng: #38012</p>
                        <div className="flex-1"></div>
                        <p>Đã giao</p>
                    </div>
                    <div className="flex flex-row gap-3 my-3">
                        <img src={product1} alt="Product 1"  className="w-[20vw] aspect-square rounded-lg"/>
                        <div className="flex flex-col justify-center gap-1">
                            <p className="font-BeVietnamBold text-sm line-clamp-2">Basas Bumper Gum EXT NE - High Top - Offwhite/Gum</p>
                            <p className="font-BeVietnamRegular text-[13px] text-gray-500">650.000 VNĐ</p>
                            <p className="font-BeVietnamRegular text-[13px] text-gray-500">Kích cỡ: 35</p>
                        </div>
                        <p className="text-sm font-BeVietnamRegular mt-[6px]">
                            x1
                        </p>
                    </div>
                </div>
            </div>


            <Footer />
        </div>
    )
}

export default SettingsOrder;
