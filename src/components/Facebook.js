// En la variable profiles cargamos un array de objetos, pues son los datos que estan contenidos en berlin.json

import profiles from '../data/berlin.json';
import './facebook.css';
import { useState } from 'react';
// 1. Transformar el array de profiles a un array de solo paises
// 2. Como hago para eliminar los repetidos de un array?
// 3. Console.log con el array final a ver si de verdad estan solo paises y no hay repetidos

const initialCountryList = profiles.map((profile) => profile.country);

const countryList = initialCountryList.filter(
  (item, index) => initialCountryList.indexOf(item) === index
);

console.log(countryList);

export default function FaceBook() {
  
  const [selectedCountry, setSelectedCountry] = useState("")

  const buttons = (
    <div>
      
      {countryList.map((country) => (
        <button style={{
          backgroundColor:country.includes(selectedCountry) ? "turquoise":""}} onClick={handleClickCountry}>{country}</button>
      ))}
    </div>
  );

  function handleClickCountry(e) {
    console.log(e.target.value)
setSelectedCountry(e.target.value)


  }
  const listProfiles = profiles.map((profile) => (
    
    <li style={{
      backgroundColor: profile.country.includes(selectedCountry) ? "turquoise":""
    }}>
      <div  className="img-container">
        <img src={profile.img} alt={profile.firstName} />
      </div>
      <div className="profile-details">
        <p>
          <strong>First Name:</strong> {profile.firstName}
        </p>
        <p>
          <strong>Last Name:</strong> {profile.lastName}
        </p>
        <p>
          <strong>Country:</strong> {profile.country}
        </p>
        <p>
          <strong>Type:</strong> {profile.isStudent ? 'Student' : 'Teacher'}
        </p>
      </div>
    </li>
  ));
  return (
    <div>
      <div className="facebook__buttons">{buttons}</div>
      <ul> {listProfiles} </ul>
    </div>
  );
}
