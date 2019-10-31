import React, { useState } from 'react'
import { Hello } from './components/Hello'
export default function App() {
  const [count, setCount] = useState(0)
  return (
    <div onClick={() => setCount(count + 1)}>
      <div>
      {count}
      <Hello compiler="app" framework="chrome" />
      </div>
    </div>
  )
}