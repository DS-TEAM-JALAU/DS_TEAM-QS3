import newman from "newman";

const willian = () => {
  return new Promise((resolve, reject) => {
    newman.run(
      {
        collection: "./postman/Willian.postman_collection.json",
        reporters: "cli",
      },
      (error) => {
        if (error) {
          reject(error);
        }
        console.log("Collection run complete");
        resolve();
      }
    );
  });
};
