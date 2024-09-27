module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    './resources/react/bootstrap/testingSetup.ts'
  ],
  moduleFileExtensions: ['ts', 'tsx'],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
  },
};
