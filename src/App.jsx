import { useState } from 'react'
import Button from '@mui/material/Button';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="">trungquandev</div>
      <Button variant="text">text </Button>
      <Button variant="contained">Containerd </Button>
      <Button variant="outlined">Outlined </Button>
      <AccessAlarmIcon />
      <ThreeDRotation />
    </>
  )
}

export default App
