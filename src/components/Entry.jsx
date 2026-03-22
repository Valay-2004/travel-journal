export default function Entry({
  img,
  country,
  title,
  googleMapsLink,
  dates,
  text,
}) {
  return (
    <>
      <article className="journal-entry">
        <div className="main-image-container">
          <img src={img.src} alt={img.alt} className="main-image" />
        </div>
        <div className="info-container">
          <svg
            className="marker"
            fill="#F55A5A"
            version="1.1"
            id="Layer_1"
            height="12"
            width="12"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="796 796 200 200"
            enableBackground="new 796 796 200 200"
            xmlSpace="preserve"
            stroke="#ff0000"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M970.135,870.134C970.135,829.191,936.943,796,896,796c-40.944,
              0-74.135,33.191-74.135,74.134 c0,16.217,5.221,31.206,14.055,43.41l-0.019,
              0.003L896,996l60.099-82.453l-0.019-0.003 C964.912,901.34,970.135,886.351,
              970.135,870.134z M896,900.006c-16.497,0-29.871-13.374-29.871-29.872s13.374-29.871,
              29.871-29.871 s29.871,13.373,29.871,29.871S912.497,900.006,896,900.006z"
              />{" "}
            </g>
          </svg>
          <span className="country">{country}</span>
          <a href={googleMapsLink}>View on Google Maps</a>
          <h2 className="entry-title">{title}</h2>
          <p className="trip-dates">{dates}</p>
          <p className="entry-text">{text}</p>
        </div>
      </article>
    </>
  );
}
