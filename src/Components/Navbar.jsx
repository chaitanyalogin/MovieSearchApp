
const Navbar = () => {
  return (
    <div className='main lg:flex md:flex sm:flex-wrap justify-between shadow-md bg-[#40407a] p-4 sticky top-0 '>
      <div className='left flex items-center space-x-3 justify-center'>
<img className='w-10 ' src="https://movie-app-88kamal.vercel.app/clipart3105859.png" alt="img" />
        <h2 className='font-bold text-2xl text-white'>MovieMasala</h2>
      </div>
      <div className='right font-bold text-xl text-white'>
        <ul className='flex space-x-4 justify-center'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Service</li>
        </ul>

      </div>
    </div>
  )
}

export default Navbar
