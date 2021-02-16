import "./Brands.css";
import { NavLink } from "react-router-dom";

const Brands = (props) => {
  return (
    <div className="brands-image">
      <div>
        <img
          className="main-image-img"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.archmotorcycle.com%2Fassets%2Fimages%2Fmethod-side-min.jpg&f=1&nofb=1"
          alt="Arch Method 143"
        />
        <h1>Arch Method 143</h1>
        <NavLink to="/brand/Arch"> shop </NavLink>
        <NavLink to="/sell"> sell</NavLink>
      </div>

      <div>
        <h1>2021 Road Glide</h1>
        <img
          src="https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2021/2021-road-glide/2021-road-glide-f16/360/2021-road-glide-f16-motorcycle-01.jpg?impolicy=myresize&rw=1600"
          alt="2021 Road Glide"
        />
        <NavLink to="/brand/Harley Davidson"> shop </NavLink>
        <NavLink to="/sell"> sell</NavLink>
      </div>
      <div>
        <h1>YZF R1M</h1>
        <img
          src="https://yamaha.scdn5.secure.raxcdn.com/library/img.jpg?id=5f4be31b2a0ab63a745a4beb&w=1920"
          alt="YZF R1M"
        />
        <NavLink to="/brand/Yamaha"> shop </NavLink>
        <NavLink to="/sell"> sell</NavLink>
      </div>
      <div>
        <h1>2021 R nineT Scrambler</h1>
        <img
          src="https://2yrh403fk8vd1hz9ro2n46dd-wpengine.netdna-ssl.com/wp-content/uploads/2020/10/2021-BMW-R-nineT-lineup-First-look-Pure-GS-Scrambler-retro-motorcycles-9.jpg"
          alt="2021 R nineT Scrambler"
        />
        <NavLink to="/brand/BMW"> shop </NavLink>
        <NavLink to="/sell"> sell</NavLink>
      </div>
      <div>
        <h1>DIAVEL 1260</h1>
        <img
          src="https://images.ctfassets.net/x7j9qwvpvr5s/7pNrWMaSWtvv3H6aHqhEL6/09116590a18c241ed5c863ecc72add26/DVL-1260-Bl-MY21-Model-Preview-1050x650-v02.png"
          alt="DIAVEL 1260"
        />
        <NavLink to="/brand/Ducati"> shop </NavLink>
        <NavLink to="/sell"> sell</NavLink>
      </div>
    </div>
  );
};

export default Brands;
