import Header from "./../components/header/Header";
import Header_Authorized from "./../components/header/Header_Authorized";
import Search from "./../components/search/Search";
import Activities from "../components/activites/Activities";
import Footer from "../components/footer/Footer";
import Arrow from "../components/arrow/Arrow";

const CategoriesList = () => {
    return (
        <>
            <Header />
            {/* <Arrow /> */}
            <main className="main">
                <Search />
                <Activities />
            </main>
            
            <Arrow />
            <Footer />
        </>
     );
}

export default CategoriesList;