import Nav from "../Nav/Nav.jsx";
import MainImage from "../MainImage/MainImage.jsx";
import BrandLinks from "../BrandLinks/BrandLinks.jsx";
import "./Layout.css";

function Layout(props){

  return (
    <div className="layout-container">
        <Nav user={props.user}/>
        <MainImage />
        <BrandLinks />
        <div className="layout-children">
            {props.children}
        </div>
        
        {/* <Footer /> */}
    </div>
  )
}

export default Layout;