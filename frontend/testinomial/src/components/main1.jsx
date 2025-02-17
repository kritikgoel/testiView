import { Link } from 'react-router-dom';
import img from '../images/ph.png'
function Main1(){
    return(<>
    <div className="mb-[2rem]">
    <p className='text-5xl ml-[20rem] mt-[5rem] font-bold'>Get testimonials from Customers<br/><span className="ml-[20rem]"> & </span><br/> <span className="ml-[5rem]">Enhance your business</span></p>
       <p className="font-bold  mt-[1rem] ml-[10rem]">Using this you can collect all your review at one place and simply attach them to your own
       website using simple line of given code. </p> 
        <Link to="/demo">
       <button className=" hover:bg-purple-900 hover:text-white  py-3 rounded ml-[35rem] my-[3rem] px-[5rem]  bg-purple-800 text-white font-bold">Demo</button>
       </Link>
       <img src={img} alt="dashboard photo" className="h-[40rem] w-[70rem] ml-[10rem]"/>

    </div>
        

    </>)

}

export default Main1;
