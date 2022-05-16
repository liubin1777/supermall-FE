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
            attributes: { url: '/uploads/icon_tabbar_home_n_71524149aa.png' },
          },
        },
        img_s: {
          data: {
            id: 2,
            attributes: { url: '/uploads/icon_tabbar_home_s_8279c4b220.png' },
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
            attributes: { url: '/uploads/icon_tabbar_cart_n_862687ff4e.png' },
          },
        },
        img_s: {
          data: {
            id: 4,
            attributes: { url: '/uploads/icon_tabbar_cart_s_32ad921af3.png' },
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
            attributes: { url: '/uploads/icon_tabbar_me_n_6ccdb7f06a.png' },
          },
        },
        img_s: {
          data: {
            id: 6,
            attributes: { url: '/uploads/icon_tabbar_me_s_a64df8b0a3.png' },
          },
        },
      },
    },
  ],
  meta: { pagination: { page: 1, pageSize: 25, pageCount: 1, total: 3 } },
};
