import { client, options } from '../utilities/Constants'
async function URLHandler(url, selectedOption) {

  let resultAnalisis = null
  switch(selectedOption){
    //Analize image
    case '1':{
      resultAnalisis = await client
      .analyzeImage(url, {    
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
      .analyzeImage(url, {    
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
      .describeImage(url, options)
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
export default URLHandler