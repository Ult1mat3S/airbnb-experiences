import airbnb from "./../assets/airbnb.svg";

export default function Navbar() {
  return (
    <>
      <nav className="main-navbar">
        <img src={airbnb} alt="" className="main-logo" />
      </nav>
    </>
  );
}
