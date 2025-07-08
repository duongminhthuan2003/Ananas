import {HugeiconsIcon} from "@hugeicons/react";
import {ArrowRight01Icon} from "@hugeicons/core-free-icons";
import avatar from "../assets/account/Sequoia-Sunrise.png"
import Button from "../components/Button.tsx";

function SettingsProfile() {
    return(
        <div>
            <div className="h-14"> </div>
            <div className="flex flex-row mx-8 gap-2 mt-8">
                <HugeiconsIcon icon={ArrowRight01Icon} />

                <div>
                    <p className="font-BeVietnamBold text-xl">THÔNG TIN CÁ NHÂN</p>
                    <p className="font-BeVietnamRegular text-sm">Hồ sơ của tôi</p>
                </div>
            </div>

            <div className="flex flex-col mx-8 justify-center items-center my-8">
                <img src={avatar} alt="avatar" className="w-36 aspect-square object-cover rounded-full" />
                <p className="font-BeVietnamBold text-lg mt-3">HỌ VÀ TÊN</p>
                <p className="font-BeVietnamRegular text-gray-400">Username</p>
            </div>

            <div className="flex flex-col mx-8 justify-center items-center font-BeVietnamRegular gap-4 my-2">
                <input type={"text"} className="w-full border-1 rounded-lg p-3 border-gray-400 focus:outline-Ananas" defaultValue="04.05.2001" placeholder="Ngày sinh"/>
                <input type={"text"} className="w-full border-1 rounded-lg p-3 border-gray-400 focus:outline-Ananas" defaultValue="ananas.default@gmail.com" placeholder="Email"/>
                <input type={"text"} className="w-full border-1 rounded-lg p-3 border-gray-400 focus:outline-Ananas" defaultValue="0987131289" placeholder="Số điện thoại"/>
                <input type={"text"} className="w-full border-1 rounded-lg p-3 border-gray-400 focus:outline-Ananas" defaultValue="64, đường Lê Duẩn, phường Sài Gòn, thành phố Hồ Chí Minh" placeholder="Địa chỉ"/>
            </div>

            <div className="mt-4 flex flex-row justify-center gap-4">
                <div className="px-6 py-2 font-BeVietnamRegular border-1 border-gray-400 rounded-lg">Hủy</div>
                <Button label="Lưu" onClick={()=>{}} />
            </div>
        </div>
    )
}

export default SettingsProfile;
