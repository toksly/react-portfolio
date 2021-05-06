import profile from "../../src/assets/images/profile-image.jpg";

function Home() {
	return (
		<>
			<div className="row">
				<div id="containerAbout" className="col-md-12 col-lg-12 text-left mx-4">
					<h1 id="title">About Me</h1>
					<img
						src={profile}
						id="profile"
						width="200px"
						height="200px"
						style={{ borderRadius: "50%"}}
						alt="TochukwuSylvesterNwizu"
					/>
					<p className="mt-3" id="Bio">
						My name is Tochukwu Sylvester Nwizu. I attended the Vanderbilt
						University coding Boot Camp. As an up coming full stack web
						developer, I am willing to work in an environment that will allow me
						to contribute as well as help me to grow and become a successful
						full stack web developer. I have a very strong work ethic, and I
						know the importance of continuously striving for improvement. For
						this reason, I am open and willing to trying new things outside of
						my comfort zone. I intend using my new learned skill set in solving
						real world problems through collaboration with my coleques. I
						believe with team work, no problem will be too difficult to tackle.
						Moreover, My experience working in healthcare setting has helped me
						to cultivate the habit of working calmly even in a highly stressful
						environment.
					</p>
				</div>
			</div>

			<div id="links" className="col-md-12">
				<a href="../../src/assets/images/resume/resume.pdf" target="_blank">
					{/* <!-- <img
					class="linkImg"
					src="./assets/images/resumeIcon.png"
					alt=" resume"
				/> --> */}
				 Resume
				</a>
				<a href="https://github.com/toksly" target="_blank">
					{/* <!-- <img class="linkImg" src="./assets/images/github.png" alt="project"/> -- */}
					Github profile
				</a>
				<a href="https://www.linkedin.com/in/sylvester-nwizu-6151b3aa/" target="_blank">
					Linkedin
					</a>
			</div>
		</>
	);
}

export default Home;
