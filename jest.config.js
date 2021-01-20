module.exports = {
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest'
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.js',
    '^@/(.*)$': '<rootDir>/src/$1',
    '^~/(.*)$': '<rootDir>/src/$1',
    '__testdata__/(.*)$': '<rootDir>/__testdata__/$1' //ダミーデータ
  },
  moduleFileExtensions: ['js', 'json', 'vue'],
  testMatch: [
    '**/tests/**/*.(test|spec).js|**/__tests__/**/*.(test|spec).js|**/**/*.(test|spec).js'
  ]
};
