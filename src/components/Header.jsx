import Carousel from "react-multi-carousel";
import Marquee from "react-fast-marquee";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Header() {
  return (
    <header>
      <div className="logo">
        <div className="logo-left-child">
          <div className="logo-img">
            <img src="../imgs/emblem-dark.png"></img>
          </div>
          <div className="logo-Heading">
            <strong>संघ लोक सेवा आयोग</strong>
            <h1>UNION PUBLIC SERVICE COMMISSION</h1>
          </div>
        </div>
        <div className="logo-right-child">
            <img src="https://www.upsc.gov.in/sites/all/themes/upsc/images/logo.png"></img>
        </div>
      </div>
      <div className="navbar">
        <a href="#">Home</a>
        <a href="#">News</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <div className="dropdown">
          <button>Drop Down <span className="caret"></span></button>
          
          <div className="dropdown-content">
            <a href="#">Link1</a>
            <a href="#">Link2</a>
            <a href="#">Link3</a>
          </div>
        </div>
      </div>
      <div className="top-container">
        <div className="carousel-container-custom">
          <Carousel
            swipeable={true}
            draggable={false}
            showDots={false}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            customTransition="transform 300ms ease-in-out"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            <div className="carousel-list">
              <img
                className="carousel-img"
                src="../imgs/img-c-1.jpg"
                alt="img"
              ></img>
            </div>
            <div className="carousel-list">
              <img
                className="carousel-img"
                src="../imgs/img-c-2.jpg"
                alt="img"
              ></img>
            </div>
            <div className="carousel-list">
              <img
                className="carousel-img"
                src="../imgs/img-c-3.jpg"
                alt="img"
              ></img>
            </div>
            <div className="carousel-list">
              <img
                className="carousel-img"
                src="../imgs/img-c-4.jpg"
                alt="img"
              ></img>
            </div>
            <div className="carousel-list">
              <img
                className="carousel-img"
                src="../imgs/img-c-2.jpg"
                alt="img"
              ></img>
            </div>
            <div className="carousel-list">
              <img
                className="carousel-img"
                src="../imgs/img-c-3.jpg"
                alt="img"
              ></img>
            </div>
            <div className="carousel-list">
              <img
                className="carousel-img"
                src="../imgs/img-c-4.jpg"
                alt="img"
              ></img>
            </div>
          </Carousel>
        </div>
        <div className="scrolling-news-container">
          <div className="tickerv-wrap">
            <ul>
              <br></br>
              <li>Poor state of poverty alleviation.</li>
              <li>
                Assam flood situation worsens again, death toll rises to 89.
              </li>
              <li>Health sector rife with mismanagement, corruption.</li>
              <li>Regent Hospital chairman Shahed handed over to RAB.</li>
              <li>Poor state of poverty alleviation.</li>
              <li>
                Assam flood situation worsens again, death toll rises to 89.
              </li>
              <li>Health sector rife with mismanagement, corruption.</li>
              <li>Regent Hospital chairman Shahed handed over to RAB.</li>
              <li>Poor state of poverty alleviation.</li>
              <li>
                Assam flood situation worsens again, death toll rises to 89.
              </li>
              <li>Health sector rife with mismanagement, corruption.</li>
              <li>Regent Hospital chairman Shahed handed over to RAB.</li>
              <li>Poor state of poverty alleviation.</li>
              <li>
                Assam flood situation worsens again, death toll rises to 89.
              </li>
              <li>Health sector rife with mismanagement, corruption.</li>
              <li>Regent Hospital chairman Shahed handed over to RAB.</li>
              <li>Poor state of poverty alleviation.</li>
              <li>
                Assam flood situation worsens again, death toll rises to 89.
              </li>
              <li>Health sector rife with mismanagement, corruption.</li>
              <li>Regent Hospital chairman Shahed handed over to RAB.</li>
              <li>Poor state of poverty alleviation.</li>
              <li>
                Assam flood situation worsens again, death toll rises to 89.
              </li>
              <li>Health sector rife with mismanagement, corruption.</li>
              <li>Regent Hospital chairman Shahed handed over to RAB.</li>
              <li>Poor state of poverty alleviation.</li>
              <li>
                Assam flood situation worsens again, death toll rises to 89.
              </li>
              <li>Health sector rife with mismanagement, corruption.</li>
              <li>Regent Hospital chairman Shahed handed over to RAB.</li>
              <li>Poor state of poverty alleviation.</li>
              <li>
                Assam flood situation worsens again, death toll rises to 89.
              </li>
              <li>Health sector rife with mismanagement, corruption.</li>
              <li>Regent Hospital chairman Shahed handed over to RAB.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="ticker-wrap">
        <Marquee gradient={false} speed={80}>
          {" "}
          <p>
            Important Notice: Civil Services (Prel.) Exam, 2021 (scheduled to be
            held on 27.06.2021) is postponed and will now be held on 10.10.2021.
          </p>
        </Marquee>
      </div>
    </header>
  );
}
export default Header;
