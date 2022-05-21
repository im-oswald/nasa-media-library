import { Component } from 'react'
import './app.styles.scss'

class App extends Component {
  render() {
    return (
      <div className='flex items-center justify-center h-screen'>
        <div className='text-black font-bold rounded-lg border shadow-lg p-10 m-20'>
          Hello World!
          <div>
            <div className={'container mx-auto px-4'}>
              <img src='../assets/images/sample.png' className={'mt-10 px-10'} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
