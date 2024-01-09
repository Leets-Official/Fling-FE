import Letter from '@/pages/MyPage/components/Mailbox/Letter'

interface LettersProps {
  className?: string
  id?: string
  status: string
}

const Letters = ({ status }: LettersProps) => {
  return (
    <div className="mx-4 my-5">
      {status === 'received' ? (
        <div className="mx-2.5 flex flex-col gap-4">
          <Letter />
          <Letter />
          <Letter />
          <Letter />
          <Letter />
        </div>
      ) : (
        <div className="mx-2.5 flex flex-col gap-4">
          <Letter />
          <Letter />
          <Letter />
          <Letter />
          <Letter />
        </div>
      )}
    </div>
  )
}

export default Letters
