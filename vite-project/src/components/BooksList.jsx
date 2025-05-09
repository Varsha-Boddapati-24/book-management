import Books from "./Books";
import "./style.css"
function BooksList(props){
    return(
        <>
        <div className="book-list">
        {
            props.data.map((book)=>{
                return   (<Books key ={book.id} data={book}/>)
            })
        }
        </div>
      
        </>
    )
}
export default BooksList;