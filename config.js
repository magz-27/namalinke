/* Config Sample
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 *
 * You can use environment variables using a `config.js.template` file instead of `config.js`
 * which will be converted to `config.js` while starting. For more information
 * see https://docs.magicmirror.builders/configuration/introduction.html#enviromnent-variables
 */
let config = {
	address: "localhost",	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8888,
	basePath: "/",	// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
									// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],	// Set [] to allow all IP addresses
									// or add a specific IPv4 of 192.168.1.5 :
									// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
									// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
									// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false,			// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "",	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "",	// HTTPS Certificate path, only require when useHttps is true

	language: "pl",
	locale: "pl-PL",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			 module: 'MMM-GoogleCalendar',
    header: "Zbliżające się święta i urodziny",
    position: "top_left",
    config: {
        calendars: [
            {
              symbol: "calendar-week",
              calendarID: "mkosnoo@gmail.com"
            },
            
        ],
    }
		},
		{
			module: "compliments",
			position: "lower_third",
			config: {
			updateInterval: 20000,
     remoteFile:'https://raw.githubusercontent.com/magz-27/lustro/main/komplementy.json',
   }

		},

		{
    module: "weather",
    position: "top_right",
    config: {
     
      apiBase: 'https://api.openweathermap.org/data/',
      apiKey: "5f672c504517372715bd511f98b6721d",
	  location: "Olkusz, Poland",
      colored: "true",
      type: "current",
      showUVIndex: "true",
      timeFormat: "24",
      degreeLabel : "true",
      showPeriod: "false",
      lang: "pl",
      showWindDirectionAsArrow: "true",
      onlyTemp: "true",
      
			}
		},
		
	  {
    module: "helloworld",
    position: "bottom_bar", // This can be any of the regions.
    config: {
     
      text: "Newsfeed can't fetch news.",
    },
  },
	
	
	
	//facial recognition module
	{
  module: "MMM-Face-Recognition-SMAI",
  position:"top_center",
  config: {
    prompt: "facial recognition module in build"
  }
  
  
},



{
  module: "MMM-NowPlayingOnSpotify",
  position: "top_right",

  config: {
  	showCoverArt: false,
    clientID: "fb60eb25c5a74f01a04584809fc9c64a",
    clientSecret: "f25db8cf0f7549649ca8bb535b3d950e",
    accessToken: "BQBU0NcpBqu33TpogFEG75Cx33A59L5cxybG8N6OjqBoslWDaZMJaUq1FxDYc8qnKdG15orwqaBGvirLcg6U3v-ms4QyzwdWcF6A3SA-vzBwQ2ruIrcZ5vNJFvyVK0FBu2VDfdvfLiP8GU7nVDxIV5HVBYEEhvaDPnkaCQGPxZ4OYsTa5T1ynQhSXrcGG9qAupGGL-9sJALLCg",
    refreshToken: "AQCEeCzpr6avvTW7kmD9WhCebZJ9l07hHvv9Jh-mWZTxTAma3Tcz3bN3KiisxUindub1B-8qG3thk0URy8HXPJGJ66GdQqx2IeOK2E0En08wodaeuVxMdjG2ZPdacznTV6Y"
  }
},



	]
	
	
	
	
	
	
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
