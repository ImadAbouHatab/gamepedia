import {Link} from "react-router-dom";

function Logo() {
  return (
    <div className="logo">
      <Link to="/"><span className="purple-text">Game</span>pedia</Link>
    </div>
  );
}

export default Logo;
