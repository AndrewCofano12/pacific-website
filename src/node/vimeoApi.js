let Vimeo = require('vimeo').Vimeo;
let client = new Vimeo("c8b2573460cd98a7d5bc735085040d9897ea88e1", 
"O7HihfT3RHix1tInFSCzZOlrxl9ceqRel+936WSFcmrFigI/d+LBr8B/qq932WCjsDa6L2j3lp6N0s/7nrvxuxEfOWpESnW9DcDxyIkclkDDIirwhAgcMwGyaKNnNO8L", 
"e36efa7730d283c7fb858b21c30d8fce");

const request = () => (
    client.request({
        method: 'GET',
        path: '/tutorial'
      }, function (error, body, status_code, headers) {
        if (error) {
          console.log(error);
        }
      
        console.log(body);
      })
)   
export default request   