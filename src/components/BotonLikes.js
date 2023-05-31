import React from 'react'
import { useState } from 'react'


export default function ButtonLikes() {
  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState("green")
  const colores = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']

  const StyleCounter = {
    backgroundColor: color,
    width: "30rem",
    height:"40  rem",
    
    
  }
  function randomColor() {
    const random = colores[Math.floor(Math.random() * colores.length)]
    setColor(random)
      ;
  }

// cuando capturemos el evento onClick , ejecutamos la funcion Likes para que suba el contador de uno en
  function Likes() {
    console.log("Incrementar");
    setCounter(counter + 1);
    randomColor()
  }

  return (
    <div>

      <button style={StyleCounter} onClick={Likes}>{counter} likes</button>



    </div>
  )

}