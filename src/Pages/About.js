import { Link } from "react-router-dom";
import './About.css';

function About() {
  return (
    <div className="About">
      Just about page! Nothing fancy! Come back to <Link to="/">main</Link>.
    </div>
  );
}

export default About;
