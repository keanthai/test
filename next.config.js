const path = require('path');

module.exports = {
	webpack: (config, options) => {
		config.resolve.alias['@'] = path.join(__dirname, 'app');
		return config;
	},
	images: {
		domains: ['sanura.s3-ap-southeast-1.amazonaws.com'],
	},
};
