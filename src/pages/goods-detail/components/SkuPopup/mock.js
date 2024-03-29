export default {
  code: 200,
  message: '操作成功',
  data: {
    product: {
      id: 37,
      brandId: 51,
      productCategoryId: 19,
      feightTemplateId: 0,
      productAttributeCategoryId: 3,
      name: 'Apple iPhone 14 Pro Max',
      pic: 'http://127.0.0.1:9000/mall/20230118/iPhone14PM-pic1.jpg',
      productSn: '7996688',
      deleteStatus: 0,
      publishStatus: 1,
      newStatus: 1,
      recommandStatus: 1,
      verifyStatus: 0,
      sort: 200,
      sale: 0,
      price: 9899.0,
      giftGrowth: 9899,
      giftPoint: 9899,
      usePointLimit: 5000,
      subTitle: '(A2896) 256GB 暗紫色 支持移动联通电信5G 双卡双待手机',
      originalPrice: 9899.0,
      stock: 800,
      lowStock: 0,
      unit: '个',
      weight: 840.0,
      previewStatus: 1,
      serviceIds: '1,2,3',
      keywords: '苹果,Apple,iPhone14',
      note: '史上最强 iPhone 手机',
      albumPics:
        'http://127.0.0.1:9000/mall/20230118/iPhone14PM-pic5.webp,http://127.0.0.1:9000/mall/20230118/iPhone14PM-pic6.webp,http://127.0.0.1:9000/mall/20230118/iPhone14PM-pic7.webp,http://127.0.0.1:9000/mall/20230118/iPhone14PM-pic8.webp',
      detailTitle: '苹果 Apple 14 Pro Max',
      promotionPerLimit: 0,
      promotionType: 2,
      brandName: '苹果',
      productCategoryName: '手机通讯',
      description:
        '【春节也送货】指定快充套装版，加9元立得20W原装快充头！！！指定AirPods套装立减500元！！！！点击 ',
      detailDesc: '苹果大屏手机',
      detailHtml:
        '<p><img class="wscnph" src="http://127.0.0.1:9000/mall/20230118/iPhone14PM-img1.webp" /><img class="wscnph" src="http://127.0.0.1:9000/mall/20230118/iPhone14PM-img2.webp" /><img class="wscnph" src="http://127.0.0.1:9000/mall/20230118/iPhone14PM-img3.webp" /><img class="wscnph" src="http://127.0.0.1:9000/mall/20230118/iPhone14PM-img4.webp" /></p>',
      detailMobileHtml:
        '<p><img class="wscnph" src="http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20230118/iPhone14PM-img1.webp" /><img class="wscnph" src="http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20230118/iPhone14PM-img2.webp" /><img class="wscnph" src="http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20230118/iPhone14PM-img3.webp" /><img class="wscnph" src="http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20230118/iPhone14PM-img4.webp" /></p>',
    },
    brand: {
      id: 51,
      name: '苹果',
      firstLetter: 'A',
      sort: 200,
      factoryStatus: 1,
      showStatus: 1,
      productCount: 55,
      productCommentCount: 200,
      logo: 'http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180607/timg.jpg',
      brandStory: '苹果的故事',
    },
    productAttributeList: [
      {
        id: 43,
        productAttributeCategoryId: 3,
        name: '颜色',
        selectType: 0,
        inputType: 0,
        inputList: '',
        sort: 100,
        filterType: 0,
        searchType: 0,
        relatedStatus: 0,
        handAddStatus: 1,
        type: 0,
      },
      {
        id: 44,
        productAttributeCategoryId: 3,
        name: '容量',
        selectType: 0,
        inputType: 1,
        inputList: '16G,32G,64G,128G',
        sort: 0,
        filterType: 0,
        searchType: 0,
        relatedStatus: 0,
        handAddStatus: 0,
        type: 0,
      },
      {
        id: 45,
        productAttributeCategoryId: 3,
        name: '屏幕尺寸',
        selectType: 0,
        inputType: 0,
        inputList: '',
        sort: 0,
        filterType: 0,
        searchType: 0,
        relatedStatus: 0,
        handAddStatus: 0,
        type: 1,
      },
      {
        id: 46,
        productAttributeCategoryId: 3,
        name: '网络',
        selectType: 0,
        inputType: 1,
        inputList: '3G,4G,5G',
        sort: 0,
        filterType: 0,
        searchType: 0,
        relatedStatus: 0,
        handAddStatus: 0,
        type: 1,
      },
      {
        id: 47,
        productAttributeCategoryId: 3,
        name: '系统',
        selectType: 0,
        inputType: 1,
        inputList: 'Android,IOS',
        sort: 0,
        filterType: 0,
        searchType: 0,
        relatedStatus: 0,
        handAddStatus: 0,
        type: 1,
      },
      {
        id: 48,
        productAttributeCategoryId: 3,
        name: '电池容量',
        selectType: 0,
        inputType: 0,
        inputList: '',
        sort: 0,
        filterType: 0,
        searchType: 0,
        relatedStatus: 0,
        handAddStatus: 0,
        type: 1,
      },
    ],
    productAttributeValueList: [
      {
        id: 304,
        productId: 37,
        productAttributeId: 43,
        value: '深空黑色,暗紫色,银色,金色',
      },
      {
        id: 305,
        productId: 37,
        productAttributeId: 45,
        value: '6.7',
      },
      {
        id: 306,
        productId: 37,
        productAttributeId: 46,
        value: '5G',
      },
      {
        id: 307,
        productId: 37,
        productAttributeId: 47,
        value: 'IOS',
      },
      {
        id: 308,
        productId: 37,
        productAttributeId: 48,
        value: '5000',
      },
    ],
    skuStockList: [
      {
        id: 187,
        productId: 37,
        skuCode: '79801',
        price: 9899.0,
        stock: 100,
        lowStock: 10,
        pic: 'http://127.0.0.1:9000/mall/20230118/iPhone14PM-color1.webp',
        lockStock: 0,
        spData:
          '[{"key":"颜色","value":"深空黑色"},{"key":"容量","value":"64G"}]',
      },
      {
        id: 188,
        productId: 37,
        skuCode: '79802',
        price: 9899.0,
        stock: 100,
        lowStock: 10,
        pic: 'http://127.0.0.1:9000/mall/20230118/iPhone14PM-color1.webp',
        lockStock: 0,
        spData:
          '[{"key":"颜色","value":"深空黑色"},{"key":"容量","value":"128G"}]',
      },
      {
        id: 189,
        productId: 37,
        skuCode: '79803',
        price: 9899.0,
        stock: 100,
        lowStock: 10,
        pic: 'http://127.0.0.1:9000/mall/20230118/iPhone14PM-color2.webp',
        lockStock: 0,
        spData:
          '[{"key":"颜色","value":"暗紫色"},{"key":"容量","value":"64G"}]',
      },
      {
        id: 190,
        productId: 37,
        skuCode: '79804',
        price: 9899.0,
        stock: 100,
        lowStock: 10,
        pic: 'http://127.0.0.1:9000/mall/20230118/iPhone14PM-color2.webp',
        lockStock: 0,
        spData:
          '[{"key":"颜色","value":"暗紫色"},{"key":"容量","value":"128G"}]',
      },
      {
        id: 191,
        productId: 37,
        skuCode: '79805',
        price: 9899.0,
        stock: 100,
        lowStock: 10,
        pic: 'http://127.0.0.1:9000/mall/20230118/iPhone14PM-color3.webp',
        lockStock: 0,
        spData: '[{"key":"颜色","value":"银色"},{"key":"容量","value":"64G"}]',
      },
      {
        id: 192,
        productId: 37,
        skuCode: '79806',
        price: 9899.0,
        stock: 100,
        lowStock: 10,
        pic: 'http://127.0.0.1:9000/mall/20230118/iPhone14PM-color3.webp',
        lockStock: 0,
        spData: '[{"key":"颜色","value":"银色"},{"key":"容量","value":"128G"}]',
      },
      {
        id: 193,
        productId: 37,
        skuCode: '79807',
        price: 9899.0,
        stock: 100,
        lowStock: 10,
        pic: 'http://127.0.0.1:9000/mall/20230118/iPhone14PM-color4.webp',
        lockStock: 0,
        spData: '[{"key":"颜色","value":"金色"},{"key":"容量","value":"64G"}]',
      },
      {
        id: 194,
        productId: 37,
        skuCode: '79808',
        price: 9899.0,
        stock: 100,
        lowStock: 10,
        pic: 'http://127.0.0.1:9000/mall/20230118/iPhone14PM-color4.webp',
        lockStock: 0,
        spData: '[{"key":"颜色","value":"金色"},{"key":"容量","value":"128G"}]',
      },
    ],
    couponList: [],
  },
};
