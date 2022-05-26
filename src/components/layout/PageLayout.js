import React from "react";

const PageLayout = ({ children }) => {
	return (
		<div className="flex flex-col w-full min-h-screen bg-slate-100">
			<div className="mx-auto w-full flex flex-col flex-1 p-5">
				{children}
			</div>
		</div>
	);
};

export default PageLayout;
