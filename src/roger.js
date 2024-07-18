import newman from "newman";

export const roger = () => {
  return new Promise((resolve, reject) => {
    newman.run(
      {
        collection: "./postman/Roger.postman_collection.json",
        reporters: "cli",
      },
      (error) => {
        if (error) {
          reject(error);
        }
        console.log("Finalização dos testes da Roger");
        resolve();
      }
    );
  });
};
