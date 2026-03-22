import Header from "./components/Header";
import Entry from "./components/Entry";
import data from "./data";

const entryElement = data.map((entry) => {
  return (
    <Entry
      // Adding key to address this issue
      // > Each child in a list should have a unique "key" prop.
      key={entry.id} // id was already given in the data
      // we can also make use of index (by map) but that is generally not recommended
      entry={entry}
    />
  );
});

function App() {
  return (
    <>
      <Header />
      <main className="container">{entryElement}</main>
    </>
  );
}

export default App;
