function getFormatedTime(date) {
  const day = date.toLocaleString('en-us', { weekday: 'short' });
  const month = date.toLocaleString('en-us', { month: 'short' });
  const dayOfBirth = date.getDate();
  const yearOfBirth = date.getFullYear();

  return `${day} ${month} ${dayOfBirth} ${yearOfBirth}`;
}

function IdCard({ firstName, lastName, gender, picture, height, birth }) {
  const fullDate = getFormatedTime(birth);

  return (
    <div className=" grid place-content-start hover:place-content-center ">
      <img className="" src={picture} alt={'profile picture of ' + firstName} />
      <p>Nombre: {firstName}</p>
      <p>Apellido: {lastName}</p>
      <p>Gender: {gender}</p>
      <p>Birth: {fullDate}</p>
      <p>Height: {height / 100 + 'm'}</p>
    </div>
  );
}

export default IdCard;

 
 
  