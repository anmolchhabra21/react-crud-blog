// import {useState,useEffect} from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

        // const [blogs,setBlogs]= useState(null
        // //     [            empty this to get all the data from data.db.json and not from here
        // //     {title:"My new website", body: "loremsdlkfjas;dflkj", author:'mario',id:1},
        // //     {title:"Welcome Party", body: "loremsdlkfjas;dflkj", author:'anmol',id:2},
        // //     {title:"Web dev top tips", body: "loremsdlkfjas;dflkj", author:'marag0',id:3},
        // // ]                and once we get the data we will update the data witth setBlogs hook 
        // );

        // const [isPending, setIsPending] = useState(true);

        // const [error, setError] = useState(null);


        // const handleDelete = (id) =>{
        //     // filter doesnot alter the original data but returns the new data 
        //     const newBlogs = blogs.filter(blog => blog.id!= id);
        //     setBlogs(newBlogs);
        // }

    // useEffect(()=>{ //when need to run a code at every run
    //     setTimeout(() => {
    //         fetch("http://localhost:8000/blogs")
    //             .then(res => {
    //                 if(!res.ok){
    //                     throw Error("Could not fetch data for that resource")
    //                 }
    //                 return res.json()
    //             })
    //             .then(data => {
    //                 // console.log(data);
    //                 setBlogs(data);
    //                 setIsPending(false);
    //                 setError(null);
    //             })
    //             .catch((e)=>{
    //                 setError(e.message);
    //                 setIsPending(false);
    //             })
    //     }, 2000);
        
    // } , [])

    const { data : blogs , isPending, error } = useFetch('http://localhost:8000/blogs')
// get data but call it blogs 

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading....</div>}
            {blogs && <BlogList kaminaB ={blogs} title="All Blogs!" />}
            {/* <BlogList kaminaB ={blogs.filter((blog)=> blog.author ==='mario')} title="Mario's Blogs!"/> */}

           
        </div>
     );
}
 //it can take us to a different page later on
 //when we output and render a list each element must have a key property for react 
export default Home;

    // let name = 'mario'; //this name is not reactive to changes 
    // const [name, setName] = useState('mario')
    // const [age, setAge] = useState(25);

    // const handleClick = ()=>{
    //     // console.log("Hello ninjas",e); the name updates but doesnot display in the template 
    //     setName('luigi') ; //triggers react to re-render the componenet
    //     setAge(30);

    // }

    // const handleClickAgain = (name,e)=>{
    //     console.log("hello " + name ,e.target);
    // }

    
{/* <h2>Homepage Content</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click Me</button> */}

            {/* <button onClick={(e)=>{
                // 
                handleClickAgain('mario',e)
            }}>click me again!</button> */}