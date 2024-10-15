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
