import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container m-auto px-4 py-8 flex flex-col sm:flex-row justify-between items-center border-t border-gray-900">
        <h2 className="text-gray-400">
          &copy; Copyright 2023. Made by{' '}
          <span className="text-white">Talal Mohiuddin</span>
        </h2>
        <div className="flex gap-2 items-center">
          <p className="text-gray-400">Follow me</p>
          <a href="https://www.linkedin.com/in/iaroslav-lisniak/" className="text-gray-400 hover:text-white">
            <img src="./assets/linkedin.png" alt="LinkedIn" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
