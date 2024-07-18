import newman from "newman";

export const iure = () => {
  return new Promise((resolve, reject) => {
    newman.run(
      {
        collection: "./postman/Iure.postman_collection.json",
        reporters: "cli",
      },
      (error) => {
        if (error) {
          return reject(error);
        }
        console.log("Finalização dos testes da Iure");
        resolve();
      }
    );
  });
};
