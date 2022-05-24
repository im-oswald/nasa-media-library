import LoadChanger from './load-changer'
import Pagination from './pagination'

const Summary = ({ list, setList, load, setLoad }) => {
  const markup = () => (
    <div className='flex justify-between mx-auto p-10 max-w-6xl mt-5 bg-blue-50 rounded-lg'>
      <div>
        <LoadChanger
          list={list}
          setList={setList}
          load={load}
          setLoad={setLoad}
        />
      </div>
      <div>
        <Pagination list={list} setList={setList} load={load} />
      </div>
    </div>
  )

  return markup()
}

export default Summary
