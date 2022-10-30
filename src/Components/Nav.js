import "./nav.css";

const Nav = (_) => {
  return (
    <>
      <div className="nav-flex">
        <div className="img-divnav">
          <img
            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-logo-design-template-c2119aff1d9a65251729cbc3510375e7_screen.jpg?ts=1629395591"
            alt="not display"
          />
        </div>

        <div className="span-div">
          <span>Home </span>
          <span>Speciality </span>
          <span>Popular </span>
          <span>Gallery </span>
          <span>Review </span>
          <span>Order </span>
        </div>
      </div>
    </>
  );
};

export default Nav;
