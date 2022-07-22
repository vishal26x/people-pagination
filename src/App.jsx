import { useEffect, useState } from "react";
import "./App.scss";
import { getPeopleData } from "./api/peopleApi";
import PersonCard from "./components/PersonCard";

function App() {
  const [peopleData, setPeopleData] = useState([]);
  useEffect(() => {
    getPeopleData().then((data) => {
      setPeopleData(data?.results);
    });
  }, []);
  console.log(peopleData);
  return (
    <div className="App">
      <PersonCard data={peopleData} />
    </div>
  );
}

export default App;
