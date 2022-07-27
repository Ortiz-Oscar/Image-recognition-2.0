const { ComputerVisionClient } = require("@azure/cognitiveservices-computervision");
const { CognitiveServicesCredentials } = require("@azure/ms-rest-azure-js");

// Global constants
const computerVisionKey = process.env["computerVisionKey"] || "7b89298d4ae74ee992210d545dab4a63";
const computerVisionEndPoint =
  process.env["computerVisionEndPoint"] || "https://oscarortizcomputervision.cognitiveservices.azure.com/";
const cognitiveServiceCredentials = new CognitiveServicesCredentials(computerVisionKey);

export const client = new ComputerVisionClient(cognitiveServiceCredentials, computerVisionEndPoint);
export const options = {
    language: "en",
    visualFeatures: ["Faces", "Objects"],
  };