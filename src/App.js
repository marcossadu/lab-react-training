import logo from './logo.svg';
import './App.css';
import Idcard from './components/Idcard';
import Greetings from './components/Greetings';
import Random from './components/Random';

function App() {
  return (
    <div className="App">
      <Idcard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
<Idcard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <div className='TodosLosIdiomasQueSabeMarcos'>

        
        <Greetings lang="ita" > Commo estai?</Greetings>
        <Greetings lang="de" > Wie gehts?</Greetings>
        <Greetings lang="rus" > kag dila?</Greetings>
      </div>


    </div>
  );
}

export default App;
