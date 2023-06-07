

function BoxColor({r,g,b}){
  return (<div style = {{  }}>
    <div style={ {background:"green", border: '1px solid black'}}>
      <div >
        <div>rgb(100,0,0)</div>
        <div> #ff100</div>
      </div>
    </div>
    <div style={ {background:"green" , marginTop:"4px", border: '1px solid black'}}>
      <div >
        <div>rgb(255,0,0)</div>
        <div> #ff0000</div>
      </div>
    </div>
  </div>
  
)}

export default BoxColor