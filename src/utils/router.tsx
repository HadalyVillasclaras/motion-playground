import {createHashRouter} from 'react-router-dom';
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
    path: '/project',
    errorElement: '',
    children: [
      {
        path: 'pills/',
        element: <MotionPillsPage/>,
      },
      {
        path: 'wheel',
        element: <WheelScrollPage/>,
      },
      {
        path: 'img-interaction',
        element: <ImgInteraction/>,
      },
    ]
  },
  
 
], {
  // basename: "/playground"
}
);
