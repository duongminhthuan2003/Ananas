import Button from "../components/Button.tsx";
import {useNavigate} from "react-router-dom";
import signup from '../assets/login_register/register.jpg'
function SignUp() {
    const navigate = useNavigate();

    return (
        <div className="h-screen flex flex-col">
            <div className="h-14"></div>
            <div className="flex-1 md:flex flex-row overflow-hidden items-center">
                <div className="flex-1">
                        <p className="mx-8 mt-12 md:mt-0 mb-10 font-BeVietnamBold text-xl">ĐĂNG KÝ</p>

                        <div className="mx-8 font-BeVietnamRegular">
                            <p>Họ và tên:</p>
                            <input type="text" placeholder="Họ và tên" defaultValue="Toonie" className="w-full border-1 my-2 rounded-lg p-2 border-gray-400 focus:outline-Ananas"/>
                        </div>

                        <div className="mx-8 font-BeVietnamRegular">
                            <p>Số điện thoại:</p>
                            <input type="text" placeholder="Số điện thoại" defaultValue="0123456789" className="w-full border-1 my-2 rounded-lg p-2 border-gray-400 focus:outline-Ananas"/>
                        </div>

                        <div className="mx-8 font-BeVietnamRegular">
                            <p>Email:</p>
                            <input type="text" placeholder="Email" defaultValue="ananas.default@gmail.com" className="w-full border-1 my-2 rounded-lg p-2 border-gray-400 focus:outline-Ananas"/>
                        </div>

                        <div  className="mx-8 font-BeVietnamRegular">
                            <p>Mật khẩu:</p>
                            <input type="password" placeholder="Mật khẩu" defaultValue="ananas"  className="w-full border-1 my-2 rounded-lg p-2 border-gray-400 focus:outline-Ananas"/>
                        </div>

                        <div  className="mx-8 font-BeVietnamRegular">
                            <p>Xác nhận mật khẩu:</p>
                            <input type="password" placeholder="Nhập lại mật khẩu" defaultValue="ananas"  className="w-full border-1 my-2 rounded-lg p-2 border-gray-400 focus:outline-Ananas"/>
                        </div>

                        <div className="mx-8 my-8 justify-center flex items-center">
                            <Button label="Đăng ký" onClick={()=>{
                                localStorage.setItem('isLoggedIn', 'true');
                                localStorage.setItem('userData', JSON.stringify({name: 'Toonie', email: 'ananas.default@gmail.com'}));
                                navigate('/');
                            }} />
                        </div>

                        <div className="flex flex-row mx-8 font-BeVietnamRegular" onClick={() => navigate('/login')}>
                            <p>Đã có tài khoản? <span className="font-BeVietnamBold">Đăng nhập</span></p>
                        </div>
                </div>

                <div className="hidden md:flex w-1/2 h-full">
                    <img src={signup} className="object-cover"/>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
