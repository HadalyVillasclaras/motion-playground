import { createHashRouter} from 'react-router-dom';
import HomePage from '../components/Home/HomePage';
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
    path: '/project/rocks',
    element: <MotionPillsPage/>,
  },
  {
    path: '/project/wheel',
    element: <WheelScrollPage/>,
  },
  {
    path: '/project/intersection',
    element: <ImgInteraction/>,
  },
  { 
    path: "*", 
    element: <HomePage /> 
  },
 
], {
  // basename: "/playground"
}
);
