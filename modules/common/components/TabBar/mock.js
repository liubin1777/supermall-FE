// http://localhost:1337/api/tab-bars?fields[0]=name&populate[img_n][fields][0]=url&populate[img_s][fields][0]=url
export default {
  data: [
    {
      id: 1,
      attributes: {
        name: '首页',
        img_n: {
          data: {
            id: 3,
            attributes: { url: 'http://127.0.0.1:8080/assets/tabbar/icon-tabbar-home-n.png' },
          },
        },
        img_s: {
          data: {
            id: 2,
            attributes: { url: 'http://127.0.0.1:8080/assets/tabbar/icon-tabbar-home-s.png' },
          },
        },
      },
    },
    {
      id: 2,
      attributes: {
        name: '购物车',
        img_n: {
          data: {
            id: 1,
            attributes: { url: 'http://127.0.0.1:8080/assets/tabbar/icon-tabbar-cart-n.png' },
          },
        },
        img_s: {
          data: {
            id: 4,
            attributes: { url: 'http://127.0.0.1:8080/assets/tabbar/icon-tabbar-cart-s.png' },
          },
        },
      },
    },
    {
      id: 3,
      attributes: {
        name: '我的',
        img_n: {
          data: {
            id: 5,
            attributes: { url: 'http://127.0.0.1:8080/assets/tabbar/icon-tabbar-me-n.png' },
          },
        },
        img_s: {
          data: {
            id: 6,
            attributes: { url: 'http://127.0.0.1:8080/assets/tabbar/icon-tabbar-me-s.png' },
          },
        },
      },
    },
  ],
  meta: { pagination: { page: 1, pageSize: 25, pageCount: 1, total: 3 } },
};
