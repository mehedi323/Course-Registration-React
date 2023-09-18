import PropTypes from 'prop-types'; 
import AllCourse from '../All-Course/AllCourse';

const Course = ({course}) => {  
  const totalPrice = course.reduce((p,c)=>p + c.price  ,0) 

  const totalCredit = course.reduce((total, credit  ) => total  + credit.credit  , 0)
  

  return (
    <div className="w-[400px] h-[450px] bg-sky-50 rounded-xl text-center text-3xl font-medium">
      <h2 className='text-[#2F80ED] text-xl border-b-2 py-4 font-bold mt-4'>Credit Hour Remaining 7 hr</h2>
      <h5 className='font-bold mt-4 text-3xl text-[#1C1B1B]'><small>Course Name: {course.length}</small></h5>
       <div className='border-b-2 py-4 '>
       {
        course.map(allcourse=><AllCourse key={allcourse.id} allcourse={allcourse}></AllCourse>)
       } 
       </div>
       <h4 className='py-4 border-b-2 text-[#1C1B1B] text-2xl font-medium '><small>Total Credit Hour :{totalCredit}</small></h4>
       <h6 className='py-4  text-[#1C1B1B] text-3xl font-semibold'><small>Total Price: {totalPrice} USD</small></h6> 
    </div>

  );
};
Course.propTypes = {
  course : PropTypes.array
}
export default Course;