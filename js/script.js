// Complete Day 1 goals here
/*
let songList = ["Save Your Tears","Sparks","Nothing New","Watercolor Eyes"];
let Artist = ["The Weekend","Coldplay","Taylor Swift"," Lana De Rey"];
let songLength = ["4:09","3:48","4:23","3:41"];
let Images = ["https://images.genius.com/5a4516e086091510752ca9a49bc5bfef.1000x1000x1.png",
     "https://i.ytimg.com/vi/upq_QlhqStY/maxresdefault.jpg",
     "https://images.genius.com/5a954f24df4e1ba2a4aa70702aef78d0.1000x1000x1.png",
     "https://images-na.ssl-images-amazon.com/images/I/81XyYofvHFL._SL1500_.jpg"          
     ];
let songLinks = ["https://www.youtube.com/watch?v=XXYlFuWEuKI",
                "https://www.youtube.com/watch?v=Ar48yzjn1PE",
                "https://www.youtube.com/watch?v=m3fWCRvz5JA",
                "https://www.youtube.com/watch?v=GBxs3W_Y8MU"]; */

  
  // Complete the Day 2 goals inside this function
let songOne = {
  title: "Save Your Tears",
  artist: "The Weekend",
  songlength: "4:09",
  songImage: "https://cdn.glitch.global/31984cd7-c786-48b2-8913-a373a0b62fb9/db779ca9-db14-465e-91fd-640c03ffb430.image.png?v=1647983754331",
  songLinks: "https://www.youtube.com/watch?v=XXYlFuWEuKI"
}
let songTwo = {
  title: "Sparks",
  artist: "Coldplay",
  songlength: "3:48",
  songImage: "https://cdn.glitch.global/31984cd7-c786-48b2-8913-a373a0b62fb9/e21c0585-0db1-4f1d-bf90-bdc5cfe3b014.image.png?v=1647979201358",
  songLinks: "https://www.youtube.com/watch?v=Ar48yzjn1PE"
}
let songThree = {
  title: "Nothing New",
  artist: "Taylor Swift",
  songlength: "4:23",
  songImage: "https://cdn.glitch.global/31984cd7-c786-48b2-8913-a373a0b62fb9/ce0a506a-e008-49bb-ad51-571ee2f533b8.image.png?v=1647979129757",
  songLinks: "https://www.youtube.com/watch?v=m3fWCRvz5JA"
}
let songFour = {
  title: "Watercolor Eyes",
  artist: "Lana De Rey",
  songlength: "3:41",
  songImage: "https://cdn.glitch.global/31984cd7-c786-48b2-8913-a373a0b62fb9/956af200-fdac-4a8e-a7c9-b8c154fcbfa1.image.png?v=1647979268977",
  songLinks: "https://www.youtube.com/watch?v=GBxs3W_Y8MU"
}

let everything = [songOne,songTwo,songThree,songFour];

function displaySongInfo() {

  for (let song of everything) {
    $(".songs").append(`<p> ${song.title}</p>` ); 
    $(".artists").append(` <div> ${song.artist} </div>`); 
     $(".lengths").append(` <div> ${song.songlength} </div>`); 
     $(".images").append(` <div> <img src= "${song.songImage}" </div>`); 
       $(".links").append(` <a href = ${song.songLinks} target="_blank" > link   </a>`); 
  }
}
function emptySongInfo() {
  /* this function empties the divs each time the button is 
  clicked so that your playlist does not repeatedly add the data
  too many times. Try commenting out this function call to see 
  what happens without it! */
  $(".songs").empty();
  $(".images").empty();
  $(".artists").empty();
  $(".lengths").empty();
  $(".links").empty();
};

function addSongInfo() {
  
/*let addLength = $(".lengths").val();
  
  let addSongName = $(".songs").val()
   
   let addArtist = $(".artists").val()
    
   let addImage = $(".images").val()
    
   let addSongLink = $(".links").val();
   */
  let collect = {
    title: $(".song").val(),
    artist: $(".artist").val(),
    songlength: $(".length").val(),
    songImage: $(".image").val(),
    songLinks: $(".link").val()
  };
   
  everything.push(collect);
  
  console.log(everything);
  
}

$("#add").click(function () {
  emptySongInfo();
  addSongInfo(); 
  displaySongInfo();
});

displaySongInfo();
