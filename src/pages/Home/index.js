import Menu from "../../components/Menu";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Colecao from "../../components/Colecao";

export default function Home() {
    return (
        <div>
            <Header/>
            <Menu active="home"/>

            <Banner/>
            <Colecao/>
        </div>
    );
}
