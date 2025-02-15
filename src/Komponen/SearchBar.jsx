import react from "react"
import { Link } from "react-router-dom"
import { FaArrowLeft} from "react-icons/fa";

export default function SearchBar(){
  return(
    <>
       {/* Search Bar */}
      <div className="mb-4">
      
      <Link to="/search">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 border bg-white rounded shadow-md"
        />
      </Link>
      </div>
    </>
    )
}