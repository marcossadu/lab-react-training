import { useState } from 'react';

export default function SingleColorPicker({ color }) {
  const [intensity, setIntensity] = useState(100);
  
  let bgColor ="red"

  if( color ==="r"){
    
    bgColor = `rgb(${intensity}, 0 ,0)`

}

else if(color === "g"){

     bgColor = `rgb(0, ${intensity} ,0)`

}
else if(color === "b"){

    bgColor = `rgb(0, 0 ,${intensity})`
}
  


  return (  
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        
      }}
    >
      <div
        style={{
          width: '40px',
          height: '40px',
          border: '2px solid black',
          background:bgColor, border: '1px solid black'
        }}
      ></div>
      <label
        style={{
          textTransform: 'uppercase',
        }}
      >
        {color}:
      </label>
      <input  type= "number"
        min={0}
        max={255}
        value={intensity}
        onChange={(e) => setIntensity(e.target.value)}></input>
    </div>
  );
}
