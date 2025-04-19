import React from "react";
import "./Section2.css";
import AppleTv from "../../../assets/Images/icons/apple-tv-logo.png";
import Banker from "../../../assets/Images/icons/banker.png";
import WatchSeries from "../../../assets/Images/icons/watch-series5-logo.png";
import Arcade from "../../../assets/Images/icons/arcade.png";

function Section2() {
  return (
    <>
      <section class="fourth-highlight-wrapper">
        <div class="container-fluid">
          <div class="row">
            <div class="container left-side-wrapper col-12 col-md-6 p-md-2 text-center">
              <div class="left-side">
                <div class="title-wrapper black pt-sm-5 pb-2 pt-md-3">
                  iPhone 11
                </div>
                <div class="iphone-11 disc black">
                  Just the right amount of everything.
                </div>
                <div class="price grey py-2">
                  From $18.70/mo. or $499 with trade‑in.<sup>1</sup>
                </div>
                <div class="link-wrapper">
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
            <div class="right-side-wrapper col-12 col-md-6 p-md-2 text-center white">
              <div class="right-side">
                <div class="title-wrapper pt-md-2 pb-2 px-5">
                  Get the latest CDC response to COVID-19.
                </div>
                <div class="link-wrapper">
                  <ul>
                    <li class="white">
                      <a href="#">Watch the PSA</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="fifth-highlight-wrapper">
        <div class="container-fluid">
          <div class="row">
            <div class="left-side-wrapper col-12 col-md-6 p-md-2 text-center">
              <div class="left-side">
                <div class="tv-logo">
                  <img src={AppleTv} />
                </div>
                <div class="movie-title">
                  <img src={Banker} />
                </div>
                <div class="movie-link">
                  <a href="#">Watch now on the Apple TV App</a>
                </div>
              </div>
            </div>
            <div class="right-side-wrapper col-12 col-md-6 p-md-2 text-center">
              <div class="right-side">
                <div class="watch-logo disc pt-2 pb-3">
                  <img src={WatchSeries} />
                </div>
                <div class="apple-watch px-5 py-2">
                  With the Always-On Retina display. You’ve never seen a watch
                  like this.
                </div>
                <div class="link-wrapper">
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

      <section class="sixth-highlight-wrapper">
        <div class="container-fluid">
          <div class="row">
            <div class="left-side-wrapper col-12 col-md-6 p-md-2 text-center">
              <div class="left-side">
                <div class="arcade-logo pt-2 pb-3">
                  <img src={Arcade} />
                </div>
                <div class="arcade disc white px-5">
                  With the Always-On Retina display. You’ve never seen a watch
                  like this.
                </div>
                <div class="link-wrapper py-2">
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
            <div class="right-side-wrapper col-12 col-md-6 p-md-2 text-center">
              <div class="right-side">
                <div class="title-wrapper pt-2 pb-3 px-3">
                  Apple Card Monthly Installments
                </div>
                <div class="apple-card disc px-5">
                  Pay for your next iPhone over time, interest-free with Apple
                  Card.
                </div>
                <div class="link-wrapper py-2">
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
