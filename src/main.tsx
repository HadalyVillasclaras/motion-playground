import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/index.scss'
import { ThemeProvider } from './context/theme/ThemeProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <ThemeProvider>
    <App />
  </ThemeProvider>
  // </React.StrictMode>,
)
