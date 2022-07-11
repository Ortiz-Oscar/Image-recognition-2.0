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
  let data = new FormData()
  data.append(image)
  let x = null
  client
    .analyzeImage(data, options)
    .then((result) => {
      console.log("The result is:" , result);
      x = result
    })
    .catch((err) => {
      console.log("An error occurred:", err);
    });
  return x;
}
export default ImageHandler