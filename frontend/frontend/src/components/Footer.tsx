import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../pages/Homepage.css";

import {
  faInstagram,
  faTiktok,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

interface Props{
  shapeColor: string;
  bgColor: string;
}

function Footer(props: Props) {
  return (
    <>
      <div className="custom-shape-divider-top-1727715528" style={{
        background: props.shapeColor,
      }}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill" style={{
              fill: props.bgColor,
            }}
          ></path>
        </svg>
      </div>
      <section id="SocialMedia">
        <h2>Najdete nás na </h2>
        <ul>
          <li>
            <a href="https://www.tiktok.com/@exitkaproskoly" target="_blank">
              <FontAwesomeIcon icon={faTiktok} />
              <span>exitkaproskoly</span>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/exit_ka/" target="_blank">
              <FontAwesomeIcon icon={faInstagram} />
              <span>exit_ka</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=61566340464605/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faFacebook} />
              <span>Exit Ka</span>
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Footer;
