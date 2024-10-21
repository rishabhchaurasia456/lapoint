


import { cardData } from '../../Pages/Kitecamps/Kitecampdata';

// import vedio from '../../Images/website.filmpje.tarifa.mp4';
// import img1 from '../../Images/kc1.webp';


const kiteCampsSubmenu = cardData.map(item => {
    console.log('Mapping item:', item);  // Log each item to see its structure
    return {
      id: `${item.id}`,
      path: item.path,
      trip_name: item.data?.trip_name || { en: 'Unnamed Trip' },  // Ensure trip_name exists
    };
  });

export const navItems = [
        {
            id: "1",
            name: {
                en: "kitecamp",
                du: "Kitekampen", // Dutch (DU)
                gr: "Kitecamp",  
            },
            path: '/kitecamp',            
            // submenu: kiteCampsSubmenu
            submenu: kiteCampsSubmenu
        },
        {
            id: "2",
            name: {
                en: "About",
                du: "Over",  // Dutch (DU)
                gr: "Über uns",  
            },
            path: '/about',
        },

        { 
            id: "2",
            name: {
                en: "School",
                du: "School",  // Dutch (DU)
                gr: "Schule",  
            },
            path: '/' },
        { 
            id: "4",
            name: {
                en: "Stories",
                du: "Verhalen",  // Dutch (DU)
                gr: "Geschichten",  // Netherlands Dutch (NL)
            },
            path: '/'
        },
        { 
            id: "5",
            name: {
                en: "Contact",
                du: "Contact",  // Dutch (DU)
                gr: "Kontakt",  // Netherlands Dutch (NL)
            },
            path: '/contact'
        },
];










