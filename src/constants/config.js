export const API_NOTIFICATION_MSG={
    loading:{
        title:'Loading',
        message:'data is being loaded,please wait'
    },
    success:{
        title:'success',
        message:'data successfully loaded'
    },
    responseFailure:{
        title:'Error',
        message:'An error accured while fetching response from the server .please try again'
    },
    requestFailure:{
        title:'Error',
        message:'An error occured while parsing request data'
    },
    networkError:{
        title:'Error',
        message:'Unable to connect wit the server . please check internet connectivity and try again later'
    }
}


export const SERVICE_URL = {
    userSignup:{ url:'/signup', method:'POST'}
}