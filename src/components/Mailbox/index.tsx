import { ReactNode } from 'react'
import Letters from '@/components/Mailbox/Letters'

interface MailProps {
  children?: ReactNode
}

const Mailbox = ({ children }: MailProps) => {
  return <Letters children={children} />
}

Mailbox.Letters = Letters
// Modal.Content = Content

export default Mailbox
