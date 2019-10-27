/**
 *  Instructions
 *
 *  1. Delete the `index.js` file in this directory
 *  2. Rename/Copy this file to `index.js`
 *  3. Update the fields with your entries
 */

module.exports = {
    name: '',
    email: '',
    username: '@username',

    siteTitle: 'Portfolio by abhijithvijayan',
    siteDescription: 'Portfolio Site template',
    siteKeywords: 'portfolio, template, website',
    siteUrl: 'https://example.com',
    siteLanguage: 'en-US',

    // path to assets
    siteThumbnail: '/images/',
    siteIcon192: '/icons/',
    siteIcon72: '/icons/',
    siteIcon96: '/icons/',
    siteFavicon: '/icons/',

    GRID_LIMIT: 3,

    // path to resume file (eg: if file is in `/public/resume.pdf` set `/resume.pdf` here)
    resume: '/',

    //  The entries here are optional, removes ones that you don't have
    socialMedia: [
        {
            name: 'Github',
            icon: 'github',
            url: 'https://github.com/',
        },
        {
            name: 'LinkedIn',
            icon: 'linkedin',
            url: 'https://in.linkedin.com/in/',
        },
        {
            name: 'Stack Overflow',
            icon: 'stack-overflow',
            url: 'https://stackoverflow.com/',
        },
        {
            name: 'Behance',
            icon: 'behance',
            url: 'https://www.behance.net/',
        },
        {
            name: 'Medium',
            icon: 'medium',
            url: 'https://medium.com/',
        },
        {
            name: 'Twitter',
            icon: 'twitter',
            url: 'https://twitter.com',
        },
    ],

    navLinks: [
        {
            name: 'About',
            url: '#about',
        },
        {
            name: 'Experience',
            url: '#experience',
        },
        {
            name: 'Work',
            url: '#projects',
        },
        {
            name: 'Contact',
            url: '#contact',
        },
    ],

    navyColor: '#0a192f',

    repoURL: 'https://github.com/abhijithvijayan/abhijithvijayan.in',
    repoAPIendpoint: 'https://api.github.com/repos/abhijithvijayan/abhijithvijayan.in',
};
