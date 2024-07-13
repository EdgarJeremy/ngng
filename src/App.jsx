import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [result, setResult] = useState('')

  const convert = (e) => {
    const r = e.target.value.replaceAll('ng', 'g').replaceAll('NG', 'G').replaceAll('nG', 'G').replace('Ng', 'g');
    setResult(r);
  }

  return (
    <>
      <h1>NGNG Converter</h1>
      <div style={{ padding: 10, borderRadius: 10, backgroundColor: '#aaaaaa', marginBottom: 20, color: '#1e1e1e' }}>{result}</div>
      <div className="card">
        <textarea onChange={convert} style={{ border: 0, outline: 0, padding: 20, fontSize: 15, borderRadius: 10, height: 100 }}></textarea>
        <p>
          Masukkan text diatas untuk melakukan konversi
        </p>
      </div>
      {/* <p className="read-the-docs">
        Lorem ipsum
      </p> */}
    </>
  )
}

export default App
