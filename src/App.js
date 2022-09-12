import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import Search from "./Search";
import Api from "./Api";
import Heading from "./Heading";

function App() {
  return (
    <div className="container">
      <div class="card" id="main-card">
        <div class="card-body shadow">
          <Search />

          <button
            class="btn btn-success"
            type="button"
            id="current-city-button"
          >
            Current City
          </button>
          <p class="footer">
            <a
              href="https://github.com/adele-dube/react_weather_app-2022"
              id="footer-link"
              target="_blank"
            >
              Open-Source Code
            </a>
            by Adele_D ©2022
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
