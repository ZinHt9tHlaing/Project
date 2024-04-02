import { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services/Services";
import Works from "./components/Works/Works";
import About from "./components/About";
import Footer from "./components/Footer";

const App = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <button
        onClick={handleThemeSwitch}
        type="button"
        className=" fixed z-10 right-2 top-2 rounded text-lg p-1 bg-indigo-500"
      >
        {theme === "dark" ? "🌙" : "☀️"}
      </button>
      <div className=" font-body bg-white dark:bg-slate-900">
        <div className=" max-w-5xl mx-auto w-11/12">
          <HeroSection />
          <Services />
          <Works />
          <About />
          <Footer/>
        </div>
      </div>
    </>
  );
};

export default App;
