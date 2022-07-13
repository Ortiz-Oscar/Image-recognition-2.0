const { ComputerVisionClient } = require("@azure/cognitiveservices-computervision");
const { CognitiveServicesCredentials }  = require("@azure/ms-rest-azure-js");

async function URLHandler(url) {
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

  let result_analisis = await client
    .analyzeImage(url, options)
    .then((result) => {
      return result
    })
    .catch((err) => {
      console.log("From url handler, an error occurred:", err);
    });
  return result_analisis;
}
export default URLHandler