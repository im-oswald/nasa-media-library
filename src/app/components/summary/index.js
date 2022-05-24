import LoadChanger from './load-changer'
import Pagination from './pagination'

const Summary = ({ list, setList }) => {
  const markup = () => (
    <div className='flex justify-between mx-auto p-10 max-w-6xl mt-5 bg-blue-50 rounded-lg'>
      <div>
        <LoadChanger list={list} />
      </div>
      <div>
        <Pagination list={list} setList={setList} />
      </div>
    </div>
  )

  return markup()
}

export default Summary
