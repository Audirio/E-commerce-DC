import Menu from "../../components/Menu";
import Header from "../../components/Header";
import Banner from "../../components/Banner";

import Emphasis from "../../components/Emphasis";

export default function Home() {
    return (
        <div>
            <Header/>
            <Menu active="home"/>

            <Banner/>

            <Emphasis/>
        </div>
    );
}
