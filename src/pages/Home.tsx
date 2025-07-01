import urbaslove24 from '../assets/index/IMG_7284.png'
import urbassc from '../assets/index/urbas_sc.jpg'
import urbasdora from '../assets/index/ananas_dora.jpg'
import featuredbackground from '../assets/index/ftr_back.png'
import track6bluewash from '../assets/index/Pro_A6T015_1.jpeg'
import track6triplewhite from '../assets/index/pro_track6_A6T002_1.jpg'
import track6unamedno1 from '../assets/index/pro_A6T011_1.jpg'
import track6suedewinterize from '../assets/index/pro_A6T007_1.jpg'
import track6isee from '../assets/index/Pro_A6T012_1.jpg'
import track6navyblue from '../assets/index/Pro_A6T014_1.jpeg'
import logowhite from '../assets/logo-white.png'
import vintasvivu from '../assets/index/vintas_vivu1.jpg'
import basasraw1 from '../assets/index/raw1.jpg'
import basasraw2 from '../assets/index/raw2.jpg'
import basasraw3 from '../assets/index/raw3.jpg'
import saleoff from '../assets/index/saleoff.jpg'
import Button from "../components/Button.tsx";
import Footer from "../components/Footer";

function Home() {
    return (
        <div>
            <div>
                <div className="w-full h-screen flex justify-center relative overflow-hidden">
                    <img
                        src={urbaslove24}
                        className="absolute w-full h-full object-cover object-center transform scale-[1.25] top-0 left-0"
                        alt="urbanlove24"
                    />
                    <p className="absolute z-10 font-BeVietnamRegular text-Ananas top-48 text-sm">Mới ra mắt</p>
                    <p className="absolute z-10 font-Bayon text-[56px] -my-4 top-56">URBAS LOVE 24+</p>
                    <p className="absolute font-BeVietnamRegular top-[560px]">Giao hàng từ 01.11.2024</p>
                    <div className="flex absolute top-[600px] w-full justify-center">
                        <Button label="Đặt trước" onClick={() => console.log("Button clicked!")}/>
                    </div>
                </div>
            </div>

            <div className="items-center justify-center relative w-10/12 mt-7 mx-auto">
                <p className="font-BeVietnamBold my-5 text-md">Nổi bật</p>
                <div className="flex flex-col w-full gap-6">
                    <div className="w-full h-64 relative">
                        <div className="absolute bottom-0 z-20 p-5 flex flex-col gap-2">
                            <p className="text-white font-BeVietnamRegular">Your daily drive</p>
                            <p className="text-white font-BeVietnamBold">URBAS SC - CORN SILK</p>
                            <div className="w-40">
                                <Button label="Mua ngay" onClick={() => {
                                }}/>
                            </div>
                        </div>
                        <img src={featuredbackground} alt="featured background" className="absolute w-full h-64"/>
                        <img src={urbassc} alt="urbassc" className=" w-full h-full object-cover"/>
                    </div>

                    <div className="w-full h-64 relative">
                        <div className="absolute bottom-0 z-20 p-5 flex flex-col gap-2">
                            <p className="text-white font-BeVietnamRegular">Chong chóng tre nè Nobita!</p>
                            <p className="text-white font-BeVietnamBold">ANANAS x DORAEMON</p>
                            <div className="w-40">
                                <Button label="Mua ngay" onClick={() => {
                                }}/>
                            </div>
                        </div>
                        <img src={featuredbackground} alt="featured background" className="absolute w-full h-64"/>
                        <img src={urbasdora} alt="urbasdora" className="w-full h-full object-cover"/>
                    </div>
                </div>
            </div>

            <div className="items-center justify-center relative w-10/12 mt-7 mx-auto">
                <p className="font-BeVietnamRegular my-5 text-md">Dòng sản phẩm <span className="font-BeVietnamBold">Track 6</span>
                </p>

                <div className="flex flex-row mx-auto overflow-x-scroll mt-6 -mb-6 -ml-6 h-auto space-x-5 track6-list pb-6 pl-6">
                    <div className="flex-none h-auto">
                        <img src={track6bluewash} alt="Track 6 Bluewash" className="h-[240px] aspect-square"/>
                        <p className="font-BeVietnamBold text-[14px] mt-2">Track 6 2.Blues - Bluewash</p>
                        <p className="font-BeVietnamRegular text-sm mt-2">1.290.000 VNĐ</p>
                        <div className="mt-2 mb-4"><Button label="Mua ngay" onClick={() => {
                        }}/></div>
                    </div>

                    <div className="flex-none h-auto">
                        <img src={track6triplewhite} alt="Track 6 Bluewash" className="h-[240px] aspect-square"/>
                        <p className="font-BeVietnamBold text-sm mt-2">Track 6 Triple White</p>
                        <p className="font-BeVietnamRegular text-sm mt-2">990.000 VNĐ</p>
                        <div className="mt-2 mb-4"><Button label="Mua ngay" onClick={() => {
                        }}/></div>
                    </div>

                    <div className="flex-none relative h-auto">
                        <img src={track6unamedno1} alt="Track 6 Bluewash" className="h-[240px] aspect-square"/>
                        <p className="font-BeVietnamBold text-sm mt-2">Track 6 Unnamed No.1 C in Minor</p>
                        <p className="font-BeVietnamRegular text-sm mt-2">1.090.000 VNĐ</p>
                        <div
                            className="absolute top-0 left-0 bg-Ananas px-4 py-2 text-sm text-white font-BeVietnamBold">
                            Limited Edition
                        </div>
                        <div className="mt-2 mb-4"><Button label="Mua ngay" onClick={() => {
                        }}/></div>
                    </div>

                    <div className="flex-none h-auto">
                        <img src={track6suedewinterize} alt="Track 6 Bluewash" className="h-[240px] aspect-square"/>
                        <p className="font-BeVietnamBold text-sm mt-2">Track 6 Moonphase - Winterize</p>
                        <p className="font-BeVietnamRegular text-sm mt-2">1.290.000 VNĐ</p>
                        <div className="mt-2 mb-4"><Button label="Mua ngay" onClick={() => {
                        }}/></div>
                    </div>

                    <div className="flex-none relative h-auto">
                        <img src={track6isee} alt="Track 6 Bluewash" className="h-[240px] aspect-square"/>
                        <div
                            className="absolute top-0 left-0 w-[240px] h-[240px] bg-black/40 flex justify-center items-center">
                            <div className="text-white font-BeVietnamBold text-lg">HẾT HÀNG</div>
                        </div>
                        <p className="font-BeVietnamBold text-sm mt-2">Track 6 I.S.E.E</p>
                        <p className="font-BeVietnamRegular text-sm mt-2">1.490.000 VNĐ</p>
                        <div className="mt-2 mb-4"><Button label="Hết hàng" onClick={() => {
                        }}/></div>
                    </div>

                    <div className="flex-none h-auto">
                        <img src={track6navyblue} alt="Track 6 Bluewash" className="h-[240px] aspect-square"/>
                        <p className="font-BeVietnamBold text-sm mt-2">Track 6 2.Blues - Navy Blue</p>
                        <p className="font-BeVietnamRegular text-sm mt-2">990.000 VNĐ</p>
                        <div className="mt-2 mb-4"><Button label="Mua ngay" onClick={() => {
                        }}/></div>
                    </div>
                </div>
            </div>

            <div className="flex bg-[#BCA984] h-[650px] mt-8 flex-col">
                <div className="flex flex-col items-center h-7/12 justify-center">
                    <img src={logowhite} alt="Logo White" className="h-16"/>
                    <p className="font-Bayon text-white text-7xl -mt-3">VINTAS VIVU</p>
                    <p className="font-BeVietnamRegular text-white mb-3">Giá chỉ từ: 620.000 VNĐ</p>
                    <div><Button label="Mua ngay" onClick={() => {
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

            <div className="bg-[#ECE4D7] w-full h-[650px] flex flex-row">
                <div className="flex flex-col justify-center w-1/2 px-3 py-3 gap-3">
                    <img src={basasraw1} className="h-1/3 object-cover"/>
                    <img src={basasraw2} className="h-1/3 object-cover"/>
                    <img src={basasraw3} className="h-1/3 object-cover"/>
                </div>
                <div className="w-1/2 flex flex-col justify-center items-center gap-5">
                    <p className="font-BeVietnamBold text-sm">ANANAS BASAS RAW</p>
                    <p className="font-AntonSC text-center text-4xl leading-normal">NGUYÊN BẢN<br/>TRONG TỪNG<br/>BƯỚC
                        CHÂN</p>
                    <p className="font-BeVietnamRegular text-sm">Giá chỉ từ: 610.000 VNĐ</p>
                    <div><Button label="Mua ngay" onClick={() => {
                    }}/></div>
                </div>
            </div>

            <div className="bg-[#35A16F] w-full h-[650px]">
                <img src={saleoff} alt="Clearance sale" className="w-full h-7/12 object-cover"/>

                <div className="w-full h-5/12 flex flex-col justify-center items-center text-center">
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
