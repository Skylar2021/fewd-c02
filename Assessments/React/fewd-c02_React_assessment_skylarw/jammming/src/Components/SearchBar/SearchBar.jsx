import React,{useState} from 'react'
import './SearchBar.css'

export default function SearchBar({onSearch}) {
    const [searchTerm, setSearchTerm] =useState('')
    const search = term =>{
		// console.log(term)
        if(!term){
            return
        }        
        onSearch(term)
    }
    const handleTermChange = e => {
        // search(e.target.value)
        setSearchTerm(()=> e.target.value)
    }
    return (
        <div className="SearchBar">
            <input onChange={ e =>{handleTermChange(e)}} placeholder="Enter A Song, Album, or Artist" />
            <button className="SearchButton" onClick={(e)=>search(searchTerm)} value={searchTerm}>SEARCH</button>
        </div>
    )
}
