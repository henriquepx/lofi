import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BackgroundColorProvider } from './context/BackgroundColorContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BackgroundColorProvider>
    <App />
  </BackgroundColorProvider>
)
