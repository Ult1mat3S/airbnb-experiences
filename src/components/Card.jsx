import katieZaferes from "./../assets/katieZaferes.svg";
import star from "./../assets/star1.svg";

export default function Card() {
  return (
    <>
      <section className="card">
        <img src={katieZaferes} alt="" className="card-photo" />
        <div className="card-stats">
          <img src={star} alt="" className="card-star" />
          <span>5.0</span>
          <span className="gray"> (6) • </span>
          <span className="gray">USA</span>
          <p className="card-title">Life lessons with Katie Zaferes</p>
          <p className="card-price">
            <span className="bold">From $136</span> / person
          </p>
        </div>
      </section>
    </>
  );
}
