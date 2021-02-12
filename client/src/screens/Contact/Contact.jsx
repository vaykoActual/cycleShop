import Layout from '../../components/shared/Layout/Layout'
import './Contact.css'

function Contact(params) {
    return (
        <div>
            <Layout>
                <div id="team-photo">
                    <img  src="https://miro.medium.com/max/700/1*dkKclsD3PzSVqTAkO9VI9w.jpeg" />
                </div>
                <div className="team-container" >
                    <div>
                        <h1>Shayne</h1>
                        <img />
                        <h3>Description</h3>
                    </div>
                    <div>
                        <h1>Aslan</h1>
                        <img />
                        <h3>Description</h3>
                    </div>
                    <div>
                        <h1>Varit</h1>
                        <img />
                        <h3>Description</h3>
                    </div>
                    <div>
                        <h1>Steven</h1>
                        <img />
                        <h3>Description</h3>
                    </div>
                </div>
            </Layout>
        </div>
    )
}
export default Contact