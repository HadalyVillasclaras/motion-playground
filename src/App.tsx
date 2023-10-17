import { RouterProvider } from 'react-router-dom'
import { router } from './utils/router'
import { AnimatePresence } from 'framer-motion'
import { Cursor } from './components/Shared/Cursor'

function App() {
  return (
    <>
      {/* <Cursor/> */}
      <AnimatePresence mode="wait">
        <RouterProvider router={router} />
      </AnimatePresence>
    </>
  )
}

export default App
