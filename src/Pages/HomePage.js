// TODO: http://localhost:3000/ - home page w/ a description of the sites purpose and user functionality avaiable

// Imports
import React from "react";

const HomePage = () => {
  return (
    <div className="Home">
      <div className="Left-Side">
        <div className="Title">
          <h1>The Crystal World</h1>
        </div>

        <div className="CrystalImageContainer">
          <img
            className="CrystalImage"
            src="https://thumbs.gfycat.com/HomelyCreepyFawn-size_restricted.gif"
            alt="crystal-img"
          ></img>
        </div>

        <div className="Welcome-Message">
          <h3>Welcome to the Crystal World 💎!</h3>
          <p>
            This application provides information about a variety of crystals.
            You are welcome to explore not only the scientific breakdown of a
            crystal but learn some of the healing properties of the crystals.{" "}
            <b>
              This site is fully for learning purposes with no intent to
              influence your beliefs{" "}
            </b>
            <i>(so please take what you need and leave what you don't)</i>.
          </p>
          <p>
            You will learn about the following features of crystals: the
            transparency, luster, and hardness levels using the Mohs scale and
            Healing properties/functions. Included in this application you the
            user will be able to do <b>CRUD </b>functionality through the site,
            which consist of the following:
            <br />- <b>C</b>reate/ add a new crystal with all information via
            the add a crystal form <i>(found at the botton navbar)</i>
            <br />- <b>R</b>ead about all crystals preset into the database,
            alongside the crystals you add can be seen{" "}
            <i>
              (found via the diamond emoji in the navbar at the bottom of site
              page)
            </i>
            <br />- <b>U</b>pdate a crystal by clicking on the crystal and
            having the option to edit the selected crystal via edit button,
            which will redirect you to an edit form to modify and save changes
            or if you change your mind just cancel your options
            <br />- <b>D</b>elete a crystal, once crystal is selected, you can
            delete the crystal via delete button and get redirected to updated
            all crystal list.
          </p>
          <p>
            <b>
              ⚠️ Navigation bar to move through the site can be found all the
              way at the bottom of every page
            </b>
            <i>(scroll to the bottom and all buttons will be there) </i>
          </p>
        </div>
      </div>
    </div>
  );
};

// Exports

export default HomePage;
