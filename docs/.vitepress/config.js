module.exports = {
    title: "Geonwoo Kim's Github-Blog",
    themeConfig: {
        nav: [
            {text: 'Home', link: '/'},
            {text: 'About', link: '/about/'},
            {text: 'Contact', link: '/contact/'},
        ],
        sidebar: {
            '/about/': [
                {
                    text: 'About',
                    items: [
                        {text: 'My Story', link: '/about/my-story'},
                        {text: 'About', link: '/about/index'}
                    ]
                }
            ],
            '/your/': [
                {
                    text: 'Your Story',
                    items: [
                        {text: 'Our Story', link: '/your/our-story.md'}, 
                        {text: 'Your Story', link: '/your/your-story.md'}
                    ]
                },
                {
                    text: 'Your Story',
                    items: [
                        {text: 'Our Story', link: '/your/our-story.md'}, 
                        {text: 'Your Story', link: '/your/your-story.md'}
                    ]
                }
            ],
            // items: [
            //     {text: 'My Story', link: '/about/my-story'},
            //     {
            //         text: '',
            //         items: [
            //             {text: 'Your No.1 Story', link: '/about/your/your-story'},
            //             {text: 'Our Story', this: '/about/your/our-story'}
            //         ]
            //     }
            //     // {text: 'About', link: '/about/index'}
            // ]
        },
    }
}
