
import { useEffect } from "react";
import { useState } from "react";  
import Blogs from "./Blogs";
import PropTypes from 'prop-types';


 
const Block = ( { handleAllCourse } ) => {
  const [blogs, setBlogs] = useState([])
  useEffect( ()=>{
    fetch('card.json')
    .then(res=> res.json())
    .then(data => setBlogs(data))
  },[])
  return (
    <div className="md:w-2/3 text-4xl "> 
      <div className="grid sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3 gap-3">
          {
            blogs.map(blocks=> 
            <Blogs key={"id"}
            handleAllCourse={handleAllCourse}
             blogs={blocks} 
             ></Blogs>) 
            
          }
      </div>
    </div>
  );
};

Block.propTypes = {
  handleAllCourse : PropTypes.func
}

export default Block;