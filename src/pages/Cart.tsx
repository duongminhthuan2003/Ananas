import product1 from "../assets/index/Pro_AV00181_1.jpeg"
import product2 from "../assets/index/Pro_AV00209_1.jpg"
import product3 from "../assets/index/Pro_AV00202_1.jpg"
import accessory1 from "../assets/index/Pro_AHCS005_1.jpg"
import accessory2 from "../assets/index/pro_ANS023_1.jpg"
import accessory3 from "../assets/index/ALB006_1-1.jpg"
import {useState} from "react";
import Button from "../components/Button.tsx";
import Footer from "../components/Footer.tsx";

function Cart() {
    const cartProducts = [
        {
            id: 1,
            name: "Basas Bumper Gum EXT NE - High Top - Offwhite/Gum",
            price: 650000,
            image: product1,
            size: 42,
            quantity: 1,
            showSizePopup: false,
        },
        {
            id: 2,
            name: "Urbas Corluray Mix - Low Top - Linen Cream",
            price: 650000,
            image: product2,
            size: 40,
            quantity: 1,
            showSizePopup: false,
        },
        {
            id: 3,
            name: "Track 6 Class E - Low Top - Ice Grey",
            price: 650000,
            image: product3,
            size: 39,
            quantity: 1,
            showSizePopup: false,
        },
    ];

    const [products, setProducts] = useState(cartProducts);

    const accessories = [
        {
            image: accessory1,
            name: "High Crew Socks - Ananas Daily Things",
            price: "95.000 VNĐ",
        },
        {
            image: accessory2,
            name: "Shoelaces - White Classic",
            price: "25.000 VNĐ",
        },
        {
            image: accessory3,
            name: "Ananas Tote Bag - Canvas",
            price: "120.000 VNĐ",
        },
    ];

    const updateProduct = (id, changes) => {
        setProducts(prev =>
            prev.map(p =>
                p.id === id ? { ...p, ...changes } : p
            )
        );
    };

    return (
        <div>
            <div className="h-14"></div>
            <div className="mx-8 mt-8">
                <p className="font-BeVietnamBold text-xl">GIỎ HÀNG</p>
                <p className="font-BeVietnamRegular">3 sản phẩm</p>
            </div>

            <div>
                {products.map(product => (
                    <div key={product.id} className="flex flex-row mx-8 mt-4 text-sm items-center gap-3">
                        <img src={product.image} alt="Product" className="h-28 rounded-lg" />
                        <div className="flex flex-col gap-1 h-28">
                            <p className="font-BeVietnamBold line-clamp-2">{product.name}</p>
                            <p className="font-BeVietnamRegular">{product.price.toLocaleString()} VNĐ</p>
                            <div className="flex-1"></div>
                            <div className="flex flex-row items-center gap-3 font-BeVietnamRegular">
                                {/* Size Button */}
                                <div
                                    onClick={() =>
                                        updateProduct(product.id, { showSizePopup: !product.showSizePopup })
                                    }
                                    className="cursor-pointer w-16 h-7 flex items-center justify-center shadow-lg rounded-lg border-1 border-gray-300"
                                >
                                    {product.size}
                                </div>

                                {/* Quantity */}
                                <div className="flex items-center gap-1 h-7 shadow-lg border-1  rounded-lg border-gray-300">
                                    <button
                                        onClick={() =>
                                            updateProduct(product.id, {
                                                quantity: Math.max(1, product.quantity - 1),
                                            })
                                        }
                                        className="w-7 h-7"
                                    >
                                        -
                                    </button>
                                    <span>{product.quantity}</span>
                                    <button
                                        onClick={() =>
                                            updateProduct(product.id, { quantity: product.quantity + 1 })
                                        }
                                        className="w-7 h-7"
                                    >
                                        +
                                    </button>
                                </div>

                                {/* Size Popup */}
                                {product.showSizePopup && (
                                    <div className="absolute mt-2 z-10 bg-white shadow p-2 rounded grid grid-cols-4 gap-1">
                                        {Array.from({ length: 12 }, (_, i) => i + 35).map(size => (
                                            <div
                                                key={size}
                                                onClick={() =>
                                                    updateProduct(product.id, {
                                                        size: size,
                                                        showSizePopup: false,
                                                    })
                                                }
                                                className="w-10 h-7 border text-center cursor-pointer hover:bg-gray-200"
                                            >
                                                {size}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}


            <div className="mx-8 mt-8">
                <p className="font-BeVietnamBold mb-3">Đề xuất</p>
                <div className="flex flex-row overflow-x-scroll gap-4 track6-list">
                    {accessories.map((item, index) => (
                        <div
                            key={index}
                            className="min-w-[300px] rounded-lg flex flex-row items-center gap-4"
                        >
                            <img src={item.image} className="h-28 rounded-lg" />
                            <div className="flex flex-col gap-1">
                                <p className="text-sm font-BeVietnamBold mt-2 line-clamp-2">{item.name}</p>
                                <p className="text-sm font-BeVietnamRegular text-gray-400">{item.price}</p>
                                <div className="w-full text-sm">
                                    <Button label="Thêm" onClick={() => {}} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="z-50 fixed h-64 navbar bottom-0 w-full flex flex-col px-10 py-9">
                <div className="flex flex-row items-center font-BeVietnamRegular">
                    <p>Tạm tính:</p>
                    <div className="flex-1"/>
                    <p>650.000 VNĐ</p>
                </div>
                <div className="flex-1" />
                <div className="flex flex-row items-center font-BeVietnamRegular">
                    <p>Giảm giá:</p>
                    <div className="flex-1"/>
                    <p>0 VNĐ</p>
                </div>

                <div className="flex-1" />
                <div className="flex flex-row items-center font-BeVietnamBold">
                    <p>Tổng thanh toán:</p>
                    <div className="flex-1"/>
                    <p className="text-Ananas">650.000 VNĐ</p>
                </div>

                <div className="flex-1" />
                <Button label="Thanh toán" onClick={() => {}} />
            </div>

            <Footer />

            <div className="h-64"></div>
        </div>
        </div>
    );
}

export default Cart;
