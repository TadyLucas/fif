import "./Homepage.css";
import mindlHacker from "../assets/mindlHacker.jpg";
import Footer from "../components/Footer";
import InstagramEmbed from "../components/InstagramEmbed";

const HomePage = () => {
  return (
    <>
      <div className="custom-shape-divider-bottom-1727714667"></div>
      <section id="Home">
        <div>
          <h1>
            Exit<span>Ka</span>
          </h1>
        </div>
        <div id="toCenter" className="on-Bottom">
          <span>Zábavné a vzdělávací hry🎲 pro studenty🏫 i veřejnost📢</span>
        </div>
      </section>
      <section id="About">
        <div>
          <div>
            <div className="img1">
              <img src={mindlHacker} alt="" />
            </div>
            <div className="text1">
              <h2>O naší firmě</h2>
              <p>
                Vznikli jsme jako vždělávací studentská firma, zabývající se
                tvorbou her s různými tématy. Náš cíl je tvořit zábavné formy
                on-line her pro rozšíření vědomostí daného tématu. Podle našeho
                názvu firmy Exitka hry vyvíjíme ve formě únikových her pomocí
                aplikace Genially. Zahrajete si za postavu, která se ocitne v
                určitém ději a snažíte se prozkoumat danou tématiku podle sebe.
                Ponořte se do her plných tajemství, hádanek a zábavných úkolů.
                Unikněte s námi.
              </p>
            </div>
          </div>
          <div className="text1">
            <h2>Naše hra</h2>
            <p>
              V našich hrách si zahrajete za hlavní postavu která se musí
              probojovat a uniknout. Vše lze ovládat myší a klávesnicí. Podle
              vašich voleb vás hra povede skrz tématiku a vy budete plnit úkoly
              k získání skrytého kódu. Tento kód po té využijete k uniknutí hry.
              Zábavné, jednoduché a hravé pro každou věkovou skupinu i hráče
              který si chce rozšířit vědomosti zábavnou formou.
            </p>
          </div>
        </div>
      </section>
      <div className="custom-shape-divider-top-1727712980">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <section id="LastVideo">
        <div className="video-container">
          <h2>Naše poslední video</h2>
          <InstagramEmbed postUrl="https://www.instagram.com/reel/DBduwPQoMOo/" />
        </div>
      </section>
      <Footer shapeColor="#F4F4F0" bgColor="#fff" />
    </>
  );
};

export default HomePage;
