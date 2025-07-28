import ananaslogo from "../assets/Logo_Ananas.webp"
import ananaslogoblack from "../assets/logo-black.webp"
import fbicon from "../assets/index/fb_icon.webp"
import igicon from "../assets/index/ig_icon.webp"
import yticon from "../assets/index/yt_icon.webp"
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons";

const Footer = () => {
    return (
        <footer className="flex flex-col justify-end w-full mt-12 font-BeVietnamRegular">
            <div className="flex w-full bg-white h-auto mb-0 bottom-0">
                <div className="my-auto top-0 bottom-0 w-full">
                    <div className="flex flex-row mx-8 md:w-11/12 lg:w-9/12 xl:w-8/12 md:mx-auto align-middle">
                        <img src={ananaslogo} className="h-7 flex my-auto top-0 bottom-0 mr-2" alt="logo"/>
                        <img src={ananaslogoblack} className="flex h-10 w-24 object-cover my-auto top-0 bottom-0"
                             alt="logo"/>
                    </div>

                    <div className="flex md:flex-row flex-col mx-8 mt-8 md:w-11/12 lg:w-9/12 xl:w-8/12 md:mx-auto">
                        <div className="flex flex-col md:flex-row w-full gap-3 md:mx-auto">
                            <div className="md:w-fit w-full space-y-3">
                                <p><strong>SẢN PHẨM</strong></p>
                                <p className="text-sm text-[#888888]">Giày nam</p>
                                <p className="text-sm text-[#888888]">Giày nữ</p>
                                <p className="text-sm text-[#888888]">Thời trang & phụ kiện</p>
                                <p className="text-sm text-[#888888]">Sale-off</p>
                            </div>
                            <div className="flex-1"></div>
                            <div className="md:w-fit w-full space-y-3">
                                <p><strong>VỀ ANANAS</strong></p>
                                <p className="text-sm text-[#888888]">Tuyển dụng</p>
                                <p className="text-sm text-[#888888]">Giới thiệu</p>
                            </div>
                            <div className="flex-1"></div>
                            <div className="md:w-fit w-full space-y-3">
                                <p><strong>HỖ TRỢ</strong></p>
                                <p className="text-sm text-[#888888]">FAQs</p>
                                <p className="text-sm text-[#888888]">Bảo mật thông tin</p>
                                <p className="text-sm text-[#888888]">Chính sách chung</p>
                                <p className="text-sm text-[#888888]">Tra cứu đơn hàng</p>
                            </div>
                            <div className="flex-1"></div>
                            <div className="w-full md:w-1/3 mt-8 md:mt-0">
                                <p><strong>LIÊN HỆ</strong></p>
                                <div className="flex flex-row">
                                    <input type="text" placeholder="Email"
                                           className="border-2 border-[#CCCCCC] border-r-0 text-sm h-10 w-full rounded-l-md mt-2 pl-3"/>
                                    <div className="flex justify-center items-center h-10 w-10 mt-2 rounded-r-md aspect-square bg-Ananas">
                                        <HugeiconsIcon icon={ArrowRight02Icon} color="#FFFFFF" size={20}/>
                                    </div>
                                </div>
                                <div className="flex flex-row space-x-4 mt-3">
                                    <img src={fbicon} alt="Facebook Icon"
                                         className="h-5 w-5 opacity-55"/>
                                    <img src={yticon} alt="Youtube Icon" className="h-5 w-5 opacity-55"/>
                                    <img src={igicon} alt="Instagram Icon"
                                         className="h-5 w-5 opacity-55"/>
                                </div>

                                <div className="flex space-x-2 flex-row mt-7">
                                    <p><strong>HỆ THỐNG CỬA HÀNG</strong></p>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14"
                                         fill="none" className="flex my-auto top-0 bottom-0">
                                        <path
                                            d="M0.467209 12.0185C0.172957 12.3101 0.172957 12.7827 0.467209 13.0742C0.761461 13.3658 1.23854 13.3658 1.53279 13.0742L0.467209 12.0185ZM12.7535 1.64824C12.7535 1.23596 12.4161 0.901737 12 0.901736L5.21868 0.901736C4.80254 0.901736 4.4652 1.23596 4.4652 1.64824C4.4652 2.06052 4.80254 2.39474 5.21868 2.39474H11.2465V8.36677C11.2465 8.77905 11.5839 9.11328 12 9.11328C12.4161 9.11328 12.7535 8.77905 12.7535 8.36677L12.7535 1.64824ZM1.53279 13.0742L12.5328 2.1761L11.4672 1.12038L0.467209 12.0185L1.53279 13.0742Z"
                                            fill="#F15E2C"/>
                                    </svg>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <p className="text-[11px] italic text-gray-400 mx-8">*Đây không phải là trang web chính thức của Ananas</p>

            <div className="h-10 md:mt-5 mt-10 w-full bg-[#F15E2C]"></div>
        </footer>
    );
};

export default Footer;
