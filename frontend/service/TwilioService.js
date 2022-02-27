const express = require('express');
const cors = require("cors");
const { default: axios } = require('axios');
const accountSID = "AC56fc5b37803205fe2b7aa4cd3b04d967";
const accountToken = "37fc05b0e6d65f10bd311812541c9293";
const client = require('twilio')(accountSID, accountToken);
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const app = express();

app.use(cors());



app.post("/SMS-Response", (req, res) => {
    const twiml = new MessagingResponse();
    if (req.body.Body == "unsub") {
        twiml.message("You Have Been Unsubscribed!");;
        let areaC = req.from.substring(1, 3);
        let PhNumber = req.from.substr(3);
        const data = {
            areaCode: "+" + areaC,
            phoneNumber: PhNumber
        };

        axios({
                method: 'delete',
                url: 'https://hottopicscanner.herokuapp.com/customers/delete',
                data: data
            })
            .then((response) => {
                console.log(response.status);
            }, (error) => {
                console.log(error);
            });




    }
    res.writeHead(200, { 'Content-Type': "text/xml" });
    res.end(twiml.toString());
});



app.listen(4000, () => console.log("Running on Port 4000")); // port opened on 4000 might need to be changed later on