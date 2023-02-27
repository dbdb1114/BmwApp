import { BackHandler } from "react-native"
import CloseAppBackHandler from "./CloseAppBackHandler";

export default ({var1,setVar1}) => {
    if(var1){
            BackHandler.addEventListener("hardwareBackPress", 
                backAction =()=> {
                setVar1();
                return true;
            })
        
        
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        ); 

        return () => backHandler.remove();
    } 
}
