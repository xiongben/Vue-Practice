

import axios from "axios";
// var baseUrl='http://localhost:3001';
var baseUrl='http://localhost:5000/';


function paramsFormdata(params){
  if(!!params && params != ''){
    let formdata=new URLSearchParams();
    Object.keys(params).forEach(function(key){
        formdata.append(key,params[key]);
    })
    return formdata;
  }else{
      return;
  }
  
}

export default  function request(url,params,type){
  let requrl=baseUrl+url;
  let paramsData;
  let method;
  let requestData;
  let config={
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        },
        
    };
  if(!type || type === 'get'){
     method='GET';
     paramsData=params;
  }else{
      method='POST';
      paramsData=paramsFormdata(params);
  };
  requestData={
     url:requrl,
     method:method,
    //  withCredentials: true,
     data:paramsData,
     config:method === 'POST'?config : '',
  };
  return axios.request(requestData).then((res)=>{
         return Promise.resolve(res.data);
  })
}

