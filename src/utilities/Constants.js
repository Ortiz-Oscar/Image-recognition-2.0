const { ComputerVisionClient } = require("@azure/cognitiveservices-computervision");
const { CognitiveServicesCredentials } = require("@azure/ms-rest-azure-js");

// Global constants
const computerVisionKey = process.env["computerVisionKey"] || "779f039ffaf348018d8c654d47782624";
const computerVisionEndPoint =
  process.env["computerVisionEndPoint"] || "https://oscar-ortiz-vision.cognitiveservices.azure.com/";
const cognitiveServiceCredentials = new CognitiveServicesCredentials(computerVisionKey);

export const client = new ComputerVisionClient(cognitiveServiceCredentials, computerVisionEndPoint);
export const options = {
    language: "en",
    visualFeatures: ["Faces", "Objects"],
  };