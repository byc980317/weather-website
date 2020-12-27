const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=3b427491ca8aac96772562c64afe357c&query=' + latitude + ',' + longitude + '&units=f'
    
    request({ url: url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!')
        } else if (response.body.error) {
            callback('Unable to find location')
        }
        else {
            callback(undefined, response.body.current.weather_descriptions + ". It is currently " + response.body.current.temperature + " degrees out. It feels like " + response.body.current.feelslike + " degrees.")
        }
    })
}

module.exports = forecast