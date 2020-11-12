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

export { dummyImg, dummyCategoryBadge, dummyTagBadge, dummyTagBadges };
