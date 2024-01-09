import Mailbox from '@/components/Mailbox'
import { useState } from 'react'

const MyPage = () => {
  const [selectedMailbox, setSelectedMailbox] = useState<string>('received')
  const handleMailboxSelection = (mailboxType: string) => {
    setSelectedMailbox(mailboxType)
  }

  return (
    <section>
      <div className="mx-10 mt-5">
        <div className="mb-7 flex justify-between">
          <div className="flex flex-col text-[20px]">
            <p>환영해요!</p>
            <p className="font-semibold">플링님</p>
          </div>
          <a href="/">홈</a>
        </div>
        <div className="mb-7 flex flex-col gap-1.5 text-[14px] text-gray-500">
          {['나의 도감가기', '설정', '상점 가기', '로그아웃하기'].map(
            (menu, index) => (
              <div key={index} className="flex items-center">
                <div className="mr-2 h-3 w-3 rounded-full bg-gray-300" />
                <a href="/">{menu}</a>
              </div>
            ),
          )}
        </div>
      </div>
      <ul className="mb-2 flex w-screen flex-row justify-center">
        {['received', 'sent'].map((mailboxType, index) => (
          <li
            key={index}
            className={`flex w-1/2 flex-col items-center justify-center ${
              selectedMailbox === mailboxType ? 'font-bold' : 'text-gray-500'
            }`}
          >
            <button onClick={() => handleMailboxSelection(mailboxType)}>
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
      <Mailbox children={selectedMailbox} />
    </section>
  )
}

export default MyPage
