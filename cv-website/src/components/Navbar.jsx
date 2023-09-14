import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
        );
    };

    return (
        <header>
            <Link to="/" className="site-title">Sarah Kelly</Link>
            <nav ref={navRef}>
                
                    <CustomLink to="/ContactMe">Contact me</CustomLink>
                    <CustomLink to="https://github.com/sloukelly?tab=repositories" target="_blank">Github</CustomLink>
                    <button className="nav-btn nav-close-btn" onClick={showNavbar}><FaTimes /></button>
                
            </nav>
            <button className="nav-btn" onClick={showNavbar}><FaBars /></button>
        </header>
        );
    }

    export default Navbar;
    
    
    function CustomLink({ to, children, ...props }) {
        const resolvedPath = useResolvedPath(to)
        const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    
        return (
            <li className={isActive ? "active" : ""}>
                <Link to={to} {...props}>
                    {children}
                </Link>
            </li>
        )
    }
    
//     return (
//     <header>
//         <nav ref={navRef}>
//             <Link to="/" className="site-title">Sarah Kelly</Link>
//             <ul>
//                 <CustomLink to="/ContactMe">Contact me</CustomLink>
//                 <CustomLink to="https://github.com/sloukelly?tab=repositories" target="_blank">Github</CustomLink>
//                 <button className="nav-btn nav-close-btn" onClick={showNavbar}><FaTimes /></button>
//             </ul>
//         </nav>
//         <button className="nav-btn" onClick={showNavbar}><FaBars /></button>
//     </header>
//     );
// }

