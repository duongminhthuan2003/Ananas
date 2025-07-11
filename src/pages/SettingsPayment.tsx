import {HugeiconsIcon} from "@hugeicons/react";
import {ArrowRight01Icon, MoreHorizontalIcon} from "@hugeicons/core-free-icons";
import Footer from "../components/Footer.tsx";
import {AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import visa from "../assets/account/Visa.png"
import mc from "../assets/account/MC.png"
import techcombank from "../assets/account/Techcombank.png"

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
            <div onClick={()=>{navigate("/settings/orders")}}>
                Đơn hàng của tôi
            </div>
            <div className="text-Ananas">
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
function SettingsPayment() {
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
                    <p className="font-BeVietnamRegular text-sm">Phương thức thanh toán</p>
                </div>
            </div>

            <div className="mx-8 my-8 space-y-4">
                <p className="text-sm font-BeVietnamBold">Thẻ tín dụng & thẻ ghi nợ</p>
                <div className="flex flex-row font-BeVietnamRegular text-sm items-center">
                    <div className="flex flex-row items-center gap-3">
                        <img src={visa} alt="Visa" className="w-14 p-2 border-1 rounded border-gray-400"/>
                        <p>VISA</p>
                        <p className="bg-[#35A16F] text-white rounded px-2 py-0.5 text-[13px]">Mặc định</p>
                    </div>
                    <div className="flex-1"></div>
                    <div className="flex flex-row items-center">
                        <p>**** 7091</p>
                        <HugeiconsIcon icon={MoreHorizontalIcon} />
                    </div>
                </div>

                <div className="flex flex-row text-sm">
                    <div className="flex flex-row gap-3 font-BeVietnamRegular items-center">
                        <img src={mc} alt="Visa" className="w-14 p-2 border-1 rounded border-gray-400"/>
                        <p>Mastercard</p>
                    </div>
                    <div className="flex-1"></div>
                    <div className="flex flex-row font-BeVietnamRegular items-center">
                        <p>**** 1574</p>
                        <HugeiconsIcon icon={MoreHorizontalIcon} />
                    </div>
                </div>
            </div>

            <div className="mx-8 my-8 space-y-4 text-sm">
                <p className="font-BeVietnamBold">Liên kết ngân hàng</p>
                <div className="flex flex-row">
                    <div className="flex flex-row gap-3 font-BeVietnamRegular items-center">
                        <img src={techcombank} alt="Visa" className="w-14 p-2 border-1 rounded border-gray-400"/>
                        <div>
                            <p>Techcombank</p>
                        </div>
                    </div>
                    <div className="flex-1"></div>
                    <div className="flex flex-row font-BeVietnamRegular items-center">
                        <p>**** 6184</p>
                        <HugeiconsIcon icon={MoreHorizontalIcon} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SettingsPayment;
