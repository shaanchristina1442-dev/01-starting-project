import index from ".index.jsx";
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton/";
import UserData from "./components/UserData";
import { CORE_CONCEPTS } from "./data/core-concepts";


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
      <section id = "examples"/>
        <h2>Examples</h2>
      <menu>
        <TabButton> Item 1</TabButton>
        <TabButton> Item 2</TabButton>
        <TabButton> Item 3</TabButton>
        <TabButton> Item 4</TabButton>
        <TabButton> Item 5</TabButton>
      </menu>
      <UserData />
      
    </main>
  </div>
}

export default App;
