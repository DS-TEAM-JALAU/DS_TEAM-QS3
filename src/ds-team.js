import newman from "newman";

export const dsteam = () => {
  return new Promise((resolve, reject) => {
    newman.run(
      {
        collection: "./postman/Ds-Team.postman_collection.json",
        reporters: "cli",
      },
      (error) => {
        if (error) {
          reject(error);
        }
        console.log("Finalização dos testes da DS Team");
        resolve();
      }
    );
  });
};
