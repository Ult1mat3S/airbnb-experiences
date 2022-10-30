import airbnb from "./../assets/images/airbnb.svg";

export default function Navbar() {
  return (
    <>
      <nav className="main-navbar">
        <img src={airbnb} alt="Airbnb logo" className="main-logo" />
      </nav>
    </>
  );
}
