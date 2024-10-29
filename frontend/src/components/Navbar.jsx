// import { useState } from 'react';
// import Logo from '../assets/Logo.png';

// const Navbar = () => {
//   const [activeLink, setActiveLink] = useState('/');

//   const handleLinkClick = (link) => {
//     setActiveLink(link);
//   };

//   return (
//     <div className='flex items-center justify-between py-3 px-9em font-medium shadow-lg'>
//       <img src={Logo} alt='girman-logo' className="h-10 w-auto" />

//       <ul className='sm:flex gap-5 text-lg text-gray-700'>
//         <a 
//           href='/' 
//           className={`flex flex-col items-center gap-1 navlinks ${activeLink === '/' ? 'text-blue-500 underline' : 'text-gray-700'}`}
//           onClick={() => handleLinkClick('/')}
//         >
//           <p>SEARCH</p>
//         </a>

//         <a 
//           href='https://girmantech.com/' 
//           target='_blank' 
//           rel='noopener noreferrer'
//           className={`flex flex-col items-center gap-1 navlinks ${activeLink === 'https://girmantech.com/' ? 'text-blue-500 underline' : 'text-gray-700'}`}
//           onClick={() => handleLinkClick('https://girmantech.com/')}
//         >
//           <p>WEBSITE</p>
//         </a>

//         <a 
//           href='https://www.linkedin.com/company/girmantech/' 
//           target='_blank' 
//           rel='noopener noreferrer'
//           className={`flex flex-col items-center gap-1 navlinks ${activeLink === 'https://www.linkedin.com/company/girmantech/' ? 'text-blue-500 underline' : 'text-gray-700'}`}
//           onClick={() => handleLinkClick('https://www.linkedin.com/company/girmantech/')}
//         >
//           <p>LINKEDIN</p>
//         </a>

//         <a 
//           href='mailto:contact@girmantech.com' 
//           className={`flex flex-col items-center gap-1 navlinks ${activeLink === 'mailto:contact@girmantech.com' ? 'text-blue-500 underline' : 'text-gray-700'}`}
//           onClick={() => handleLinkClick('mailto:contact@girmantech.com')}
//         >
//           <p>CONTACT</p>
//         </a>
//       </ul>
//     </div>
//   );
// }

// export default Navbar;



import { useState } from 'react';
import Logo from '../assets/Logo.png';
import { useLocation, Link } from 'react-router-dom';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('/');
  const [searchValue, setSearchValue] = useState('');
  const location = useLocation();

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      console.log("Entered", searchValue);
      // Handle search logic here
    }
  };

  return (
    <div className='flex items-center justify-between py-3 px-9em font-medium shadow-lg'>
      <Link to='/'>
      <img src={Logo} alt='girman-logo' className="h-10 w-auto" />
      </Link>

      {/* Conditionally render the search input when the path is '/cards' */}
      {location.pathname === '/cards' ? (
        <input 
          type='text'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder='Search'
          className='border-none rounded-lg px-3 py-1 h-[31px] w-[400px]'
        />
      ) : (
        <ul className='sm:flex gap-5 text-lg text-gray-700'>
          <a 
            href='/' 
            className={`flex flex-col items-center gap-1 navlinks ${activeLink === '/' ? 'text-blue-500 underline' : 'text-gray-700'}`}
            onClick={() => handleLinkClick('/')}
          >
            <p>SEARCH</p>
          </a>

          <a 
            href='https://girmantech.com/' 
            target='_blank' 
            rel='noopener noreferrer'
            className={`flex flex-col items-center gap-1 navlinks ${activeLink === 'https://girmantech.com/' ? 'text-blue-500 underline' : 'text-gray-700'}`}
            onClick={() => handleLinkClick('https://girmantech.com/')}
          >
            <p>WEBSITE</p>
          </a>

          <a 
            href='https://www.linkedin.com/company/girmantech/' 
            target='_blank' 
            rel='noopener noreferrer'
            className={`flex flex-col items-center gap-1 navlinks ${activeLink === 'https://www.linkedin.com/company/girmantech/' ? 'text-blue-500 underline' : 'text-gray-700'}`}
            onClick={() => handleLinkClick('https://www.linkedin.com/company/girmantech/')}
          >
            <p>LINKEDIN</p>
          </a>

          <a 
            href='mailto:contact@girmantech.com' 
            className={`flex flex-col items-center gap-1 navlinks ${activeLink === 'mailto:contact@girmantech.com' ? 'text-blue-500 underline' : 'text-gray-700'}`}
            onClick={() => handleLinkClick('mailto:contact@girmantech.com')}
          >
            <p>CONTACT</p>
          </a>
        </ul>
      )}
    </div>
  );
}

export default Navbar;

