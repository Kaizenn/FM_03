import ProfileCard from './components/ProfileCard'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-primary-900 flex h-screen items-center justify-center p-4">
        <ProfileCard />
      </div>
    </>
  )
}

export default App
