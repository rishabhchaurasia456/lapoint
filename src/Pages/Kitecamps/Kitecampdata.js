import img1 from '../../Images/kc1.webp';
import img2 from '../../Images/kc2.webp';
import img3 from '../../Images/kc3.webp';
import img4 from '../../Images/kc4.webp';
import img5 from '../../Images/kc5.webp';
import img6 from '../../Images/kc6.png';
import img7 from '../../Images/kc7.webp';
import img8 from '../../Images/kc8.webp';
import img9 from '../../Images/kc9.webp';
import img10 from '../../Images/kc10.webp';

export const cardData = [
    {
        id: 1, img: img1, path: "/trip/vanlife",
        data: {
            trip_name: {
                en: "Vanlife",
                gr: "Vanleben",
                du: 'Vanleven'
            },
        },
        anyTime: "September",
        chooseStyle: "Advanced"
    },
    {
        id: 2, img: img2, path: "/trip/zanzibar",
        data: {
            trip_name: {
                en: "zanzibar",
                gr: "Sansibar",
                du: " Zanzibar ",
            },
        },
        anyTime: ["January", "August", "September", "December","February"],
        chooseStyle: "Beginner paradise",

    },
    {
        id: 3, img: img3, path: "/trip/Snowkite",
        data: {
            trip_name: {
                en: "Snowkite",
                gr: "Schneekite",
                du: "Sneeuwkite",
            },
        },
        anyTime:  ["January", "February", "September"],
        chooseStyle: "Advanced"
    },
    {
        id: 4, img: img4, path: "/trip/skyCapTown",
        data: {
            trip_name: {
                en: "skyCapTown",
                gr: "SkyKapstadt",
                du: "SkyKaapstad",
            },
        },
        anyTime: "September",
        chooseStyle: "Beginner paradise"
    },
    {
        id: 5, img: img5, path: "/trip/Tarifa",
        data: {
            trip_name: {
                en: "Tarifa",
                gr: "Tarifa",
                du: "Tarifa",
            },
        },
        anyTime: "January",
        chooseStyle: "Adventure"
    },
    {
        id: 6, img: img6, path: "/trip/Egypt",
        data: {
            trip_name: {
                en: "Egypt",
                gr: "Ägypten",
                du: "Egypte",
            },
        },
        anyTime: ["March", "August", "December"],
        chooseStyle: "Advacned"
    },
    {
        id: 7, img: img7, path: "/trip/Brazil",
        data: {
            trip_name: {
                en: "Brazil",
                gr: "Brasilien",
                du: "Brazilië",
            },
        },
        anyTime: ["October", "August", "November"],
        chooseStyle: ["Adventure", "Adventure"]
    },
    {
        id: 8, img: img8, path: "/trip/Dakhla",
        data: {
            trip_name: {
                en: "Dakhla",
                gr: "Dakhla",
                du: "Dakhla",
            },
        },
        anyTime: ["May", "August", "July"],
        chooseStyle: ["Adventure", "Adventure"]

    },
    {
        id: 9, img: img9, path: "/trip/Sail&kite",
        data: {
            trip_name: {
                en: "Sail&kite",
                gr: "Kiten",
                du: "Zeil&kite",
            },
        },
        anyTime: ["may", "August", "September"],
        chooseStyle: ["Adventure", "Adventure"]
    },
    {
        id: 10, img: img10, path: "/trip/Sicily",
        data: {
            trip_name: {
                en: "Sicily",
                gr: "Sizilien",
                du: "Sicilië",
            },
        },
        anyTime: ["july", "August"],
        chooseStyle: "Adventure"
    },
];


