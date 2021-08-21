import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

const NavBar = () => {
  return (
    <header className="bg-red-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-green-400"
            className="inline-flex items-center py-3 px-3 mr-4 hover:text-green-600 font-bold cursive tracking-widest text-4xl text-red-200"
          >
            Mohammad Yasin
          </NavLink>
          <NavLink
            to="/about"
            className="inline-flex items-center py-3 px-3 headline text-2xl my-6 rounded hover:text-green-400 text-red-200"
            activeClassName="text-green-400 bg-red-700"
          >
            About me!
          </NavLink>
          <NavLink
            to="/posts"
            className="inline-flex items-center py-3 px-3 headline text-2xl my-6 rounded hover:text-green-400 text-red-200"
            activeClassName="text-green-400 bg-red-700"
          >
            Blogs
          </NavLink>
          <NavLink
            to="/project"
            className="inline-flex items-center py-3 px-3 headline text-2xl my-6 rounded hover:text-green-400 text-red-200"
            activeClassName="text-green-400 bg-red-700"
          >
            My projects
          </NavLink>
        </nav>
        <div className="inline-flex items-center">
          <SocialIcon
            url="https://www.facebook.com/mybappy12"
            className="mr-4"
            target="_blank"
            fgColor="#ffffff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://github.com/myb12"
            className="mr-4"
            target="_blank"
            fgColor="#ffffff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://twitter.com/mybappy12"
            className="mr-4"
            target="_blank"
            fgColor="#ffffff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
