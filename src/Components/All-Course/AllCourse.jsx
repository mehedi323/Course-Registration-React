import PropTypes from 'prop-types';

const AllCourse = ({allcourse}) => { 
  const {title   } = allcourse;
  
  return (
    <div className=' '>
      <div className='h-26'>
        <h5 className='font-normal text-2xl text-gray-400'><small>{title}</small></h5>
      </div> 
    </div>
  );
};

AllCourse.propTypes = {
  allcourse : PropTypes.object
}

export default AllCourse;