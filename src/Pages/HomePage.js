import React from "react";

const HomePage = () => {
  return (
    <div className="Home">
      <div className="Left-Side">
        
        <p>
          Welcome to the Crystal World 💎! This application provides information about variety of crystals. You are welcome to the 
          transparency, luster, and hardness levels using the Mohs scale.
        </p>
        <h3>Transparency</h3>
        <p>
          Transparency refers to the property of allowing light to pass through
          a crystal. Crystals can be transparent, opaque, or translucent.
          Transparent crystals allow light to pass through, while opaque
          crystals do not. Translucent crystals allow some light to pass through
          but not as clearly as transparent ones.
        </p>
        <h3>Luster</h3>
        <p>
          Luster describes how light reflects off the surface of a crystal.
          There are various types of luster, including vitreous (glassy),
          metallic, pearly, and more. The luster can give you clues about the
          crystal's composition and properties.
        </p>
        <h3>Hardness</h3>
        <p>
          Hardness is a measure of a crystal's resistance to scratching. The
          Mohs scale is commonly used to rank minerals based on their hardness
          levels. It ranges from 1 (the softest) to 10 (the hardest). A higher
          number on the scale indicates a harder mineral that can scratch
          minerals with lower numbers.
        </p>
      </div>
      <div className="Right-Side">
        <h1 className="Title">The Crystal World </h1>

        <br />
        <center>
          <img
            className="CrystalImage"
            src="https://thumbs.gfycat.com/HomelyCreepyFawn-size_restricted.gif"
            alt="crystal-img"
          ></img>
        </center>
      </div>
    </div>
  );
};

export default HomePage;
