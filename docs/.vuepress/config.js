module.exports = {
    title: 'Toradora',
    description: '不会飞的猪，只不过是一块猪肉而已。',
    head: [
        ['link', { rel: 'icon', href: '/img/favicon.ico' }],
    ]
    ,
    //主题配置
    themeConfig: {
        //导航栏配置
        nav: require('./nav/zh'),
        sidebar: {
            '/api/': [
                'cli',
            ],
        },
        search: true,
        searchMaxSuggestions: 10
    }
}

function getApiSidebar () {
    return [
        'cli',
        'node'
    ]
}