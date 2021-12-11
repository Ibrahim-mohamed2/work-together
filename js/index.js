
// start to up scroll
let btn = document.querySelector(".but");
window.onscroll = function ()
{
    if (window.scrollY >= 100 || window.scrollX >=100 )
    {
        btn.style.display = "block";
    }
    else
    {
        btn.style.display = "none";
        }
        
}
btn.onclick = function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
};
     
//end to up scroll





// start random background page
//select landing page
let page = document.querySelector(".landing-page");

//get array image
let imagearray = ["1.jpg", "2.jpg", "3.jpg", "4.webp", "5.jpg"];

//random background option
let backgroundoption = true;

//variable to control randomize img
let backinterval;

//function to randmoize img
function randomoize()
{
    if (backgroundoption === true)
    {
   backinterval= setInterval(() => {
    //get random number
let randomnumber = Math.floor(Math.random() * imagearray.length);

    //change bacground url
    page.style.backgroundImage = 'url("images/' + imagearray[randomnumber] +'")';

}, 1700);
 
        }
}
randomoize();

// end randomm backgroound page






// this is way to make a random background img

// // start random background page
// //select landing page
// let page = document.querySelector(".landing-page");

// //get array image
// let imagearray = ["1.jpg", "2.jpg", "3.jpg", "4.webp", "5.jpg"];

//    setInterval(() => {
//     //get random number
// let randomnumber = Math.floor(Math.random() * imagearray.length);

//     //change bacground url
//     page.style.backgroundImage = 'url("images/' + imagearray[randomnumber] +'")';

// }, 2000);
// //end randomm backgroound page




// start toggle icon setting box
let icon = document.querySelector(".toggle i");
let box = document.querySelector(".setting-box");

icon.onclick = function () {
    icon.classList.toggle("fa-spin");
    box.classList.toggle("open");

};
// end toggle icon setting box

//start local storage for option color
//check if the localsotorage color option
let maincolor = localStorage.getItem("color_option");

if (maincolor !== null)
{
            document.documentElement.style.setProperty("--main-color",maincolor);
    document.querySelectorAll(".color-list li").forEach(element => {
           
        element.classList.remove("active");

                //add active class on target element
        if (element.dataset.color === maincolor)
        {
            element.classList.add("active");
    }
    });
}
//end local storage for option color


//start switch color
const colorli = document.querySelectorAll(".color-list li");
colorli.forEach(li => {
    li.addEventListener("click", (e) => {
        document.documentElement.style.setProperty("--main-color", e.target.dataset.color);

        localStorage.setItem("color_option", e.target.dataset.color);
// //remove active from all chlindern
//         e.target.parentElement.querySelectorAll(".active").forEach(element => {
           
//             element.classList.remove("active");
//         });
//         //add active class on target element
//         e.target.classList.add("active");
        handleactive(e);

    });
});
// end switch color




//start random background option the button yes and no
//start local storage for random background

let  bacgroundlocalstor = localStorage.getItem("background_option");

if (bacgroundlocalstor !== null)
{
    if (bacgroundlocalstor === 'true')
    {
        backgroundoption = true;
    }
    else
    {
        backgroundoption = false;

    }
    document.querySelectorAll(".random-background span").forEach(element => {
        element.classList.remove("active");
    });

    if (bacgroundlocalstor === 'true')
    {
        document.querySelector(".yes").classList.add("active");
    }
    else {
     document.querySelector(".no").classList.add("active");

    }

}
//end local storage for random background

const randombackground = document.querySelectorAll(".random-background span");

randombackground.forEach(span => {
    
    span.addEventListener("click", e => {
        // e.target.parentElement.querySelectorAll(".active").forEach(element => {
        //     element.classList.remove("active");
        // });
        // e.target.classList.add("active");
        handleactive(e);

        if (e.target.dataset.background ==="yes")
        {
            backgroundoption = true;
            randomoize();
            
            localStorage.setItem("background_option", true);

        }
        else
        {
            backgroundoption = false;
            clearInterval(backinterval);

            localStorage.setItem("background_option", false);

        }

    });
});



// end random background option the button yes and no


    



// start skills
let section = document.querySelector(".skills");
        let spansprogress = document.querySelectorAll(".skill-box .progress span");

window.onscroll = function () {
    //find skills offset top
    let offsetop = section.offsetTop;
    //find skills outer height
    let oughter = section.offsetHeight;

    //find widow height
    let windowheight = this.innerHeight;

    //find scroll top
    let scrolltop = this.pageYOffset;

    if (scrolltop > (offsetop + oughter - windowheight)) {
        // now reached in section
        spansprogress.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    }
};


// end skills





// start gallery

//create popup with the image

let gallery = document.querySelectorAll('.gallery img');

gallery.forEach(img => {
   
    img.addEventListener("click", (e) => {
       
        //create overlay element
        let overlay = document.createElement("div");
        //add class to overlay
        overlay.className = 'popup-overlay';

        //apend overlay to the body
        document.body.appendChild(overlay);

        //create the popup box
        let popupbox = document.createElement("div");

        //add class to the popup
        popupbox.className = 'popup-box';

         if (img.alt !== null)
        {
            //create the heading
            let theheading = document.createElement("h3");

            //create text for heading
            let imgtext = document.createTextNode(img.alt);

            //apend the text to the heading
            theheading.appendChild(imgtext);

            //append the heading to popup box
            popupbox.appendChild(theheading);
            }

        //create the image
        let popupimage = document.createElement('img');

        //set image src
        popupimage.src = img.src;

        //apend image to popup
        popupbox.appendChild(popupimage);
        //apend popubox to the body
        document.body.appendChild(popupbox);


        //create the close span
        let closebutton = document.createElement("span");

        //create the close button text

        let closetext = document.createTextNode("close");
        
        //append text to the close button

        closebutton.appendChild(closetext);

        //add class name to closebutton
        closebutton.className = 'close-button';

        //add close button to the popup box
        popupbox.appendChild(closebutton);
        
       

    });
});

//close popup
document.addEventListener("click", function (e) {
    
    if (e.target.className == 'close-button')
    {
        //remove popup
        e.target.parentNode.remove();

        //remove overlay
        document.querySelector('.popup-overlay').remove();
    }

})
// end gallery





//start nav bullet

let bullets = document.querySelectorAll(".nav-bullets .bullet");

bullets.forEach(bullet => {
   
    bullet.addEventListener("click", (e) => {
        
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior: "smooth"
        });

    });
});
//end nav bullet

// start arrive section by links
let alllinks = document.querySelectorAll(".links li");

alllinks.forEach(li => {
    
    li.addEventListener("click", e => {
        e.preventDefault();
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior: "smooth"
        });
    });

});
// end arrive section by links



// start bullet option
let bulletspans = document.querySelectorAll(".bullets-option span");

let navbullets = document.querySelector(".nav-bullets");
// start local storage for the nav bullet
let localstoritem = localStorage.getItem("bullet_option");
if (localstoritem !== null)

{
    bulletspans.forEach(span => {
        span.classList.remove("active");
    });
    if (bulletspans === 'block')
    {
   localStorage.setItem('bullet_option','block');
        document.querySelector(".bullets-option .yes").classList.add("active");
    }
    else {
       localStorage.setItem('bullet_option','none');
        document.querySelector(".bullets-option .no").classList.add("active");

    }
}


// end local storage for the nav bullet
bulletspans.forEach(span => {
    span.addEventListener("click", e => {
        if (span.dataset.display === 'show')
        {
            navbullets.style.display = 'block';

            localStorage.setItem("bullet_option",'block');
        }
        else
        {
         navbullets.style.display = 'none';
   
        localStorage.setItem("bullet_option",'none');

        }
        handleactive(e);
    });
});

// end bullet option


//start make button to reset option
document.querySelector(".reset-option").onclick = function ()
{
    localStorage.clear();
    window.location.reload();
    }


//end make button to reset option




// i will make a function to handle function
function handleactive(ev) {
    //remove active from all chlindern
        ev.target.parentElement.querySelectorAll(".active").forEach(element => {
           
            element.classList.remove("active");
        });
        //add active class on target element
        ev.target.classList.add("active");
}

//start toggle menu
let butmenu = document.querySelector(".links-container i");
let links = document.querySelector(".links");

butmenu.onclick = function ()
{
    links.classList.toggle("open");
}

// end toggle menu