import PropTypes from 'prop-types';
import { FaDollarSign , FaCreditCard } from 'react-icons/fa';


const Blogs = ( { blogs, handleAllCourse } ) => {
  const {title, img,  price,credit, description, } = blogs;
  return (
    // border-2 border-sky border-none
    <div className="border-2 border-sky w-4/5  ml-12  rounded-xl p-5">
      <img src={img} alt="" /> 
      <h3 className="font-semibold mt-2 text-xl text-[#1C1B1B] ">{title}</h3>
      <p className=" text-xl font-medium w-42 text-[#1C1B1B]"><small>{description}</small></p>
      <div className="flex font-medium text-2xl">
        <button className='  text-gray-500'><FaDollarSign></FaDollarSign></button>
        <h5 className="mr-4 text-gray-800"><small> Price: {price}</small></h5>
        <button className=' mr-2 text-gray-500'><FaCreditCard></FaCreditCard></button>
        <h5 className='text-gray-800'><small>Credit: {credit}hr</small></h5>
      </div>

      <button onClick={()=>handleAllCourse(blogs)}  className="text-xl border-2 w-full bg-[#2F80ED] rounded-xl text-white" >Select</button>
    </div>
    
  );
};
Blogs.propTypes = {
    blogs: PropTypes.object,
    handleAllCourse : PropTypes.func
}

export default Blogs;