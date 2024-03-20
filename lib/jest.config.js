"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100,
        },
    },
    testMatch: [
        '<rootDir>/__tests__/**/*.test.ts?(x)',
        '<rootDir>/(test|src)/**/*(*.)@(spec|test).test.ts?(x)',
        '<rootDir>/src/**/__tests__/**/*.ts?(x)',
        '<rootDir>/(test|src)/**/*(*.)@(spec|test).ts?(x)',
    ],
    coveragePathIgnorePatterns: ['<rootDir>/__tests__/mocks/*', '<rootDir>/src/config/params.ts'],
    testPathIgnorePatterns: ['node_modules/*'],
    clearMocks: true,
    collectCoverage: true,
    coverageReporters: ['json', 'text'],
    coverageDirectory: 'coverage',
    watchPathIgnorePatterns: ['/node_modules/'],
    transform: {
        '^.+\\.[t]sx?$': [
            'ts-jest',
            {
                tsconfig: 'tsconfig.json',
            },
        ],
    },
};
exports.default = config;
//# sourceMappingURL=jest.config.js.map