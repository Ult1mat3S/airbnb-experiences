import photo from "./../assets/images/photogrid.png";

export default function Hero() {
  return (
    <>
      <section className="hero">
        <img
          src={photo}
          alt="Images in the form of a grid showing a vast amount of phsyical activities being done"
          className="hero-photo"
        />
        <h1 className="hero-header">Online Experiences</h1>
        <p className="hero-text">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </section>
    </>
  );
}
