


// import { cardData } from '../../Pages/Kitecamps/Kitecampdata';

// // import vedio from '../../Images/website.filmpje.tarifa.mp4';
// // import img1 from '../../Images/kc1.webp';


// // const kiteCampsSubmenu = cardData.map(item => {
// //     console.log('Mapping item:', item);  // Log each item to see its structure
// //     return {
// //       id: `${item.id}`,
// //       path: item.path,
// //       trip_name: item.data?.trip_name || { en: 'Unnamed Trip' },  // Ensure trip_name exists
// //     };
// //   });

// import axios from 'axios';
// import config from '../../config/config';
// import { useEffect, useState } from 'react';

// const [kiteCampsSubmenu, setKiteCampsSubmenu] = useState([]);

//     useEffect(() => {
//         const fetchKiteCampsData = async () => {
//             try {
//                 const response = await axios.post(`${config.API_BASE_URL}/api/user/get_triplink`);                
//                 const data = await response.json();
                
//                 const submenu = data.map(item => ({
//                     id: `${item.id}`,
//                     path: item.path || '/', // Default to '/' if no path provided
//                     trip_name: item.data?.trip_name || { en: 'Unnamed Trip' }, // Safeguard against missing data
//                 }));
                
//                 setKiteCampsSubmenu(submenu);
//             } catch (error) {
//                 console.error('Error fetching kite camps data:', error);
//             }
//         };

//         fetchKiteCampsData();
//     }, []);

// export const navItems = [
//         {
//             id: "1",
//             name: {
//                 en: "kitecamp",
//                 du: "Kitekampen", // Dutch (DU)
//                 gr: "Kitecamp",  
//             },
//             path: '/kitecamp',            
//             // submenu: kiteCampsSubmenu
//             submenu: kiteCampsSubmenu
//         },
//         // {
//         //     id: "2",
//         //     name: {
//         //         en: "About",
//         //         du: "Over",  // Dutch (DU)
//         //         gr: "Über uns",  
//         //     },
//         //     path: '/about',
//         // },

//         { 
//             id: "2",
//             name: {
//                 en: "School",
//                 du: "School",  // Dutch (DU)
//                 gr: "Schule",  
//             },
//             path: '/School' },
//         { 
//             id: "4",
//             name: {
//                 en: "Stories",
//                 du: "Verhalen",  // Dutch (DU)
//                 gr: "Geschichten",  // Netherlands Dutch (NL)
//             },
//             path: '/stories'
//         },
//         // { 
//         //     id: "5",
//         //     name: {
//         //         en: "Contact",
//         //         du: "Contact",  // Dutch (DU)
//         //         gr: "Kontakt",  // Netherlands Dutch (NL)
//         //     },
//         //     path: '/contact'
//         // }  
        
//         { 
//             id: "4",
//             name: {
//                 en: "Shop",
//                 du: "Verhalen",  // Dutch (DU)
//                 gr: "Geschichten",  // Netherlands Dutch (NL)
//             },
//             path: 'https://www.kiteactive.com/shop/'
//         },

// ];










