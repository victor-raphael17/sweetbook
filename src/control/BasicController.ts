import { ScreenController } from "./ScreenController.js";

export class BasicController {
    
    public static startSystem(): void {

        ScreenController.getLoginScreen();
        
    }

    public static endSystem(): void {

        process.exit(0);

    }

    public getLoggedUser(username: string): void {

        const loggedUser = username;

    }

}