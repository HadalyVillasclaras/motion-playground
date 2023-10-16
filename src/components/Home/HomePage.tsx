import styles from "./Home.module.scss";
import '../../styles/index.scss'
import { motion } from "framer-motion";
import { Header, ProjectsNav, About, Footer } from './sections';
import transition from "../Shared/transition";

const HomePage = () => {
  return (
    <motion.div className={styles.home}>
      <Header/>
      <main className="main">
        <ProjectsNav />
        <About />
      </main>
      <Footer/>
    </motion.div>
  );
};

export default transition(HomePage);