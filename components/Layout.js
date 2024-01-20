import Navbar from './Navbar';
import Footer from './Footer';
// import Background from './images/canvas_background.jpg';\


export default function Layout({ children }) {
    return (
        // <div style={{ backgroundImage: `URL('./images/canvas_background/jpg')` }}>
        <div>
            <Navbar />
            {children}
            <Footer />
        </div >
    )
}