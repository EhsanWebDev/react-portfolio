import "./portfoliolist.scss";

const PortfolioList = ({ title, active, setSelected, id }) => {
  return (
    <li
      className={`portfolioList ${active && "active"}`}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
};
export default PortfolioList;
