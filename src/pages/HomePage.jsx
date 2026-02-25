// HomePage.jsx
// Página principal.

import Header from "../components/Header";
import Footer from "../components/Footer";
import "../sass/layoutHomePage.scss"

export const HomePage = () => {
    return (
        <>
            <div className="App">
                <Header />
            </div>
            <div className="Main">
            </div>
            <Footer />
        </>
    )
}

export default HomePage;
