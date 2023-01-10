import Header from "./../components/header/Header";
import Search from "./../components/search/Search";
import Categories from "../components/categories/Categories";
import Cards from "./../components/cards/Cards";

const Home = () => {
    return (
        <>
            <Header />

            <main className="main">
                <Search />
                <Categories />
                <Cards />
            </main>
        </>
     );
}

export default Home;