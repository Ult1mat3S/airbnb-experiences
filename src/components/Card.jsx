import star from "./../assets/images/star1.svg";

export default function Card({
  img,
  alt,
  rating,
  reviewCount,
  location,
  title,
  price,
}) {
  return (
    <>
      {
        <section className="card">
          <img src={img} alt={alt} className="card-photo" />
          <div className="card-stats">
            <img
              src={star}
              alt="Hot pink coloured star"
              className="card-star"
            />
            <span>{rating}</span>
            <span className="gray"> ({reviewCount}) • </span>
            <span className="gray">{location}</span>
          </div>
          <p className="card-title">{title}</p>
          <p className="card-price">
            <span className="bold">From ${price}</span> / person
          </p>
        </section>
      }
    </>
  );
}
