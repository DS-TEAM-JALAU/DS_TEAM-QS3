import newman from "newman";

export const hadja = () => {
  return new Promise((resolve, reject) => {
    newman.run(
      {
        collection: "./postman/Hadja.postman_collection.json",
        reporters: "cli",
      },
      (error) => {
        if (error) {
          return reject(error);
        }
        console.log("Collection run complete");
        resolve();
      }
    );
  });
};
