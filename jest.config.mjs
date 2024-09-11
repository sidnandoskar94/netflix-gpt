export default {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.jsx?$': 'babel-jest', // Handle both .js and .jsx files using babel-jest
  },
  moduleFileExtensions: ['js', 'jsx'],
  extensionsToTreatAsEsm: ['.jsx'], // Only treat .jsx as ESM, .js is inferred automatically as ESM
  roots: ['<rootDir>/src'], // Root directory of your tests
  setupFilesAfterEnv: ['./jest.setup.js'], // Jest setup configuration
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Mocks CSS imports
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/__mocks__/fileMock.js', // Mocks file imports
  },
};