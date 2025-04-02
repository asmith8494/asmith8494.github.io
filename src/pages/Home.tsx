import TopNav from "../components/TopNav";
import anthonyPicture from '../assets/AnthonySmithProfilePicture.png';

function HomePage() {
  return (
    <div>
      <TopNav />
      <h1>Anthony Smith | Software Engineer</h1>
      <h1>"Empires built in a day"</h1>
      <div>
        <img src={anthonyPicture} alt="A beautiful picture of Anthony should be here!" />
      </div>
    </div>
  );
}

export default HomePage;