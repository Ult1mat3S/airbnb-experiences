import star from "./../assets/images/star1.svg";

export default function Card({
  img,
  alt,
  rating,
  reviewCount,
  location,
  title,
  price,
  openSpots,
  item,
}) {
  let badgeText = "";
  if (item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (item.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <>
      {
        <section className="card">
          <img src={item.coverImg} alt={item.alt} className="card-photo" />
          {badgeText && <div className="card-badge">{badgeText}</div>}
          <div className="card-stats">
            <img
              src={star}
              alt="Hot pink coloured star"
              className="card-star"
            />
            <span>{item.stats.rating}</span>
            <span className="gray"> ({item.stats.reviewCount}) • </span>
            <span className="gray">{item.location}</span>
          </div>
          <p className="card-title">{item.title}</p>
          <p className="card-price">
            <span className="bold">From ${item.price}</span> / person
          </p>
        </section>
      }
    </>
  );
}
