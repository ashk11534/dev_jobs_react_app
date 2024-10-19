import { Link } from "react-router-dom";

const NavBar = function ({ children, setRenderComponent }) {
  return (
    <nav className="devNavBar">
      <div className="container">
        <div className="navBarMainContent">
          <h3 className="navTitle" onClick={() => setRenderComponent?.(false)}>
            <Link to="/">DevJobs</Link>
          </h3>
          {children}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
