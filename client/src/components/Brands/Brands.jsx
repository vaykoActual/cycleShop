import "./Brands.css";
import { NavLink } from "react-router-dom";

const Brands = (props) => {
  return (
    <div className="brands-image">
      <div>
        <img
          className="main-image-img"
          src="https://www.highreshdwallpapers.com/wp-content/uploads/2014/04/Yamaha-Motorcycle-Desktop-Wallpaper.jpg"
          alt="someText"
        />
        <h1>Arch Method 143</h1>
        <NavLink to="/brand/arch"> shop </NavLink>
        <NavLink to="#"> sell</NavLink>
      </div>

      <div>
        <h1>2021 Road Glide</h1>
        <img
          src="https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2021/2021-road-glide/2021-road-glide-f16/360/2021-road-glide-f16-motorcycle-01.jpg?impolicy=myresize&rw=1600"
          alt="2021 Road Glide"
        />
        <NavLink to="/brand/Harley Davidson"> shop </NavLink>
        <NavLink to="#"> sell</NavLink>
      </div>
      <div>
        <h1>YZF R1M</h1>
        <img
          src="https://yamaha.scdn5.secure.raxcdn.com/library/img.jpg?id=5f4be31b2a0ab63a745a4beb&w=1920"
          alt="YZF R1M"
        />
        <NavLink to="/brand/yamaha"> shop </NavLink>
        <NavLink to="#"> sell</NavLink>
      </div>
      <div>
        <h1>2021 R nineT Scrambler</h1>
        <img
          src="https://2yrh403fk8vd1hz9ro2n46dd-wpengine.netdna-ssl.com/wp-content/uploads/2020/10/2021-BMW-R-nineT-lineup-First-look-Pure-GS-Scrambler-retro-motorcycles-9.jpg"
          alt="2021 R nineT Scrambler"
        />
        <NavLink to="/brand/bmw"> shop </NavLink>
        <NavLink to="#"> sell</NavLink>
      </div>
      <div>
        <h1>DIAVEL 1260</h1>
        <img
          src="https://images.ctfassets.net/x7j9qwvpvr5s/7pNrWMaSWtvv3H6aHqhEL6/09116590a18c241ed5c863ecc72add26/DVL-1260-Bl-MY21-Model-Preview-1050x650-v02.png"
          alt="DIAVEL 1260"
        />
        <NavLink to="/brand/ducati"> shop </NavLink>
        <NavLink to="#"> sell</NavLink>
      </div>
    </div>
  );
};

export default Brands;
