import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1 className='text-6xl'>this is a test</h1>
    <button className='btn btn-primary'>daisy test</button>
  </StrictMode>,
)
