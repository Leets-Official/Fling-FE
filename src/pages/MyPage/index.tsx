import { useState } from 'react'
import Mailbox from '@/pages/MyPage/components/Mailbox'
import Header from '@/components/Header'
import { Sidebar } from '@/components'
import { useNavigate } from 'react-router-dom'

const MyPage = () => {
  const [selectedMailbox, setSelectedMailbox] = useState<string>('received')
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false)
  const navigate = useNavigate()
  const handleMailboxSelection = (mailboxType: string) => {
    setSelectedMailbox(mailboxType)
  }
  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen)
  }
  const handleCloseSidebar = () => {
    setSidebarOpen(false)
  }
  const handleRouteChange = () => {
    navigate('/')
  }
  const icons = [
    { name: 'HomeIcon', event: handleRouteChange },
    { name: 'SidebarIcon', event: handleSidebarToggle },
    // Add more icons here dynamically
  ]

  return (
    <section
      className={`${sidebarOpen ? 'h-screen bg-gray-200 backdrop-blur' : ''}`}
    >
      <div className={`${sidebarOpen ? 'h-screen blur-sm' : ''}`}>
        <Header icons={icons} />
        {sidebarOpen && (
          <div
            className="fixed left-0 top-0 z-40 h-screen w-full blur"
            onClick={handleCloseSidebar}
          />
        )}
        <div className="mx-8 mb-7 mt-5 flex justify-between">
          <div className="flex flex-col text-[17px]">
            <p>환영해요!</p>
            <p className="font-extrabold">플링님</p>
          </div>
        </div>
        <ul className="mb-2 flex w-full flex-row justify-center">
          {['received', 'sent'].map((mailboxType, index) => (
            <li
              key={index}
              className={`flex w-1/2 flex-col items-center justify-center ${
                selectedMailbox === mailboxType
                  ? 'font-extrabold'
                  : 'text-gray-500'
              }`}
            >
              <button
                className="w-full text-[12px]"
                onClick={() => handleMailboxSelection(mailboxType)}
              >
                {mailboxType === 'received' ? '받은 편지함' : '보낸 편지함'}
              </button>
              <div
                className={`mt-1.5 h-0.5 w-full bg-black ${
                  selectedMailbox !== mailboxType ? 'opacity-10' : ''
                }`}
              />
            </li>
          ))}
        </ul>
        <Mailbox status={selectedMailbox} />
      </div>
      <div className="relative">
        <Sidebar isOpen={sidebarOpen} />
      </div>
    </section>
  )
}

export default MyPage
