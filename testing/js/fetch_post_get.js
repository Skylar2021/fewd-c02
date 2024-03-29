// fecth request: GET % POST with .then() and throw new Error 
// fetch with async-await keyword
// fetch GET request
fetch('url').then(response =>{
  if(response.ok) {// resopnse.status === 200
    return response.json();
  } throw new Error('Request failed'); 
  
}, ntworkError => console.log(ntworkError.message)) // .message property is a human-readable description of the error
	.then(jsonResponse => {
	// code 
})

// fetch POST request
fetch('url address in string', {
	metnod: 'POST',
	headers: {
		'Content-type': 'application/json'
	},
	body: JSON.stringify('objYouWantToUpdateToServer')
})
  
// async arrow function syntax
const  func = async () => {

}

// fetch with async-await and try...catch
// async fetch GET request
const  func = async () => {
	try {
		const response = await fetch('url')
	  if (response.ok){
			const jsonResponse = await response.json()
			return jsonResponse
	  }
	  throw new Error('Request failed!')
	  
	} catch(error) {
		console.log(error)
	}
}

// async fetch POST request
const addData = async() =>{
	try {
		const response = await fetch('url', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify('objYouWantToUpdateToServer')
		})
		if (response.ok){
			const jsonResponse = await response.json()
			// handle jsonResponse
		}
	} catch(error){
		// handle error
	}
}