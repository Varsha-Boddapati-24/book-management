
import BooksList from "./components/BooksList";
import {books} from "./utils/mockData"
import { useState } from "react";
// import "./components/style.css"
function App() {
  const [text,setText]=useState("")
  const[filteredBooks,setFilteredBooks]=useState(books)
  function handleSearch(){
 console.log("text",text)
  let filterBooks=filteredBooks.filter((book)=>{
    console.log("book",book)
   return  book.title.toLowerCase().includes(text.toLocaleLowerCase())})
  console.log("filterBooks",filterBooks)
  setFilteredBooks(filterBooks)

  }


  return(
    <>
    <div className="search">
      <h2>Books</h2>
      <div>
      <input type="text" className="search-input" onChange={(e)=>{setText(e.target.value)}}/>
      <button className="searchBtn" onClick={handleSearch}>Search</button>
      </div>
    </div>
    <BooksList data={filteredBooks}/>
    </>
  )

}

export default App
