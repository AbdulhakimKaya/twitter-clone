import Search from "~/layouts/main/rightbar/search/index.jsx";
import Premium from "~/layouts/main/rightbar/premium/index.jsx";
import Topics from "~/layouts/main/rightbar/topics/index.jsx";

export default function RightBar() {
    return (
        <aside className="w-[350px] mr-2.5">
            <Search/>
            <Premium/>
            <Topics/>
        </aside>
    )
}