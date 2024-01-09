import { PropsWithChildren } from 'react'

interface LettersProps {
  className?: string
  id?: string
}

const Letters = ({ children }: PropsWithChildren<LettersProps>) => {
  if (children === 'received') {
    return (
      <div className="mx-4 my-5">
        <p>받은메일1</p>
        <p>받은메일2</p>
      </div>
    )
  } else {
    return (
      <div className="mx-4 my-5">
        <p>보낸메일1</p>
        <p>보낸메일2</p>
      </div>
    )
  }
}

export default Letters
