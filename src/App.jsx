import UserData from './assets/UserData.jsx';
import Header from './components/header/header.jsx';
import coreConcepts from './coreConcepts';
import components from '.assests/components.png';
import { CORE_CONCEPTS } from './assets/data.js';
import CoreConcept from './components/concepts/coreconcept.jsx';


function App() {
  return (
    <div>
      <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
  <div>
    <Header />
    <main>
      <section id="user-data"> //attribute id added to section
       <h2>Time to get started!</h2>
       <ul>
        <CoreConcept {...CORE_CONCEPTS[0]} /> //spread operator used to pass the properties of the object as props to the component
        <CoreConcept {...CORE_CONCEPTS[1]} /> //spread operator used to pass the properties of the object as props to the component
        <CoreConcept {...CORE_CONCEPTS[2]} />
        <CoreConcept {...CORE_CONCEPTS[3]} />
        <CoreConcept {...CORE_CONCEPTS[4]} />
       </ul>
      </section>
      <UserData />
      
    </main>
  </div>
}
function Header() {
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <p className="subtitle"> // this is an attribute className added to the p tag
        Learn the core concepts of React efficiently.
      </p>
      <h1>React Essentials</h1>
      <p>
        Fundamental React concepts you will need for almost any app you are
        going to build!
      </p>
      {description} React is a library framework and is very versatile. 
    </header>
  );
}

function UserData() {
  user = {
      first: "British airways",
      second: "Air France",
      firstId: 1200,
      secondId: 1201,
    };
  return (
    <section>
      <h2>User Data</h2>
      <p className="User-data">This a list of unregulated data</p> // this is an attribute className added to the p tag
      <img src = "src/react/assets.jpg" alt="User Data" /> // this is an element img added to the section
      <ul>
        <li>{user.first} ({user.firstId})</li>
        <li>{user.second} ({user.secondId})</li>  
      </ul>
    </section>
  );
}


export default App;
