import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const footerNavLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "country", path: "/countries" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        {footerNavLinks.map(({ name, path }) => (
          <Link key={name} to={path} className="link-hover">
            {name}
          </Link>
        ))}
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
      <form>
        <h6 className="footer-title">Newsletter</h6>
        <fieldset className="w-80">
          <label>Enter your email address</label>
          <div className="join">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered join-item"
            />
            <button className="btn btn-neutral join-item">Subscribe</button>
          </div>
        </fieldset>
      </form>
    </footer>
  );
};
