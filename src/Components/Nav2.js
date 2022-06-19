import { NavLink } from "react-router-dom";

function Nav2() {
  return (
    <>
      <div>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\nbody {\n  margin: 0;\n  font-family: "Lato", sans-serif;\n}\n\n.sidebar {\n  margin: 0;\n  padding: 0;\n  width: 200px;\n  background-color: #f1f1f1;\n  position: fixed;\n  height: 100%;\n  overflow: auto;\n}\n\n.sidebar a {\n  display: block;\n  color: black;\n  padding: 16px;\n  text-decoration: none;\n}\n \n.sidebar a.active {\n  background-color: #04AA6D;\n  color: white;\n}\n\n.sidebar a:hover:not(.active) {\n  background-color: #555;\n  color: white;\n}\n\ndiv.content {\n  margin-left: 200px;\n  padding: 1px 16px;\n  height: 1000px;\n}\n\n@media screen and (max-width: 700px) {\n  .sidebar {\n    width: 100%;\n    height: auto;\n    position: relative;\n  }\n  .sidebar a {float: left;}\n  div.content {margin-left: 0;}\n}\n\n@media screen and (max-width: 400px) {\n  .sidebar a {\n    text-align: center;\n    float: none;\n  }\n}\n',
          }}
        />
        <div className="sidebar">
          <a className="active" href="#home">
            Home
          </a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
        <div className="content">
          <h2>About Me</h2>
          <p>
            This example use media queries to transform the sidebar to a top
            navigation bar when the screen size is 700px or less.
          </p>
          <p>
            We have also added a media query for screens that are 400px or less,
            which will vertically stack and center the navigation links.
          </p>
          <h3>Resize the browser window to see the effect.</h3>
        </div>
      </div>
    </>
  );
}
export default Nav2;
