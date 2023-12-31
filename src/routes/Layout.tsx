import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="border-x-1 relative mx-auto flex h-screen flex-col border-black bg-white">
      <Outlet />
    </div>
  )
}

export default Layout
