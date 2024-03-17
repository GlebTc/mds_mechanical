import boiler from '@/utils//constants/content/boiler_text.json'

const Boiler = () => {
  return (
    <div className='flex flex-col p-4 gap-4 justify-center items-center h-full text-lg'>
      <h2 className='border-b-2 border-red-400 w-full text-2xl font-bold'>{boiler.boiler_page.title}</h2>
      <p>{boiler.boiler_page.first_paragraph}</p>
      <p>{boiler.boiler_page.second_paragraph}</p>
    </div>
  )
}

export default Boiler