import React from "react";
import "./Section2.css";
import AppleTv from "../../../assets/Images/icons/apple-tv-logo.png";
import Banker from "../../../assets/Images/icons/banker.png";
import WatchSeries from "../../../assets/Images/icons/watch-series5-logo.png";
import Arcade from "../../../assets/Images/icons/arcade.png";

function Section2() {
  return (
    <>
      <section className="fourth-highlight-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="container left-side-wrapper col-12 col-md-6 p-md-2 text-center">
              <div className="left-side">
                <div className="title-wrapper black pt-sm-5 pb-2 pt-md-3">
                  iPhone 11
                </div>
                <div className="iphone-11 disc black">
                  Just the right amount of everything.
                </div>
                <div className="price grey py-2">
                  From $18.70/mo. or $499 with trade‑in.<sup>1</sup>
                </div>
                <div className="link-wrapper">
                  <ul>
                    <li>
                      <a href="#">Learn More</a>
                    </li>
                    <li>
                      <a href="#">Apply now</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="right-side-wrapper col-12 col-md-6 p-md-2 text-center white">
              <div className="right-side">
                <div className="title-wrapper pt-md-2 pb-2 px-5">
                  Get the latest CDC response to COVID-19.
                </div>
                <div className="link-wrapper">
                  <ul>
                    <li className="white">
                      <a href="#">Watch the PSA</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fifth-highlight-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="left-side-wrapper col-12 col-md-6 p-md-2 text-center">
              <div className="left-side">
                <div className="tv-logo">
                  <img src={AppleTv} />
                </div>
                <div className="movie-title">
                  <img src={Banker} />
                </div>
                <div className="movie-link">
                  <a href="#">Watch now on the Apple TV App</a>
                </div>
              </div>
            </div>
            <div className="right-side-wrapper col-12 col-md-6 p-md-2 text-center">
              <div className="right-side">
                <div className="watch-logo disc pt-2 pb-3">
                  <img src={WatchSeries} />
                </div>
                <div className="apple-watch px-5 py-2">
                  With the Always-On Retina display. You’ve never seen a watch
                  like this.
                </div>
                <div className="link-wrapper">
                  <ul>
                    <li>
                      <a href="#">Learn More</a>
                    </li>
                    <li>
                      <a href="#">Buy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sixth-highlight-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="left-side-wrapper col-12 col-md-6 p-md-2 text-center">
              <div className="left-side">
                <div className="arcade-logo pt-2 pb-3">
                  <img src={Arcade} />
                </div>
                <div className="arcade disc white px-5">
                  With the Always-On Retina display. You’ve never seen a watch
                  like this.
                </div>
                <div className="link-wrapper py-2">
                  <ul>
                    <li>
                      <a href="#">
                        Play now<sup>2</sup>
                      </a>
                    </li>
                    <br />
                    <li>
                      <a href="#">Learn about Apple Arcade</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="right-side-wrapper col-12 col-md-6 p-md-2 text-center">
              <div className="right-side">
                <div className="title-wrapper pt-2 pb-3 px-3">
                  Apple Card Monthly Installments
                </div>
                <div className="apple-card disc px-5">
                  Pay for your next iPhone over time, interest-free with Apple
                  Card.
                </div>
                <div className="link-wrapper py-2">
                  <ul>
                    <li>
                      <a href="#">Learn more</a>
                    </li>
                    <li>
                      <a href="#">Apply now</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section2;
