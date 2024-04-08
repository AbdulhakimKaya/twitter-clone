import {Outlet} from "react-router-dom";
import Sidebar from "~/layouts/main/sidebar/index.jsx";
import RightBar from "~/layouts/main/rightbar/index.jsx";

export default function MainLayout() {
    return (
        <div className="w-[1280px] mx-auto flex">
            <Sidebar/>
            <main className="flex-1 flex gap-[30px]">
                <main className="flex-1 max-w-[600px] border-x border-[#2f3336]">
                    <Outlet/>
                </main>
                <RightBar/>
            </main>
        </div>
    )
}