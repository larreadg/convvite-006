import Asistencia from "./components/Asistencia"
import Lugar from "./components/Lugar"
import Portada from "./components/Portada"
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

function App() {
  const { width, height } = useWindowSize()
  const [showConfetti, setShowConfetti] = useState(true)

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const invitadoKey = queryParams.get('key');

  let jsonData = null
  try {
    jsonData = JSON.parse(decodeURIComponent(escape(atob(invitadoKey))));
  } catch(e){
    console.log(e)
    jsonData = {
      i : '',
      a : 0,
      j : 0
    };
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000); // 5 segundos

    return () => clearTimeout(timer); // Limpiar el temporizador al desmontar
  }, [])
  return (
    <>
      {showConfetti && <Confetti
        colors={["#edc531"]}
        width={width}
        height={height}
      />}
      <Portada />
      <Lugar invitado={jsonData.i}/>
      <Asistencia />
    </>
  )
}

export default App
