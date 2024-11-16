import "../pages/dashboard.css";
import { Link } from "react-router-dom";

interface Props {
  head: string;
  description: string;
  img: string;
  route: string;
}

const GamePreview: React.FC<Props> = ({ head, description, img, route }) => {
  return (
    <Link to={route} style={{ textDecoration: "none", color: "inherit" }}>
      <div className="game">
        <img src={img} alt="WW2 game" />
        <div className="header">
          <h3>{head}</h3>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default GamePreview;
