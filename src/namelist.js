const NameList = () => {
    const names = ['badkfjk', 'adsfads' , 'afdlksjd' ]
    return ( 
        <div>
            {       //map method is javascript code and it needs to be evaluated and { }is the way to do this in jsx
            names.map(saala => <h2>{saala}</h2>) //map takes in a fucntion as a argument
                                    // again curly braces to evaluate the 

            }
        </div>
     );
}
 
export default NameList;