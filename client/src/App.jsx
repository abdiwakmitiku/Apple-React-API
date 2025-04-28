import "./App.css";
import Sections from "./Components/Sections/Sections";
import { Route, Routes } from "react-router";
import SharedLayout from "./Components/SharedLayout";
import Iphone from "./Components/Iphone/Iphone";
import IphoneDetail from "./Components/Iphone/IphoneDetail"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<Sections />} />
          <Route
            path="/mac"
            element={
              <h1>
                <br />
                Mac
              </h1>
            }
          />
          <Route path="/iphone" element={<Iphone />} />
          <Route path="/iphone/:id" element={<IphoneDetail />} />
          <Route
            path="/ipad"
            element={
              <h1>
                <br />
                Ipad
              </h1>
            }
          />
          <Route
            path="/watch"
            element={
              <h1>
                <br />
                Watch
              </h1>
            }
          />
          <Route
            path="/tv"
            element={
              <h1>
                <br />
                TV
              </h1>
            }
          />
          <Route
            path="/music"
            element={
              <h1>
                <br />
                Music
              </h1>
            }
          />
          <Route
            path="/support"
            element={
              <h1>
                <br />
                Support
              </h1>
            }
          />
          <Route
            path="/search"
            element={
              <h1>
                <br />
                Search
              </h1>
            }
          />
          <Route
            path="/cart"
            element={
              <h1>
                <br />
                Cart
              </h1>
            }
          />
          <Route
            path="*"
            element={
              <h1>
                <br />
                404 Page Not Found <br />
                <h4>
                  <a href="/">Go to Homepage</a>
                </h4>
              </h1>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
