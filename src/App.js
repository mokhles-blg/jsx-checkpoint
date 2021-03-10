import "./App.css";
import "./style.css";
import JSXImage from "./img/imageInSrc.png";

function App() {
  const name = "Mokhles";
  const myStyle = {
    color: "blue",
  };

  return (
    <div
      className="App"
      style={{ border: "solid 1px black", maxWidth: "100vw" }}
    >
      <h1 className="title red">Hello {name}</h1>
      <p className="test-paragraph">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio autem
        dolor vitae voluptatum cupiditate impedit aut sed at quo consectetur,
        animi incidunt repellendus, repellat adipisci rem ullam commodi.
        Possimus, earum.
      </p>
      <p style={{ color: "red", margin: "0 30%", backgroundColor: "black" }}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio autem
        dolor vitae voluptatum cupiditate impedit aut sed at quo consectetur,
        animi incidunt repellendus, repellat adipisci rem ullam commodi.
        Possimus, earum.
      </p>
      <p style={myStyle}>{2 * 5}</p>
      <hr style={{ width: "50%" }} />
      <img src={JSXImage} alt="jsx-imageInSrc" style={{ width: "30%" }} />
      <br />
      <br />
      <img
        src="/imageInPublic.png"
        alt="jsx-imageInPublic"
        style={{ width: "30%" }}
      />
    </div>
  );
}

export default App;
