// import React from 'react'
// import { NavLink } from 'react-router-dom';
// import './header.scss'
// export const Header = () => {
//   const [showNavbar, setShowNavbar] = React.useState(false)

//   const handleShowNavbar = () => {
//     setShowNavbar(!showNavbar)
//   }


//   return (
//     <nav className="navbar">
//       <div className="container">
//         <div className="logo">
//              Salom
//         </div>
//         <div className="menu-icon" onClick={handleShowNavbar}>
//          Hayr
//         </div>
//         <div className={`nav-elements  ${showNavbar && 'active'}`}>
//           <ul>
//             <li>
//               <NavLink to="/">Home</NavLink>
//             </li>
//             <li>
//               <NavLink to="/blog">Blog</NavLink>
//             </li>
//             <li>
//               <NavLink to="/projects">Projects</NavLink>
//             </li>
//             <li>
//               <NavLink to="/about">About</NavLink>
//             </li>
//             <li>
//               <NavLink to="/contact">Contact</NavLink>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>


//   )
// }
