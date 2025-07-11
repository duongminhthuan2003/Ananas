import {HugeiconsIcon} from "@hugeicons/react";
import {ArrowRight01Icon} from "@hugeicons/core-free-icons";
import Footer from "../components/Footer.tsx";
import {AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import Button from "../components/Button.tsx";

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
            <div onClick={()=>{navigate("/settings/payment")}}>
                Phương thức thanh toán
            </div>
            <div className="text-Ananas">
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
                    <p className="font-BeVietnamRegular text-sm">Đổi mật khẩu</p>
                </div>
            </div>

            <div className="mx-8 font-BeVietnamRegular space-y-5 my-8">
                <div className="flex flex-row">
                    <input type="text" placeholder="Email"
                           className="border-2 border-[#CCCCCC] border-r-0 text-sm h-10 w-full rounded-l-md pl-3"/>
                    <div className="h-10 w-25 text-white flex items-center text-sm justify-center rounded-r-md bg-Ananas">
                        Gửi mã
                    </div>
                </div>
                <input type="text" placeholder="Mã xác nhận"
                       className="border-2 border-[#CCCCCC] text-sm h-10 w-full rounded-md pl-3"/>
                <input type="text" placeholder="Mật khẩu mới"
                       className="border-2 border-[#CCCCCC] text-sm h-10 w-full rounded-md pl-3"/>
            </div>

            <div className="flex flex-row">
                <Button label="Lưu" onClick={()=>{}} />
            </div>
            <Footer />
        </div>
    )
}

export default SettingsPayment;
