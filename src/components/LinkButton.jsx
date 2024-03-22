import { Link } from 'react-router-dom'

export default function LinkButton({ to, children, ...props }) {
  return (
    <Link
      to={to}
      className="inline-block font-serif font-black px-8 py-4 rounded-md bg-dark-cyan text-light-cream text-[1.125rem] leading-6 hover:bg-light-cyan transition-colors"
      {...props}
    >
      {children}
    </Link>
  )
}
