import saleoff1 from "../assets/index/pro_AV00101_1.jpg";
import saleoff2 from "../assets/index/Pro_AV00210_1.jpg";
import {motion} from "motion/react";
import HeartIcon from "../assets/svgicons/HeartIcon.tsx";
import {useState} from "react";
import Footer from "../components/Footer.tsx";
import {HugeiconsIcon} from "@hugeicons/react";
import {ArrowLeft01Icon, ArrowRight01Icon, FilterHorizontalIcon} from "@hugeicons/core-free-icons";

function SaleOff() {
    const [liked, setLiked] = useState(false);

    return (
        <div>
            <div className="h-14"></div>
            <div className="mx-8 mt-8 flex flex-row items-center">
                <p className="text-xl font-BeVietnamBold">SALE OFF</p>
                <div className="flex-1"></div>
                <div className="flex flex-row gap-2 border-[1.8px] px-2 py-1 rounded-full items-center">
                    <HugeiconsIcon icon={FilterHorizontalIcon} size={20}/>
                    <p className="font-BeVietnamRegular text-sm">Lọc</p>
                </div>
            </div>

            <div className="flex flex-col mx-7 my-8">
                {Array.from({length: 4}).map((_, index) => (
                    <div key={index} className="flex flex-col">
                        <div className="flex flex-row gap-3">
                            <div className="flex flex-col">
                                <img src={saleoff1} alt=""/>
                                <div className="my-3 flex flex-col gap-1">
                                    <div className="flex flex-row gap-2">
                                        <p className="font-BeVietnamBold text-[13px]">Basas Workaday - High top</p>
                                        <div className="flex-1"></div>
                                        <motion.div
                                            onClick={() => setLiked(!liked)}
                                            transition={{duration: 0.25, ease: "easeInOut"}}
                                        >
                                            <HeartIcon liked={liked}/>
                                        </motion.div>
                                    </div>
                                    <p className="font-BeVietnamRegular text-[13px] -mt-1 text-gray-400">Wooden Brown</p>
                                    <div className="flex flex-row gap-2">
                                        <p className="font-BeVietnamRegular line-through text-[13px] text-gray-400">790.000 VNĐ</p>
                                        <p className="flex justify-center items-center bg-gray-400 text-white px-2 text-[11px] rounded font-BeVietnamRegular">-20%</p>
                                    </div>
                                    <p className="font-BeVietnamBold text-[13px]">632.000 VNĐ</p>
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <img src={saleoff2} alt=""/>
                                <div className="my-3 flex flex-col gap-1">
                                    <div className="flex flex-row gap-2">
                                        <p className="font-BeVietnamBold text-[13px]">Basas Day Slide - Slip on</p>
                                        <div className="flex-1"></div>
                                        <motion.div
                                            onClick={() => setLiked(!liked)}
                                            transition={{duration: 0.25, ease: "easeInOut"}}
                                        >
                                            <HeartIcon liked={liked}/>
                                        </motion.div>
                                    </div>
                                    <p className="font-BeVietnamRegular text-[13px] -mt-1 text-gray-400">Shining Beige</p>
                                    <div className="flex flex-row gap-2">
                                        <p className="font-BeVietnamRegular line-through text-[13px] text-gray-400">550.000 VNĐ</p>
                                        <p className="flex justify-center items-center bg-gray-400 text-white px-2 text-[11px] rounded font-BeVietnamRegular">-50%</p>
                                    </div>
                                    <p className="font-BeVietnamBold text-[13px]">275.000 VNĐ</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex flex-row gap-7 h-8 font-BeVietnamRegular justify-center items-center">
                <HugeiconsIcon icon={ArrowLeft01Icon} />
                <p className="flex justify-center items-center bg-Ananas aspect-square w-8 rounded-md text-white">1</p>
                <p>2</p>
                <HugeiconsIcon icon={ArrowRight01Icon} />
            </div>

            <Footer />
        </div>
    );
}

export default SaleOff;
