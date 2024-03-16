import React from "react";
import "./Home.css";
import HomeImg from "./Media/HomeImg.jpg";
export default function Home() {
  return (
    <div id="Home">
      <div id="First">
        <div id="FirstContent">
          <h2>Find Clothes That Matches Your Lines</h2>
          <p>
            Welcome to YOUR.SHOP, where style meets individuality. Discover a
            curated collection that harmonizes with your unique lines and
            embraces your personal flair. Find clothes that effortlessly
            complement your distinct identity. Elevate your wardrobe with us.
          </p>

            <button id ="ShopNow">Shop Now</button>

            <section>
                <span>
                    <h3>2000+ Brands</h3>
                    <p>High Quality</p>
                    </span>
                <span>
                    <h3>2000+ Brands</h3>
                    <p>High Quality</p>
                    </span>
                <span>
                    <h3>2000+ Brands</h3>
                    <p>High Quality</p>
                    </span>
            </section>

        </div>
      </div>

      <div id="Second"></div>
    </div>
  );
}