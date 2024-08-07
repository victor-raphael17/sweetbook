import * as fs from 'fs';

interface User {

    username: string;
    password: string;
    fullName: string;

}

export default class UserStorage {

    private static dataFilePath: string = './src/db/userData.json';
    
    public static readData(): User[] {

        try {
            
            const data = fs.readFileSync(this.dataFilePath, 'utf-8');

            return JSON.parse(data);

        } catch (error) {

            console.error('Error reading file:', error);

            return [];

        }

    }

    public static writeData(data: User[]): void {

        try {

            fs.writeFileSync(this.dataFilePath, JSON.stringify(data, null, 2), 'utf-8');

        } catch (error) {

            console.error('Error writing file:', error);

        }
    }

    public static register(username: string, password: string, fullName: string): boolean {

        const data = this.readData();
        const userExists = data.some(user => user.username === username);
    
        if (userExists) {
    
        return false;
    
        }
    
        data.push({ username, password, fullName });
    
        this.writeData(data);
    
        return true;
    
    }

    public static login(username: string, password: string): boolean {

        const data = this.readData();

        const user = data.find(user => user.username === username);

        return user ? user.password === password : false;

    }

}