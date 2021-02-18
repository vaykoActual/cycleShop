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
            <h1>Shayne</h1>
						<h3>Full-Stack Engineer</h3>
            <div>Manage and create backend logic</div>
						<img className="social-icon-github" src={githubIcon} alt="github"/>
						<img className="social-icon-linkedin" src={linkedinIcon} alt="linkedin"/>
          </div>
          <div className="contact-aslan">
            <img src={placeholder} alt="profile picture" />
            <h1>Aslan</h1>
						<h2>Full-Stack Engineer</h2>
            <div>Manage and create front-end and backend logic</div>
						<img className="social-icon-github" src={githubIcon} alt="github"/>
						<img className="social-icon-linkedin" src={linkedinIcon} alt="linkedin"/>
          </div>
          <div className="contact-varit">
            <img src={placeholder} alt="profile picture" />
            <h1>Varit</h1>
						<h2>Full-Stack Engineer</h2>
            <div>Design front-end and UX design</div>
						<img className="social-icon-github" src={githubIcon} alt="github"/>
						<img className="social-icon-linkedin" src={linkedinIcon} alt="linkedin"/>
          </div>
          <div className="contact-steven">
            <img src={placeholder} alt="profile picture" />
            <h1>Steven</h1>
						<h2>Full-Stack Engineer</h2>
            <div>Manage and create backend logic</div>
						<img className="social-icon-github" src={githubIcon} alt="github"/>
						<img className="social-icon-linkedin" src={linkedinIcon} alt="linkedin"/>
          </div>
        </div>
      </Layout>
    </div>
  );
}
export default Contact;
