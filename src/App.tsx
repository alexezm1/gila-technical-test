import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Header />
      <main className="p-3 my-16">
        <Home />
      </main>
      <Footer />
    </>
  );
}

export default App;
