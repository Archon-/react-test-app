import { Link } from "react-router-dom";
import useFetch from 'use-http'

import './About.css';

function About() {
  const { loading, error, data = [] } = useFetch('https://jsonplaceholder.typicode.com/todos/1', null, []);

  return (
    <>
      {loading ? (
        <>loading...</>
      ) : (
        <div className="About">
          Just about page! Nothing fancy! Come back to <Link to="/">main</Link>.
        </div>
      )}
    </>
  );
}

export default About;
