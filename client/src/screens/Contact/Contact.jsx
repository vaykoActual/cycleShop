import Layout from "../../components/shared/Layout/Layout";
import placeholder from "../../assets/icons/member-placeholder.svg";
import githubIcon from "../../assets/icons/github-icon.svg";
import linkedinIcon from "../../assets/icons/linkedin-icon.svg";
import "./Contact.css";

function Contact(props) {
  return (
    <div>
      <Layout user={props.user}>
        <div className="contact-container-main-title">
          <div className="contact-main-title">Meet The Team</div>
        </div>
        <div className="contact-container">
          <div className="contact-shanye">
            <img src={placeholder} alt="profile picture" />
            <div>Shayne</div>
						<div>Full-Stack Engineer</div>
            <div>Description</div>
						<img src={githubIcon} alt="github"/>
						<img src={linkedinIcon} alt="linkedin"/>
          </div>
          <div className="contact-aslan">
            <img src={placeholder} alt="profile picture" />
            <div>Aslan</div>
						<div>Full-Stack Engineer</div>
            <div>Description</div>
						<img src={githubIcon} alt="github"/>
						<img src={linkedinIcon} alt="linkedin"/>
          </div>
          <div className="contact-varit">
            <img src={placeholder} alt="profile picture" />
            <div>Varit</div>
						<div>Full-Stack Engineer</div>
            <div>Description</div>
						<img src={githubIcon} alt="github"/>
						<img src={linkedinIcon} alt="linkedin"/>
          </div>
          <div className="contact-steven">
            <img src={placeholder} alt="profile picture" />
            <div>Steven</div>
						<div>Full-Stack Engineer</div>
            <div>Description</div>
						<img src={githubIcon} alt="github"/>
						<img src={linkedinIcon} alt="linkedin"/>
          </div>
        </div>
      </Layout>
    </div>
  );
}
export default Contact;
