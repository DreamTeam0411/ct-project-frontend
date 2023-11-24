import Header from "./components/Layout/Header/Header.tsx";
import Promo from "./components/Layout/Promo/Promo.tsx";
import Recommendations from "./components/Layout/Recomandations/Recommendations.tsx";
import Categories from "./components/Layout/Categories/Categories.tsx";
import AboutUs from "./components/Layout/AboutUs/AboutUs.tsx";
import FAQ from "./components/Layout/FAQ/FAQ.tsx";
import SearchByCity from "./components/Layout/SearchByCity/SearchByCity.tsx";
import Footer from "./components/Layout/Footer/Footer.tsx";

function App() {

	return (
		<>
			<Header/>
			<Promo/>
      <Recommendations/>
			<Categories/>
			<AboutUs/>
			<AboutUs/>
			<FAQ/>
			<SearchByCity/>
			<Footer/>


		</>
	)
}

export default App
