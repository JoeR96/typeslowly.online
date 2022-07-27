import Home from './home'
import { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
    document.title = "Chloe Richardson";
    }, [])


  return (
    <div >
      <Home/>
    </div>
  )
}

