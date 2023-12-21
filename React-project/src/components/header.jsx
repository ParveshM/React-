const Title = (
  <a href="/">
    <img
      className="logo"
      src="https://logos-world.net/wp-content/uploads/2021/02/Just-Eat-Logo.png"
      alt="Just Eat Logo"
    />
  </a>
);

const Header = () => {
  return (
    <div
      className="header"
      style={{
        backgroundColor: "lightBlue",
      }}
    >
      {Title}
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
