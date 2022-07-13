const { ComputerVisionClient } = require("@azure/cognitiveservices-computervision");
const { CognitiveServicesCredentials } = require("@azure/ms-rest-azure-js");

async function ImageHandler(image = null) {
  const computerVisionKey = process.env["computerVisionKey"] || "7b89298d4ae74ee992210d545dab4a63";
  const computerVisionEndPoint =
    process.env["computerVisionEndPoint"] || "https://oscarortizcomputervision.cognitiveservices.azure.com/";
  const cognitiveServiceCredentials = new CognitiveServicesCredentials(computerVisionKey);
  const client = new ComputerVisionClient(cognitiveServiceCredentials, computerVisionEndPoint);
  const options = {
    maxCandidates: 5,
    language: "en",
    visualFeatures: ["Faces"],
  };
  let blob = new Blob([image], {type: 'image'}); //Transform the image file into a blob for the transference between the server and the app

  let result_analisis = await client
  .analyzeImageInStream(blob, options)
  .then((result) => {
    return result
  })
  .catch((err) => {
    console.log("An error occurred:", err);
  });
  return result_analisis;
}
export default ImageHandler