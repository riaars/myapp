import React from 'react';

const Header = () => {
  return (
    <div>
      <header id="showcase">
        <div class="showcase-content">
          <h1 class="l-heading">Welcome to The Restaurants</h1>
          <p class="lead">
            The best website to find the best place to eat in Stockholm.
          </p>
          <a href="#restaurants" class="btn">
            See Restaurant
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
