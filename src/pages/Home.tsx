import urbaslove24 from '../assets/index/IMG_7284.webp'
import urbassc from '../assets/index/urbas_sc.webp'
import urbasdora from '../assets/index/ananas_dora.webp'
import basashookloppne from '../assets/index/basashookloopne1.webp'
import track6iseebanner from '../assets/index/isee.webp'
import featuredbackground from '../assets/index/ftr_back.webp'
import track6bluewash from '../assets/index/Pro_A6T015_1.webp'
import track6triplewhite from '../assets/index/pro_track6_A6T002_1.webp'
import track6unamedno1 from '../assets/index/pro_A6T011_1.webp'
import track6suedewinterize from '../assets/index/pro_A6T007_1.webp'
import track6isee from '../assets/index/Pro_A6T012_1.webp'
import track6og from '../assets/index/pro_track6og.webp'
import logowhite from '../assets/logo-white.webp'
import vintasvivu from '../assets/index/vintas_vivu1.webp'
import vintasvivu2 from '../assets/index/vintas_vivu2.webp'
import basasraw1 from '../assets/index/raw1.webp'
import basasraw2 from '../assets/index/raw2.webp'
import basasraw3 from '../assets/index/raw3.webp'
import saleoff from '../assets/index/saleoff.webp'
import Button from "../components/Button.tsx";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import {useEffect, useState} from "react";

function Home() {
    const navigate = useNavigate();

    function useWindowSize() {
        const [size, setSize] = useState({
            width: window.innerWidth,
            height: window.innerHeight
        });

        useEffect(() => {
            const handleResize = () => {
                setSize({
                    width: window.innerWidth,
                    height: window.innerHeight
                });
            };

            window.addEventListener("resize", handleResize);

            // Gọi ngay để đảm bảo cập nhật nếu người dùng đã resize
            handleResize();

            return () => window.removeEventListener("resize", handleResize);
        }, []);

        return size;
    }

    const { height } = useWindowSize();

    return (
        <div>
            <div>
                <div className={`w-full md:h-screen flex justify-center relative overflow-hidden`}  style={{height: `${
                        (height<500) ? "100vh" : "80vh"
                    }`}}>
                    <img
                        src={urbaslove24}
                        className="absolute w-full h-full object-cover object-center transform scale-[1.5] md:scale-[1.25] top-0 left-0"
                        alt="urbanlove24"
                    />
                    <p className="absolute z-10 font-BeVietnamRegular text-Ananas top-[18vh] md:top-44 xl:top-42 text-sm">Mới ra mắt</p>
                    <p className={`absolute z-10 font-Bayon text-[56px] md:text-[84px] xl:text-[100px] -my-4 top-[21vh] md:top-48`}
                       style={{top: `${
                               (height<500) ? "25vh" : ""
                           }`, textShadow: `${
                               (height<500) ? "2px 2px 15px white" : ""
                           }`}}>URBAS LOVE+ 24</p>
                    <p className="absolute font-BeVietnamRegular top-[60vh] md:top-[75vh] xl:top-[80vh]" style={{top: `${
                            (height<500) ? "76vh" : ""
                        }`, textShadow: `${
                            (height<500) ? "1px 0px 5px white, 0 0 5px white" : ""
                        }`}}>Giao hàng từ 01.11.2024</p>
                    <div className="flex absolute top-[60vh] md:top-[75vh] xl:top-[79vh] mt-10 w-full justify-center"
                         style={{top: `${
                            (height<500) ? "75vh" : ""
                        }`
                    }}>
                        <Button label="Đặt trước" onClick={() => {
                            setTimeout(() => navigate('/product/ALP2402'), 500); // delay 300ms
                        }} />
                    </div>
                </div>
            </div>

            <div className="items-center justify-center relative w-10/12 md:w-10/12 xl:w-9/12 mt-7 mx-auto">
                <p className="font-BeVietnamBold my-5 text-lg">Nổi bật</p>
                <div className="flex flex-col md:flex-row w-full gap-6">
                    <div className="w-full h-64 md:h-[500px] relative">
                        <div className="absolute bottom-0 z-20 p-5 flex flex-col gap-2">
                            <p className="text-white font-BeVietnamRegular">Your daily drive</p>
                            <p className="text-white font-BeVietnamBold">URBAS SC - CORN SILK</p>
                            <div className="w-40 text-sm">
                                <Button label="Mua ngay" onClick={() => {
                                    setTimeout(() => navigate('/product/AV00186'), 500); // delay 300ms
                                }} />
                            </div>
                        </div>
                        <img src={featuredbackground} alt="featured background" className="absolute w-full h-64 md:h-[500px]"/>
                        <img src={urbassc} alt="urbassc" className=" w-full h-full object-cover"/>
                    </div>

                    <div className="w-full h-64 md:h-[500px] relative">
                        <div className="absolute bottom-0 z-20 p-5 flex flex-col gap-2">
                            <p className="text-white font-BeVietnamRegular">Chong chóng tre nè Nobita!</p>
                            <p className="text-white font-BeVietnamBold">ANANAS x DORAEMON</p>
                            <div className="w-40 text-sm">
                                <Button label="Mua ngay" onClick={() => {
                                    setTimeout(() => navigate('/product/AVDORA0'), 500);
                                }}/>
                            </div>
                        </div>
                        <img src={featuredbackground} alt="featured background" className="absolute w-full h-64 md:h-[500px]"/>
                        <img src={urbasdora} alt="urbasdora" className="w-full h-full object-cover"/>
                    </div>

                    <div className="w-full h-64 md:h-[500px] relative">
                        <div className="absolute bottom-0 z-20 p-5 flex flex-col gap-2">
                            <p className="text-white font-BeVietnamRegular">I.S.E.E that I'm icy</p>
                            <p className="text-white font-BeVietnamBold">TRACK 6 I.S.E.E</p>
                            <div className="w-40 text-sm">
                                <Button label="Mua ngay" onClick={() => {
                                    setTimeout(() => navigate('/product/T600005'), 500);
                                }}/>
                            </div>
                        </div>
                        <img src={featuredbackground} alt="featured background" className="absolute w-full h-64 md:h-[500px]"/>
                        <img src={track6iseebanner} alt="urbasdora" className="w-full h-full object-cover"/>
                    </div>

                    <div className="w-full h-64 md:h-[500px] relative hidden 2xl:flex">
                        <div className="absolute bottom-0 z-20 p-5 flex flex-col gap-2">
                            <p className="text-white font-BeVietnamRegular">Tiện lợi nhưng vẫn chỉn chu</p>
                            <p className="text-white font-BeVietnamBold">BASAS HOOK N'LOOP NE</p>
                            <div className="w-40 text-sm">
                                <Button label="Mua ngay" onClick={() => {
                                    setTimeout(() => navigate('/product/T600005'), 500);
                                }}/>
                            </div>
                        </div>
                        <img src={featuredbackground} alt="featured background" className="absolute w-full h-64 md:h-[500px]"/>
                        <img src={basashookloppne} alt="urbasdora" className="w-full h-full object-cover"/>
                    </div>
                </div>
            </div>

            <div className="items-center justify-center relative w-10/12 md:w-10/12 xl:w-9/12 mt-7 mx-auto">
                <p className="font-BeVietnamRegular my-5 text-md">Dòng sản phẩm <span className="font-BeVietnamBold">Track 6</span>
                </p>

                <div className="flex flex-row overflow-x-scroll mt-6 -mb-6 h-auto space-x-5 track6-list pb-6">
                    <div className="flex-none relative h-auto">
                        <img src={track6og} alt="Track 6 Bluewash" className="h-[240px] lg:h-[300px] aspect-square"/>
                        <div
                            className="absolute top-0 left-0 w-[240px] h-[240px] lg:h-[300px] lg:w-[300px] bg-black/40 flex justify-center items-center">
                            <div className="text-white font-BeVietnamBold text-lg">HẾT HÀNG</div>
                        </div>
                        <p className="font-BeVietnamBold text-sm mt-2">Track 6 OG</p>
                        <p className="font-BeVietnamRegular text-sm mt-2">990.000 VNĐ</p>
                        <div className="mt-2 mb-4 text-sm"><Button label="Mua ngay" onClick={() => {
                            setTimeout(() => navigate('/product/T600001'), 500);
                        }}/></div>
                    </div>

                    <div className="flex-none h-auto">
                        <img src={track6bluewash} alt="Track 6 Bluewash" className="h-[240px] lg:h-[300px]  aspect-square"/>
                        <p className="font-BeVietnamBold text-[14px] mt-2">Track 6 2.Blues - Bluewash</p>
                        <p className="font-BeVietnamRegular text-sm mt-2">1.290.000 VNĐ</p>
                        <div className="mt-2 mb-4 text-sm"><Button label="Mua ngay" onClick={() => {
                            setTimeout(() => navigate('/product/T600002'), 500);
                        }}/></div>
                    </div>

                    <div className="flex-none relative h-auto">
                        <img src={track6triplewhite} alt="Track 6 Bluewash" className="h-[240px] lg:h-[300px]  aspect-square"/>

                        <p className="font-BeVietnamBold text-sm mt-2">Track 6 Triple White</p>
                        <p className="font-BeVietnamRegular text-sm mt-2">990.000 VNĐ</p>
                        <div className="mt-2 mb-4 text-sm"><Button label="Mua ngay" onClick={() => {
                            setTimeout(() => navigate('/product/T600003'), 500);
                        }}/></div>
                    </div>

                    <div className="flex-none relative h-auto">
                        <img src={track6unamedno1} alt="Track 6 Bluewash" className="h-[240px] lg:h-[300px] aspect-square"/>
                        <p className="font-BeVietnamBold text-sm mt-2">Track 6 Unnamed No.1 C in Minor</p>
                        <p className="font-BeVietnamRegular text-sm mt-2">1.090.000 VNĐ</p>
                        <div
                            className="absolute top-0 left-0 bg-Ananas px-4 py-2 text-sm text-white font-BeVietnamBold">
                            Limited Edition
                        </div>
                        <div className="mt-2 mb-4 text-sm"><Button label="Mua ngay" onClick={() => {
                            setTimeout(() => navigate('/product/T600004'), 500);
                        }}/></div>
                    </div>

                    <div className="flex-none relative h-auto">
                        <img src={track6isee} alt="Track 6 Bluewash" className="h-[240px] lg:h-[300px]  aspect-square"/>
                        <div
                            className="absolute top-0 left-0 z-50 bg-Ananas px-4 py-2 text-sm text-white font-BeVietnamBold">
                            Limited Edition
                        </div>
                        <div
                            className="absolute top-0 left-0 w-[240px] h-[240px] lg:h-[300px] lg:w-[300px] bg-black/40 flex justify-center items-center">
                            <div className="text-white font-BeVietnamBold text-lg">HẾT HÀNG</div>
                        </div>
                        <p className="font-BeVietnamBold text-sm mt-2">Track 6 I.S.E.E</p>
                        <p className="font-BeVietnamRegular text-sm mt-2">1.490.000 VNĐ</p>
                        <div className="mt-2 mb-4 text-sm"><Button label="Mua ngay" onClick={() => {
                            setTimeout(() => navigate('/product/T600005'), 500);
                        }}/></div>
                    </div>

                    <div className="flex-none h-auto">
                        <img src={track6suedewinterize} alt="Track 6 Bluewash" className="h-[240px] lg:h-[300px]  aspect-square"/>
                        <p className="font-BeVietnamBold text-sm mt-2">Track 6 Moonphase - Winterize</p>
                        <p className="font-BeVietnamRegular text-sm mt-2">1.290.000 VNĐ</p>
                        <div className="mt-2 mb-4 text-sm"><Button label="Mua ngay" onClick={() => {
                            setTimeout(() => navigate('/product/T600006'), 500);
                        }}/></div>
                    </div>
                </div>
            </div>

            <div className="flex md:hidden bg-[#BCA984] h-[650px] mt-8 flex-col">
                <div className="flex flex-col items-center h-7/12 justify-center">
                    <img src={logowhite} alt="Logo White" className="h-16"/>
                    <p className="font-Bayon text-white text-7xl -mt-3">VINTAS VIVU</p>
                    <p className="font-BeVietnamRegular text-white mb-3">Giá chỉ từ: 620.000 VNĐ</p>
                    <div><Button label="Mua ngay" onClick={() => {
                        setTimeout(() => navigate('/product/AV00206'), 500);
                    }}/></div>
                </div>
                <div className="flex h-5/12">
                    <img src={vintasvivu} alt="Vintas Vivu" className="h-full w-full object-cover"/>
                    <div className="w-3/12 flex flex-col">
                        <div className="bg-[#646F84] w-full flex-1"></div>
                        <div className="bg-[#9A855C] w-full aspect-square"></div>
                    </div>
                </div>
            </div>

            <div className="hidden md:flex flex-row bg-[#BCA984] md:h-[700px] lg:h-[800px] xl:h-[900px] w-full mt-8">
                <div className="h-full w-5/12">
                    <img src={vintasvivu} className="h-full w-full object-cover"/> {/*Ảnh lớn bên trái*/}
                </div>
                <div className="flex flex-col w-7/12"> {/*Thông tin bên phải*/}
                    <div className="w-full h-7/12">
                        <img src={vintasvivu2} className="h-full w-full object-cover"/> {/*Ảnh nhỏ bên trên*/}
                    </div>
                    <div className="flex flex-row h-5/12 flex-1">
                        <div className="flex flex-col justify-end m-8">
                            <div>
                                <img src={logowhite} alt="Logo White" className="h-16"/>
                            </div>
                            <p className="font-Bayon text-white text-[60px] leading-[1] lg:text-8xl xl:text-9xl -mt-3">VINTAS VIVU</p>
                            <p className="font-BeVietnamRegular text-white mb-3">Giá chỉ từ: 620.000 VNĐ</p>
                            <div><Button label="Mua ngay" onClick={() => {
                                setTimeout(() => navigate('/product/AV00206'), 500);
                            }}/></div>
                        </div>
                        <div className="flex-1"></div>
                        <div className="w-[120px] flex flex-col h-full">
                            <div className="bg-[#646F84] w-full flex-1"></div>
                            <div className="bg-[#9A855C] w-full aspect-square"></div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="bg-[#ECE4D7] w-full h-[650px] md:h-[700px] lg:h-[800px] xl:h-[900px] flex flex-row md:flex-col overflow-hidden">
                <div className="flex h-full md:h-1/2 flex-col md:flex-row justify-center w-1/2 md:w-full p-3 gap-3 mx-auto">
                    <img src={basasraw1} className="flex-1 h-1/3 md:h-full w-full object-cover" alt="Basas RAW"/>
                    <img src={basasraw2} className="flex-1 h-1/3 md:h-full w-full object-cover" alt="Basas RAW"/>
                    <img src={basasraw3} className="flex-1 h-1/3 md:h-full w-full object-cover" alt="Basas RAW"/>
                </div>

                <div className="w-1/2 md:w-full flex flex-col justify-center items-center gap-5 md:h-1/2">
                    <p className="font-BeVietnamBold text-sm md:text-base">ANANAS BASAS RAW</p>
                    <p className="font-AntonSC text-center -my-3 text-[32px] md:text-[54px] leading-normal">NGUYÊN BẢN<br className="flex md:hidden"/> TRONG TỪNG<br className="flex md:hidden"/> BƯỚC
                        CHÂN</p>
                    <p className="font-BeVietnamRegular text-[13px] md:text-base">Giá chỉ từ: 610.000 VNĐ</p>
                    <div><Button label="Mua ngay" onClick={() => {
                        setTimeout(() => navigate('/product/AV00135'), 500);
                    }}/></div>
                </div>
            </div>

            <div className="bg-[#35A16F] w-full h-[650px] md:h-[700px] lg:h-[800px] xl:h-[900px] flex flex-col md:flex-row">
                <img src={saleoff} alt="Clearance sale" className="w-full md:w-8/12 h-7/12 md:h-full object-cover"/>

                <div className="w-full md:w-4/12 h-5/12 md:h-full flex flex-col justify-center items-center text-center">
                    <p className="text-[#ECD956] font-BeVietnamBold text-lg">SALE DỌN KHO</p>
                    <p className="text-[#ECD956] font-AntonSC text-[64px] -m-2">UP TO 40%</p>
                    <p className="text-[#ECD956] font-BeVietnamRegular text-lg">15.10 - 31.10</p>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default Home;
