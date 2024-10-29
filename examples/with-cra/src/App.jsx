import { useState } from 'react'
import { Button, Paper } from '@pillar-ui/core'
import '@pillar-ui/core/main.css'
// import { Provider } from '@/components/ui/provider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Paper width="screen" height="screen" className="F-c">
      <Button onClick={() => setCount((count) => count + 1)}>count is {count}</Button>
    </Paper>
  )
}

export default App
