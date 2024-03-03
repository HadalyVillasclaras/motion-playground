import { RouterProvider } from 'react-router-dom'
import { router } from './utils/router'
import { AnimatePresence } from 'framer-motion'
import { Cursor } from './components/Shared/Cursor'
import { useDeviceType, DeviceType } from './hooks/useDeviceType';
import { PageTransitionProvider } from './context/pageTransition/PageTransitionProvider';

function App() {
  const deviceType = useDeviceType();
  console.groupCollapsed("Website credits"),
  console.log("%cDesign and development by Hadaly Villasclaras 🤍", "background-color: black; color: white"),
  console.groupEnd()
  return (
    <>
    <PageTransitionProvider>
      {
        deviceType !== DeviceType.MOBILE &&
        <Cursor/>
      }
      <AnimatePresence mode="wait">
        <RouterProvider router={router} />
      </AnimatePresence>
      </PageTransitionProvider>
    </>
  )
}

export default App
