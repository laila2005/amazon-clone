import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import './reset.css'  // Import reset CSS first to override default styles
import './index.css'
import './App.css'  // Import App CSS with global fixes
import './components/consolidated-navbar-fixes.css'  // All navbar fixes consolidated into one file
import App from './App.jsx'
import { store } from './redux/store'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
