import React from "react";
import Footer from "../../components/Footer";
import "./games.css";

function Ww2() {
  return (
    <>
      <div className="container-game">
        <h2
          style={{
            marginTop: 80,
            marginRight: 100,
            marginBottom: 10,
            marginLeft: 80,
            fontSize: 40,
          }}
        >
          První světová válka
        </h2>
        <div className="iframeContainer">
          <div
            style={{
              position: "relative",
              paddingBottom: "56.25%",
              paddingTop: 0,
              height: 0,
            }}
          >
            <iframe
              title="WW1 - lepší"
              width="1200"
              height="675"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              src="https://view.genially.com/66e2fbd9f73c81c2e74cd098"
              allowFullScreen={true}
              allow="fullscreen"
            />
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#d3d3d3",
            marginBottom: 0,
          }}
        >
          <div
            style={{
              marginLeft: 80,
              marginRight: 80,
              marginTop: 20,
              marginBottom: 0,
              paddingBottom: 20,
            }}
          >
            <h2
              style={{
                marginTop: 30,
                paddingTop: 40,
              }}
            >
              Pravidla hry
            </h2>
            <ul>
              <li>Rule 1</li>
              <li>Rule 2</li>
            </ul>
            <h2>O hře</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium dolorum rem consequatur. Quidem vitae error,
              necessitatibus consequatur quis dolorum suscipit impedit.
              Perspiciatis delectus laudantium tempora quidem, inventore
              officiis fugit ipsam.
            </p>
          </div>
        </div>
      </div>
      <Footer shapeColor="#F4F4F0" bgColor="#D3D3D3" />
    </>
  );
}

export default Ww2;
