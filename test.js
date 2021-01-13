function gettPictur() {
    var changPic = document.getElementById("dogPic");
  
    console.log("about to fetch pic")
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => {
      console.log(res)
      return res.blob()
    })
    .then(blob =>{
      console.log(blob);
      document.getElementById("dogPic").src= URL.createObjectURL(blob)
     
});
}