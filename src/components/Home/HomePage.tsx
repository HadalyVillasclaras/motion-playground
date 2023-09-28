import styles from "./Home.module.css";
import { motion } from "framer-motion";
import transition from "../../utils/transition.js";
import { About } from "./About";
import { Footer } from "./Footer";
import { ProjectsNav } from "./ProjectsNav";
// import { Hero } from "./Hero";
import { HomeHeader } from "./HomeHeader.js";

const HomePage = () => {
  return (
    <motion.div className={styles.Home}>
      <div className={styles.bg}></div>
      {/* <Hero /> */}
      <HomeHeader/>
      <main>
      <ProjectsNav />
      <About />
      </main>
      <Footer />
    </motion.div>
  );
};

export default transition(HomePage);
