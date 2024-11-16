import "./dashboard.css";
import ww2Preview from "./games/img/preview-ww2.png";
import GamePreview from "../components/GamePreview";

// Define component
const Dashboard = () => {
  return (
    <>
      <div className="links">
        <ul>
          <li>
            <a href="/settings">Settings</a>
          </li>
        </ul>
      </div>
      <div className="dashboard">
        <h2>Dashboard</h2>
        <div className="container-games">
          <div className="game">
            <GamePreview
              head="Word War 2"
              description="Game Description"
              img={ww2Preview}
              route="/game/ww2"
            />
          </div>
          <div className="game">
            <GamePreview
              head="Word War 2"
              description="Game Description"
              img={ww2Preview}
              route="/game/ww2"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
