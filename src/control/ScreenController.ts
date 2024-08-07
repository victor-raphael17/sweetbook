import { PrimaryScreen } from "../view/PrimaryScreen.js";
import { MainMenuScreen } from "../view/MainMenuScreen.js";

export class ScreenController {

    public static getLoginScreen():void {

        PrimaryScreen.loginScreen();
        
    }

    public static getMainScreen(fullName: string): void {

        MainMenuScreen.mainScreen(fullName);

    }

}