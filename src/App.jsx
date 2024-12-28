import { useState } from "react";
import Nav from "./components/Nav";
import PuppyDetails from "./components/PuppyDetails/PuppyDetails";
import PuppyList from "./components/Puppy List/PuppyList";
import PuppyForm from "./components/PuppyForm/PuppyForm";

import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/**
 * @component
 * This app shows a list of puppy bowl players from the API.
 * Users can view players in the roster, add a player to the roster,
 * see more details about a specific player, and remove a player from the roster.
 */
export default function App() {
  const [selectedPuppyId, setSelectedPuppyId] = useState();

  return (
    <>
      <h1>Puppy Bowl</h1>
      <Router>
        <Nav />
        <Routes>
          <Route path="/players" element={<PuppyForm />} />
          <Route
            path="/"
            element={<PuppyList setSelectedPuppyId={setSelectedPuppyId} />}
          />
          <Route
            path="/players/:id"
            element={
              <PuppyDetails
                selectedPuppyId={selectedPuppyId}
                setSelectedPuppyId={setSelectedPuppyId}
              />
            }
          />
        </Routes>
      </Router>

      {/* <PuppyForm /> */}
      <main>
        {/* <PuppyList setSelectedPuppyId={setSelectedPuppyId} /> */}
        {/* <PuppyDetails
          selectedPuppyId={selectedPuppyId}
          setSelectedPuppyId={setSelectedPuppyId}
        /> */}
      </main>
    </>
  );
}
