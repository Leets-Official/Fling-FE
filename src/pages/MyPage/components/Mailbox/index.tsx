import Letters from '@/pages/MyPage/components/Mailbox/Letters'

interface MailProps {
  status: string
}

const Mailbox = ({ status }: MailProps) => {
  return <Letters status={status} />
}

export default Mailbox
