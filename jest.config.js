export default {
    testEnvironment: 'jsdom',
    extensionsToTreatAsEsm: ['.jsx'],
    transform: {
      '^.+\\.(js|jsx)$': ['babel-jest', { rootMode: 'upward' }]
    },
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
      '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/__mocks__/fileMock.js',
      '^/vite\\.svg$': '<rootDir>/__mocks__/fileMock.js'
    }
  };
  