import {HugeiconsIcon} from "@hugeicons/react";
import {ArrowLeft01Icon} from "@hugeicons/core-free-icons";
import news from "../assets/news/IMG_7284.webp"
import Footer from "../components/Footer.tsx";
import {useNavigate} from "react-router-dom";
import { motion } from "motion/react";

function NewsDetail() {
    const navigate = useNavigate();

    return (
        <div>
            <div className="h-14"></div>
            <div className="mx-8 md:mx-auto md:my-12 md:w-10/12 lg:w-8/12 mt-8 flex flex-row items-center"
                 onClick={() => navigate(-1)}>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <HugeiconsIcon icon={ArrowLeft01Icon} strokeWidth={2} />
                </motion.div>

                <motion.p
                    className="font-BeVietnamBold text-xl"
                    initial={{ x: -20 }}
                    animate={{ x: 10 }}
                    exit={{ x: -26 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                    TIN TỨC
                </motion.p>
            </div>

            <div className="mx-8 md:mx-auto md:my-12 md:w-10/12 lg:w-8/12 ">
                <img src={news} alt="Tin tức" className="h-56 w-full rounded-lg object-cover mt-4"/>
                <p className="text-sm text-gray-400 font-BeVietnamRegular mt-8 mb-1">Thông cáo báo chí</p>
                <p className="font-BeVietnamBold text-lg">HIỂU THẬT SÂU MỖI NGƯỜI VỚI URBAS LOVE+ 24</p>
                <p className="font-BeVietnamRegular text-sm text-gray-400 mt-1">01.10.2024</p>
                <p className="font-BeVietnamRegular text-justify text-sm leading-6 mt-8 tracking-wide">
                    Lấy cảm hứng từ cụm từ "Inside Out", Ananas tạo ra 2 phiên bản thiết kế cổ thấp (có dây và quai dán)
                    cho bộ sưu tập Urbas Love+ 24. Trải qua một năm tương đối khó khăn, chúng tôi vẫn cố gắng "giữ" nhịp
                    độ ra mắt đều đặn mỗi năm cho bộ sưu tập Love+ kể từ năm 2020. Và sẽ thật tuyệt vời nếu bạn có thể
                    theo dõi đầy đủ những điều chúng tôi muốn gửi gắm đến cộng đồng LGBT+ trong ngần ấy thời gian.
                    <br/> <br/>
                    Với phiên bản 24, Ananas muốn truyền tải thông điệp hiểu thật sâu mọi thứ từ bên trong của mỗi con
                    người bằng những mảng miếng ngẫu nhiên đầy màu sắc, khi "mọi sự" /đã đủ chín/, những cá tính này sẽ
                    mang theo những năng lượng tích cực - nhiều chiều để lan toả ra bên ngoài và đến những người xung quanh.
                    <br/> <br/>

                    Hai sản phẩm có cùng mức giá là 650.000 (đã bao gồm VAT), được quyết định phát hành với phương thức
                    Pre-order từ hôm nay cho đến hết ngày 31/08/2024, và sẽ chính thức xuất xưởng và giao đi kể từ ngày 01/11/2024.
                    <br/>
                    Size run: 35 - 46 (có size lẻ)
                    <br/>
                    Chất liệu Upper: Vải Canvas/Da lộn (Suede)
                    <br/>
                    Số lượng giới hạn: 500 đôi/mẫu
                    <br/>
                    Không áp dụng chính sách đổi hàng do là phiên bản giới hạn, bạn có thể thử size tại các cửa hàng vật lí thật kĩ lưỡng trước khi quyết định.
                    <br/> <br/>

                    Hãy cùng khám phá hình ảnh chi tiết và đặt hàng.
                </p>
            </div>

            <Footer />
        </div>
    )
}

export default NewsDetail;
