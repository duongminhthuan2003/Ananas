import img4 from "../../public/assets/images/urbaslove24/1.webp"
import img2 from "../../public/assets/images/urbaslove24/2.webp"
import img1 from "../../public/assets/images/urbaslove24/3.webp"
import img3 from "../../public/assets/images/urbaslove24/4.webp"
import Button from "../components/Button.tsx";
import HeartIcon from "../assets/svgicons/HeartIcon";
import {useState} from "react";
import { motion } from "motion/react";
import {StarRating} from "../assets/svgicons/StarRating.tsx"
import Footer from "../components/Footer";
import { AnimatePresence } from "framer-motion";
import { HugeiconsIcon } from '@hugeicons/react';
import { ShoppingCartCheck02Icon } from '@hugeicons/core-free-icons';

export function AddToCartPopup(){
    return (
        <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
            className="flex flex-row popup mx-8 rounded-xl pl-6 py-6 gap-5 font-BeVietnamRegular">
            <HugeiconsIcon icon={ShoppingCartCheck02Icon} size={24} color="#FFFFFF"/>
            <p className="text-white">Đã thêm vào giỏ hàng</p>
        </motion.div>
    )
}
function ProductDetail() {
    const [liked, setLiked] = useState(false);

    const [selectedColorIndex, setSelectedColorIndex] = useState<number | null>(null);
    const colors = ["#444444", "#CCCCCC"];

    const [selectedSize, setSelectedSize] = useState<number | null>(null);
    const [showSizePopup, setShowSizePopup] = useState(false);
    const sizes = Array.from({ length: 12 }, (_, i) => i + 35);

    const [quantity, setQuantity] = useState(1);

    const [showAddToCartPopup, setShowAddToCartPopup] = useState(false);

    return(
        <div>
            <AnimatePresence>
                {
                    showAddToCartPopup && (
                        <div className="z-50 top-20 w-full fixed">
                            <AddToCartPopup/>
                        </div>
                    )
                }
            </AnimatePresence>

            <div className="h-14"/>
            {/* để chừa khoảng tránh navbar fixed */}
            <div className="mx-8 mt-8 mb-0 flex flex-col gap-3">
                <div className="flex gap-3">
                    {/* Cột bên trái - ảnh lớn */}
                    <img src={img1} alt="Urbas Love+ 24 1" className="w-2/3 h-auto object-cover"/>

                    {/* Cột bên phải - 2 ảnh nhỏ xếp dọc */}
                    <div className="flex flex-col gap-3 w-1/3">
                        <img src={img2} alt="Urbas Love+ 24 2" className="w-full h-full object-cover"/>
                        <img src={img3} alt="Urbas Love+ 24 3" className="w-full h-full object-cover"/>
                    </div>
                </div>

                <img src={img4} alt="Urbas Love+ 24 4" className="w-full h-[25vh] object-cover"/>
            </div>

            <div className="mx-8 mt-3">
                <p className="font-BeVietnamRegular text-sm"><span className="text-gray-400">Sản phẩm {">"} Track 6 {">"}</span> Track 6 2.Blues</p>
            </div>

            <div className="flex gap-1 flex-col mx-8 my-6">
                <p className="font-BeVietnamBold text-lg">TRACK 6 2.BLUES - LOW TOP</p>
                <p className="font-BeVietnamRegular text-gray-400">Màu sắc: Bluewash</p>
                <p className="font-BeVietnamBold text-lg text-Ananas">1.290.000 VNĐ</p>
            </div>

            <div className="flex flex-row mx-8 my-3 font-BeVietnamRegular text-sm">
                <div>
                    <p>Màu sắc</p>
                    <div className="flex flex-row gap-2 mt-2">
                        {colors.map((color, index) => (
                            <div
                                key={index}
                                onClick={() => setSelectedColorIndex(index)}
                                className={`w-7 h-7 rounded cursor-pointer`}
                                style={{
                                    backgroundColor: color,
                                    border: selectedColorIndex === index ? '2px solid black' : '1px solid #ccc'
                                }}
                            />
                        ))}
                    </div>
                </div>
                <div className="flex flex-1"></div>
                <div>
                    <p>Kích cỡ</p>
                    <div className="relative">
                        <div
                            onClick={() => setShowSizePopup(true)}
                            className="flex justify-center items-center shadow-lg border border-gray-200 rounded cursor-pointer w-16 h-7 mt-2 text-center"
                        >
                            {selectedSize ?? "-"}
                        </div>

                        {showSizePopup && (
                            <div className="absolute -left-23 w-[250px] z-50 mt-2 grid grid-cols-4 gap-2 p-2 py-3 rounded-lg navbar">
                                {sizes.map((size) => (
                                    <div
                                        key={size}
                                        onClick={() => {
                                            setSelectedSize(size);
                                            setShowSizePopup(false);
                                        }}
                                        className="flex items-center justify-center border border-gray-300 h-7 w-12 rounded-lg text-center bg-white cursor-pointer hover:bg-gray-200"
                                    >
                                        {size}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex flex-1"></div>
                <div>
                    <p>Số lượng</p>
                    <div className="flex items-center h-7 gap-1 mt-2 border-1 rounded shadow-lg border-gray-200">
                        <button
                            onClick={() => setQuantity(q => Math.max(1, q - 1))}
                            className="w-7 h-7 flex items-center justify-center text-lg"
                        >
                            -
                        </button>

                        <span className="w-7 text-center">{quantity}</span>

                        <button
                            onClick={() => setQuantity(q => q + 1)}
                            className="w-7 h-7 flex items-center justify-center text-lg"
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex flex-row h-12 gap-2 mx-8 my-8">
                <Button label="Thêm vào giỏ hàng" onClick={() => {
                    setShowAddToCartPopup(true);
                    setTimeout(() => setShowAddToCartPopup(false), 3000); // ẩn sau 3 giây
                }}/>


                <motion.div
                    className={`h-12 w-12 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 ${
                        liked ? "border-2 border-[#FFF0EA] bg-[#FFF0EA]" : "border-2 border-[#CCCCCC] bg-white"
                    }`}
                    onClick={() => setLiked(!liked)}
                    animate={liked ? {scale: [1, 10, 0.1, 1]} : {scale: 1}}
                    transition={{duration: 0.25, ease: "easeInOut"}}
                >
                    <HeartIcon liked={liked}/>
                </motion.div>
            </div>

            <div className="mx-8 my-10">
                <p className="font-BeVietnamBold">MÔ TẢ SẢN PHẨM</p>
                <ul className="list-disc ml-6 font-BeVietnamRegular space-y-3 my-3 text-sm">
                    <li>Chất liệu da Nappa kết hợp với sợi Eco Nylon (30% tái chế), bền và thân thiện với môi trường.</li>
                    <li>Khả năng chống nước tốt, phù hợp với nhiều loại thời tiết.</li>
                    <li>Phối màu Navy Blue và Blue Wash cá tính, dễ kết hợp trang phục.</li>
                    <li>Đế cao su chắc chắn, tăng cường độ bám và độ bền.</li>
                    <li>Thiết kế thấp cổ (Low Top), thoải mái khi di chuyển.</li>
                    <li>Mặt trong giày êm ái, tạo cảm giác thoải mái khi mang lâu.</li>
                    <li>Phù hợp cho cả phong cách năng động và lịch lãm.</li>
                    <li>Có hai phiên bản: vải và da.</li>
                    <li>Sản phẩm hướng đến người dùng tìm kiếm sự khác biệt và cá tính trong mỗi bước đi.</li>
                    <li>Gender: Unisex</li>
                    <li>Size run: 35 – 46</li>
                    <li>Upper: Leather</li>
                    <li>Outsole: Rubber</li>
                </ul>
                <p className="font-BeVietnamBold underline">BẢNG CHỌN SIZE</p>
            </div>

            <div className="mx-8 mt-10 flex flex-col gap-8 ">
                <p className="font-BeVietnamBold">ĐÁNH GIÁ</p>
                <div className="flex flex-row gap-8 font-BeVietnamBold justify-center -mt-2"><StarRating rating={4.5} size={24}/> 4.5/5 </div>

                <div className="text-[15px]">
                    <div className="flex flex-row">
                        <p className="font-BeVietnamBold">arunm470108683</p>
                        <div className="flex-1"></div>
                        <StarRating rating={5} size={20}/>
                    </div>
                    <p className="font-BeVietnamRegular text-gray-400">19.10.2024</p>
                    <p className="font-BeVietnamRegular">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>

                <div className="text-[15px]">
                    <div className="flex flex-row">
                        <p className="font-BeVietnamBold">Shay37</p>
                        <div className="flex-1"></div>
                        <StarRating rating={4} size={20}/>
                    </div>
                    <p className="font-BeVietnamRegular text-gray-400">28.09.2024</p>
                    <p className="font-BeVietnamRegular">Vivamus dolor massa, sodales sit amet libero quis, pulvinar
                        dictum justo. Fusce congue tempor leo
                        efficitur efficitur.</p>
                </div>

                <div className="text-[15px]">
                    <div className="flex flex-row">
                        <p className="font-BeVietnamBold">Cairnsy</p>
                        <div className="flex-1"></div>
                        <StarRating rating={5} size={20}/>
                    </div>
                    <p className="font-BeVietnamRegular text-gray-400">23.09.2024</p>
                    <p className="font-BeVietnamRegular">Maecenas id augue diam. Vivamus cursus finibus nunc, id ornare
                        metus aliquam sed.</p>
                </div>

                <div className="flex justify-center">
                    <Button label="Hiển thị thêm" onClick={() => {
                    }}/>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default ProductDetail;
