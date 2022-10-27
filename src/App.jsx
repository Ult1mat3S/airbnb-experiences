import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import katieZaferes from "./assets/katieZaferes.png";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Card
        img={katieZaferes}
        rating="5.0"
        reviewsAmount="6"
        location="USA"
        title="Life lessons with Katie Zaferes"
        price="136"
      />
      <Card />
    </>
  );
}

export default App;
