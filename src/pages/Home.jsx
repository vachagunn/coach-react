import Header from "./../components/header/Header";
import Header_Authorized from "./../components/header/Header_Authorized";
import Search from "./../components/search/Search";
import Categories from "../components/categories/Categories";
import Cards from "./../components/cards/Cards";
import Footer from "../components/footer/Footer";
import Arrow from "../components/arrow/Arrow";

const Home = () => {
    return (
        <>
            <Header />
            {/* <Header_Authorized  /> */}

            <main className="main">
                <Search />
                <Categories />
                <Cards />
            </main>

            <Footer />
        </>
     );
}

export default Home;