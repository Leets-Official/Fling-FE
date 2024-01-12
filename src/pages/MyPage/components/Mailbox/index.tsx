import Letter from '@/pages/MyPage/components/Mailbox/Letter'

interface LettersProps {
  className?: string
  id?: string
  status: string
}

const Letters = ({ status }: LettersProps) => {
  return (
    <div className="flex flex-col gap-4 overflow-y-scroll px-6 py-5">
      {status === 'received' ? (
        <>
          <Letter />
          <Letter />
          <Letter />
          <Letter />
          <Letter />
        </>
      ) : (
        <>
          <Letter />
          <Letter />
          <Letter />
          <Letter />
          <Letter />
        </>
      )}
    </div>
  )
}

export default Letters