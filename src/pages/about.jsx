import { useEffect } from "react";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import classes from "src/styles/Home.module.css";

export default function Home() {
  useEffect(() => {
    document.body.style.backgroundColor = "lightgreen";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
  return (
    <div className={classes.container}>
      <Header />
      <Main page="about" />
      <Footer />
    </div>
  );
}
