import React from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  const { menu } = props;

  return (
    <div id="navbar">
      <img
        src="https://www.pngkit.com/png/full/31-311078_movie-video-editing-logo-design.png"
        alt="LOGO"
      />

      <ul>
        {menu?.map((obj) => (
          <li key={obj.id}>
            <Link to={obj.path}>{obj.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

NavBar.defaultProps = {
  menu: [
    {
      id: "1",
      path: "/",
      name: "Home",
    },
    {
      id: "2",
      path: "/movies",
      name: "Movies",
    },
  ],
};

export default NavBar;
