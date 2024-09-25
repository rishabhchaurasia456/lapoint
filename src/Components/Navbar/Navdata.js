


// export const navItems = [
//     {
//         name: "Kitecamp",
//         path: "/kitecamp",
//         submenu: [
//             { id: "1-2", name: "Vanlife", path: "/trip/vanlife", },
//             { id: "1-3", name: "Zanzibar", path: "/trip/zanzibar", },
//             { id: "1-4", name: "Brazil", path: "/trip/Brazil", },
//             { id: "1-5", name: "Dakhla", path: "/trip/Dakhla", },
//             { id: "1-6", name: "Sicily", path: "/trip/Sicily", },
//             { id: "1-7", name: "Sail & Kite", path: "/trip/Sail&kite", },
//             { id: "1-8", name: "Sky High Cape Town", path: "/trip/skyCapTown" },
//             { id: "1-9", name: "Kite Mecca Tarifa", path: "/trip/KitemeccaTraifa" },
//             { id: "1-10", name: "Endless Summer Party", path: "/trip/EndlessSummerParty", },
//         ]
//     },
//     {
//         name: "About",
//         path: "/about"
//     },
//     {
//         name: "Our Shop",
//         path: "/"
//     },
//     {
//         name: "Stories",
//         path: "/"
//     },
//     {
//         name: "Contact Us",
//         path: "/contact"
//     }
// ];




import vedio from '../../Images/website.filmpje.tarifa.mp4';



export const navItems = {
    en: [
        {
            id: "1",
            name: "Kite Camps",
            path: '/kitecamp',
            submenu: [
                // { id: "1-1", name: "KITECAMPS", path: '/kitecamp' },
                { id: "1-2", name: "Vanlife", path: "/trip/vanlife", vedio: vedio},
                { id: "1-3", name: "Zanzibar", path: "/trip/zanzibar", },
                { id: "1-4", name: "Brazil", path: "/trip/Brazil", },
                { id: "1-5", name: "Dakhla", path: "/trip/Dakhla", },
                { id: "1-6", name: "Sicily", path: "/trip/Sicily", },
                { id: "1-7", name: "Sail & Kite", path: "/trip/Sail&kite", },
                { id: "1-8", name: "Sky High Cape Town", path: "/trip/skyCapTown" },
                { id: "1-9", name: "Kite Mecca Tarifa", path: "/trip/KitemeccaTraifa" },
                { id: "1-10", name: "Endless Summer Party", path: "/trip/EndlessSummerParty", },


            ]
        },
        {
            id: "2",
            name: "About",
            path: '/about',
        },

        { id: "2", name: "School", path: '/' },
        { id: "4", name: "Stories", path: '/Blog' },
        { id: "5", name: "Contact ", path: '/contact' },
    ],



    nl: [
        {
            id: "1",
            name: "Kite Camps",
            path: '/a',
            submenu: [
                { id: "1-1", name: "Surfkamp Nicaragua", path: '/1' },
                { id: "1-2", name: "Surfkamp Portugal", path: '/2' },
                { id: "1-3", name: "Surfkamp Sri Lanka", path: '/3' },
                { id: "1-4", name: "Surfkamp Costa Rica", path: '/4' },
                { id: "1-5", name: "Surfkamp Bali", path: '/5' },
                { id: "1-6", name: "Surfkamp Noorwegen", path: '/6' },
                { id: "1-7", name: "Surfkamp Spanje", path: '/7' },
                { id: "1-8", name: "Surfkamp Portugal", path: '/8' },
                { id: "1-9", name: "Surfkamp El Salvador", path: '/9' },
                { id: "1-10", name: "Surf Cruise, Malediven", path: '/10' },
            ]
        },
        {
            id: "2",
            name: "Over",
            path: '/11',
            submenu: [
                { id: "2-1", name: "Over Lapoint", path: '/1' },
                { id: "2-2", name: "Duurzaamheid", path: '/2' },
                { id: "2-3", name: "Lidmaatschapsgemeenschap", path: '/3' },
                { id: "2-4", name: "Carrières", path: '/4' },
                { id: "2-5", name: "Neem contact met ons op", path: '/5' },
            ]
        },
        { id: "3", name: "School", path: '/' },
        { id: "4", name: "Onze Winkel", path: '/' },
        { id: "5", name: "Verhalen", path: '/Blog' },
    ],
    hi: [
        {
            id: "1",
            name: "काइट कैंप्स",
            path: '/a',
            submenu: [
                { id: "1-1", name: "सर्फ कैंप निकारागुआ", path: '/1' },
                { id: "1-2", name: "सर्फ कैंप पुर्तगाल", path: '/2' },
                { id: "1-3", name: "सर्फ कैंप श्रीलंका", path: '/3' },
                { id: "1-4", name: "सर्फ कैंप कोस्टा रिका", path: '/4' },
                { id: "1-5", name: "सर्फ कैंप बाली", path: '/5' },
                { id: "1-6", name: "सर्फ कैंप नॉर्वे", path: '/6' },
                { id: "1-7", name: "सर्फ कैंप स्पेन", path: '/7' },
                { id: "1-8", name: "सर्फ कैंप पुर्तगाल", path: '/8' },
                { id: "1-9", name: "सर्फ कैंप एल साल्वाडोर", path: '/9' },
                { id: "1-10", name: "सर्फ क्रूज़, मालदीव", path: '/10' },
            ]
        },
        {
            id: "2",
            name: "हमारे बारे में",
            path: '/11',
            submenu: [
                { id: "2-1", name: "लैपॉइंट के बारे में", path: '/1' },
                { id: "2-2", name: "सस्टेनेबिलिटी", path: '/2' },
                { id: "2-3", name: "सदस्यता समुदाय", path: '/3' },
                { id: "2-4", name: "करियर", path: '/4' },
                { id: "2-5", name: "हमसे संपर्क करें", path: '/5' },
            ]
        },
        { id: "3", name: "स्कूल", path: '/' },
        { id: "4", name: "हमारी दुकान", path: '/' },
        { id: "5", name: "कहानियाँ", path: '/Blog' },
    ],
};











