// Foursquare API Info
const clientId = '3RZK5MX23GAUBT45CKJMH0YTERJVB2CLCLIQDQEG5ALE2ZOO';
const clientSecret = 'UECPUPV1234UWTZQMAU2V2G1IQR2DVXMQ1DNNZOR111OJUNN';
const url = `https://api.foursquare.com/v2/venues/explore?near=`;

// OpenWeather Info
const openWeatherKey = 'dd1aab9797fe9c3337e691e23d4ce087';
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather`;

// Page Elements
const $input = $('#city');
const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3"), $("#venue4"),$("#venue5")];
const $weatherDiv = $("#weather1");
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];




// Add AJAX functions here:
const getVenues = async () => {
    const city = $input.val()
    const urlToFetch = `${url}${city}&client_id=${clientId}&client_secret=${clientSecret}&limit=5&v=20210920`
    try {
        let res = await fetch(urlToFetch)
        if (res.ok) {
            let result = await res.json()
            console.log(result)
            // console.log(result.response.groups[0].items)
            let dataArr = result.response.groups[0].items
            console.log(dataArr)
            let venues = dataArr.map(item=>item.venue)
            console.log(venues)
            return venues
        }
    } catch (error) {
        console.log(error)
    }
}
// getVenues()
const getForecast = async() => {
    try {
    const city = $input.val()
        let urlToFetch = weatherUrl + `?&q=${city}` +`&APPID=${openWeatherKey}`
        let res = await fetch(urlToFetch)
        if(res.ok){
            let result = await res.json()
            console.log(result)
            return result
        }
        
    } catch (error) {
        console.log(error)
    }

}

// Render functions
const renderVenues = (venues) => {
    $venueDivs.forEach(($venue, index) => {
        // Add your code here:
        const venue = venues[index]
        console.log(venue)
        const venueIcon = venue.categories[0].icon
        console.log(venueIcon)
        const venueImgSrc = `${venueIcon.prefix}bg_64${venueIcon.suffix}`;
        let venueContent = createVenueHTML(venue.name,venue.location,venueImgSrc );
        $venue.append(venueContent);
    });
    $destination.append(`<h2>${venues[0].location.city}</h2>`);
}

const renderForecast = (day) => {
    // Add your code here:

    let weatherContent = createWeatherHTML(day);
    
    $weatherDiv.append(weatherContent);
}

const executeSearch = () => {
    $venueDivs.forEach(venue => venue.empty());
    $weatherDiv.empty();
    $destination.empty();
    $container.css("visibility", "visible");
    getVenues().then(venues=>renderVenues(venues)).catch(error=>console.log(error))
    getForecast().then(data=>renderForecast(data)).catch(error=>console.log(error))
    return false;
}

$submit.click(executeSearch)