const request = require('request')
const forecast = (lat, long, callback) => {

    const url = 'https://api.darksky.net/forecast/c1833fd811e5c8c3e925fda4230dfe47/' + encodeURIComponent(lat) + ',' + encodeURIComponent(long) + '?units=si'

    request({ url: url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to process the request', undefined)
        }
        else if (body.error) {
            callback('Unable to find location', undefined)
        }
        else {
            //const data = JSON.parse(response.body)
            const current = body.currently;
            // console.log(body.daily.data[0]);
            const forecast =
                // temp: body.currently.temperature,
                // percip: body.currently.precipProbability,
                // summary: body.currently.summary

                "it is currently " + body.currently.temperature + " degrees out. The high today is " + body.daily.data[0].temperatureHigh + " The min temp is " + body.daily.data[0].temperatureLow + " There is " + body.currently.precipProbability + " % chance of rain. " + body.currently.summary

            // console.log("it is currently " + current.temperature + " degrees out. There is " + current.precipProbability + " % chance of rain")
            callback(undefined, forecast)
        }
    })
}

module.exports = forecast;