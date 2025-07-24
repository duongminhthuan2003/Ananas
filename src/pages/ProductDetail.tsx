import Button from "../components/Button.tsx";
import HeartIcon from "../assets/svgicons/HeartIcon";
import {useState, useEffect} from "react";
import { motion } from "motion/react";
import {StarRating} from "../assets/svgicons/StarRating.tsx"
import Footer from "../components/Footer";
import { AnimatePresence } from "framer-motion";
import { HugeiconsIcon } from '@hugeicons/react';
import { ShoppingCartCheck02Icon, CancelCircleIcon, Cancel01Icon } from '@hugeicons/core-free-icons';
import { useParams } from "react-router-dom";
import { products } from "../data/product.ts"

export function AddToCartPopup(){
    return (
        <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
            className="flex flex-row popup mx-8 rounded-xl p-6 gap-5 font-BeVietnamRegular">
            <HugeiconsIcon icon={ShoppingCartCheck02Icon} size={24} color="#FFFFFF"/>
            <p className="text-white">Đã thêm vào giỏ hàng</p>
        </motion.div>
    )
}

export function FailedPopup({ notification }: { notification: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
            className={"flex flex-row bg-red-500 p-6 rounded-xl shadow-lg shadow-red-200 mx-8 gap-5 font-BeVietnamRegular items-center"}>
            <HugeiconsIcon icon={CancelCircleIcon} size={24} color="#FFFFFF"/>
            <p className={"text-white"}>{notification}</p>
        </motion.div>
    )
}

export function CommentSection({ onClose }: { onClose: () => void }) {
    return (
            <motion.div
                className="fixed inset-0 z-[60] flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <motion.div
                    className="absolute inset-0 bg-black z-[60]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                ></motion.div>

                <motion.div
                    className="relative w-[calc(100vw-4rem)] h-[calc(100vh-4rem)] bg-white z-[70] rounded-lg overflow-y-auto shadow-lg p-8"
                        initial={{ opacity: 0, y: 1500 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 1500 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                    <div className="m-3 flex flex-col gap-8 ">
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

                        <div className="text-[15px] ">
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
                            <div
                                className="absolute bottom-8 p-3 rounded-full bg-Ananas"
                                onClick={onClose}
                            >
                                <HugeiconsIcon icon={Cancel01Icon} size={24} color="#FFFFFF"/>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
    )
}

function ProductDetail() {
    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    const [liked, setLiked] = useState(false);

    const [selectedColorIndex, setSelectedColorIndex] = useState<number | null>(0);

    const [selectedSize, setSelectedSize] = useState<number | null>(null);
    const [selectedAccSize, setSelectedAccSize] = useState<string | null>(null);
    const [showSizePopup, setShowSizePopup] = useState(false);
    const [showAccSize, setShowAccSize] = useState(false);
    const sizes = Array.from({ length: 12 }, (_, i) => i + 35);
    const accessorySizes = ["S", "M", "L"];

    const [quantity, setQuantity] = useState(1);

    const [showAddToCartPopup, setShowAddToCartPopup] = useState(false);
    const [showFailedPopup, setShowFailedPopup] = useState(false);
    const [failedMessage, setFailedMessage] = useState("");

    const [showComment, setShowComment] = useState(false);
    useEffect(() => {
        if (showComment) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }

        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [showComment]);

    const { productId } = useParams();
    const product = products.find((p: { id: string | undefined; }) => p.id === productId);
    if (!product) return(
        <div>
            <div className="h-14"></div>
            <p className="m-8">Không tìm thấy sản phẩm.</p>
        </div>
    )

    return(
        <div>
            <AnimatePresence>
                {
                    showAddToCartPopup && (
                        <div className="z-30 top-20 w-full fixed">
                            <AddToCartPopup/>
                        </div>
                    )
                }
                {
                    showFailedPopup && (
                        <div className="z-30 top-20 w-full fixed">
                            <FailedPopup notification={failedMessage} />
                        </div>
                    )
                }
            </AnimatePresence>

            <div className="h-14"/>
            {/* để chừa khoảng tránh navbar fixed */}
            <div className="mx-8 mt-8 mb-0 flex flex-col gap-3">
                <div className="flex gap-3">
                    {/* Cột bên trái - ảnh lớn */}
                    <img src={product.images[1]} alt="Urbas Love+ 24 1" className="w-2/3 h-auto object-cover"/>

                    {/* Cột bên phải - 2 ảnh nhỏ xếp dọc */}
                    <div className="flex flex-col gap-3 w-1/3">
                        <img src={product.images[2]} alt="Urbas Love+ 24 2" className="w-full h-full object-cover"/>
                        <img src={product.images[3]} alt="Urbas Love+ 24 3" className="w-full h-full object-cover"/>
                    </div>
                </div>

                <img src={product.images[0]} alt="Urbas Love+ 24 4" className="w-full h-[25vh] object-cover"/>
            </div>

            <div className="mx-8 mt-3">
                <p className="font-BeVietnamRegular text-sm"><span className="text-gray-400">Sản phẩm {">"} {product.category} {">"}</span> {product.name}</p>
            </div>

            <AnimatePresence>
                {
                    showComment && <CommentSection onClose={() => setShowComment(false)} />
                }
            </AnimatePresence>

            <div className="flex gap-1 flex-col mx-8 my-6">
                {
                    product.limited ?
                        <div className="flex w-fit px-3 py-1 rounded bg-Ananas text-[12px] text-white font-BeVietnamRegular">Limited Edition</div>
                        : <div></div>
                }
                <p className="font-BeVietnamBold text-lg">{
                    product.name.toUpperCase()
                }</p>
                <p className="font-BeVietnamRegular text-gray-400">Màu sắc: {product.colors[selectedColorIndex ?? 0]?.name}</p>
                {
                    product.discount ?
                        <div className="flex flex-row items-center gap-5">
                            <p className="font-BeVietnamBold text-xl text-Ananas">{(product.price * ((100 - product.discount)/100)).toLocaleString("vi-VN")}</p>

                            <div className="flex flex-row gap-2">
                                <p className="line-through font-BeVietnamRegular text-sm text-gray-400">{product.price.toLocaleString("vi-VN")}</p>
                                <p className="px-2 bg-gray-400 w-fit rounded text-white text-sm font-BeVietnamRegular">{product.discount}%</p>
                            </div>
                        </div>
                        :
                        <p className="font-BeVietnamBold text-xl text-Ananas">{product.price.toLocaleString("vi-VN")}</p>
                }
            </div>

            <div className="flex flex-row mx-8 my-3 font-BeVietnamRegular text-sm">
                <div>
                    <p>Màu sắc</p>
                    <div className="flex flex-row gap-2 mt-2">
                        {product.colors.map((color, index) => (
                            <div
                                key={index}
                                onClick={() => setSelectedColorIndex(index)}
                                className={`w-7 h-7 rounded cursor-pointer`}
                                style={{
                                    backgroundColor: color.code,
                                    border: selectedColorIndex === index ? '2px solid #F15E2C' : '1px solid #ccc'
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
                            onClick={
                                product.category === "Accessories" ? () => setShowAccSize(true) : () => setShowSizePopup(true)
                            }
                            className="flex justify-center items-center shadow-lg border border-gray-200 rounded cursor-pointer w-16 h-7 mt-2 text-center"
                        >
                            {
                                product.category === "Accessories" ? (selectedAccSize ?? "-") : (selectedSize ?? "-")
                            }
                        </div>

                        {/*Pop up chọn size cho giày*/}
                        {showSizePopup && (
                            <div className="absolute -left-23 w-[250px] z-30 mt-2 grid grid-cols-4 gap-2 p-2 py-3 rounded-lg navbar">
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

                        {/*Pop up chọn size cho phụ kiện*/}
                        {showAccSize && (
                            <div className="flex flex-row absolute w-fit z-30 p-2 gap-2 mt-2 rounded-lg navbar">
                                {accessorySizes.map((size) => (
                                    <div
                                        key={size}
                                        onClick={() => {
                                            setSelectedAccSize(size);
                                            setShowAccSize(false);
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
                {
                    product.available ?
                        <Button label="Thêm vào giỏ hàng" onClick={() => {
                            if (!isLoggedIn) {
                                setFailedMessage("Hãy đăng nhập để thêm vào giỏ hàng")
                                setShowFailedPopup(true)
                                setTimeout(() => {setShowFailedPopup(false)}, 3000)
                                return;
                            }

                            if(product.category !== "Accessories") {
                                if (selectedSize === null) {
                                    setFailedMessage("Hãy chọn một kích cỡ")
                                    setShowFailedPopup(true)
                                    setTimeout(() => {setShowFailedPopup(false)}, 3000)
                                    return;
                                }
                            } else {
                                if (selectedAccSize === null) {
                                    setFailedMessage("Hãy chọn một kích cỡ")
                                    setShowFailedPopup(true)
                                    setTimeout(() => {setShowFailedPopup(false)}, 3000)
                                    return;
                                }
                            }

                            setShowAddToCartPopup(true)
                            setTimeout(()=> setShowAddToCartPopup(false), 3000)
                        }}
                        customClasses={"w-full"}/> :
                        <Button label={"Hết hàng"} onClick={() => {}} customClasses={"w-full opacity-25"}/>
                }


                <motion.div
                    className={`h-12 w-12 rounded-lg aspect-square flex items-center justify-center cursor-pointer transition-all duration-300 ${
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
                        setShowComment(true);
                    }}/>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default ProductDetail;
