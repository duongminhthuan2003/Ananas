import Button from "../components/Button.tsx";
import {useNavigate} from "react-router-dom";
import login from '../assets/login_register/login.jpg'

function Login() {
    const navigate = useNavigate();

    return (
        <div className="h-screen flex flex-col">
            <div className="h-14"></div>
            <div className="flex-1 md:flex md:flex-row overflow-hidden">
                <div className="flex flex-1 flex-col justify-center md:w-1/2 lg:w-2/5 p-8">
                    <p className="mb-10 font-BeVietnamBold text-xl">ĐĂNG NHẬP</p>

                    <div className="font-BeVietnamRegular">
                        <p>Email/Số điện thoại:</p>
                        <input type="text" placeholder="Email" defaultValue="ananas.default@gmail.com" className="w-full border-1 my-2 rounded-lg p-2 border-gray-400 focus:outline-Ananas"/>
                    </div>

                    <div className="font-BeVietnamRegular">
                        <p>Mật khẩu:</p>
                        <input type="password" placeholder="Mật khẩu" defaultValue="ananas" className="w-full border-1 my-2 rounded-lg p-2 border-gray-400 focus:outline-Ananas"/>
                    </div>

                    <div className="my-8 justify-center flex items-center">
                        <Button label="Đăng nhập" onClick={()=>{
                            localStorage.setItem('isLoggedIn', 'true');
                            localStorage.setItem('userData', JSON.stringify({name: 'Toonie', email: 'ananas.default@gmail.com'}));
                            navigate('/');
                        }} />
                    </div>

                    <div className="flex flex-row mx-8 font-BeVietnamRegular">
                        <p>Quên mật khẩu</p>
                        <div className="flex-1"></div>
                        <p>Đăng ký</p>
                    </div>
                </div>

                <div className="hidden md:flex md:w-1/2">
                    <img src={login} className="w-full h-full object-cover"/>
                </div>
            </div>
        </div>
    );
}

export default Login;
