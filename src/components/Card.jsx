import katieZaferes from "./../assets/katieZaferes.svg";
import star from "./../assets/star1.svg";

export default function Card(props) {
  return (
    <>
      <section className="card">
        <img src={props.img} alt="" className="card-photo" />
        <div className="card-stats">
          <img src={star} alt="" className="card-star" />
          <span>{props.rating}</span>
          <span className="gray"> (6) • </span>
          <span className="gray">{props.location}</span>
          <p className="card-title">Life lessons with {props.name}</p>
          <p className="card-price">
            <span className="bold">From ${props.price}</span> / person
          </p>
        </div>
      </section>
    </>
  );
}
