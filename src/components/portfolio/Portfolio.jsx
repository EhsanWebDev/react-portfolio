import { useEffect } from "react";
import { useState } from "react";
import {
  contentPortfolio,
  designPortfolio,
  featuredPortfolio,
  mobilePortfolio,
  webPortfolio,
} from "../../data";
import "./portfolio.scss";
import PortfolioList from "./portfolioList/PortfolioList";

const Portfolio = () => {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web app":
        setData(webPortfolio);
        break;
      case "mobile app":
        setData(mobilePortfolio);
        break;
      case "designing":
        setData(designPortfolio);
        break;
      case "branding":
        setData(contentPortfolio);
        break;

      default:
        break;
    }
  }, [selected]);

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web app",
      title: "Web App",
    },
    {
      id: "mobile app",
      title: "Mobile App",
    },
    {
      id: "designing",
      title: "Designing",
    },
    {
      id: "branding",
      title: "Branding",
    },
  ];
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map(({ id, title }) => (
          <PortfolioList
            title={title}
            key={id}
            active={selected === id}
            setSelected={setSelected}
            id={id}
          />
        ))}
      </ul>

      <div className="container">
        {data.map(({ id, title, img }) => (
          <div className="item" key={id}>
            <img src={img} alt="" />
            <h3>{title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Portfolio;
