import Button from "../components/Button.tsx";
import {useNavigate} from "react-router-dom";

function NotFound() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col h-screen">
            <div className="h-14"></div>

            <div className="flex flex-col justify-center items-start h-full -mt-20 px-10 md:px-36">
                <div className="mb-4">
                    <h1 className="text-[#F15E2C] font-BeVietnamBold text-7xl md:text-8xl lg:text-[150px] leading-none">
                        404
                    </h1>
                </div>

                {/* Error message */}
                <div className="text-left">
                    <h2 className="font-BeVietnamBold text-2xl md:text-3xl text-gray-800">
                        Trang không tìm thấy
                    </h2>
                    <p className="font-BeVietnamRegular text-gray-600 mt-2 text-base md:text-lg leading-relaxed">
                        Rất tiếc, trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.
                        Hãy kiểm tra lại URL hoặc quay về trang chủ.
                    </p>
                </div>
                <Button label="Về trang chủ" onClick={() => navigate('/')} customClasses="mt-4 px-6 py-3"/>
            </div>
        </div>
    )
}

export default NotFound;
