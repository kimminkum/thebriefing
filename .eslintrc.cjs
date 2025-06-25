// .eslintrc.cjs
module.exports = {
  root: true,
  extends: [
    'next',               // Next.js 추천 규칙
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname
  },
  rules: {
    // 필요에 따라 커스텀 룰 추가
    'semi': ['error', 'always'],
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'react/no-unescaped-entities': 'off',
    'no-irregular-whitespace': 'off',
  },
  ignorePatterns: ['node_modules/', '.next/'],
}
