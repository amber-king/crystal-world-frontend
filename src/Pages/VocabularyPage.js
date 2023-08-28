// TODO: http://localhost:3000/vocabulary - this page contains key terms found on the site - helps with user understanding the site better

// Imports
import React from "react";

const VocabularyPage = () => {
  return (
    <div className="Vocab-Info">
      <div className="Right-Side">
        <h2>Vocabulary to know...</h2>
        <p>
          These are vocabulary terms to help you understand what you are looking
          for when looking for a crystal. Without the knowledge of the different
          ways a crystal is observed you will have some trouble reading through
          and inputting the closest accurate information.
        </p>
        <div className="Vocabulary-Card">
          <h4>Transparency</h4>

          <p>
            Transparency refers to the property of allowing light to pass
            through a crystal. Crystals can be transparent, opaque, or
            translucent. Transparent crystals allow light to pass through, while
            opaque crystals do not. Translucent crystals allow some light to
            pass through but not as clearly as transparent ones.
          </p>
        </div>

        <div className="Vocabulary-Card">
          <h4>Luster</h4>
          <p>
            Luster describes how light reflects off the surface of a crystal. It
            is a crucial optical property that offers insights into a crystal's
            composition and characteristics. Crystals can exhibit a range of
            luster types, each indicating distinctive visual qualities:
          </p>
          <ul>
            <li>
              <strong>Vitreous Luster:</strong> Vitreous luster, also known as
              glassy luster, gives crystals a sparkling, glass-like appearance.
              Light bounces off the surface, creating a glossy sheen similar to
              polished glass.
            </li>
            <li>
              <strong>Metallic Luster:</strong> Metallic luster imparts a shine
              similar to that of metals. This type of luster is often seen in
              minerals containing metallic elements and provides a reflective,
              shiny surface.
            </li>
            <li>
              <strong>Pearly Luster:</strong> Pearly luster showcases an
              iridescent, pearl-like glow. Minerals with a pearly luster usually
              have a layered or platy structure, resulting in shifting colors as
              light interacts with the surface.
            </li>
            <li>
              <strong>Dull Luster:</strong> Dull luster lacks shine or
              reflective qualities. Crystals with a dull luster appear earthy
              and non-reflective, often resembling unpolished rocks.
            </li>
            <li>
              <strong>Adamantine Luster:</strong> Adamantine luster is
              characterized by a brilliant, diamond-like sparkle. This luster
              type creates intense flashes of light from the crystal's surface.
            </li>
            <li>
              <strong>Greasy Luster:</strong> Greasy luster gives crystals an
              oily or slick appearance. Light reflects unevenly from the
              surface, creating a slippery, unctuous sheen.
            </li>
            <li>
              <strong>Waxy Luster:</strong> Waxy luster imparts a soft, wax-like
              shine to crystals. The surface appears smooth and subdued,
              resembling the luster of a candle.
            </li>
            <li>
              <strong>Silky Luster:</strong> Silky luster creates a fibrous or
              striated appearance on the crystal's surface. It resembles the
              texture of silk fibers and often results from the presence of
              mineral fibers.
            </li>
            <li>
              <strong>Resinous Luster:</strong> Resinous luster gives crystals a
              glossy, sticky appearance. It often resembles the luster of tree
              resin or sap, creating a somewhat translucent effect.
            </li>
          </ul>
        </div>
        <div className="Vocabulary-Card">
          <h3>Hardness</h3>
          <p>
            Hardness is a measure of a crystal's resistance to scratching. It
            helps us understand how durable a crystal is and how it compares to
            other minerals. The Mohs scale, a commonly used hardness scale,
            ranks minerals from 1 (the softest) to 10 (the hardest). Each number
            on the scale represents a mineral's ability to scratch minerals with
            lower numbers and be scratched by minerals with higher numbers.
          </p>
          <p>
            To illustrate the concept of hardness, think of it as a
            "scratchability" test. Imagine you have a set of minerals, each with
            a different hardness level, and you want to find out which minerals
            can scratch others. Here are a few examples:
          </p>
          <ul>
            <li>
              <strong>Mineral with Hardness 1:</strong> Minerals with a hardness
              of 1 are very soft and can be easily scratched by your fingernail.
            </li>
            <li>
              <strong>Mineral with Hardness 2:</strong> Minerals with a hardness
              of 2 can scratch minerals with hardness 1 but not your fingernail.
            </li>
            <li>
              <strong>Mineral with Hardness 3:</strong> Minerals with a hardness
              of 3 can scratch minerals with hardness 2 and below but not glass.
            </li>
            <li>
              <strong>Mineral with Hardness 5:</strong> Minerals with a hardness
              of 5 can scratch minerals with hardness 4 and below, including
              glass.
            </li>
            <li>
              <strong>Mineral with Hardness 7:</strong> Minerals with a hardness
              of 7 can scratch minerals with hardness 6 and below, including
              steel.
            </li>
            <li>
              <strong>Mineral with Hardness 10:</strong> Minerals with a
              hardness of 10 are the hardest and can scratch all other minerals.
            </li>
          </ul>
        </div>
        <div className="Vocabulary-Card">
          {" "}
          <h4>Healing Properties</h4>
          <p>
            Healing properties refer to the unique and beneficial qualities that
            crystals possess, which are believed to promote physical, emotional,
            and spiritual well-being. Each crystal is thought to emit energy
            vibrations that can interact with our energy fields, helping to
            restore balance, alleviate stress, and enhance positive qualities.
            Whether through meditation, wearing, or placing them in our
            surroundings, crystals are used to support various aspects of
            healing, mindfulness, and personal growth.
          </p>
        </div>
      </div>
    </div>
  );
};

// Exports

export default VocabularyPage;
