import styles from "./Home.module.scss";
import '../../styles/index.scss'
import { motion } from "framer-motion";
import { Header, ProjectsNav, About, Footer } from './sections';
import transition from "../Shared/transition";
import { Fader } from "../Shared/Fader";

const HomePage = () => {
  return (
    <>
      <Fader/> 
    <motion.div className={styles.home}>
      <Header/>
      <main className="main">
        <ProjectsNav />
        <About />
      </main>
      <Footer/>
    </motion.div>
    </>
  );
};

export default transition(HomePage);