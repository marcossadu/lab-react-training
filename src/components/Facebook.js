import profiles from '../data/berlin.json'

export default function List(){
const listItems = profiles.map((person,key) =>
    
    <li key={key} >
      <img
        src={person.img}
        alt={person.name}
      />
      <p>
        <b>{person.firstName} {person.lastName} 
        <p>is from {person.country}</p> 
        <p>Hace algo con su vida?  {person.isStudent ? "Estudia":"No estudia es un vago"}</p></b>
        
        
      </p>
    </li>



);return <ul>{listItems}</ul>;
 


}
 

 const listaCountrys = profiles.map(p => (p.country))

  const noreps = listaCountrys.filter((valor, índice) => {

    return listaCountrys.indexOf(valor)===índice
 });

    
 
console.log(noreps)
