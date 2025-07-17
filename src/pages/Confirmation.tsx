import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Confirmation() {
    const navigate = useNavigate();

    useEffect(() => {
        // Auto-navigate to home after 3 seconds
        const timer = setTimeout(() => {
            navigate('/');
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="min-h-screen flex flex-col">
            <div className="flex-1 flex flex-col items-center justify-center px-8">
                <div className="text-center">
                    {/* Success icon */}
                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>

                    <h1 className="text-2xl font-BeVietnamBold text-gray-800 mb-4">
                        Đặt hàng thành công!
                    </h1>

                    <p className="text-gray-600 font-BeVietnamRegular mb-6">
                        Cảm ơn bạn đã mua hàng. Đơn hàng của bạn đang được xử lý.
                    </p>

                    <p className="text-sm text-gray-500 font-BeVietnamRegular">
                        Tự động chuyển về trang chủ sau 3 giây...
                    </p>

                    <button
                        onClick={() => navigate('/')}
                        className="mt-4 text-Ananas font-BeVietnamBold underline"
                    >
                        Về trang chủ ngay
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Confirmation;
