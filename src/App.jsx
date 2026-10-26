import Header from "./components/header";
import CoreConcept from "./components/coreconcept";
import TabButton from "./components/tabButton/";
import UserData from "./components/UserData";
import { CORE_CONCEPTS } from "./data/core-concepts";

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="user-data">
          <h2>Time to get started!</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
            <CoreConcept {...CORE_CONCEPTS[4]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onClick = {handleSelect}>Flight 1</TabButton>
            <TabButton onClick = {handleSelect}>Flight 2</TabButton>
            <TabButton onClick = {handleSelect}>Flight 3</TabButton>
            <TabButton onClick = {handleSelect}>Flight 4</TabButton>
            <TabButton onClick = {handleSelect}>Flight 5</TabButton>
          </menu>
          <UserData />
        </section>
      </main>
    </div>
  );
}

