import { Link } from 'react-router-dom'

const Navbar = () => {
    return ( 
        <nav className="navbar">

            <h1>The Dojo Blog</h1>

            <div className="links">
                {/* <a href="/">Home</a>
                <a href="/create"  this are requested complete html pages and not react dom 
                
                >New Blog</a> */}
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
     );
    }
    
export default Navbar;
    //  style={{
    //     color:"white",
    //     backgroundColor: '#f1356d', and not background-color
    //     borderRadius : '8px'
    // }} INline css using {for dynamic values } and { for saying that the styles are also a object }