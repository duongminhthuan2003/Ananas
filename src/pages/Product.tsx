import { products } from "../data/product.ts"; // chỉnh đúng path thật
import {motion} from "motion/react";
import HeartIcon from "../assets/svgicons/HeartIcon.tsx";
import {useState} from "react";
import Footer from "../components/Footer.tsx";
import {HugeiconsIcon} from "@hugeicons/react";
import {ArrowLeft01Icon, ArrowRight01Icon, FilterHorizontalIcon} from "@hugeicons/core-free-icons";
import {useNavigate} from "react-router-dom";

function Product() {
    const [liked, setLiked] = useState<string[]>([]);

    const toggleLike = (id: string) => {
        setLiked(prev =>
            prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
        );
    };

    const navigate = useNavigate();

    return (
        <div>
            <div className="h-14"></div>
            <div className="mx-8 mt-8 flex flex-row items-center">
                <p className="text-xl font-BeVietnamBold">SẢN PHẨM</p>
                <div className="flex-1"></div>
                <div className="flex flex-row gap-2 border-[1.8px] px-2 py-1 rounded-full items-center">
                    <HugeiconsIcon icon={FilterHorizontalIcon} size={20}/>
                    <p className="font-BeVietnamRegular text-sm">Lọc</p>
                </div>
            </div>

            <div className="flex flex-col mx-6 my-6">
                <div className="grid grid-cols-2 gap-y-0 gap-x-4">
                    {products.map(product => (
                        <div key={product.id} className="flex flex-col relative" onClick={() => {navigate(`/product/${product.id}`)}}>
                            {
                                product.limited ? <div className={'absolute text-[10px] bg-Ananas px-4 z-20 py-2 text-sm text-white font-BeVietnamBold'}>
                                    Limited Edition
                                </div> : <div></div>
                            }
                            {
                                !product.available && (
                                <div className="absolute aspect-square inset-0 bg-black/40 z-0 flex justify-center items-center">
                                    <p className="text-white font-BeVietnamBold">HẾT HÀNG</p>
                                </div>
                            )}
                            <img src={`/assets/index/${product.thumbnail}`} alt={product.name} />
                            <div className="mt-2 mb-3 flex flex-col gap-1">
                                <div className="flex flex-row gap-1">
                                    <p className="font-BeVietnamBold text-[13px] line-clamp-2">{product.name}</p>
                                    <div className="flex-1"></div>
                                    <motion.div
                                        onClick={() => toggleLike(product.id)}
                                        transition={{ duration: 0.25, ease: "easeInOut" }}
                                    >
                                        <HeartIcon liked={liked.includes(product.id)} />
                                    </motion.div>
                                </div>
                                <p className="font-BeVietnamRegular text-[13px] text-gray-400">
                                    {product.colors[0]?.name}
                                </p>
                                <p className="font-BeVietnamRegular text-[13px]">
                                    {product.price.toLocaleString("vi-VN")} VNĐ
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            <div className="flex flex-row gap-7 h-8 font-BeVietnamRegular justify-center items-center">
                <HugeiconsIcon icon={ArrowLeft01Icon} />
                <p className="flex justify-center items-center bg-Ananas aspect-square w-8 rounded-md text-white">1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <HugeiconsIcon icon={ArrowRight01Icon} />
            </div>

            <Footer />
        </div>
    );
}

export default Product;
