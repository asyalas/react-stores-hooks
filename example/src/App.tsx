import React from "react";
import OtherPerson from "./components/OtherPerson";
import Person from "./components/Person";
import Line from "./components/Line";
import Reducers from "./components/Reducers";

const App = () => {
  return (
    <div>
      <Person />
      <Line />
      <OtherPerson />
      <Line />
      <Reducers />
    </div>
  );
};
export default App;
