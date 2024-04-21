import Search from "~/layouts/main/rightbar/search/index.jsx";
import Premium from "~/layouts/main/rightbar/premium/index.jsx";
import Topics from "~/layouts/main/rightbar/topics/index.jsx";
import WhoFollow from "~/layouts/main/rightbar/who-follow/index.jsx";
import Footer from "~/layouts/main/rightbar/footer/index.jsx";

export default function RightBar() {
    return (
        <aside className="w-[350px] mr-2.5">
            <Search/>
            <Premium/>
            <Topics/>
            <WhoFollow/>
            <Footer/>
        </aside>
    )
}