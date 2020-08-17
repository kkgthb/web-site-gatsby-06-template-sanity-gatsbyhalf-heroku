module.exports = {
    plugins: [
		{
			resolve: "gatsby-source-sanity",
			options: {
				projectId: process.env.SANITY_PROJECT_ID,
				dataset: process.env.SANITY_DATASET,
				...(process.env.SANITY_READ_TOKEN && { token: process.env.SANITY_READ_TOKEN }),
				...(process.env.SANITY_WATCH_MODE && process.env.SANITY_READ_TOKEN && { watchMode: process.env.SANITY_WATCH_MODE }),
				...(process.env.SANITY_OVERLAY_DRAFTS && process.env.SANITY_READ_TOKEN && { overlayDrafts: process.env.SANITY_OVERLAY_DRAFTS }),
			}
		}
    ]
};