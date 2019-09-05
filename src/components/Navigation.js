import React from 'react';
import { Link } from "react-router-dom";

class Navigation extends React.Component {
  render() {
    return <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </nav>
  }
}

export default Navigation;