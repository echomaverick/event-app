import { useState, useEffect } from "react";
import Search from "./Searchbar";
import "./styles/Home.css";
import background1 from './images/img1.jpg';
import background2 from './images/img2.jpg';
import background3 from './images/img3.jpg';
import Cards from "./Cards";
import Tags from "./Tags";
import Text from "./text/Text";
import event1 from "./images/img3.jpg";
import event2 from "./images/img4.jpg";
import event3 from './images/img2.jpg'
import Events from "./Events";
import Navbar from "./Navbar";

const Home = () => {
  const tagOptions = [" All", "Free", "Limited", "Concert", "Festival"];
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="homepage">
      <Navbar />
      <hr className="line" />
      <Search className="search-home" />
      <div className="suggested">
        {screenSize > 768 ? (
          <Text
            info={"Suggested"}
            size={"h3"}
            weight={"semibold"}
            lineheight={"extra"}
            color={"white"}
          />
        ) : (
          <Text
            info={"Suggested"}
            size={"h4"}
            weight={"semibold"}
            lineheight={"super"}
            color={"white"}
          />
        )}
      </div>
      <div className="cards">
        <Cards
          title="Dave - We're all alone in this together UK tour 2022"
          date="24 Feb - 19:30"
          background={background2}
        />
        <Cards
          title="Dave - We're all alone in this together UK tour 2022"
          date="24 Feb - 19:30"
          background={background1}
        />
        <Cards
          title="Dave - We're all alone in this together UK tour 2022"
          date="24 Feb - 19:30"
          background={background3}
        />
      </div>
      <div className="upcoming">
      {screenSize < 768 ? (
            <Text info={"Upcoming events"} size={"h4"} weight={"semibold"} lineheight={"super"} color={"white"} />
          ) : (
            <Text info={"Upcoming events"} size={"h3"} weight={"semibold"} lineheight={"extra"} color={"white"} />
          )}
      </div>
      <div className="tags-container">
        <Tags options={tagOptions} />
      </div>
      <div className="total-events">
        <Text info={"Total events: 150"} size={"h6"} weight={"normal"} lineheight={"medium"} color={"gray"} />
      </div>
      <div className="events-home">
        <Events
          title="Dave"
          place="Amsterdam, Netherlands - 10:00 PM"
          price="45.00"
          day="02"
          month="Sep"
          background={event3}
        />
        <Events
          title="Dave "
          place="Amsterdam, Netherlands - 10:00 PM"
          price="45.00"
          day="02"
          month="Sep"
          background={event2}
        />
        <Events
          title="Dave "
          place="Amsterdam, Netherlands - 10:00 PM"
          price="45.00"
          day="02"
          month="Sep"
          background={event1}
        />
      </div>
    </div>
  );
};

export default Home;
