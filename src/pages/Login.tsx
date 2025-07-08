import Button from "../components/Button.tsx";
import {useNavigate} from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    return (
        <div>
            <div className="h-14 "></div>
            <p className="mx-8 mt-36 mb-10 font-BeVietnamBold text-xl">ĐĂNG NHẬP</p>

            <div className="mx-8 font-BeVietnamRegular my-5">
                <p>Email/Số điện thoại:</p>
                <input type="text" placeholder="Email" defaultValue="ananas.default@gmail.com" className="w-full border-1 my-2 rounded-lg p-2 border-gray-400 focus:outline-Ananas"/>
            </div>

            <div  className="mx-8 font-BeVietnamRegular">
                <p>Mật khẩu:</p>
                <input type="password" placeholder="Mật khẩu" defaultValue="ananas"  className="w-full border-1 my-2 rounded-lg p-2 border-gray-400 focus:outline-Ananas"/>
            </div>

            <div className="mx-8 my-8 justify-center flex items-center">
                <Button label="Đăng nhập" onClick={()=>{
                    localStorage.setItem('isLoggedIn', 'true');
                    localStorage.setItem('userData', JSON.stringify({name: 'Toonie', email: 'ananas.default@gmail.com'}));
                    navigate('/');
                }} />
            </div>

            <div className="flex flex-row mx-16 font-BeVietnamRegular">
                <p>Quên mật khẩu</p>
                <div className="flex-1"></div>
                <p>Đăng ký</p>
            </div>
        </div>
    );
}

export default Login;
