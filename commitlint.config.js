/** @type {import('@commitlint/types').UserConfig} */
const config = {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'build', 'chore', 'ci', 'revert']],
		'subject-case': [2, 'always', 'lower-case'],
		'subject-max-length': [2, 'always', 72],
	},
};

export default config;
