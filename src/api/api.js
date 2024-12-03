


import axiosInstance from "./axios-instance.configuration"
import { routes } from "./routes"




const get_process_images = async ()=>{
    try {
        console.log("Loading....");
        
        console.log("BASE URL ",process.env.REACT_APP_BASE_URL);

        const result = await axiosInstance.get("/process-images");
        // const result = await fetch("http://127.0.0.1:5000/api/v1/process-images")
         console.log(result?.data)
         return result.data
    } catch (error) {
        console.log(error);
        
    }
 
};

export {get_process_images}