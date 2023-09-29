import {createHashRouter} from 'react-router-dom';
import HomePage from '../components/Home/HomePage';
import ProjectPage from '../components/Projects/ProjectPage';
import { MotionPillsPage } from '../components/MotionPills/MotionPillsPage';
import { ImgInteraction } from '../components/ImgInteraction/ImgInteraction';
import { WheelScrollPage } from '../components/WheelScroll/WheelScrollPage';

/* replaced createBrowserRouter for createHashRouter in order to make it work in GitHub pages. */
export const router = createHashRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: '',
  },
  {
    path: 'project/pills/',
    element: <MotionPillsPage/>,
    handle: {
    }
  },
  {
    path: 'project/wheel',
    element: <WheelScrollPage/>,
    handle: {
    }
  },
  {
    path: 'project/img-interaction',
    element: <ImgInteraction/>,
    handle: {
    }
  },
  {
    path: 'project/',
    element: <ProjectPage/>,
    handle: {
    }
  }
], {
  // basename: "/playground"
}
);
