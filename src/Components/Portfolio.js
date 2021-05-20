import quiz from "../../src/assets/images/code-quiz.png";
import scheduler from "../../src/assets/images/work-day-scheduler.png";
import dashboard from "../../src/assets/images/weather-dashboard.png";
import movie from "../../src/assets/images/movie-hub.png";
import book from "../../src/assets/images/book-search-engine.png";
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
						<div className="pftite"></div>
						<a href="https://toksly.github.io/Code-quiz/" target="_blank">
							code-quiz
						</a>
					</div>

					<div className="pf">
						<a
							href="https://toksly.github.io/Work-day-Scheduler/"
							target="_blank"
						></a>
						<img src={scheduler} height="400px" width="600px" />

						<div className="pfftitle">
							<a
								href="https://toksly.github.io/Work-day-Scheduler/"
								target="_blank"
							>
								Work-Day-Scheduler
							</a>
						</div>
					</div>
					<div className="pf">
						<a
							href="https://toksly.github.io/Weather-Dashboard//"
							target="_blank"
						></a>
						<img src={dashboard} height="400px" width="600px" />

						<div className="ptitle">
							<a
								href="https://toksly.github.io/Weather-Dashboard//"
								target="_blank"
							>
								Weather-Dashboard
							</a>
						</div>
					</div>
					<div className="pf">
						<a
							href="https://clintonstrange.github.io/movie-hub//"
							target="_blank"
						></a>
						<img src={movie} height="400px" width="600px" />

						<div className="ptitle">
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
							href="https://toksly-book-search-engine.herokuapp.com/"
							target="_blank"
						></a>
						<img src={book} height="400px" width="600px" />

						<div className="ptitle">
							<a
								href="https://toksly-book-search-engine.herokuapp.com/"
								target="_blank"
							>
								book-search-engine
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Portfolio;
