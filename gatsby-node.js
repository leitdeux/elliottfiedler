const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
	if (getConfig().mode === 'production') {
		actions.setWebpackConfig({ devtool: false });
	}
};

