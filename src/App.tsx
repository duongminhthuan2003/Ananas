import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Product from './pages/Product.tsx';
import ProductDetail from './pages/ProductDetail.tsx';
import News from './pages/News.tsx';
import SaleOff from "./pages/SaleOff.tsx";
import Login from "./pages/Login.tsx";
import Intro from './pages/Introduction.tsx'
import SettingsProfile from "./pages/SettingsProfile.tsx";
import SettingsOrder from "./pages/SettingsOrder.tsx";
import SettingsPayment from "./pages/SettingsPayment.tsx";
import SettingsPassword from "./pages/SettingsPassword.tsx";
import Cart from "./pages/Cart.tsx"
import Payment from "./pages/Payment.tsx"
import Confirmation from "./pages/Confirmation.tsx";
import NewsDetail from "./pages/NewsDetail.tsx";
import SignUp from "./pages/SignUp.tsx";
import logo from './assets/logo-black.webp'
import {useState, useEffect} from "react";
import MenuIcon from "./assets/svgicons/MenuIcon.tsx"
import { HugeiconsIcon } from "@hugeicons/react";
import {Search01Icon, ShoppingBag03Icon, FavouriteIcon, Cancel01Icon, ArrowRight01Icon} from "@hugeicons/core-free-icons";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";

import avatar from "../src/assets/account/Sequoia-Sunrise.webp"
import {useNavigate} from "react-router-dom";
import Button from "./components/Button.tsx";
import NotFound from "./pages/NotFound.tsx";
import Favourite from "./pages/Favourite.tsx";

export function FindOverlay() {
    return(
        <motion.div
            initial={{opacity: 0, scale: 0.95}}
            animate={{opacity: 1, scale: 1}}
            exit={{opacity: 0, scale: 0.95}}
            transition={{duration: 0.2}}
            className="w-11/12 mx-auto flex"
        >
            <div className="flex flex-row font-BeVietnamRegular gap-3 items-center p-4 bg-white w-full h-14 border-l-2 border-t-2 border-b-2 border-[#CCCCCC] rounded-l-xl shadow-lg">
                <HugeiconsIcon icon={Search01Icon} size={24} color="black" strokeWidth={1.2} />
                <input
                    type="text"
                    className="text-gray-800 font-BeVietnamRegular focus:outline-none flex-1"
                    placeholder="Tìm kiếm..."
                    autoFocus
                />
            </div>
            <div className="p-4 bg-Ananas rounded-r-xl">
                <HugeiconsIcon icon={ArrowRight01Icon} color={"#FFFFFF"}/>
            </div>
        </motion.div>
    )
}
function App() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isFindOverlayOpen, setIsFindOverlayOpen] = useState(false);
    const location = useLocation();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const navigate = useNavigate();

    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';


    useEffect(()=> {
        if (isMobileMenuOpen) {
            document.body.classList.add("overflow-hidden");
        }
        else {
            document.body.classList.remove("overflow-hidden");
        }

        return () => {
            document.body.classList.remove("overflow-hidden");
        }
    }, [isMobileMenuOpen]);

    return (
        <div>
            <nav className={`fixed h-14 flex flex-row w-full z-50 navbar px-3
            ${isMobileMenuOpen ? '' : 'shadow-none border-none'}    
            `}>
                <Link to="/" className="m-0"><img src={logo} alt='Logo' className="h-14"
                onClick={() => setIsMobileMenuOpen(false)}
                /></Link>
                <div className="flex-1 m-0"/>

                <div className="hidden md:flex absolute flex-row gap-8 lg:gap-18 text-[13px] lg:text-sm font-BeVietnamRegular left-1/2 transform lg:-translate-x-1/2 md:-translate-x-[60%] md:-translate-y-1/2 top-1/2">
                    <Link
                        to="/product"
                        className=" hover:text-[#F15E2C] transition-colors"
                    >
                        SẢN PHẨM
                    </Link>
                    <Link
                        to="/saleoff"
                        className=" hover:text-[#F15E2C] transition-colors"
                    >
                        SALEOFF
                    </Link>
                    <Link
                        to="/news"
                        className=" hover:text-[#F15E2C] transition-colors"
                    >
                        TIN TỨC
                    </Link>
                    <Link
                        to="/introduction"
                        className=" hover:text-[#F15E2C] transition-colors"
                    >
                        GIỚI THIỆU
                    </Link>
                </div>

                {isLoggedIn ?
                    <div className="md:flex flex-row hidden items-center m-0 md:gap-4 lg:gap-6">
                        <HugeiconsIcon icon={Search01Icon} size={22} onClick={() => setIsFindOverlayOpen(!isFindOverlayOpen)} />
                        <HugeiconsIcon icon={FavouriteIcon} size={22} onClick={()=> {navigate('/favourite')}} />
                        <HugeiconsIcon icon={ShoppingBag03Icon} size={22} onClick={()=> {navigate('/cart')}}/>
                        <div>
                            <img src={avatar} alt={"Avatar"} className="h-10 w-10 rounded-full object-cover"
                            onClick={() => {navigate('/settings/profile')}} />
                        </div>
                    </div>
                    :
                    <div className="md:flex flex-row hidden items-center m-0 gap-3 lg:gap-6">
                        <HugeiconsIcon icon={Search01Icon} size={22} />
                        <Link to="/signup" className="text-sm font-BeVietnamRegular">
                            Đăng ký
                        </Link>
                        <Button label="Đăng nhập" customClasses="text-sm md:px-2 md:py-1.5 lg:px-3 lg:py-2" onClick={() => navigate("/login")}/>
                    </div>
                }
                <MenuIcon
                    isOpen={isMobileMenuOpen}
                    onClick={toggleMobileMenu}
                />
            </nav>
            <AnimatePresence>
                {isFindOverlayOpen && (
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{duration: 0.2}}
                        className="fixed inset-0 flex flex-col items-center justify-start pt-24 navbar z-40 gap-10"
                    >
                        <FindOverlay />

                        <div className="flex flex-row gap-2 justify-center items-center cursor-pointer" onClick={() => setIsFindOverlayOpen(false)}>
                            <HugeiconsIcon icon={Cancel01Icon} size={20} />
                            <p className="font-BeVietnamRegular">Đóng</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>


            <div
                className={`fixed -top-30 left-0 w-full h-[calc(100vh-3.5rem)] navbar shadow-lg z-40 md:hidden transition-transform duration-600 ease-in-out ${
                    isMobileMenuOpen ? 'transform translate-y-44' : 'transform -translate-y-full shadow-none'
                }`}>
                <div className="flex flex-col h-full p-8 text-md gap-4">
                    <Link
                        to="/product"
                        className="font-BeVietnamBold text-gray-800 hover:text-[#F15E2C] transition-colors my-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        SẢN PHẨM
                    </Link>
                    <Link
                        to="/saleoff"
                        className="font-BeVietnamBold text-gray-800 hover:text-[#F15E2C] transition-colors my-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        SALE OFF
                    </Link>
                    <Link
                        to="/news"
                        className="font-BeVietnamBold text-gray-800 hover:text-[#F15E2C] transition-colors my-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        TIN TỨC
                    </Link>
                    <Link
                        to="/introduction"
                        className="font-BeVietnamBold text-gray-800 hover:text-[#F15E2C] transition-colors my-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        GIỚI THIỆU
                    </Link>

                    {
                        isLoggedIn ?
                            <div className="flex flex-col gap-3">
                                <Link
                                    className="bg-white shadow-xl rounded-xl p-5 flex flex-row border-2 border-gray-300 gap-4"
                                    to={'/settings/profile'}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <div>
                                        <img src={avatar} alt={"Avatar"} className="h-14 w-14 rounded-full object-cover"/>
                                    </div>

                                    <div className="flex flex-col justify-center gap-0.5">
                                        <p className="font-BeVietnamBold">HỌ VÀ TÊN</p>
                                        <p className="font-BeVietnamRegular text-gray-500 text-sm">Chỉnh sửa hồ sơ</p>
                                    </div>
                                </Link>

                                <div className="flex flex-row gap-3">
                                    <Link
                                        onClick={() => {
                                            setIsMobileMenuOpen(false)
                                            navigate("/cart")
                                        }}
                                        to={"/cart"}
                                        className="bg-white shadow-xl font-BeVietnamRegular rounded-xl w-1/2 flex flex-row justify-center py-5 border-2 border-gray-300 gap-3">
                                        <HugeiconsIcon icon={ShoppingBag03Icon} />
                                        <p>Giỏ hàng</p>
                                    </Link>

                                    <Link
                                        to={"/favourite"}
                                        className="bg-white shadow-xl font-BeVietnamRegular rounded-xl w-1/2 flex flex-row justify-center py-5 border-2 border-gray-300 gap-3">
                                        <HugeiconsIcon icon={FavouriteIcon} />
                                        <p>Yêu thích</p>
                                    </Link>
                                </div>
                            </div>
                            :
                                <div>
                                    <div className="flex flex-row gap-5">

                                        <Link
                                            to="/signup"
                                            className="w-1/2 text-center border-2 shadow-lg border-[#CCCCCC] font-BeVietnamRegular text-gray-800 bg-white py-3 rounded-xl my-2"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            Đăng ký
                                        </Link>
                                        <Link
                                            to="/login"
                                            className="flex w-1/2 justify-center items-center font-BeVietnamRegular text-white py-3 bg-Ananas rounded-xl transition-colors my-2"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            Đăng nhập
                                        </Link>
                                    </div>
                                </div>
                    }


                    <div className="flex-1"></div>
                    <div className="flex mb-18 flex-row font-BeVietnamRegular gap-3 items-center p-4 bg-white w-full h-14 border-2 border-[#CCCCCC] rounded-xl">
                        <HugeiconsIcon icon={Search01Icon} size={24} color="black" strokeWidth={1.2} />
                        <input type="text" className="text-gray-800 font-BeVietnamRegular focus:outline-none" placeholder="Tìm kiếm..."/>
                    </div>
                </div>
            </div>

            <div>
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<Home />} />
                        <Route path="/product" element={<Product />} />
                        <Route path="/news" element={<News />} />
                        <Route path="/product/:productId" element={<ProductDetail />} />
                        <Route path="/saleoff" element={<SaleOff />} />
                        <Route path="/introduction" element={<Intro />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/settings/profile" element={<SettingsProfile />} />
                        <Route path="/settings/orders" element={<SettingsOrder />} />
                        <Route path="/settings/payment" element={<SettingsPayment />} />
                        <Route path="/settings/password" element={<SettingsPassword />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/payment" element={<Payment />} />
                        <Route path="/confirmation" element={<Confirmation />} />
                        <Route path="/newsdetail" element={<NewsDetail />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/favourite" element={<Favourite />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </AnimatePresence>
            </div>
        </div>
    )
}

export default App
