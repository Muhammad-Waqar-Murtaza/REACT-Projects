import { Link } from "react-router-dom";

const Navbar = () => {

    return ( 
        <header>

            <nav className="navbar">

                <Link className="logo" to='/'>Logo</Link>
                <div className="navlinks">
                    <Link to="/">Home</Link>
                    <Link to="/create">New Blog</Link>
                </div>

            </nav>
            <hr />

        </header>
    );
}
 
export default Navbar;