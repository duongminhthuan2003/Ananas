import urbaslove24news from "../assets/news/urbas_love_24.webp"
import blog1980s from "../assets/news/Blog-1980s_1.webp"
import newsthumb from "../assets/news/urbas_love_23.webp"
import Button from "../components/Button.tsx";
import Footer from "../components/Footer.tsx";
import {useNavigate} from "react-router-dom";

function News() {
    const navigate = useNavigate();

    return (
        <div>
            <div className="h-14"></div>
            <p className="mx-8 mt-8 text-xl font-BeVietnamBold">TIN TỨC</p>

            <div className="flex flex-col items-center justify-center mx-8 my-4">
                <div className="flex flex-col mx-auto w-10/12">
                    <div className="flex flex-col" onClick={() => navigate("/newsdetail")}>
                        <div className="flex flex-col gap-2 my-3">
                            <p className="font-BeVietnamBold">HIỂU THẬT SÂU MỖI NGƯỜI <br/> VỚI URBAS LOVE+ 24</p>
                            <p className="font-BeVietnamRegular text-gray-400 text-sm">Lấy cảm hứng từ cụm từ "Inside
                                Out", Ananas tạo ra 2 phiên bản thiết kế cổ thấp (có dây và
                                quai dán) cho bộ sưu tập Urbas Love+ 24.</p>
                            <p className="font-BeVietnamRegular">01.10.2024</p>
                        </div>

                        <img src={urbaslove24news} className="h-[60vw] w-[60vw] sm:h-72 sm:w-72 object-cover rounded-xl"/>
                    </div>

                    <div className="flex flex-col items-end relative -top-14">
                        <img src={blog1980s} className="h-[36vw] w-[36vw] sm:h-56 sm:w-56 object-cover rounded-xl"/>

                        <div className="flex flex-col items-end gap-2 my-3">
                            <p className="text-right font-BeVietnamBold">VINTAS SAIGON 1980s - SÀI GÒN XƯA GIỮA
                                THỜI HIỆN ĐẠI</p>
                            <p className="text-right font-BeVietnamRegular text-gray-400 text-sm">Saigon 1980s đem
                                đến một lựa chọn “cũ kỹ thú vị” cho những người trẻ sống giữa thời hiện đại nhưng lại yêu nét bình dị của Sài Gòn
                                xưa.</p>
                            <p className="font-BeVietnamRegular">28.09.2024</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="m-8 flex flex-col gap-8">
                {Array.from({length: 8}).map((_, index) => (
                    <div key={index} className="rounded-lg border-2 border-[#CCCCCC]" onClick={()=>{navigate("/newsdetail")}}>
                        <img src={newsthumb} alt="Thumbnail for News"
                             className="rounded-t-lg w-full object-cover h-52"/>
                        <div className="m-5">
                            <div className="flex flex-row space-y-2">
                                <p className="font-BeVietnamBold text-lg">TIÊU ĐỀ</p>
                                <div className="flex-1"/>
                                <p className="font-BeVietnamRegular text-gray-400">dd.mm.yyyy</p>
                            </div>
                            <p className="font-BeVietnamRegular text-sm text-justify">Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. </p>
                        </div>
                    </div>
                ))}

                <div className="flex justify-center">
                    <Button label="Hiển thị thêm" onClick={() => {
                    }}/>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default News;
