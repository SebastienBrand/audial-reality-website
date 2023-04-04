/**
 * Implementation examples:
 * import { Homepage as HomepageText} from '@/text/data.js';
 * <h2>{HomepageText.HeroSection.h2}</h2>
 * 
 * Using arrays for elements with same name within a section
 * example: <button>{HomepageText.SupportSection.button[0]}</button>
 */

import { currentYear, siteMainMenu, featuredItems } from './_Constants.js'

export const Homepage = {
    PostShowcase: {
        a: " Continue Reading "
    },
    BlogSection: {
        h3: "Rhoncus aenean vel elit",
        h5: "Ipsum dolor sit amet consectetur adipiscing"
    },
    FeaturesSection: {
        h3: "Rhoncus aenean vel elit",
        h5: "Ipsum dolor sit amet consectetur adipiscing",
        p: "Facilisis mauris sit amet massa. Vitae semper quis lectus nulla at volutpat. Nibh venenatis cras sed felis eget velit. Sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum. Vitae nunc sed velit dignissim sodales ut eu sem integer. Amet risus nullam eget felis eget nunc lobortis mattis. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Sit amet consectetur adipiscing elit pellentesque habitant morbi. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Odio ut sem nulla pharetra. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Duis ultricies lacus sed turpis tincidunt id.",
        span: "Continue Reading",
        items: featuredItems
    },
    GridSection: {
        h3: "Rhoncus aenean vel elit scelerisque mauris",
        h5: "Hello World"
    },
    HeroSection: {
        span: " Auditory Enhancements ",
        h2: "Lorem Ipsum Dalor",
        h1: "Big Super Fancy Title",
        h5: "incididunt ut labore et dolore magna"
    },
    SponsorSection: {},
    SupportSection: {
        h3: "Rhoncus aenean vel elit",
        h5: "Ipsum dolor sit amet consectetur adipiscing",
        p: "Facilisis mauris sit amet massa. Vitae semper quis lectus nulla at volutpat. Nibh venenatis cras sed felis eget velit. Sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum. Vitae nunc sed velit dignissim sodales ut eu sem integer. Amet risus nullam eget felis eget nunc lobortis mattis. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Sit amet consectetur adipiscing elit pellentesque habitant morbi. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Odio ut sem nulla pharetra. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Duis ultricies lacus sed turpis tincidunt id.",
        button: ["Lorem Ipsum Dalor Amut", "Lorem Ipsum Dalor Amut"]
    }

};

export const Header = {
    buttons: [{
        title: 'Lorem',
        link: 'https://google.com'
    }, {
        title: 'Ipsum',
        link: 'https://google.com'
    }, {
        title: 'Dalor',
        link: 'https://google.com'
    }, {
        title: 'Amut',
        link: 'https://google.com'
    }, {
        title: 'labore',
        link: 'https://google.com'
    }],

    sign_up_button: { title: 'Sign Up', link: 'https://google.com' },
    join_now_button: { title: 'Join Now', link: 'https://google.com' }
};

export const Footer = {
    Top: {
        FirstSection: {
            h4: "About Us",
            p: "Amet dictum sit amet justo donec enim diam. Mi eget mauris pharetra et. Netus et malesuada fames ac. Aenean vel elit scelerisque mauris pellentesque. Semper auctor neque vitae tempus quam pellentesque. Ultrices tincidunt arcu non sodales neque sodales."
        },
        SecondSection: {
            h4: "Get Listed",
            p: "Amet dictum sit amet justo donec enim diam. Mi eget mauris pharetra et. Netus et malesuada fames ac. Aenean vel elit scelerisque mauris pellentesque. Semper auctor neque vitae tempus quam pellentesque. Ultrices tincidunt arcu non sodales neque sodales.",
            button: "Join Now"
        },
        ThirdSection: {
            h4: "QuickLinks",
            QuickLinks: siteMainMenu
        }
    },
    Bottom: {
        TermCondition: "Terms & Conditions",
        PrivacyPolicy: "Privacy Policy",
        Year: currentYear,
        SoundscapeText: " Soundscape ",
        An: "An ",
        RCOS: " RCOS ",
        Project: " Project"
    }
};

export const Toolbar = {
    LastContainer: "IPSUM DALOR"
};