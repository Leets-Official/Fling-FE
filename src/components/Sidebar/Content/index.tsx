import { Link } from 'react-router-dom'

interface ContentProps {
  className?: string
  content: string
  route: string
}

const Content = ({ className, content, route }: ContentProps) => {
  return (
    <Link to={route}>
      <button className={`${className} text-[19px] font-extralight`}>
        {content}
      </button>
    </Link>
  )
}

export default Content
