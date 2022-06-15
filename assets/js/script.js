'use strict';

/**
 * Code Owner: Diwas Atreya (Atreya#2401)
 * Github: https://github.com/diwasatreya
 * Contact on Twitter: https://twitter.com/DiwasAtreya
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }

const owner = [
    {
       "id": "519666024220721152", //Supreme 
        "post": "Owner",
        "url": "https://github.com/diwasatreya"
    }
]

const owner2 = [
    {
        "id": "714466395022426172", // Royalty
        "post": "Owner",
        "url": "https://github.com/hisRoyalty"
    }
]

const mod1 = [
    {
        "id": "877749003637383168", // Archer
        "post": "Community Manager",
        "url": "http://instagram.com/arch3r_official"
    }
]

const mod2 = [
    {
        "id": "665781896248295424", // Arpan
        "post": "Community Manager",
        "url": "https://github.com/diwasatreya"
    }
]

const mod3 = [
    {
        "id": "909382095170834472", //Derpy Dev
        "post": "Moderator",
        "url": "https://github.com/DerpyTheDev"
    }
]

const mod4 = [
    {
     "id": "790840344081465375", // Maccroe
        "post": "Moderator",
        "url": "https://github.com/diwasatreya"
    }
]

const mod5 = [
    {
"id": "901596108927664171", // Tdubs
        "post": "Moderator",
        "url": "https://github.com/diwasatreya"
    }
]
const team1 = document.getElementById("team1");
for (let indexOne = 0; indexOne < owner.length; indexOne++) {
    const a = owner[indexOne];

    fetch(`https://aromaxdev.xyz/api/discord/user/${a.id}`, {
    }).then(res => res.json())
        .then(data => {
const ownerList = `<a href="${a.url}" class="team-member"><figure>
<img src="${data.url}" alt="${data.username}${data.discriminator}"></img></figure> <ion-icon name="link-outline"></ion-icon></a>`
            team1.innerHTML += ownerList;
        })
}

const team2 = document.getElementById("team2");
for (let indexOne = 0; indexOne < owner2.length; indexOne++) {
    const a = owner2[indexOne];

    fetch(`https://aromaxdev.xyz/api/discord/user/${a.id}`, {
    }).then(res => res.json())
        .then(data => {
const ownerList = `<a href="${a.url}" class="team-member"><figure>
<img src="${data.url}" alt="${data.username}${data.discriminator}"></img></figure> <ion-icon name="link-outline"></ion-icon></a>`
            team2.innerHTML += ownerList;
        })
}

const team3 = document.getElementById("team3");
for (let indexOne = 0; indexOne < mod1.length; indexOne++) {
    const a = mod1[indexOne];

    fetch(`https://aromaxdev.xyz/api/discord/user/${a.id}`, {
    }).then(res => res.json())
        .then(data => {
const ownerList = `<a href="${a.url}" class="team-member"><figure>
<img src="${data.url}" alt="${data.username}${data.discriminator}"></img></figure> <ion-icon name="link-outline"></ion-icon></a>`
            team3.innerHTML += ownerList;
        })
}

const team4 = document.getElementById("team4");
for (let indexOne = 0; indexOne < mod2.length; indexOne++) {
    const a = mod2[indexOne];

    fetch(`https://aromaxdev.xyz/api/discord/user/${a.id}`, {
    }).then(res => res.json())
        .then(data => {
const ownerList = `<a href="${a.url}" class="team-member"><figure>
<img src="${data.url}" alt="${data.username}${data.discriminator}"></img></figure> <ion-icon name="link-outline"></ion-icon></a>`
            team4.innerHTML += ownerList;
        })
}

const team5 = document.getElementById("team5");
for (let indexOne = 0; indexOne < mod3.length; indexOne++) {
    const a = mod3[indexOne];

    fetch(`https://aromaxdev.xyz/api/discord/user/${a.id}`, {
    }).then(res => res.json())
        .then(data => {
const ownerList = `<a href="${a.url}" class="team-member"><figure>
<img src="${data.url}" alt="${data.username}${data.discriminator}"></img></figure> <ion-icon name="link-outline"></ion-icon></a>`
            team5.innerHTML += ownerList;
        })
}

const team6 = document.getElementById("team6");
for (let indexOne = 0; indexOne < mod4.length; indexOne++) {
    const a = mod4[indexOne];

    fetch(`https://aromaxdev.xyz/api/discord/user/${a.id}`, {
    }).then(res => res.json())
        .then(data => {
const ownerList = `<a href="${a.url}" class="team-member"><figure>
<img src="${data.url}" alt="${data.username}${data.discriminator}"></img></figure> <ion-icon name="link-outline"></ion-icon></a>`
            team6.innerHTML += ownerList;
        })
}

const team7 = document.getElementById("team7");
for (let indexOne = 0; indexOne < mod5.length; indexOne++) {
    const a = mod5[indexOne];

    fetch(`https://aromaxdev.xyz/api/discord/user/${a.id}`, {
    }).then(res => res.json())
        .then(data => {
const ownerList = `<a href="${a.url}" class="team-member"><figure>
<img src="${data.url}" alt="${data.username}${data.discriminator}"></img></figure> <ion-icon name="link-outline"></ion-icon></a>`
            team7.innerHTML += ownerList;
        })
}

const win = [
    {
        "id": "555625169696194562", 
        "post": "Giveaway Winner",
        "url": "https://github.com/diwasatreya"
    }
]

const win2 = [
    {
        "id": "815982665546989579", 
        "post": "Giveaway Owner",
        "url": "https://github.com/diwasatreya"
    }
]

const gaw = document.getElementById("gaw");
for (let indexOne = 0; indexOne < win.length; indexOne++) {
    const a = win[indexOne];

    fetch(`https://aromaxdev.xyz/api/discord/user/${a.id}`, {
    }).then(res => res.json())
        .then(data => {
const ownerList = `<img src="${data.url}" alt="${data.username}${data.discriminator}"></img>`
            gaw.innerHTML += ownerList;
        })
}


const gaw2 = document.getElementById("gaw2");
for (let indexOne = 0; indexOne < win2.length; indexOne++) {
    const a = win2[indexOne];

    fetch(`https://aromaxdev.xyz/api/discord/user/${a.id}`, {
    }).then(res => res.json())
        .then(data => {
const ownerList = `<img src="${data.url}" alt="${data.username}${data.discriminator}"></img>`
            gaw2.innerHTML += ownerList;
        })
}




/**
 * navbar variables
 */

const navbar = document.querySelector("[data-nav]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

for (let i = 0; i < navElemArr.length; i++) {

  navElemArr[i].addEventListener("click", function () {
    elemToggleFunc(navbar);
    elemToggleFunc(overlay);
    elemToggleFunc(document.body);
  })

}



/**
 * go top
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 800) {
    goTopBtn.classList.add("active");
  } else {
    goTopBtn.classList.remove("active");
  }

})

/**
 * Code Owner: Diwas Atreya (Atreya#2401)
 * Github: https://github.com/diwasatreya
 * Contact on Twitter: https://twitter.com/DiwasAtreya
 */
