import { useState } from "react";

import "./App.css";
import ImgCarousel from "./components/carousel/imgCarousel";
import Destinations from "./components/destinations/Destinations";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Search from "./components/search/Search";
import Selects from "./components/selects/Selects";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero />

            <Destinations />
            <Search />
            <Selects />
            <ImgCarousel />
            <Footer />
        </div>
    );
}

export default App;
