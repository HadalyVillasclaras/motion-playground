import { RouterProvider } from 'react-router-dom'
import { router } from './utils/router'
import { AnimatePresence } from 'framer-motion'
import { Cursor } from './components/Shared/Cursor'
import { useDeviceType, DeviceType } from './hooks/useDeviceType';

function App() {
  const deviceType = useDeviceType();

  return (
    <>
      {
        deviceType !== DeviceType.MOBILE &&
        <Cursor/>
      }
      <AnimatePresence mode="wait">
        <RouterProvider router={router} />
      </AnimatePresence>
    </>
  )
}

export default App
