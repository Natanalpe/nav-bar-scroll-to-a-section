import React from 'react';
import './style.css';
import { Link } from 'react-scroll';

export default function App() {
  return (
    <div>
      <header>
        <div class="logo">
          <Link to="photo-one" smooth={true}>
            <img
              src="https://img.icons8.com/ios-filled/2x/ffffff/dog-house.png"
              alt="Home icon"
            />
          </Link>

          <Link to="photo-two" smooth={true}>
            <img
              src="https://img.icons8.com/ios-filled/2x/ffffff/book.png"
              alt=""
            />
          </Link>

          <Link smooth={true} to="photo-three">
            <img
              src="https://img.icons8.com/ios-filled/2x/ffffff/administrator-male--v1.png"
              alt=""
            />
          </Link>

          <Link smooth={true} to="photo-four">
            <img
              src="https://img.icons8.com/ios-filled/2x/ffffff/engineering.png"
              alt=""
            />
          </Link>
        </div>
      </header>
      <div class="container-body">
        <div id="photo-one"></div>
        <div id="photo-two"></div>
        <div id="photo-three"></div>
        <div id="photo-four"></div>
      </div>
    </div>
  );
}
