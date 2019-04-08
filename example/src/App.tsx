import React from "react";
import All from "./components/All";
import OtherPerson from "./components/OtherPerson";
import Person from "./components/Person";
import Line from "./components/Line";

const App = () => {
  return (
    <div>
      <Person />
      <Line />
      <OtherPerson />
      <Line />
      <All />
    </div>
  );
};
export default App;
