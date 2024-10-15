import { cardData } from '../../Pages/Kitecamps/Kitecampdata';

// import vedio from '../../Images/website.filmpje.tarifa.mp4';



// export const navItems = {

//     // English nav data 
//     en: [
//         {
//             id: "1",
//             name: "Kite Camps",
//             path: '/kitecamp',
//             submenu: [
//                 { id: "1-2", path: "/trip/vanlife", trip_name: "Vanlife", vedio: vedio },
//                 { id: "1-3", path: "/trip/zanzibar", trip_name: "zanzibar", vedio: vedio },
//                 { id: "1-4", path: "/trip/Snowkite", trip_name: "Snowkite", vedio: vedio },
//                 { id: "1-5", path: "/trip/skyCapTown", trip_name: "skyCapTown", vedio: vedio },
//                 { id: "1-6", path: "/trip/KitemeccaTraifa", trip_name: "KitemeccaTraifa", vedio: vedio },
//                 { id: "1-7", path: "/trip/EndlessSummerParty", trip_name: "EndlessSummerParty", vedio: vedio },
//                 { id: "1-8", path: "/trip/Brazil", trip_name: "Brazil", vedio: vedio },
//                 { id: "1-9", path: "/trip/Dakhla", trip_name: "Dakhla", vedio: vedio },
//                 { id: "1-10", path: "/trip/Sail&kite", trip_name: "Sail&kite", vedio: vedio },
//             ]
//         },
//         { id: "2", name: "About", path: '/about' },
//         { id: "3", name: "School", path: '/' },
//         { id: "4", name: "Stories", path: '/' },
//         { id: "5", name: "Contact ", path: '/contact' },
//     ],
    
    
    
//     // Netherlands language

//     nl: [
//         {
//             id: "1",
//             name: "Kitekampen",
//             path: '/kitecamp',
//             submenu: [
//                 { id: "1-2", path: "/trip/vanlife", trip_name: "Vanlife", vedio: vedio },
//                 { id: "1-3", path: "/trip/zanzibar", trip_name: "Zanzibar", vedio: vedio },
//                 { id: "1-4", path: "/trip/Snowkite", trip_name: "Snowkite", vedio: vedio },
//                 { id: "1-5", path: "/trip/skyCapTown", trip_name: "SkyCapTown", vedio: vedio },
//                 { id: "1-6", path: "/trip/KitemeccaTraifa", trip_name: "KitemeccaTraifa", vedio: vedio },
//                 { id: "1-7", path: "/trip/EndlessSummerParty", trip_name: "EndlessSummerParty", vedio: vedio },
//                 { id: "1-8", path: "/trip/Brazil", trip_name: "Brazilië", vedio: vedio },
//                 { id: "1-9", path: "/trip/Dakhla", trip_name: "Dakhla", vedio: vedio },
//                 { id: "1-10", path: "/trip/Sail&kite", trip_name: "Zeilen & Kiten", vedio: vedio },
//             ]
//         },
//         { id: "2", name: "Over", path: '/about' },
//         { id: "2", name: "School", path: '/' },
//         { id: "4", name: "Verhalen", path: '/' },
//         { id: "5", name: "Contact", path: '/contact' },
//     ],


//     // Dutch language data
//     du: [
//         {
//             id: "1",
//             name: "Kitekampen",
//             path: '/kitecamp',
//             submenu: [
//                 { id: "1-2", path: "/trip/vanlife", trip_name: "Vanlife", vedio: vedio },
//                 { id: "1-3", path: "/trip/zanzibar", trip_name: "Zanzibar", vedio: vedio },
//                 { id: "1-4", path: "/trip/Snowkite", trip_name: "Snowkite", vedio: vedio },
//                 { id: "1-5", path: "/trip/skyCapTown", trip_name: "SkyCapTown", vedio: vedio },
//                 { id: "1-6", path: "/trip/KitemeccaTraifa", trip_name: "KitemeccaTraifa", vedio: vedio },
//                 { id: "1-7", path: "/trip/EndlessSummerParty", trip_name: "EndlessSummerParty", vedio: vedio },
//                 { id: "1-8", path: "/trip/Brazil", trip_name: "Brazilië", vedio: vedio },
//                 { id: "1-9", path: "/trip/Dakhla", trip_name: "Dakhla", vedio: vedio },
//                 { id: "1-10", path: "/trip/Sail&kite", trip_name: "Zeilen & Kiten", vedio: vedio },
//             ]
//         },
//         { id: "2", name: "Over", path: '/about' },
//         { id: "3", name: "School", path: '/' },
//         { id: "4", name: "Verhalen", path: '/' },
//         { id: "5", name: "Contact", path: '/contact' },
//     ]

// };




import { cardData } from '../../Pages/Kitecamps/Kitecampdata';

import vedio from '../../Images/website.filmpje.tarifa.mp4';
import img1 from '../../Images/kc1.webp';


const kiteCampsSubmenu = cardData.map(item => {
    console.log('Mapping item:', item);  // Log each item to see its structure
    return {
      id: `${item.id}`,
      path: item.path,
      trip_name: item.data?.trip_name || { en: 'Unnamed Trip' },  // Ensure trip_name exists
      vedio: item.data?.vedio || 'No video available',
    };
  });

export const navItems = [
        {
            id: "1",
            name: {
                en: "kitecamp",
                nl: "kitekamp",  // Netherlands Dutch (NL)
                du: "kitekamp"  // Dutch (DU)
            },
            path: '/kitecamp',
            
            // submenu: kiteCampsSubmenu
            submenu: kiteCampsSubmenu
        },
        {
            id: "2",
            name: {
                en: "About",
                nl: "NAbout",  // Netherlands Dutch (NL)
                du: "DAbout"  // Dutch (DU)
            },
            path: '/about',
        },

        { 
            id: "2",
            name: {
                en: "School",
                nl: "NSchool",  // Netherlands Dutch (NL)
                du: "DSchool"  // Dutch (DU)
            },
            path: '/' },
        { 
            id: "4",
            name: {
                en: "Stories",
                nl: "NStories",  // Netherlands Dutch (NL)
                du: "DStories"  // Dutch (DU)
            },
            path: '/'
        },
        { 
            id: "5",
            name: {
                en: "Contact",
                nl: "NContact",  // Netherlands Dutch (NL)
                du: "DContact"  // Dutch (DU)
            },
            path: '/contact'
        },
];










