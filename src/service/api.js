import axios from "axios";
import { API_NOTIFICATION_MSG ,SERVICE_URL } from "../constants/config";

const API_URL='http://localhost:8000';

const axiosInstance =axios.create({
   baseURL:API_URL,
   timeout:10000,
   headers:{
    "Content-Type":"appliction.json"
   } 
})

axiosInstance.interceptors.request.use(
    function(config){
    return config
; },

     function(error){
        return Promise.reject(error);
     }


)
axiosInstance.interceptors.response.use( 
    function(response){
        return processResponse(response);
    },
    function(error){
        return Promise.reject(processError(Response));
    }

)

const processResponse =(response)=>{
    if (response?.status===200) {
        return{ isSuccess:true, data:response.data}
        
    }else{
        return{
            isfailure:true,
            status:response?.status,
            msg:response?.msg,
            code:response?.code
        }
    }
}

const processError=(error)=>{
   if (error.response) {
    console.log('Error in response:',error.tojson());
    return {
        isError:true,
        msg:API_NOTIFICATION_MSG.responseFailure,
        code:error.response.status

    }
   }else if(error.request){
    console.log('Error in request:',error.tojson());
    return {
        isError:true,
        msg:API_NOTIFICATION_MSG.requestFailure,
        code:error.response.status

    }
   }else{
    console.log('Error in network:',error.tojson());
    return {
        isError:true,
        msg:API_NOTIFICATION_MSG.networkFailure,
        code:error.response.status

    }
   }
}

const API={};

for(const[key,value] of Object.entries(SERVICE_URL)){
     API[key] = (body,showUploadprogress,showDownloadprogress)=>
         axiosInstance({
            method: value.method,
             url:value.url,
             data:body,
             response:value.response,
             onUploadProgress:function(progressEvent){
                if(showUploadprogress){
                    let percentagecompleted = Math.round((progressEvent.loaded *100) / progressEvent.total)
                    showUploadprogress(percentagecompleted);
                }
             },
             onDownloadProgress:function(progressEvent){
                if(showDownloadprogress){
                    let percentagecompleted = Math.round((progressEvent.loaded *100) / progressEvent.total)
                    showDownloadprogress(percentagecompleted);
                }
             }
            })
}  

export {API};

         