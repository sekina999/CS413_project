export const recommendations = [
	{ title: "REC-1", id: 1 },
	{ title: "REC-2", id: 2 },
	{ title: "REC-3", id: 3 },
	{ title: "REC-4", id: 4 },
];

export const videoInfo = {
	title: "Some video title!",
};

export const comments = [
	{ text: "Comment 1", id: 1 },
	{ text: "Comment 2", id: 2 },
];

export default function getHomeData() {
	return {
		recommendations,
		videoInfo,
		comments,
	};
}
