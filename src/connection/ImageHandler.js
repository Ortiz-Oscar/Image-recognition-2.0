import { client, options } from '../utilities/Constants'
async function ImageHandler(image = null, selectedOption) {

  //Transform the image file into a blob for the transference between the server and the app

  let blob = new Blob([image], {type: 'image'});

  let resultAnalisis = null
  switch(selectedOption){
    //Analize image
    case '1':{
      resultAnalisis = await client
      .analyzeImageInStream(blob, {    
        language: "en",
        visualFeatures: ["Faces"],
      })
      .then((result) => {
        return result
      })
      .catch((err) => {
        console.log("From url handler, an error occurred:", err);
      });
      break;
    }
    // Detect objects
    case '2':{
      resultAnalisis = await client
      .analyzeImageInStream(blob, {    
        language: "en",
        visualFeatures: ["Objects"],
      })
      .then((result) => {
        return result
      })
      .catch((err) => {
        console.log("From url handler, an error occurred:", err);
      });
      break;
    }
    // Describe image
    default :{
      resultAnalisis = await client
      .describeImageInStream(blob, options)
      .then((result) => {
        return result
      })
      .catch((err) => {
        console.log("From url handler, an error occurred:", err);
      });
      break;
    }
  }
  return resultAnalisis;
}
export default ImageHandler