import { UserStorage } from "../model/UserStorage.js";

export class DatabaseController {

    public static login(username: string, password: string): boolean {

        return UserStorage.login(username, password);

    }

    public static register(username: string, password: string, fullname: string): boolean {

        return UserStorage.register(username, password, fullname);

    }
}