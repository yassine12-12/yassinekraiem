import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import './index.css'

const AppCrashFallback = () => (
  <div className="min-h-screen w-full flex flex-col items-center justify-center bg-black text-white text-center px-6 gap-4">
    <h1 className="text-3xl font-bold">Something went wrong</h1>
    <p className="text-gray-400 max-w-md">
      This page hit an unexpected error. Please try reloading, or reach out directly.
    </p>
    <div className="flex gap-4">
      <button
        onClick={() => window.location.reload()}
        className="px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition-colors"
      >
        Reload
      </button>
      <a
        href="mailto:mrkraiem69@gmail.com"
        className="px-6 py-3 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-black transition-colors"
      >
        Email me
      </a>
    </div>
  </div>
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary fallback={<AppCrashFallback />}>
      <App />
    </ErrorBoundary>
  </StrictMode>,
)
