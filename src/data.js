// hero:
import heroBg from "assets/img/hero/bg_hero.png"

// gallery:
import slide1 from "./assets/img/gallery/slide-1.jpg"
import slide2 from "./assets/img/gallery/slide-2.jpg"
import slide3 from "./assets/img/gallery/slide-3.png"

// services
import pic1 from "./assets/img/services/atvs.jpg"
import pic2 from "./assets/img/services/rock.jpg"
import pic3 from "./assets/img/services/Photo3.jpg"
import pic4 from "./assets/img/services/paragliding-3338748-pic4.jpg"
import pic5 from "./assets/img/services/paragliding-3338748-pic4.jpg"
import bg1 from "./assets/img/services/Background-back1.jpg"
import bg2 from "./assets/img/services/Background-back2.jpg"
import bg3 from "./assets/img/services/Background3.jpg"
import bg4 from "./assets/img/services/Background-bg-4.png"
import bg5 from "./assets/img/services/Background-bg5.jpg"



export const hero = {
    titlePart1: '7',
    titlePart2: 'days',
    titlePart3: 'journey',
    heroTxt1: "uncover",
    heroTxt2: "carpathian's",
    heroTxt3: "secrets",
    subtitle1: "Hoverla / Yaremche / Zakarpattia / ",
    subtitle2: "Vorokhta / Synevyr Lake / Bukovel",
    description: 'We offer you unforgettable trips to the most beautiful parts of the Carpathians. Enjoy stunning views, exciting expeditions, and the best service!',
    btnText: 'join now',
    imageBg: heroBg
}

export const nav = [
    { name: 'about', href: '/' },
    { name: 'services', href: '/' },

]

export const gallery = {
    title1: "OUR",
    title2: "GALLERY",
    pictures: [
        { id: '01', picture: slide1 },
        { id: '02', picture: slide2 },
        { id: '03', picture: slide3 },
    ]
}

export const services = {
    title1: "WE",
    title2: "OFFER",
    activities: [
        { id: "01", name: "ATVs Traveling" },
        { id: "02", name: "Rock climbing" },
        { id: "03", name: "Hot air ballooning" },
        { id: "04", name: "Skydiving" },
        { id: "05", name: "Rafting" }
    ],
    offers: [
        {
            id: "01",
            activity: "ATVs Traveling",
            day: "01",
            month: "05",
            message: "Feel the adrenaline rush",
            description: "Join exciting rafting expeditions on the waterways of the Carpathians. Go through challenging waterways and overcome gusty waves, feel the adrenaline, and enjoy the incredible views of the surrounding mountains.",
            picture: pic1,
            bgPic: bg1,
        },
        {
            id: "02",
            activity: "Rock climbing",
            day: "02",
            month: "05",
            message: "Destroy your limitations",
            description: "Overcome the peaks of the Carpathians in a unique way - climbing. Make your own way to the heights and find inner peace in the embrace of the mighty rocks.",
            picture: pic2,
            bgPic: bg2,
        },
        {
            id: "03",
            activity: "Hot air ballooning",
            day: "03",
            month: "05",
            message: "Get inspired",
            description: "Feel Zen over the mountain peaks! Hot air ballooning gives you incredible impressions and panoramas of the Carpathians that seem endless.",
            picture: pic3,
            bgPic: bg3,
        },
        {
            id: "04",
            activity: "Skydiving",
            day: "04",
            month: "05",
            message: "Overcome your fears",
            description: "Fly in the sky over the Carpathians! Experienced instructors will help you realize your dream of free flight. Remember the incredible emotions and panoramas from a bird's eye view forever.",
            picture: pic4,
            bgPic: bg4,
        },
        {
            id: "05",
            activitiy: "Rafting",
            day: "05",
            month: "05",
            message: "Trust the flow",
            description: "Join exciting rafting expeditions on the waterways of the Carpathians. Go through challenging waterways and overcome gusty waves, feel the adrenaline, and enjoy the incredible views of the surrounding mountains.",
            picture: pic5,
            bgPic: bg5,
        }
    ]
}