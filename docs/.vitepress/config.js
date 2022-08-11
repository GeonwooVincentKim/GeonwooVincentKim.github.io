module.exports = {
    title: "Geonwoo Kim's Github-Blog",
    themeConfig: {
        nav: [
            {text: 'Home', link: '/'},
            {text: 'About', link: '/about/'},
            {text: 'Contact', link: '/contact/'},
        ],
        sidebar: {
            '/': [
                {
                    // items: [
                    //     {text: 'About', link: '/about/'},
                    //     {text: 'Your', link: '/your/our-story'}
                    // ]
                    text: 'About',
                    items: [
                        {text: 'My Story', link: '/about/my-story'},
                        {text: 'About', link: '/about/index'}
                    ]
                },
                {
                    text: 'Story',
                    items: [
                        {text: 'Our Story', link: '/your/our-story.md'}, 
                        {text: 'Your Story', link: '/your/your-story.md'}
                    ]
                }
            ],

            // '/about/': [
            //     {
            //         text: 'About',
            //         items: [
            //             {text: 'My Story', link: '/about/my-story'},
            //             {text: 'About', link: '/about/index'}
            //         ]
            //     }
            // ],
            // '/your/': [
            //     {
            //         text: 'Your Story',
            //         items: [
            //             {text: 'Our Story', link: '/your/our-story.md'}, 
            //             {text: 'Your Story', link: '/your/your-story.md'}
            //         ]
            //     },
            //     {
            //         text: 'Your Story 2',
            //         items: [
            //             {text: 'Our Story', link: '/your/our-story-2.md'}, 
            //             {text: 'Your Story', link: '/your/your-story-2.md'}
            //         ]
            //     }
            // ],
        },
    }
}
