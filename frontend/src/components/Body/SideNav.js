import {Link} from "react-router-dom";

function SideNav() {
  return (
    <nav>
        <p>Genres</p>
        <ul>
          <li><Link to="/genre/action">Action</Link></li>
          <li><Link to="/genre/adventure">Adventure</Link></li>
          <li><Link to="/genre/rpg">RPG</Link></li>
          <li><Link to="/genre/sports">Sports</Link></li>
        </ul>
        <p>Platforms</p>
        <ul>
          <li><Link to="/platform/pc">PC</Link></li>
          <li><Link to="/platform/ps">Playstation</Link></li>
          <li><Link to="/platform/xbox">XBOX</Link></li>
          <li><Link to="/platform/switch">Nintendo Switch</Link></li>
        </ul>
    </nav>
  )
}

export default SideNav