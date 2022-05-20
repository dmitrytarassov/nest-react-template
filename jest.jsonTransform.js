const { TsJestTransformer } = require('ts-jest/dist/ts-jest-transformer');

class T extends TsJestTransformer {
  process(input, filePath, jestConfig, transformOptions) {
    return super.process(input, filePath, jestConfig, transformOptions);
  }
}

module.exports = new T();
