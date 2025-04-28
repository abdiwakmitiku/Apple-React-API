import React from "react";
import "./Section1.css";

function Section1() {
  return (
    <>
      <section className="container text-center">
        <div className="top-50 p-4">
          <div className="title-nb">We’re open for you.</div>
          <div className="text-nb">
            <p>
              Our retail stores are closed, but you can buy our products here
              online and get fast, free delivery. If you need help finding the
              right product or have a question on your order, chat online with a
              Specialist or call 1-800-MY-APPLE. <br />
              For service and support, visit <a href="#">support.apple.com.</a>
            </p>
          </div>
        </div>
      </section>

      <section className="first-highlight-wrapper text-center">
        <div className="container">
          <div className="new pt-5">New</div>
          <div className="title-wrapper black pt-1 pb-3">iPad Pro</div>
          <div className="link-wrapper">
            <ul>
              <li>
                <a href="#">Learn More</a>
              </li>
              <li>
                <a href="#">Order</a>
              </li>
            </ul>
          </div>
          <div className="ipad">
            <div className="pr-3">iPad Pro available starting 3.25</div>
            <div className="pl-3">Magic Keyboard coming in May</div>
          </div>
        </div>
      </section>

      <section className="second-highlight-wrapper text-center">
        <div className="container">
          <div className="new pt-4">New</div>
          <div className="title-wrapper black pt-1 pb-3">MacBook Air</div>
          <div className="macbook black">Twice the speed. Twice the storage.</div>
          <div className="price grey py-2">From $999.</div>
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
      </section>

      <section className="third-highlight-wrapper text-center white">
        <div className="container">
          <div className="title-wrapper pt-5 pb-2">iPhone 11 Pro</div>
          <div className="iphone-11-pro">
            Pro cameras. Pro display. Pro performance.
          </div>
          <div className="price grey py-2">
            From $24.95/mo. or $599 with trade‑in.
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
      </section>
    </>
  );
}

export default Section1;
