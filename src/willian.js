import newman from "newman";

export const willian = () => {
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
        console.log("Finalização dos testes da Willian");
        resolve();
      }
    );
  });
};
