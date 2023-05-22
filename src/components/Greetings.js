function Greetings({lang, children})  {

let greeting="Hola"
    

    if(lang ==="de"){

        greeting="Hallo"; 
    }
    else if(lang ==="ita"){

        greeting="Ciao";
    }

    else if( lang === "rus"){

        greeting="Priviette";
    }



return(

    <div className="items-center w-48 border-black border-2 mb-1.5  ">
  
  
  <h2 lang={lang}>{greeting + children}</h2>
  



    </div>
  
)


}
export default Greetings;