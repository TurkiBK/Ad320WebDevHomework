const http = require("http");// import http 
const port  = 8080; // save a port on verable
var fs = require("fs")

// function that handle coming data with respons and request parmater 

const ListrequestListnern =  (req,res) =>{
      
      // req part
      let data =""
      
      // here the data gets back
      req.on ("data", (chunk)=>  {

     data += chunk.toString("utf8")
})

    req.on("end",()=>{
        
      // res part
      res.writeHead(200, {'Content-Type':"text.html"});
      fs.readFile("./index.html", (err,data) =>{

        if (err){

            console.log(err)    

        }else{

            res.write(data)
            res.end();
            //console.log("recived data",data)
        }

      })
      //res.write(data)
     // res.end(data);
      

  
  
    })
}   
const server = http.createServer(ListrequestListnern); 
server.listen(port, ()=>{

});
console.log(`port listening on  ${port}`);