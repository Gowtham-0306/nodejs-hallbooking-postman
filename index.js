const {createServer} = require("node:http"); 

const express = require("express")
const bodyparser = require("body-parser");
const { url } = require("node:inspector");
const { log } = require("node:console");
const httpserver = express();
var bookedRooms = [];
var rooms = [];
var bookedRoomdetails = [];
var bookedroomslist = [];
httpserver.use(bodyparser.json());


httpserver.get("/roomdetails" , (req , res , next)=>{


res.send(rooms);


});






//Booking a room 
httpserver.post("/bookRoom" , (req , res , next)=>{


  res.send({RoomBookingStatus : "Booked Successfully"});
  
  bookedRooms.push(req.body);
  console.log(bookedRooms);
  
  });





//Booking a room  along with customer details

  httpserver.post("/createRoom" , (req , res , next)=>{


    res.send({RoomBookingStatus : "Booked Successfully"});
    
    bookedRoomdetails.push(req.body);
    console.log(bookedRoomdetails);
    
    });

  httpserver.put("/update/:name" , (req , res , next)=>{

// var filtereddata = arr.filter((data)=> data.name != req.params.name);

// filtereddata.push(req.body);

// arr = [...filtereddata]



    res.send({update : true});
    
    
    });
    // console.log(arr);

    httpserver.delete("/delete" , (req , res , next)=>{


      res.send({delete : true});
      console.log(req.body);
      
      });

      httpserver.post("/rooms" , (req , res , next)=>{


        res.send({RoomBookingStatus : "Room Booked Successfully"});
        
        rooms.push(req.body);
        console.log(rooms);
        
        });


        httpserver.post("/rooms/booking" , (req , res , next)=>{


          res.send({RoomBookingStatus : "Room Booked Successfully"});
          
          bookedroomslist.push(req.body);
          console.log(bookedroomslist);
          
          });


          httpserver.get("/rooms/booking/details/:CustomerName" , (req , res , next)=>{

var filtercustomer = bookedroomslist.filter((datas)=> datas.CustomerName === req.params.CustomerName);
var bookedcount = filtercustomer.length;
var customerdatas =  { "booked rooms list" :filtercustomer , "Bookedcount" : bookedcount};
var datas = {"customerdata" :customerdatas , "customerBookedCount" : bookedcount }
            res.send(datas );
            console.log(bookedroomslist);
            
            
            });


// starts a simple http server locally on port 3000
httpserver.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});

// run with `node server.mjs`
