import { createBrowserRouter} from 'react-router-dom';
import HomePage from '../components/Home/HomePage';
import { CircularScrollPage } from '../components/CircularImgScroll/CircularScrollPage';
import ProjectPage from '../components/Projects/ProjectPage';
import { MotionPillsPage } from '../components/MotionPills/MotionPillsPage';
import { ImgInteraction } from '../components/ImgInteraction/ImgInteraction';

/* replaced createBrowserRouter for createHashRouter in order to make it work in GitHub pages. */
export const router = createBrowserRouter([
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
    path: 'project/circular',
    element: <CircularScrollPage/>,
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
