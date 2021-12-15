import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './NavbarStyle.css';

const Navbar = () => {
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	const closeMenu = () => {
		setOpen(false);
	};

	return (
		<nav className="navbar">
			<div onClick={handleClick} className="nav-icon">
				{open ? <FiX /> : <FiMenu />}
      </div>
			<ul className={open ? 'nav-links active' : 'nav-links'}>
				<li className="nav-item">
					<Link to="/" className="nav-link" onClick={closeMenu}>
						Home
					</Link>
				</li>

				<li className="nav-item">
					<Link to="/global" className="nav-link" onClick={closeMenu}>
						Global
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/test" className="nav-link" onClick={closeMenu}>
						test
					</Link>
				</li>
        
				<li className="nav-item">
					<Link to="/c01" className="nav-link" onClick={closeMenu}>
						C01
					</Link>
				</li>
       			 <li className="nav-item">
					<Link to="/c02" className="nav-link" onClick={closeMenu}>
						C02
					</Link>
				</li>
       			 <li className="nav-item">
					<Link to="/c03" className="nav-link" onClick={closeMenu}>
						C03
					</Link>
				</li>
        		<li className="nav-item">
					<Link to="/c04" className="nav-link" onClick={closeMenu}>
						C04
					</Link>
				</li>
      			  <li className="nav-item">
					<Link to="/c08" className="nav-link" onClick={closeMenu}>
						C08
					</Link>
				</li>
       			 <li className="nav-item">
					<Link to="/c09" className="nav-link" onClick={closeMenu}>
						C09
					</Link>
				</li>
       			 <li className="nav-item">
					<Link to="/c10" className="nav-link" onClick={closeMenu}>
						C10
					</Link>
				</li>
     		   <li className="nav-item">
					<Link to="/c11" className="nav-link" onClick={closeMenu}>
						C11
					</Link>
				</li>
      			  <li className="nav-item">
					<Link to="/c12" className="nav-link" onClick={closeMenu}>
						C12
					</Link>
				</li>
   			     <li className="nav-item">
					<Link to="/c13" className="nav-link" onClick={closeMenu}>
						C13
					</Link>
				</li>
    		    <li className="nav-item">
					<Link to="/c14" className="nav-link" onClick={closeMenu}>
						C14
					</Link>
				</li>
    		    <li className="nav-item">
					<Link to="/c15" className="nav-link" onClick={closeMenu}>
						C15
					</Link>
				</li>
    		    <li className="nav-item">
					<Link to="/c16" className="nav-link" onClick={closeMenu}>
						C16
					</Link>
				</li>
    		    <li className="nav-item">
					<Link to="/c18" className="nav-link" onClick={closeMenu}>
						C18
					</Link>
				</li>
     		   <li className="nav-item">
					<Link to="/c19" className="nav-link" onClick={closeMenu}>
						C19
					</Link>
				</li>
      			  <li className="nav-item">
					<Link to="/c20" className="nav-link" onClick={closeMenu}>
						C20
					</Link>
				</li>
      			  <li className="nav-item">
					<Link to="/c21" className="nav-link" onClick={closeMenu}>
						C21
					</Link>
				</li>
      			  <li className="nav-item">
					<Link to="/c22" className="nav-link" onClick={closeMenu}>
						C22
					</Link>
				</li>
     			   <li className="nav-item">
					<Link to="/c23" className="nav-link" onClick={closeMenu}>
						C23
					</Link>
				</li>
    			    <li className="nav-item">
					<Link to="/c24" className="nav-link" onClick={closeMenu}>
						C24
					</Link>
				</li>
     			   <li className="nav-item">
					<Link to="/c25" className="nav-link" onClick={closeMenu}>
						C25
					</Link>
				</li>
			</ul>
      
		</nav>
	);
};

export default Navbar;