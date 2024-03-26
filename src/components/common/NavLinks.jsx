import { Link } from 'react-router-dom'

const navigation = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'About Us',
    path: '/about'
  },
  {
    name: 'Create Your Plan',
    path: '/create'
  }
]

export default function NavLinks({ onClick }) {
  return (
    <>
      {navigation.map((item, index) => (
        <li key={index}>
          <Link to={item.path} onClick={onClick} className="transition-colors">
            {item.name}
          </Link>
        </li>
      ))}
    </>
  )
}
