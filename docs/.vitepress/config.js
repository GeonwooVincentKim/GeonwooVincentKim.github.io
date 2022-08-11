module.exports = {
    title: "Geonwoo Kim's Github-Blog",
    themeConfig: {
        nav: [
            {text: 'Home', link: '/'},
            {text: 'About', link: '/about/'},
            {text: 'Contact', link: '/contact/'},
        ],
        sidebar: [
            {
                items: [
                    {text: 'My Story', link: '/about/my-story'},
                    // {text: 'About', link: '/about/index'}
                ],

                '/about/': [
                    {
                        text: 'Your Story',
                        collapsible: true,
                        collapsed: true,
                        items: [
                            {text: 'Your No.1 Story', link: '/about/your/your-story'},
                            {text: 'Our Story', this: '/about/your/our-story'}
                        ]
                    }
                ]
            }
        ],
    }
}
