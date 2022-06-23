// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const dotenv = require('dotenv');
const { append } = require('express/lib/response');
dotenv.config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
 //'+13365080858'

//array for all phone numbers goes here.

//const numbers = ['+17046993417', '+15712508955','+13365080858'];
const numbers = ['+17046993417'];
Promise.all (
  numbers.map(number => {
    return client.messages.create({
     //body: 'This is Elvin, and I am just testing HackNC`s Twilio. I promise this is not a scam.',
     //body: 'Come to the great hall for Spaghetti!',

     //githubusername.io
     //body: '10 minutes left!',
     //body: 'We are at the 5 Minute Warning!',
     //body: 'Come to the great hall for Spaghetti!',
     //body: 'ATTENTION! 30 minutes left till judgment!'
     //body: 'Judgment time!'
     //body: Come to the great hall for a java workshop!
     //body: Come to the great hall for a python workshop to create a random number generator!
     body: 'Come to the great hall for Dim Sum!',
     
     
     

     from: '+13254253605',
     //use a forloop around the entire client.messages to send sms to multiple numbers
     to: number
    });
   })
)
  .then(message => console.log(message.sid));