// general config goes here
const configGlob = {};
// production specific config goes here
const configProd = {
  API_URI: "http://localhost:5000"
};
// // development specific config goes here
// const configDev = {
//   API_URI: "http://localhost:3001"
// };

// merged config
const config = { ...configGlob, ...configProd };
export default config;