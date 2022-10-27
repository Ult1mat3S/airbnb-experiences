import star from "./../assets/star1.svg";

export default function Card({
  img,
  rating,
  reviewsAmount,
  location,
  title,
  price,
}) {
  return (
    <>
      <section className="card">
        <img src={img} alt="" className="card-photo" />
        <div className="card-stats">
          <img src={star} alt="" className="card-star" />
          <span>{rating}</span>
          <span className="gray"> ({reviewsAmount}) • </span>
          <span className="gray">{location}</span>
          <p className="card-title">{title}</p>
          <p className="card-price">
            <span className="bold">From ${price}</span> / person
          </p>
        </div>
      </section>
    </>
  );
}
