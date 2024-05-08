import logo from "./logo.svg";
import "./App.css";
import LocationIframe from "./LocationIframe";

function App() {
  return (
    <>
      <div>
        <LocationIframe
          width="1200"
          height="450"
          // style=“border:0”
          loading="lazy"
          allowfullscreen
          referrerpolicy="no-referrer-when-downgrade"
          // url={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDLGitEALPVLPoPzj7XTq2uA3Us-QutdiM&q=${buildingData?.latitude},${buildingData?.longitude}`}
          url={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDLGitEALPVLPoPzj7XTq2uA3Us-QutdiM&q=${"31.468854"},${"74.451038"}`}
        />
      </div>
    </>
  );
}

export default App;
