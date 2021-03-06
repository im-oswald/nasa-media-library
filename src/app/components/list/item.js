const Item = ({ item, setDetail }) => {
  const markup = () => {
    // markup method to show every single result
    // results in API is observed to have either photographer or secondary_creator
    // for some results both are missing
    const creator = item.photographer || item.secondary_creator

    // method got trigger on clicking any item to show details
    function itemClicked() {
      setDetail(true, item)
    }

    return (
      <div
        onClick={itemClicked}
        className='hover:shadow-2xl hover:shadow-indigo-500/50 max-w-sm rounded overflow-hidden shadow-lg'
      >
        <div className='cursor-pointer h-full max-w-sm rounded overflow-hidden shadow-lg'>
          <div
            className='w-full'
            style={{
              backgroundImage: `url(${item.href})`,
              height: '300px',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
            alt={item.title}
          ></div>
          <div className='px-6 py-4'>
            <div className='font-bold text-xl mb-2'>{item.title}</div>
            {item.location && (
              <p className='text-sm text-gray-600 flex items-center'>
                <img className='h-8 mr-2' src='/assets/icons/location.svg' />
                {item.location}
              </p>
            )}
          </div>
          {creator && (
            <div className='flex p-5 items-center'>
              <img
                className='w-10 h-10 rounded-full mr-4'
                src='/assets/icons/photographer.svg'
                alt='Photographer'
              />
              <div className='text-sm'>
                <p className='text-gray-900 leading-none'>{creator}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }

  return markup()
}

export default Item
