import { client, options } from '../utilities/Constants'
async function ImageHandler(image = null, selectedOption) {

  //Transform the image file into a blob for the transference between the server and the app

  let blob = new Blob([image], {type: 'image'});

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