import React from "react";

const RecomendationsWrapper = ({ children }) => {
	return (
		<div className="grid gap-4 grid-cols-3 lg:grid-cols-1 lg:w-60 content-start">
			{" "}
			{children}{" "}
		</div>
	);
};

export default RecomendationsWrapper;
