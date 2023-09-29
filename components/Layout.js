import Navbar from './Navbar';
import Footer from './Footer';


export default function Layout({ children }) {
    return (
        <div id="page-container">

            <div id="page-content">
                <Navbar />
                {children}
            </div>

            <Footer />
        </div>
    )
}