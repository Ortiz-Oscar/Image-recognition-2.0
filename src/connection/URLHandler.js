import { client, options } from '../utilities/Constants'
async function URLHandler(url) {
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