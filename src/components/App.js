import './App.css';

function App() {
  return (
    <div id="wrapper">
      <aside className="sidebar">
        <ul className="navbar-bar bg-gradiente-secondary sidebar sidebar-dark accordion" id="accordionSidebar">
          <li>
            <a href="">
              <i className="fas fa-fw fa-tachometer-alt" ></i>
              <span>
                Dashboard - DH movies
              </span>
            </a>
          </li>
          <hr className="sidebar-divider" />
          <div className="sidebar-heading">
            <h1>Actions</h1>
          </div>
          <li>
            <a href="/">
             <i className="fas fa-fw fa-folder" ></i>
              <span>
              Genres
              </span>
            </a>
          </li>
          <li>
          <a href="/">
            <i className="fas fa-fw fa-area" ></i>
            <span>
              Movies
            </span>
            </a>
          </li>
          <li>
          <a href="/">
            <i className="fas fa-fw fa-users" ></i>
            <span> Actors </span>
            </a>
          </li>
        </ul>

      </aside>
    </div>
  );
}

export default App;
