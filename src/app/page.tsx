import About from "./components/About";
import Cod from "./components/Cod";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Ingredients from "./components/Ingredients";
import Questions from "./components/Questions";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Gallery />
      <Ingredients />
      <Cod />
      <About />
      <Contact />
      <Questions />
      <Footer />
    </>
  );
}
