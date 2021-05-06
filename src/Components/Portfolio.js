import quiz from "../../src/assets/images/code-quiz.png";

const Portfolio = () => {
	return (
		<>
			<div id="container2">
				<h1 id="title">portfolio</h1>
				<br />
				<div class="portfolio">
					<div className="pf">
						<a href="https://toksly.github.io/Code-quiz/" target="_blank"></a>
						<img src={quiz} height="400px" width="600px" />
						{/* <img
							src={quiz}
							alt="start quiz page"
							height="400px"
							width="600px"
							class="pftitle"
						/> */}
						<a href="https://toksly.github.io/Code-quiz/" target="_blank">
							Code-quiz
						</a>
					</div>

					<div className="pf">
						<a
							href="https://toksly.github.io/Work-day-Scheduler/"
							target="_blank"
						></a>
						<img
							src="./assets/images/work-day-scheduler.png"
							alt="activity page"
							height="400px"
							width="600px"
						/>

						<div className="pftitle">
							<a
								href="https://toksly.github.io/Work-day-Scheduler/"
								target="_blank"
							>
								Work-day-Scheduler
							</a>
						</div>
					</div>
					<div className="pf">
						<a
							href="https://toksly.github.io/Weather-Dashboard//"
							target="_blank"
						></a>
						<img
							src="./assets/images/weather-dashboard.png"
							alt="city search page"
							height="400px"
							width="600px"
						/>
						<div className="pftitle">
							<a
								href="https://toksly.github.io/Weather-Dashboard//"
								target="_blank"
							>
								Weather Dashboard
							</a>
						</div>
					</div>
					<div className="pf">
						<a
							href="https://clintonstrange.github.io/movie-hub//"
							target="_blank"
						></a>
						<img
							src="./assets/images/movie-hub.png"
							alt="watch and seen lists page"
							height="400px"
							width="600px"
						/>

						<div className="pftitle">
							<a
								href="https://clintonstrange.github.io/movie-hub//"
								target="_blank"
							>
								movie-hub
							</a>
						</div>
					</div>
					<div className="pf">
						<a
							href="https://github.com/Craig5117/slp-goalden"
							target="_blank"
						></a>
						<img
							src="./assets/images/slp-goalden.png"
							alt="login page"
							height="400px"
							width="600px"
						/>
						<div className="pftitle">
							<a href="https://slp-goalden.herokuapp.com/" target="_blank">
								slp-goalden
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Portfolio;
