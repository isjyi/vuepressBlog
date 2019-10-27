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
            '/Network/': getUbuntuSidebar(),
            '/Me/':getMeSidebar(),
        },
        search: true,
        searchMaxSuggestions: 10
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@image': '../.vuepress/public/img'
            }
        }
    }
};

function getUbuntuSidebar() {
    return [
        ['/Network/','HTTP 协议'],
        ['/Network/Https.md','HTTP over SSL/TLS'],
        ['/Network/Tcp.md','TCP 协议'],
        ['/Network/Udp.md','UDP 协议'],
        ['/Network/Ip.md','IP 协议'],
    ]
}

function getMeSidebar() {
    return [
        '/Me/'
    ]
}
