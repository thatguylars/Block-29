import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useGetPuppiesQuery } from "./puppyListSlice";
import { useEffect } from "react";

/**
 * @component
 * Shows a list of puppies in the roster.
 * Users can select a puppy to see more information about it.
 */

// eslint-disable-next-line react/prop-types
export default function PuppyList({ setSelectedPuppyId }) {
  // TODO: Get data from getPuppies query
  const { isLoading, data: puppies } = useGetPuppiesQuery();
  const navigate = useNavigate();
  const seePuppyDetails = (id) => {
    console.log(id);
    navigate(`/players/${id}`);
  };
  const [puppyArray, setPuppyArray] = useState([]);
  const [puppyFilter, setPuppyFilter] = useState("");

  const filterPuppies = (e) => {
    e.preventDefault();
    const filteredPuppies = puppies?.data?.players.filter((element) => {
      if (element.name.includes(puppyFilter)) {
        return element;
      }
    });
    setPuppyArray(filteredPuppies);
  };
  useEffect(() => {
    if (puppies?.data?.players) {
      setPuppyArray(puppies.data.players);
    }
  }, [puppies]);

  return (
    <article>
      <div>
        {/* input box and search button */}
        <form onSubmit={filterPuppies}>
          <label>
            Name
            <input
              name="puppyName"
              value={puppyFilter}
              onChange={(e) => setPuppyFilter(e.target.value)}
            />
          </label>
          <button type="submit">Search Puppies by Name</button>
          {/* {isLoading && <output>Uploading puppy information...</output>}
        {error && <output>{error.message}</output>} */}
        </form>
      </div>
      <h2>Roster</h2>
      <ul className="puppies">
        {isLoading && <li>Loading puppies...</li>}
        {puppyArray.map((p) => (
          <li key={p.id}>
            <h3>
              {p.name} #{p.id}
            </h3>
            <figure>
              <img src={p.imageUrl} alt={p.name} />
            </figure>
            <button onClick={() => seePuppyDetails(p.id)}>See details</button>
          </li>
        ))}
      </ul>
    </article>
  );
}
