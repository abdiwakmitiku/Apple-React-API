import React from "react";
import "./Section1.css";

function Section1() {
  return (
    <>
      <section class="container text-center">
        <div class="top-50 p-4">
          <div class="title-nb">We’re open for you.</div>
          <div class="text-nb">
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

      <section class="first-highlight-wrapper text-center">
        <div class="container">
          <div class="new pt-5">New</div>
          <div class="title-wrapper black pt-1 pb-3">iPad Pro</div>
          <div class="link-wrapper">
            <ul>
              <li>
                <a href="#">Learn More</a>
              </li>
              <li>
                <a href="#">Order</a>
              </li>
            </ul>
          </div>
          <div class="ipad">
            <div class="pr-3">iPad Pro available starting 3.25</div>
            <div class="pl-3">Magic Keyboard coming in May</div>
          </div>
        </div>
      </section>

      <section class="second-highlight-wrapper text-center">
        <div class="container">
          <div class="new pt-4">New</div>
          <div class="title-wrapper black pt-1 pb-3">MacBook Air</div>
          <div class="macbook black">Twice the speed. Twice the storage.</div>
          <div class="price grey py-2">From $999.</div>
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
      </section>

      <section class="third-highlight-wrapper text-center white">
        <div class="container">
          <div class="title-wrapper pt-5 pb-2">iPhone 11 Pro</div>
          <div class="iphone-11-pro">
            Pro cameras. Pro display. Pro performance.
          </div>
          <div class="price grey py-2">
            From $24.95/mo. or $599 with trade‑in.
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
      </section>
    </>
  );
}

export default Section1;
