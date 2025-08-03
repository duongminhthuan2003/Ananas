import {useState} from "react";
import { useNavigate } from "react-router-dom";
import product1 from "../assets/index/Pro_AV00181_1.webp"
import product2 from "../assets/index/Pro_AV00209_1.webp"
import product3 from "../assets/index/Pro_AV00202_1.webp"
import Button from "../components/Button.tsx";
import Footer from "../components/Footer.tsx";

function Payment() {
    const [selected, setSelected] = useState("visa");

    const methods = [
        { id: "visa", label: "Visa", icon: "💳" },
        { id: "mastercard", label: "Mastercard", icon: "🏦" },
        { id: "bank", label: "Techcombank", icon: "🏛️" },
    ];

    const navigate = useNavigate();

    return (
        <div className="flex flex-col h-screen">
            <div className="mx-8 md:mx-auto mt-24 md:mt-24 md:w-10/12 lg:w-8/12 flex flex-row items-center">
                <p className="text-xl font-BeVietnamBold">THANH TOÁN</p>
                <div className="flex-1"></div>
            </div>

            <div className="flex flex-col md:flex-row justify-center mx-8  md:w-10/12 lg:w-8/12 md:mx-auto md:gap-10">
                <div className="flex-1 w-full md:w-1/2">
                    <div className="mt-8 md:mt-8 w-full font-BeVietnamRegular">
                        <p className="font-BeVietnamBold">Thông tin giao hàng</p>
                        <input type="text" className="border border-gray-400 text-sm p-3 w-full rounded-lg mt-3" placeholder="Họ và tên"/>
                        <div className="flex flex-row gap-3 mt-3">
                            <input type="text" className="border border-gray-400 text-sm p-3 w-full rounded-lg" placeholder="Số điện thoại"/>
                            <input type="text" className="border border-gray-400 text-sm p-3 w-full rounded-lg" placeholder="Email"/>
                        </div>
                        <div className="flex flex-row gap-3 mt-3">
                            <input type="text" className="border border-gray-400 text-sm p-3 w-full rounded-lg" placeholder="Phường/xã" />
                            <input type="text" className="border border-gray-400 text-sm p-3 w-full rounded-lg"  placeholder="Quận/huyện"/>
                            <input type="text" className="border border-gray-400 text-sm p-3 w-full rounded-lg" placeholder="Tỉnh/thành phố"/>
                        </div>
                        <input type="text" className="border border-gray-400 text-sm mt-3 p-3 w-full rounded-lg" placeholder="Địa chỉ cụ thể"/>
                    </div>

                    <div className="w-full mt-8">
                        <p className="font-BeVietnamBold">Phương thức thanh toán</p>
                        <div className="overflow-x-scroll track6-list mt-3">
                            <div className="flex gap-3 w-max font-BeVietnamRegular text-sm">
                                {methods.map((method) => (
                                    <div
                                        key={method.id}
                                        onClick={() => setSelected(method.id)}
                                        className={`w-40 p-4 rounded-xl cursor-pointer border transition-all 
                                    ${selected === method.id ? "border-Ananas bg-[#FFE7DF]" : "border-gray-400"}`}
                                    >
                                        <div>{method.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex-1 w-full md:w-1/2">
                    <div className="mt-8 w-full">
                        <p className="font-BeVietnamBold">Thông tin đơn hàng</p>
                        <div className="block md:flex flex-row">
                            <div>
                                <div className="flex flex-row mt-3 text-sm items-center gap-3">
                                    <img src={product1} alt="Product" className="h-28 rounded-lg" />
                                    <div className="flex flex-col gap-1 h-28">
                                        <p className="font-BeVietnamBold line-clamp-2">Pattas Tomo - Mule - Primrose Yellow</p>
                                        <p className="font-BeVietnamRegular">650.000 VNĐ</p>
                                        <div className="flex-1"></div>
                                    </div>
                                </div>

                                <div className="flex flex-row mt-4 text-sm items-center gap-3">
                                    <img src={product2} alt="Product" className="h-28 rounded-lg" />
                                    <div className="flex flex-col gap-1 h-28">
                                        <p className="font-BeVietnamBold line-clamp-2">Pattas Tomo - Mule - Primrose Yellow</p>
                                        <p className="font-BeVietnamRegular">650.000 VNĐ</p>
                                        <div className="flex-1"></div>
                                    </div>
                                </div>

                                <div className="flex flex-row mt-4 text-sm items-center gap-3">
                                    <img src={product3} alt="Product" className="h-28 rounded-lg" />
                                    <div className="flex flex-col gap-1 h-28">
                                        <p className="font-BeVietnamBold line-clamp-2">Pattas Tomo - Mule - Primrose Yellow</p>
                                        <p className="font-BeVietnamRegular">650.000 VNĐ</p>
                                        <div className="flex-1"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:block mt-8">
                            <div className="flex flex-row mb-3">
                                <p className="font-BeVietnamBold">Tổng thanh toán</p>
                                <div className="flex-1"></div>
                                <p className="font-BeVietnamBold text-Ananas">650.000 VNĐ</p>
                            </div>
                            <div className="flex flex-row items-center">
                                <div className="text-sm flex-1 items-center justify-center flex border px-5 rounded-lg md:py-3 py-3 font-BeVietnamRegular"
                                     onClick={() => {
                                         navigate("/cart");
                                     }}
                                >Hủy</div>
                                <div className="w-3"></div>
                                <Button
                                    label="Thanh toán"
                                    onClick={()=>{
                                        navigate("/confirmation");
                                    }}
                                    customClasses="flex-3 md:py-3 md:px-4 py-3 px-6"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="flex flex-col fixed md:hidden bottom-0 w-full px-8 navbar py-7 gap-4">
                <div className="flex flex-row">
                    <p className="font-BeVietnamBold">Tổng thanh toán</p>
                    <div className="flex-1"></div>
                    <p className="font-BeVietnamBold text-Ananas">650.000 VNĐ</p>
                </div>
                <div className="flex flex-row items-center">
                    <div className="text-sm border px-5 rounded-lg md:py-4 py-3 font-BeVietnamRegular"
                        onClick={() => {
                            navigate("/cart");
                        }}
                    >Hủy</div>
                    <div className="w-3"></div>
                    <Button
                        label="Thanh toán"
                        onClick={()=>{
                            navigate("/confirmation");
                        }}
                        customClasses="flex-1 md:py-4 md:px-6 py-3 px-6"
                    />
                </div>
            </div>

            <div className="flex-1"></div>
            <Footer />
        </div>
    )
}

export default Payment;
