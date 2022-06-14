import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0xc86a078EDedE26E4E4018C4E9749DB49181c3737");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "GECT",
        description: "This NFT will give you access to GEC DAO!",
        image: readFileSync("scripts/assets/gectemblem.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();