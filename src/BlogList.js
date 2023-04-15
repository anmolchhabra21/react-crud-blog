// sfc
import { Link } from "react-router-dom";

const BlogList = ({kaminaB, title}) => {
    // instead of passing props as a argument we can directly destructure it in the argument only 
    // const blogs = props.kaminaB;
    // const title = props.title;

    // console.log(title,blogs)

    // const handleDelete = (id)=>{

    // } if it was here then the originial data would remain unaltered and only the prop value would have changed so passing functions as props 

    return ( 
        <div className="blog-list">
            <h3>{ title }</h3>
            {kaminaB.map((blog)=>(
                <div className="blog-preview" key={blog.id}>  
                <Link to={`blogs/${blog.id}`}>
                    <h2>{ blog.title }</h2>                       
                    <p>Written by { blog.author}  </p>
                </Link>   
                    
                    {/* <button onClick = {()=> handleDelete(blog.id)}>Delete Blog</button> */}
                </div>
            ))
            }

        </div>
     );
}
// Here the blogs was not defined so we are using some tareeka
// Props are a way to send data from a parent componenent to a child component
export default BlogList;