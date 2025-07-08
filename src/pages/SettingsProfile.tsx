import {HugeiconsIcon} from "@hugeicons/react";
import {ArrowRight01Icon} from "@hugeicons/core-free-icons";
import avatar from "../assets/account/Sequoia-Sunrise.png"
import Button from "../components/Button.tsx";
import Footer from "../components/Footer.tsx";
import {AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {useNavigate} from "react-router-dom";

export function ContextMenu() {
    const navigate = useNavigate();

    return (
        <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col navbar mx-8 rounded-xl px-3 pt-5 pb-3 gap-5 font-BeVietnamRegular items-center">
            <div>
                Hồ sơ của tôi
            </div>
            <div>
                [!]Đơn hàng của tôi
            </div>
            <div>
                [!]Phương thức thanh toán
            </div>
            <div>
                [!]Đổi mật khẩu
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

            <div className="flex flex-row mx-8 gap-2 mt-8 items-center" onClick={() => setIsOpen(!isOpen)}>
                <motion.div animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.2 }}>
                    <HugeiconsIcon icon={ArrowRight01Icon} />
                </motion.div>

                <div>
                    <p className="font-BeVietnamBold text-xl">THÔNG TIN CÁ NHÂN</p>
                    <p className="font-BeVietnamRegular text-sm">Hồ sơ của tôi</p>
                </div>
            </div>

            <div className="flex flex-col mx-8 justify-center items-center my-8">
                <img src={avatar} alt="avatar" className="w-36 aspect-square object-cover rounded-full" />
                <p className="font-BeVietnamBold text-lg mt-3">HỌ VÀ TÊN</p>
                <p className="font-BeVietnamRegular text-gray-400">Username</p>
            </div>

            <div className="flex flex-col mx-8 justify-center items-center font-BeVietnamRegular gap-4 my-2">
                <input type={"text"} className="w-full border-1 rounded-lg p-3 border-gray-400 focus:outline-Ananas" defaultValue="04.05.2001" placeholder="Ngày sinh"/>
                <input type={"text"} className="w-full border-1 rounded-lg p-3 border-gray-400 focus:outline-Ananas" defaultValue="ananas.default@gmail.com" placeholder="Email"/>
                <input type={"text"} className="w-full border-1 rounded-lg p-3 border-gray-400 focus:outline-Ananas" defaultValue="0987131289" placeholder="Số điện thoại"/>
                <input type={"text"} className="w-full border-1 rounded-lg p-3 border-gray-400 focus:outline-Ananas" defaultValue="64, đường Lê Duẩn, phường Sài Gòn, thành phố Hồ Chí Minh" placeholder="Địa chỉ"/>
            </div>

            <div className="mt-4 flex flex-row justify-center gap-4">
                <div className="px-6 py-2 font-BeVietnamRegular border-1 border-gray-400 rounded-lg" >Hủy</div>
                <Button label="Lưu" onClick={()=>{}} />
            </div>

            <Footer />
        </div>
    )
}

export default SettingsProfile;
