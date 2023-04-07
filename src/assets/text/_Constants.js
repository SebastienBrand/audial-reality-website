import Headphone from '@/images/headphone-3d.png';
import Beacon from '@/images/beacon-3d.png';
import Battery from '@/images/battery-3d.png';

var currentTime = new Date();
export const currentYear = currentTime.getFullYear();

export const siteMainMenu = [
    {name: "Site Page 0", link: "#"},
    {name: "Site Page 1", link: "#"},
    {name: "Site Page 2", link: "#"},
    {name: "Site Page 3", link: "#"},
    {name: "Site Page 4", link: "#"},
    {name: "Site Page 5", link: "#"},
    {name: "Site Page 6", link: "#"},
    {name: "Site Page 7", link: "#"},
    {name: "Site Page 8", link: "#"},
    {name: "Site Page 9", link: "#"}
];

// images are imported
export const featuredItems = [
    {   title: 'Lorem Ipsum 1',
        image: Headphone
    }, 
    {   title: 'Lorem Ipsum 2',
        image: Beacon
    },  
    {   title: 'Lorem Ipsum 3',
        image: Battery
    }, 
    {   title: 'Lorem Ipsum 4',
        image: Headphone
    }, 
    {   title: 'Lorem Ipsum 5',
        image: Beacon
    },    
    {   title: 'Lorem Ipsum 6',
        image:  Battery
    }
];
