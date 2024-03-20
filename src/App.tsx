import { useContext } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { ThemeContext } from "./context/ThemeContext";
import Home from "./pages/Home";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <Header />
      <main className="p-3 my-[60px] bg-white dark:bg-slate-600">
        <Home />
      </main>
      <Footer />
      <ToastContainer position="top-right" />
    </div>
  );
}

export default App;
