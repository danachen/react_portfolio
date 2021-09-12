import React from 'react'
import NavItem from './NavItem'

const Nav = ({navItems}) => {
  return (
    navItems.map(nav =>
      <NavItem key={nav.title} title={nav.title} href={nav.href}/>)
//     <div>
//       <ul className="nav navbar-nav nav-top-right">
//         <li>
//           <a className="#github nav-link active" href="https://github.com/danachen"
//             ><FontAwesomeIcon icon="fa-github" /><i className="fab fa-github fa-lg"></i
//           ></a>
//         </li>
//         <li>
//           <a className="#medium nav-link" href="https://medium.com/@danacc"
//             ><i className="fab fa-medium fa-lg"></i>
//           </a>
//         </li>
//         <li>
//           <a className="#linkedin nav-link" href="https://www.linkedin.com/in/danaqchen/"
//             ><i className="fab fa-linkedin-in fa-lg"></i
//           ></a>
//         </li>
//         <li>
//           <a className="#email nav-link" href="mailto:danaqchen@gmail.com"
//             ><i className="fas fa-paper-plane fa-lg"></i
//           ></a>
//         </li>
//         <li>
//           <a className="#resume nav-link" href="dc_resume.pdf" download
//             ><i className="fas fa-file-alt fa-lg"></i
//         ></a>
//       </li>
//     </ul>
//     </div>
//   </nav>    
// </div>
  )
}

export default Nav