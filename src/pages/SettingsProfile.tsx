import {HugeiconsIcon} from "@hugeicons/react";
import {ArrowRight01Icon} from "@hugeicons/core-free-icons";
import avatar from "../assets/account/Sequoia-Sunrise.webp"
import Button from "../components/Button.tsx";
import Footer from "../components/Footer.tsx";
import {AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {Link, useNavigate} from "react-router-dom";

export function ContextMenu() {
    const navigate = useNavigate();

    return (
        <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col navbar mx-8 rounded-xl px-3 pt-5 pb-3 gap-5 md:hidden font-BeVietnamRegular items-center">
            <div className="text-Ananas">
                Hồ sơ của tôi
            </div>
            <div
            onClick={()=>{navigate("/settings/orders")}}>
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

function SettingsProfile() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    return(
        <div className="flex flex-col h-screen">
            <AnimatePresence>
                {isOpen && (
                    <div className="absolute z-10 top-40 w-full">
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
                    <p className="font-BeVietnamRegular text-sm">Hồ sơ của tôi</p>
                </div>
            </div>


            <div className="mx-8 flex flex-col md:flex-row md:mx-auto md:mt-24 md:w-10/12 lg:w-8/12">
                <div className="hidden md:flex flex-col md:w-5/12 xl:w-3/12">
                    <p className="text-xl font-BeVietnamBold">THÔNG TIN CÁ NHÂN</p>
                    <div className="flex flex-col gap-8 font-BeVietnamRegular text-sm md:text-base mt-10 ml-3">
                        <Link
                            to="/settings/profile"
                            className="bg-Ananas w-fit py-2 px-4 text-white rounded-lg">Hồ sơ của tôi</Link>
                        <Link
                            to="/settings/orders"
                        >Đơn hàng của tôi</Link>
                        <Link
                            to="/settings/payment"
                        >Phương thức thanh toán</Link>
                        <Link
                            to="/settings/password"
                        >Đổi mật khẩu</Link>
                    </div>

                    <div className="bg-red-500 text-white flex font-BeVietnamRegular w-fit py-2 px-4 ml-3 mt-24 rounded-lg"
                         onClick={() => {
                             localStorage.setItem('isLoggedIn', 'false');
                             localStorage.setItem('userData', JSON.stringify({name: '', email: ''}));
                             navigate('/');
                         }}>
                        Đăng xuất
                    </div>
                </div>

                <div className="flex flex-col md:flex-row w-full md:w-8/12 md:mt-16 md:mx-auto">
                    <div className="flex flex-col mx-0 md:ml-4 md:mr-8 xl:mr-10 xl:ml-0 xl:flex-row xl:gap-5 justify-center items-center my-8">
                        <img src={avatar} alt="avatar" className="w-36 md:w-24 lg:w-28 aspect-square object-cover rounded-full" />
                        <div className="flex flex-col items-center justify-center lg:justify-start">
                            <p className="font-BeVietnamBold text-lg md:text-base mt-3">HỌ VÀ TÊN</p>
                            <p className="font-BeVietnamRegular text-gray-400">Username</p>
                        </div>
                    </div>

                    <div className="flex md:flex-1 flex-col md:mx-0 justify-center md:w-full items-center text-base font-BeVietnamRegular gap-4 my-2">
                        <input type={"text"} className="w-full border-1 rounded-lg p-3 border-gray-400 focus:outline-Ananas" defaultValue="04.05.2001" placeholder="Ngày sinh"/>
                        <input type={"text"} className="w-full border-1 rounded-lg p-3 border-gray-400 focus:outline-Ananas" defaultValue="ananas.default@gmail.com" placeholder="Email"/>
                        <input type={"text"} className="w-full border-1 rounded-lg p-3 border-gray-400 focus:outline-Ananas" defaultValue="0987131289" placeholder="Số điện thoại"/>
                        <input type={"text"} className="w-full border-1 rounded-lg p-3 border-gray-400 focus:outline-Ananas" defaultValue="64, đường Lê Duẩn, phường Sài Gòn, thành phố Hồ Chí Minh" placeholder="Địa chỉ"/>

                        <div className="mt-4 flex flex-row justify-center gap-4">
                            <div className="px-6 py-2 font-BeVietnamRegular items-center flex border-1 border-gray-400 rounded-lg" >Hủy</div>
                            <Button label="Lưu" onClick={()=>{}} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-1"></div>
            <Footer />
        </div>
    )
}

export default SettingsProfile;
