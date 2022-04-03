import {Link} from 'react-router-dom';

function Header (){
  const navItems = [
    {
      text: 'Home',
      link: '/'
    },
    {
      text: 'Movies',
      link: '/movies'
    },
    {
      text: 'Popular',
      link: '/popular'
    },
  ]
  return (
    <div className="fixed top-0 h-12 bg-transparent bg-black w-full z-50 flex">
      <h1 className="text-red-600 text-3xl font-bold font-bebas py-2">MIMFLIX</h1>
      <div className="flex justify-center items-center">
        {navItems.map((item) => {
          <Link className="text-white" to={item.link}>{item.text}</Link>
        })}
      </div>
    </div>
  )
}

export default Header;