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

	// function myFunction() {
	// 	document.getElementById("myDropdown").classList.toggle("show");
	//   }
	  
	// window.onclick = function(e) {
	// if (!e.target.matches('.dropbtn')) {
	// var myDropdown = document.getElementById("myDropdown");
	// 	if (myDropdown.classList.contains('show')) {
	// 	myDropdown.classList.remove('show');
	// 	}
	// }
	// }
	  // Close the dropdown if the user clicks outside of it


	return (
		<div class="navbar">
					
			<Link to="/" onClick={closeMenu}>
				Home
			</Link>

			<Link to="/global" onClick={closeMenu}>
				Global Panel Tracker
			</Link>

			<div class="navbar">
				<div class="dropdown">
						<button class="dropbtn">Panel Rigs
							<i class="fa fa-caret-down"></i>
						</button>
					<div class="dropdown-content">
						<Link to="/c01p" onClick={closeMenu}>
								C01
						</Link>
						<Link to="/c02p" onClick={closeMenu}>
								C02
						</Link>
						<Link to="/c03p" onClick={closeMenu}>
								C03
						</Link>
						<Link to="/c04p" onClick={closeMenu}>
								C04
						</Link>
						<Link to="/c08p" onClick={closeMenu}>
								C08
						</Link>
						<Link to="/c09p" onClick={closeMenu}>
								C09
						</Link>
						<Link to="/c10p" onClick={closeMenu}>
								C10
						</Link>
						<Link to="/c11p" onClick={closeMenu}>
								C11
						</Link>
						<Link to="/c12p" onClick={closeMenu}>
								C12
						</Link>
						<Link to="/c13p" onClick={closeMenu}>
								C13
						</Link>
						<Link to="/c14p" onClick={closeMenu}>
								C14
						</Link>
						<Link to="/c15p" onClick={closeMenu}>
								C15
						</Link>
						<Link to="/c16p" onClick={closeMenu}>
								C16
						</Link>
						<Link to="/c18p" onClick={closeMenu}>
								C18
						</Link>
						<Link to="/c19p" onClick={closeMenu}>
								C19
						</Link>
						<Link to="/c20p" onClick={closeMenu}>
								C20
						</Link>
						<Link to="/c21p" onClick={closeMenu}>
								C21
						</Link>
						<Link to="/c22p" onClick={closeMenu}>
								C22
						</Link>
						<Link to="/c23p" onClick={closeMenu}>
								C23
						</Link>
						<Link to="/c24p" onClick={closeMenu}>
								C24
						</Link>
						<Link to="/c25p" onClick={closeMenu}>
								C25
						</Link>
					</div>
				</div> 

				<div class="dropdown">
						<button class="dropbtn">Spreadsheet Rigs
							<i class="fa fa-caret-down"></i>
						</button>
					<div class="dropdown-content">
						<Link to="/c01s" onClick={closeMenu}>
								C01
						</Link>
						<Link to="/c02s" onClick={closeMenu}>
								C02
						</Link>
						<Link to="/c03s" onClick={closeMenu}>
								C03
						</Link>
						<Link to="/c04s" onClick={closeMenu}>
								C04
						</Link>
						<Link to="/c08s" onClick={closeMenu}>
								C08
						</Link>
						<Link to="/c09s" onClick={closeMenu}>
								C09
						</Link>
						<Link to="/c10s" onClick={closeMenu}>
								C10
						</Link>
						<Link to="/c11s" onClick={closeMenu}>
								C11
						</Link>
						<Link to="/c12s" onClick={closeMenu}>
								C12
						</Link>
						<Link to="/c13s" onClick={closeMenu}>
								C13
						</Link>
						<Link to="/c14s" onClick={closeMenu}>
								C14
						</Link>
						<Link to="/c15s" onClick={closeMenu}>
								C15
						</Link>
						<Link to="/c16s" onClick={closeMenu}>
								C16
						</Link>
						<Link to="/c18s" onClick={closeMenu}>
								C18
						</Link>
						<Link to="/c19s" onClick={closeMenu}>
								C19
						</Link>
						<Link to="/c20s" onClick={closeMenu}>
								C20
						</Link>
						<Link to="/c21s" onClick={closeMenu}>
								C21
						</Link>
						<Link to="/c22s" onClick={closeMenu}>
								C22
						</Link>
						<Link to="/c23s" onClick={closeMenu}>
								C23
						</Link>
						<Link to="/c24s" onClick={closeMenu}>
								C24
						</Link>
						<Link to="/c25s" onClick={closeMenu}>
								C25
						</Link>
					</div>
			</div> 


			</div>
		</div>



	// 	<nav className="navbar">
	// 		<div onClick={handleClick} className="nav-icon">
	// 			{open ? <FiX /> : <FiMenu />}
    //   </div>
	// 		<ul className={open ? 'nav-links active' : 'nav-links'}>
	// 			<li className="nav-item">
	// 				<Link to="/" className="nav-link" onClick={closeMenu}>
	// 					Home
	// 				</Link>
	// 			</li>

	// 			<li className="nav-item">
	// 				<Link to="/global" className="nav-link" onClick={closeMenu}>
	// 					Global
	// 				</Link>
	// 			</li>   

	// 			<li className="nav-item">
	// 				<Link to="/panel" className="nav-link" onClick={closeMenu}>
	// 					Panel
	// 				</Link>
	// 			</li>   

	// 			<li className="nav-item">
	// 				<Link to="/c01" className="nav-link" onClick={closeMenu}>
	// 					C01
	// 				</Link>
	// 			</li>
    //    			 <li className="nav-item">
	// 				<Link to="/c02" className="nav-link" onClick={closeMenu}>
	// 					C02
	// 				</Link>
	// 			</li>
    //    			 <li className="nav-item">
	// 				<Link to="/c03" className="nav-link" onClick={closeMenu}>
	// 					C03
	// 				</Link>
	// 			</li>
    //     		<li className="nav-item">
	// 				<Link to="/c04" className="nav-link" onClick={closeMenu}>
	// 					C04
	// 				</Link>
	// 			</li>
    //   			  <li className="nav-item">
	// 				<Link to="/c08" className="nav-link" onClick={closeMenu}>
	// 					C08
	// 				</Link>
	// 			</li>
    //    			 <li className="nav-item">
	// 				<Link to="/c09" className="nav-link" onClick={closeMenu}>
	// 					C09
	// 				</Link>
	// 			</li>
    //    			 <li className="nav-item">
	// 				<Link to="/c10" className="nav-link" onClick={closeMenu}>
	// 					C10
	// 				</Link>
	// 			</li>
    //  		   <li className="nav-item">
	// 				<Link to="/c11" className="nav-link" onClick={closeMenu}>
	// 					C11
	// 				</Link>
	// 			</li>
    //   			  <li className="nav-item">
	// 				<Link to="/c12" className="nav-link" onClick={closeMenu}>
	// 					C12
	// 				</Link>
	// 			</li>
   	// 		     <li className="nav-item">
	// 				<Link to="/c13" className="nav-link" onClick={closeMenu}>
	// 					C13
	// 				</Link>
	// 			</li>
    // 		    <li className="nav-item">
	// 				<Link to="/c14" className="nav-link" onClick={closeMenu}>
	// 					C14
	// 				</Link>
	// 			</li>
    // 		    <li className="nav-item">
	// 				<Link to="/c15" className="nav-link" onClick={closeMenu}>
	// 					C15
	// 				</Link>
	// 			</li>
    // 		    <li className="nav-item">
	// 				<Link to="/c16" className="nav-link" onClick={closeMenu}>
	// 					C16
	// 				</Link>
	// 			</li>
    // 		    <li className="nav-item">
	// 				<Link to="/c18" className="nav-link" onClick={closeMenu}>
	// 					C18
	// 				</Link>
	// 			</li>
    //  		   <li className="nav-item">
	// 				<Link to="/c19" className="nav-link" onClick={closeMenu}>
	// 					C19
	// 				</Link>
	// 			</li>
    //   			  <li className="nav-item">
	// 				<Link to="/c20" className="nav-link" onClick={closeMenu}>
	// 					C20
	// 				</Link>
	// 			</li>
    //   			  <li className="nav-item">
	// 				<Link to="/c21" className="nav-link" onClick={closeMenu}>
	// 					C21
	// 				</Link>
	// 			</li>
    //   			  <li className="nav-item">
	// 				<Link to="/c22" className="nav-link" onClick={closeMenu}>
	// 					C22
	// 				</Link>
	// 			</li>
    //  			   <li className="nav-item">
	// 				<Link to="/c23" className="nav-link" onClick={closeMenu}>
	// 					C23
	// 				</Link>
	// 			</li>
    // 			    <li className="nav-item">
	// 				<Link to="/c24" className="nav-link" onClick={closeMenu}>
	// 					C24
	// 				</Link>
	// 			</li>
    //  			   <li className="nav-item">
	// 				<Link to="/c25" className="nav-link" onClick={closeMenu}>
	// 					C25
	// 				</Link>
	// 			</li>
	// 		</ul>
      
	// 	</nav>
	);
};

export default Navbar;