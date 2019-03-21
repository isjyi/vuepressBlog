module.exports = {
    title: 'Toradora',
    description: '不会飞的猪，只不过是一块猪肉而已。',
    head: [
        ['link', {rel: 'icon', href: '/img/favicon.ico'}],
    ],
    host: '127.0.0.1',
    //主题配置
    themeConfig: {
        //导航栏配置
        nav: require('./nav/zh'),
        sidebar: {
            '/Linux/': getUbuntuSidebar(),
        },
        search: true,
        searchMaxSuggestions: 10
    }
};

function getUbuntuSidebar() {
    return [
        '/Linux/',
        'php72'
    ]
}