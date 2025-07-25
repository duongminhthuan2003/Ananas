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
import { Search01Icon, ShoppingBag03Icon, FavouriteIcon } from "@hugeicons/core-free-icons";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

import avatar from "../src/assets/account/Sequoia-Sunrise.webp"
import {useNavigate} from "react-router-dom";
import Button from "./components/Button.tsx";

function App() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

                <div className="hidden md:flex absolute flex-row gap-8 text-sm font-BeVietnamRegular left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2">
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
                    <div>

                    </div>
                    :
                    <div className="md:flex flex-row hidden items-center m-0">
                        <Link to="/signup" className="text-sm font-BeVietnamRegular">
                            Đăng ký
                        </Link>
                        <Button label="Đăng nhập" customClasses="text-sm px-3 py-2 ml-3" onClick={() => navigate("/login")}/>
                    </div>
                }
                <MenuIcon
                    isOpen={isMobileMenuOpen}
                    onClick={toggleMobileMenu}
                />
            </nav>

            <div
                className={`fixed top-0 left-0 w-full h-[calc(100vh-3.5rem)] navbar shadow-lg z-40 md:hidden transition-transform duration-600 ease-in-out ${
                    isMobileMenuOpen ? 'transform translate-y-14' : 'transform -translate-y-full shadow-none'
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

                                    <div className="bg-white shadow-xl font-BeVietnamRegular rounded-xl w-1/2 flex flex-row justify-center py-5 border-2 border-gray-300 gap-3">
                                        <HugeiconsIcon icon={FavouriteIcon} />
                                        <p>Yêu thích</p>
                                    </div>
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

            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-opacity-0 z-10 md:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                ></div>
            )}

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
                    </Routes>
                </AnimatePresence>
            </div>
        </div>
    )
}

export default App
