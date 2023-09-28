import { ProjectFooter } from '../Projects/ProjectFooter'
import { ProjectHeader } from '../Projects/ProjectHeader'
import { MotionPills } from './MotionPills'
import styles from './MotionPills.module.css';

const project =  
  {
    title: 'Motion pills',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nobis itaque laboriosam! Temporibus esse eius iusto voluptatum maiores at asperiores, quo quos omnis delectus cumque consequuntur provident dolores minus tenetur quisquam rem odit. Aut unde velit sint natus recusandae eos! Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    category: 'p5.js | Matter',
    year: '2023'
  }

export const MotionPillsPage = () => {
  return (
    <>
    <ProjectHeader/>
    <div className={styles['pills-container']}>
        <section className={styles['pills']}>
          <MotionPills/>
        </section>
        <section className={styles['footer-pills-wrapper']}>
          <ProjectFooter project={project}/>
        </section>
      </div>
    </>
  )
}