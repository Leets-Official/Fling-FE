import { Item } from '@/components'
import { useNavigate } from 'react-router'

interface CollectionProps {
  ItemType: string
  data: DataProps[]
}

interface DataProps {
  id: number
  Type: string
}

const Content = ({ ItemType, data }: CollectionProps) => {
  const navigate = useNavigate()

  return (
    <>
      <div className="mx-6 mt-5">
        <div className="font-lg mb-2 text-gray-300">{ItemType}</div>
        <div className="flex flex-wrap gap-x-[3.46rem] gap-y-3">
          {data.map((element) => {
            return (
              <div
                key={element.id}
                onClick={() => {
                  navigate(`/item/${element.id}`)
                }}
                className="cursor-pointer"
              >
                <Item id={element.id} />
                <div className="font-xs mt-1.5 text-center text-gray-200">
                  123
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Content