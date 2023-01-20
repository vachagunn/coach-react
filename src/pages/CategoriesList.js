import Header from "./../components/header/Header";
import Header_Authorized from "./../components/header/Header_Authorized";
import Search from "./../components/search/Search";
import Activities from "../components/activites/Activities";
import Footer from "../components/footer/Footer";

const CategoriesList = () => {
    return (
        <>
            <Header />
            
            <main className="main">
                <Search />
                <Activities />
            </main>

            <Footer />
        </>
     );
}

export default CategoriesList;