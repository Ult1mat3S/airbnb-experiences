/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/
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
          <span> (6) • </span>
          <span>USA</span>
          <p className="card-title">Life lessons with Katie Zaferes</p>
          <p className="card-price">
            <span>From $136</span> / person
          </p>
        </div>
      </section>
    </>
  );
}
