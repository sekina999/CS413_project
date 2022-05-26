import React from "react";

//components
import Comment from "../../components/HomePage/Comment";
import Sidebar from "../../components/HomePage/Sidebar";
import SimilarVideo from "../../components/HomePage/SimilarVideo";
import VideoInfo from "../../components/HomePage/VideoInfo";
import VideoPlayer from "../../components/HomePage/VideoPlayer";

//wrappers
import RecomendationsWrapper from "./wrappers/RecomendationsWrapper";
import VideoContentWrapper from "./wrappers/VideoContentWrapper";
import CommentsWrapper from "./wrappers/CommentsWrapper";

//data
import getHomeData from "./data/homeData";

const HomePage = () => {
	const { comments, videoInfo, recommendations } = getHomeData();

	return (
		<>
			<div className="flex flex-col lg:flex-1 lg:flex-row gap-4 my-3">
				<Sidebar />
				<VideoContentWrapper>
					<VideoPlayer />
					<VideoInfo title={videoInfo.title} />
					<CommentsWrapper>
						{comments.map((comment) => (
							<Comment text={comment.text} key={comment.id} />
						))}
					</CommentsWrapper>
				</VideoContentWrapper>
				<RecomendationsWrapper>
					{recommendations.map((video) => (
						<SimilarVideo key={video.id} title={video.title} />
					))}
				</RecomendationsWrapper>
			</div>
		</>
	);
};

export default HomePage;
