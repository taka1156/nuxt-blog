const dummyImg = {
  imgUrl: 'http://placehold.jp/150x150.png',
  imgAlt: 'ダミーの画像'
};

const dummyCategoryBadge = {
  badgeType: 'category',
  badge: {
    id: 1,
    name: 'ダミーカテゴリー',
    img: { url: 'http://placehold.jp/150x150.png' }
  }
};

const dummyTagBadge = {
  badgeType: 'tag',
  badge: {
    id: 1,
    name: 'ダミータグ',
    img: { url: 'http://placehold.jp/150x150.png' }
  }
};

const dummyTagBadges = [
  {
    id: 1,
    name: 'ダミータグ',
    img: { url: 'http://placehold.jp/150x150.png' }
  },
  {
    id: 2,
    name: 'ダミータグ',
    img: { url: 'http://placehold.jp/150x150.png' }
  },
  {
    id: 3,
    name: 'ダミータグ',
    img: { url: 'http://placehold.jp/150x150.png' }
  },
  {
    id: 4,
    name: 'ダミータグ',
    img: { url: 'http://placehold.jp/150x150.png' }
  }
];

const dummyDate = {
  createdAt: '2020-07-04T10:53:40.252Z',
  updatedAt: '2020-07-08T15:15:07.668Z'
};

const dummyMarkdown = `
## この文章はダミーです。
  **文字の大きさ、量、字間、行間等を確認するために入れています。** 
## この文章はダミーです。 
  **文字の大きさ、量、字間、行間等を確認するために入れています。** 
## この文章はダミーです。 
  **文字の大きさ、量、字間、行間等を確認するために入れています。**
## この文章はダミーです。
  **文字の大きさ、量、字間、行間等を確認するために入れています。**
## この文章はダミーです。
  **文字の大きさ、量、字間、行間等を確認するために入れています。**
## この文章はダミーです。 
  **文字の大きさ、量、字間、行間等を確認するために入れています。** 
## この文章はダミーです。
  **文字の大きさ、量、字間、行間等を確認するために入れています。**
## この文章はダミーです。 
  **文字の大きさ、量、字間、行間等を確認するために入れています。**
## この文章はダミーです。
  **文字の大きさ、量、字間、行間等を確認するために入れています。** 
## この文章はダミーです。 
  **文字の大きさ、量、字間、行間等を確認するために入れています。**
## この文章はダミーです。
  **文字の大きさ、量、字間、行間等を確認するために入れています。**
## この文章はダミーです。
  **文字の大きさ、量、字間、行間等を確認するために入れています。**
`;

const dummyArticles = [
  {
    id: '1pbb3xp8x',
    createdAt: '2020-09-13T14:28:35.489Z',
    updatedAt: '2020-09-13T16:01:29.403Z',
    publishedAt: '2020-09-13T14:28:35.489Z',
    title:
      'この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています',
    summary:
      'この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量',
    body: dummyMarkdown,
    tags: [
      {
        id: '7zcsnuihh',
        name: 'ダミー',
        img: {
          url: 'http://placehold.jp/150x150.png'
        }
      }
    ],
    category: {
      id: 'eq7p_6jei',
      name: 'ダミー',
      img: {
        url: 'http://placehold.jp/150x150.png'
      }
    }
  },
  {
    id: 'hcpeu85l7',
    createdAt: '2020-09-13T12:38:43.014Z',
    updatedAt: '2020-09-13T15:55:21.517Z',
    publishedAt: '2020-09-13T12:38:43.014Z',
    title:
      'この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています',
    summary:
      'この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量',
    body: dummyMarkdown,
    tags: [
      {
        id: 'piymdvgeb',
        name: 'ダミー',
        img: {
          url: 'http://placehold.jp/150x150.png'
        }
      },
      {
        id: '7zcsnuihh',
        name: 'ダミー',
        img: {
          url: 'http://placehold.jp/150x150.png'
        }
      }
    ],
    category: {
      id: 'eq7p_6jei',
      name: 'ダミー',
      img: {
        url: 'http://placehold.jp/150x150.png'
      }
    }
  },
  {
    id: 'hcpeu85l7',
    createdAt: '2020-09-13T12:38:43.014Z',
    updatedAt: '2020-09-13T15:55:21.517Z',
    publishedAt: '2020-09-13T12:38:43.014Z',
    title:
      'この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています',
    summary:
      'この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量',
    body: dummyMarkdown,
    tags: [
      {
        id: 'piymdvgeb',
        name: 'ダミー',
        img: {
          url: 'http://placehold.jp/150x150.png'
        }
      },
      {
        id: '7zcsnuihh',
        name: 'ダミー',
        img: {
          url: 'http://placehold.jp/150x150.png'
        }
      }
    ],
    category: {
      id: 'eq7p_6jei',
      name: 'ダミー',
      img: {
        url: 'http://placehold.jp/150x150.png'
      }
    }
  },
  {
    id: 'hcpeu85l7',
    createdAt: '2020-09-13T12:38:43.014Z',
    updatedAt: '2020-09-13T15:55:21.517Z',
    publishedAt: '2020-09-13T12:38:43.014Z',
    title:
      'この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています',
    summary:
      'この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量',
    body: dummyMarkdown,
    tags: [
      {
        id: 'piymdvgeb',
        name: 'ダミー',
        img: {
          url: 'http://placehold.jp/150x150.png'
        }
      },
      {
        id: '7zcsnuihh',
        name: 'ダミー',
        img: {
          url: 'http://placehold.jp/150x150.png'
        }
      }
    ],
    category: {
      id: 'eq7p_6jei',
      name: 'ダミー',
      img: {
        url: 'http://placehold.jp/150x150.png'
      }
    }
  },
  {
    id: 'hcpeu85l7',
    createdAt: '2020-09-13T12:38:43.014Z',
    updatedAt: '2020-09-13T15:55:21.517Z',
    publishedAt: '2020-09-13T12:38:43.014Z',
    title:
      'この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています',
    summary:
      'この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量',
    body: dummyMarkdown,
    tags: [
      {
        id: 'piymdvgeb',
        name: 'ダミー',
        img: {
          url: 'http://placehold.jp/150x150.png'
        }
      },
      {
        id: '7zcsnuihh',
        name: 'ダミー',
        img: {
          url: 'http://placehold.jp/150x150.png'
        }
      }
    ],
    category: {
      id: 'eq7p_6jei',
      name: 'ダミー',
      img: {
        url: 'http://placehold.jp/150x150.png'
      }
    }
  },
  {
    id: 'xizlxccff',
    createdAt: '2020-09-07T04:35:28.817Z',
    updatedAt: '2020-09-07T12:59:56.511Z',
    publishedAt: '2020-09-07T04:35:28.817Z',
    title:
      'この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています',
    summary:
      'この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量',
    body: dummyMarkdown,
    tags: [
      {
        id: 'piymdvgeb',
        name: 'ダミー',
        img: {
          url: 'http://placehold.jp/150x150.png'
        }
      },
      {
        id: 'aamcmuhtf',
        name: 'ダミー',
        img: {
          url: 'http://placehold.jp/150x150.png'
        }
      },
      {
        id: 'xghqpsmpp',
        name: 'ダミー',
        img: {
          url: 'http://placehold.jp/150x150.png'
        }
      }
    ],
    category: {
      id: 'pgxhtaaa9z',
      name: 'ダミー',
      img: {
        url: 'http://placehold.jp/150x150.png'
      }
    }
  },
  {
    id: 'b-zlnpffc',
    createdAt: '2020-07-04T12:24:08.429Z',
    updatedAt: '2020-09-07T13:00:12.392Z',
    publishedAt: '2020-07-04T12:24:08.429Z',
    title:
      'この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています',
    summary:
      'この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量',
    body: dummyMarkdown,
    tags: [
      {
        id: 'svdq1mmtc',
        name: 'ダミー',
        img: {
          url: 'http://placehold.jp/150x150.png'
        }
      }
    ],
    category: {
      id: 'eq7p_6jei',
      name: 'ダミー',
      img: {
        url: 'http://placehold.jp/150x150.png'
      }
    }
  }
];

const dummyPagination = {
  currentPage: 1,
  maxPage: Math.ceil(dummyArticles.length / 5)
};

const dummyClassfication = [
  {
    id: 'xfrbr-upq',
    name: 'ダミー',
    img: {
      url: 'http://placehold.jp/150x150.png'
    }
  },
  {
    id: 'tlx_v85px',
    name: 'ダミー',
    img: {
      url: 'http://placehold.jp/150x150.png'
    }
  },
  {
    id: 'xghqpsmpp',
    name: 'ダミー',
    img: {
      url: 'http://placehold.jp/150x150.png'
    }
  },
  {
    id: 'dhyw5n7iw',
    name: 'ダミー',
    img: {
      url: 'http://placehold.jp/150x150.png'
    }
  }
];

const dummyLogo = 'ダミー';

const dummyRoutes = [
  {
    name: 'ダミー',
    to: '/test1',
    img: 'http://placehold.jp/150x150.png'
  },
  {
    name: 'ダミー',
    to: '/test2',
    img: 'http://placehold.jp/150x150.png'
  },
  {
    name: 'ダミー',
    to: '/test3',
    img: 'http://placehold.jp/150x150.png'
  },
  {
    name: 'ダミー',
    to: '/test4',
    img: 'http://placehold.jp/150x150.png'
  }
];

export {
  dummyImg,
  dummyCategoryBadge,
  dummyTagBadge,
  dummyTagBadges,
  dummyDate,
  dummyArticles,
  dummyPagination,
  dummyClassfication,
  dummyLogo,
  dummyRoutes
};
