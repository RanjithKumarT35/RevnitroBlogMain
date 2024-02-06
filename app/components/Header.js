export default function Header() {
  return (
    <div>
      <header className="tech-header header">
        <div className="container-fluid">
          <nav className="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="tech-index.html">
              <img src="Revnotrosloho.png" alt="" />
            </a>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item" style={{ color: "white" }}>
                  <a
                    className="nav-link"
                    href="tech-index.html"
                    style={{ color: "white" }}
                  >
                    Home
                  </a>
                </li>

                <li className="nav-item" style={{ color: "white" }}>
                  <a
                    style={{ color: "white" }}
                    className="nav-link"
                    href="tech-category-01.html"
                  >
                    Gadgets
                  </a>
                </li>
                <li className="nav-item" style={{ color: "white" }}>
                  <a
                    style={{ color: "white" }}
                    className="nav-link"
                    href="tech-category-02.html"
                  >
                    Videos
                  </a>
                </li>
                <li style={{ color: "white" }} className="nav-item">
                  <a
                    style={{ color: "white" }}
                    className="nav-link"
                    href="tech-category-03.html"
                  >
                    Reviews
                  </a>
                </li>
                <li style={{ color: "white" }} className="nav-item">
                  <a
                    style={{ color: "white" }}
                    className="nav-link"
                    href="tech-contact.html"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        {/* <!-- end container-fluid --> */}
      </header>
    </div>
  );
}
