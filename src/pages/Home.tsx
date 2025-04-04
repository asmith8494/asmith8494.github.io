import TopNav from "../components/TopNav";
function HomePage() {
    return (
        <div className="home-page">
            <TopNav />
            {/* <h1>"Empires built in a day"</h1> */}
            <p className="text-light">Hello, my name is Anthony. I am a full stack engineer who delivers scalable solutions to any problem. Fully versed in AWS technologies, my preferred tech stack is a React TS front end with a Java back end. Currently employed by Amazon, you can view descriptions of professional projects I've owned <a href="#/professional-projects">here</a></p>
        </div>
    );
}

export default HomePage;