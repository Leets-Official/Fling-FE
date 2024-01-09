import { HomeIcon, SidebarIcon } from '@/assets/Icons'

interface Icon {
  name: string
  route?: string
  event: (route: string | undefined) => void
}
interface HeaderProps {
  icons: Icon[]
}

const Header = ({ icons }: HeaderProps) => {
  return (
    <div className="mx-8 mt-5 flex justify-between">
      {icons.map((icon, index) => (
        <div
          key={index}
          onClick={() => icon.event(icon.route)}
          className="cursor-pointer"
        >
          {icon.name === 'HomeIcon' && <HomeIcon />}
          {icon.name === 'SidebarIcon' && <SidebarIcon />}
          {/* 다른 아이콘 추가할때 위에 참고해서 똑같이 추가하면 됩니다! */}
        </div>
      ))}
    </div>
  )
}

export default Header
