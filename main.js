
 //----------------Toggle_Song----------------------


function toggleSong(){  //created a function that toggle the song
         var song = document.querySelector('audio');// ek song variable liya jisme audio tag ko pakad ke daal diya 
        if (song.paused == true) { // ab song se pucha ki wo pause hai ya nahi, agar pause hua to ander wala code chalega otherwise else chalega
            console.log('Playing');//console pe playing show hoga
            $('.play-icon').removeClass('fa-play').addClass('fa-pause');// play-icon class ko pakad ke usme fa-play class remove kardi and fa-pause add kardi isse icon change ho jayega 
            song.play();// song play ho jayega
        } 
        else // agar song play ho raha hua to else wala part chlega 
        {
            console.log('Pausing');// console pe pausing print karwa diya
            $('.play-icon').removeClass('fa-pause').addClass('fa-play');// play-icon class ko pakad ke usme fa-pause class remove kardi 
            song.pause(); // song pause ho jayega
        }
    }

    //--------------------- UpdateCurrent Time -----------------

     function updateCurrentTime()// new function bnaya
    {
        var song = document.querySelector('audio'); // song variable mein audio tag daal diya 
   //      //console.log(song.currentTime);// console pe song ka currentTime show karwa diya
   // // console.log(song.duration); // console pe song ki duration show ho jaye
    $('.time-elapsed').text(fancyTimeFormat(song.currentTime));// time-elapsed wale tag mein fancy time format function call kar ke current time print karwa liya
    $('.song-duration').text(fancyTimeFormat(song.duration));// song-duration wale tag mein fancy time format function call kar ke cduration print karwa li
     }

    // function updateCurrentTime() 
    // {
    //     var song = document.querySelector('audio');
    //     var currentTime = Math.floor(song.currentTime);
    //     currentTime = fancyTimeFormat(currentTime);
    //     var duration = Math.floor(song.duration);
    //     duration = fancyTimeFormat(duration)
    //     $('.time-elapsed').text(currentTime); 
    //     $('.song-duration').text(duration);
    // }


    //------------------------ FancyTimeFormat ------------------

    
    function fancyTimeFormat(time)
    {   
        // Hours, minutes and seconds
        var hrs = ~~(time / 3600);
        var mins = ~~((time % 3600) / 60);
        var secs = ~~(time % 60);

        // Output like "1:01" or "4:03:59" or "123:03:59"
        var ret = "";

        if (hrs > 0) 
        {
            ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
        }

        ret += "" + mins + ":" + (secs < 10 ? "0" : "");
        ret += "" + secs;
        return ret;
    }


    //---------------------- Welcome-Screen Code ---------------
   
    $('.welcome-screen button').on('click', function()// button ko pakda and click hone pe function chlya
        {
        var name = $('#name-input').val(); // name variable liya ek  usme name-input mein jo value input karenge wo daal di
        if (name.length > 2) {  //agar name variable mein jo value hai uski length 2 se jyada hai toh ander wala code chalega 
            var message = "Welcome, " + name;// message variable liya and usme welcome + name variable ki value daal di
            $('.main .user-name').text(message);// user name class wale tag ko pakda and usme text daal diya jo message variable mein tha
            $('.welcome-screen').addClass('hidden');// welcome-screen wala section hide kar diya bcz usme hidden class add kardi
            $('.main').removeClass('hidden');// main class ko pakda and usse hidden class remove kar di and wo ab show ho jayega
        } else //agar name variable ki length < 2 hui then ander wala code chalega
        {
            $('#name-input').addClass('error');// name-input id wala tag pakda, usme error class add kardi
        }
    });

    //------------------ play-icon pressed ---------------------
   
    $('.play-icon').on('click', function() {// play-icon wali class wala tag pakda and usko click karne pe function chla diya
       toggleSong();// toggleSong wala function ua machine call ki i.e. ab toggleSong wala function chalega
    });
    
    //---------------- Space-bar pressed ----------------------

    $('body').on('keypress', function(event) { //body ko pakda uspe keypress ka event lagaya, jab key press hogi tab function chalega; isme event as an argument pass kiya hai
                if (event.keyCode == 32) // event se hum bhot kuch check kar sakte hain jaise yahan humne keyCode check kiya hai matlab jo key humne press ki hai uska code 32 hai to ander wala code chalega otherwise nhi
                {
                   toggleSong();// toggleSong wala function call kar diya
               }
            });

    //------------------ Object Array -----------------

//array of an object is created and an object contains all the details of the song
        var songs= [
        {
            'name':'Ride',
            'album':'Blurryface',
            'artist':'SoMo',
            'dur':'3:37',
            'source':'song1.mp3',
            'img':'song1.jpeg'
        },
        {
            'name':'Emptiness',
            'album':'Alesana',
            'artist':'Gajendra Verma',
            'dur':'4:05',
            'source':'song2.mp3',
            'img':'song2.jpg'
        },
        {
            'name':'I wanna grow old with you',
            'album':'World of Our Own',
            'artist':'Westlife',
            'dur':'4:08',
            'source':'song3.mp3',
            'img':'song3.jpeg'
        },
        {
            'name':'Nashe si chad gayi',
            'album':'Befikre',
            'artist':'Arijit Singh',
            'dur':'2:34',
            'source':'song4.mp3',
            'img':'song4.jpg'
        }
        ]
       //--------------------- Play All Function ----------------

    function playAll()
    {
        var audio= document.querySelector('audio');
        if(audio.currentTime==audio.duration)
        {
            var i;
            var str= audio.src;
            var start= str.length-9;
            var res= str.substring(start,str.length);
            console.log(res);
            // if(audio.currentTime==audio.duration)
            i= songSrc.indexOf(res);
            i=i+1;
            console.log(i);
            audio.src=songSrc[i];
            audio.play();
        }        
    }
   

    //------------------- printing on console --------------
    
    window.onload=function () { //jab bhi page or say window load ho function chalega
        // body...
        
         for(var i =0; i < songs.length;i++) // loop lagaya fom 0 to 3
         {
            var obj= songs[i];// obj variable is created and one by one objects are placed in variable
        var name = '#song' + (i+1); // name mein tag ki id ka name daal liya
        var song = $(name); // song mein name wali id wala tag pakad ki daal liya
        song.find('.song-name').text(obj.name);// id wale div ke child divs mein se song-name class wla div find kar ke usme text daal diya
        song.find('.song-artist').text(obj.artist);// id wale div ke child divs mein se song-artist class wla div find kar ke usme text daal diya
        song.find('.song-album').text(obj.album);// id wale div ke child divs mein se song-album class wla div find kar ke usme text daal diya
        song.find('.song-length').text(obj.dur);// id wale div ke child divs mein se song-length class wla div find kar ke usme text daal diya
        // ab i increment ho ke ese hi sare songs ki details fll ho jayengi
        } 

        //------------------------ Change current Song details ------------

        function changeCurrentSongDetails(songObj)// current song ki details changr karne ke liye func. bnaya hai
        {
            $('#currentSongImg').attr('src','images/'+ songObj.img);//currentSongImg wale tag mein attributde src mein value daal di, eg. "images/song1.jpeg"
            $('#currentSongName').text(songObj.name);// yahan song ke object mein se uska name daal diya
            $('#currentSongAlbum').text(songObj.album);  // yahan song ke object mein se uski album daal di
        } 

        //----------------------- ADD SONG ON CLICK EVENT ----------------------

        function  addSongClickEvent( position)// function declare kiya addSongClickEvent name se and it takes an argument position
        {
            changeCurrentSongDetails(songs[0]);// static value di hai yahan and 1st song ki details print karwa li
            var songObj= songs[position-1];// object variable bnaya 
            var songSrc=songObj.source;// song obj ka source property daal di variable mein
            var id= '#song' + position;// id variable mein #song + position concatenate ho ke dal jayegi for eg. agar position ki value 1 hui to id variable will become #song1
            $(id).on('click',function()// jo value id mein thi usse pakad kar on click event lga diya and click hone pe wo function chalega
            {

            var audio= document.querySelector('audio'); // audio tag ko pakad ke ek audio name ke box mein band kar liya
             if(audio.src.search(songSrc)!=-1)// udio ke src attribute mein se song search kiya agar search ho gya to if block chalega
            {
                toggleSong();// toggleSong func. call kiya 
            }
            else //agar search nhi hua to matlab koi aur song chal raha hai then else block chalega
            {
                audio.src= songSrc;// audio ke src mein jo song click kiya hai uska src daal diya
                toggleSong();// toggleSong call kar liya ta ki song ko click kar ke play pause kar sakein 
                changeCurrentSongDetails(songObj);// function call kiya and parameter pass kiya hai object
            }
            setInterval(function() 
            { // 1 sec ke baad function chalega and har sec ke   baad chalta rahega, kinda infinite loop
             playAll(); // updateCurrentTime function call kiya
            }, 1000);
            }); 
        }
        
       for (var i = 1; i <= songs.length ; i++) // ek variable liya i usko initialize kar liya 1 se and yeh 4 tak chalega bcz isme songSrc array ki length 4 hai
        {
            addSongClickEvent(i);// yahan addSongClickEvent() function call kar liya and i ki value upar pass kardi
        }
        
        $('#songs').DataTable({
            paging:false
        });
        updateCurrentTime();// jab load hogi window tabhi call ho jayega function
        setInterval(function() { // 1 sec ke baad function chalega and har sec ke baad chalta rahega, kinda infinite loop
            updateCurrentTime(); // updateCurrentTime function call kiya
        }, 1000);
       
    }
    