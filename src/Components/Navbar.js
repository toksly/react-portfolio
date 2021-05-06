import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="d-flex flex-column flex-md-row px-md-4 bg-white border-bottom shadow-sm custom-height">
			<h5 className="my-0 mr-md-auto font-weight-normal gree-box">
				<Link to="/"> Tochukwu Sylvester Nwizu</Link>
			</h5>

			<nav className="my-md-0 mr-md-3 navbar-stuff">
				<Link className="p-2 text-dark" to="/">
					About
				</Link>
				<Link className="p-2 text-dark" to="/portfolio">
					Portfolio
				</Link>
				<Link className="p-2 text-dark" to="/contact">
					Contact
				</Link>
			</nav>
		</div>
	);
};

export default Navbar;
