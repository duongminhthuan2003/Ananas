import {HugeiconsIcon} from "@hugeicons/react";
import {ArrowRight01Icon, MoreHorizontalIcon} from "@hugeicons/core-free-icons";
import Footer from "../components/Footer.tsx";
import {AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import visa from "../assets/account/Visa.webp"
import mc from "../assets/account/MC.webp"
import techcombank from "../assets/account/Techcombank.webp"

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

            <div className="flex flex-col md:flex-row md:mx-auto md:mt-24 md:w-10/12 lg:w-8/12">
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
                            className="bg-Ananas w-fit py-2 px-4 text-white rounded-lg"
                        >Phương thức thanh toán</Link>
                        <Link
                            to="/settings/password"
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
                    <div className="mx-8 my-8 space-y-4">
                        <div className="flex flex-row">
                            <p className="text-sm font-BeVietnamBold">Thẻ tín dụng & thẻ ghi nợ</p>
                            <div className="flex-1"></div>
                            <p className="bg-Ananas font-BeVietnamRegular px-2 py-0.5 text-sm text-white rounded"> Thêm</p>
                        </div>
                        <div className="flex flex-row font-BeVietnamRegular text-sm items-center">
                            <div className="flex flex-row items-center gap-3">
                                <img src={visa} alt="Visa" className="w-14 p-2 border-1 rounded border-gray-400"/>
                                <p>VISA</p>
                                <p className="bg-[#35A16F] text-white rounded px-2 py-0.5 text-[13px]">Mặc định</p>
                            </div>
                            <div className="flex-1"></div>
                            <div className="flex flex-row items-center font-BeVietnamRegular gap-2  lg:gap-4">
                                <p>**** 7091</p>
                                <HugeiconsIcon icon={MoreHorizontalIcon} className="md:hidden"/>
                                <p className="text-[#35A16F] opacity-30 hidden md:block">Mặc định</p>
                                <p className="text-red-500 hidden md:block">Xóa</p>
                            </div>
                        </div>

                        <div className="flex flex-row text-sm">
                            <div className="flex flex-row gap-3 font-BeVietnamRegular items-center">
                                <img src={mc} alt="Visa" className="w-14 p-2 border-1 rounded border-gray-400"/>
                                <p>Mastercard</p>
                            </div>
                            <div className="flex-1"></div>
                            <div className="flex flex-row font-BeVietnamRegular items-center gap-2 lg:gap-4">
                                <p>**** 1574</p>
                                <HugeiconsIcon icon={MoreHorizontalIcon} className="md:hidden"/>
                                <p className="text-[#35A16F] hidden md:block">Mặc định</p>
                                <p className="text-red-500 hidden md:block">Xóa</p>
                            </div>
                        </div>
                    </div>

                    <div className="mx-8 my-8 space-y-4 text-sm">
                        <div className="flex flex-row">
                            <p className="text-sm font-BeVietnamBold">Liên kết ngân hàng</p>
                            <div className="flex-1"></div>
                            <p className="bg-Ananas font-BeVietnamRegular px-2 py-0.5 text-sm text-white rounded"> Thêm</p>
                        </div>                <div className="flex flex-row">
                        <div className="flex flex-row gap-3 font-BeVietnamRegular items-center">
                            <img src={techcombank} alt="Visa" className="w-14 p-2 border-1 rounded border-gray-400"/>
                            <div>
                                <p>Techcombank</p>
                            </div>
                        </div>
                        <div className="flex-1"></div>
                        <div className="flex flex-row font-BeVietnamRegular items-center gap-2 lg:gap-4">
                            <p>**** 6184</p>
                            <HugeiconsIcon icon={MoreHorizontalIcon} className="md:hidden"/>
                            <p className="text-[#35A16F] hidden md:block">Mặc định</p>
                            <p className="text-red-500 hidden md:block">Xóa</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <div className="flex-1"></div>
            <Footer />
        </div>
    )
}

export default SettingsPayment;
