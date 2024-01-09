interface ItemProps {
  id: number
}

const Item = ({ id }: ItemProps) => {
  return (
    <div className="h-[72px] w-[72px]">
      <img src={`/src/assets/images/${id}.png`} />
    </div>
  )
}

export default Item
