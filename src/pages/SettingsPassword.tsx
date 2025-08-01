import {HugeiconsIcon} from "@hugeicons/react";
import {ArrowRight01Icon} from "@hugeicons/core-free-icons";
import Footer from "../components/Footer.tsx";
import {AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
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
    const navigate = useNavigate();

    return(
        <div className="flex flex-col h-screen">
            <AnimatePresence>
                {isOpen && (
                    <div className="absolute z-50 top-36 w-full">
                        <ContextMenu />
                    </div>
                )}
            </AnimatePresence>

            <div className="flex md:hidden flex-row mx-8 gap-3 mt-24 items-center" onClick={() => setIsOpen(!isOpen)}>
                <motion.div animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.2 }}>
                    <HugeiconsIcon icon={ArrowRight01Icon} />
                </motion.div>

                <div className="md:hidden">
                    <p className="font-BeVietnamBold text-xl">THÔNG TIN CÁ NHÂN</p>
                    <p className="font-BeVietnamRegular text-sm">Phương thức thanh toán</p>
                </div>
            </div>

            <div className="mx-8 flex flex-col md:flex-row md:mx-auto md:mt-24 md:w-10/12 lg:w-8/12 mt-8">
                <div className="hidden md:flex flex-col md:w-4/12 xl:w-3/12">
                    <p className="text-xl font-BeVietnamBold">THÔNG TIN CÁ NHÂN</p>
                    <div className="flex flex-col gap-6 lg:gap-8 font-BeVietnamRegular text-sm md:text-base mt-10 ml-3">
                        <Link
                            to="/settings/profile">Hồ sơ của tôi</Link>
                        <Link
                            to="/settings/orders"
                        >Đơn hàng của tôi</Link>
                        <Link
                            to="/settings/payment"
                        >Phương thức thanh toán</Link>
                        <Link
                            to="/settings/password"
                            className="bg-Ananas w-fit py-2 px-4 text-white rounded-lg"
                        >Đổi mật khẩu</Link>
                    </div>

                    <div className="bg-red-500  mt-24 text-white flex font-BeVietnamRegular w-fit py-2 px-4 ml-3 rounded-lg"
                         onClick={() => {
                             localStorage.setItem('isLoggedIn', 'false');
                             localStorage.setItem('userData', JSON.stringify({name: '', email: ''}));
                             navigate('/');
                         }}>
                        Đăng xuất
                    </div>
                </div>
                <div className="w-full md:w-8/12 xl:w-9/12">


                    <div className="mx-8 font-BeVietnamRegular space-y-5 my-8">
                        <div className="flex flex-row">
                            <input type="text" placeholder="Email"
                                   className="border-1 border-[#CCCCCC] border-r-0 text-sm h-10 w-full rounded-l-md pl-3"/>
                            <div className="h-10 w-25 text-white flex items-center text-sm justify-center rounded-r-md bg-Ananas">
                                Gửi mã
                            </div>
                        </div>
                        <input type="text" placeholder="Mã xác nhận"
                               className="border-1 border-[#CCCCCC] text-sm h-10 w-full rounded-md pl-3"/>
                        <input type="text" placeholder="Mật khẩu mới"
                               className="border-1 border-[#CCCCCC] text-sm h-10 w-full rounded-md pl-3"/>
                    </div>

                    <div className="flex flex-row items-center justify-center">
                        <Button label="Lưu" onClick={()=>{}} />
                    </div>
                </div>
            </div>

            <div className="flex-1"></div>
            <Footer />
        </div>
    )
}

export default SettingsPayment;
