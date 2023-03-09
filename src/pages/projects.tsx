export default function projects() {
  return (
    <div id='projectPage' className='flex justify-center w-screen h-screen bg-slate-700'>
      <div id='projectPageWrapper' className='flex flex-col w-5/6 h-full items-center bg-red-200'>

        <div id='projectPageHeader' className='flex items-center m-4 w-5/6 h-1/6 bg-gray-800 rounded-xl'>
          <h1 className='w-full text-center text-3xl underline text-white'>My Projects</h1>
        </div>

        <div className='flex w-full h-5/6 bg-red-800'>
            <h1>Projects</h1>
        </div>
      </div>
    </div>
  )
}
