const Item = ({ item }) => {
  const markup = () => {
    return (
      <div className='max-w-sm rounded overflow-hidden shadow-lg'>
        <img className='w-full object-contain h-full' src={item.href} />
      </div>
    )
  }

  return markup()
}

export default Item
