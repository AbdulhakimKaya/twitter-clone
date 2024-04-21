import {topics} from "~/utils/consts.jsx";
import Topic from "~/layouts/main/rightbar/topics/topic/index.jsx";
import SidebarSection from "~/components/sidebar-section/index.jsx";

export default function Topics() {
    return (
        <SidebarSection
            title={"İlgini çekebilecek gündemler"}
            more={"/trends"}
        >
            {
                topics.map((topic, index) => (
                    <Topic item={topic} key={index}/>
                ))
            }
        </SidebarSection>
    )
}