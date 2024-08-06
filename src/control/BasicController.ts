import ScreenController from "./ScreenController.js";

export default class BasicController {
    
    public static startSystem(): void {

        ScreenController.getLoginScreen();
        
    }

    public static endSystem(): void {

        process.exit(0);

    }

}