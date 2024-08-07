import readline from 'readline-sync';
import chalk from 'chalk';
import { DatabaseController } from '../control/DatabaseController.js';
import { BasicController } from '../control/BasicController.js';

export class PrimaryScreen {

    public static loginScreen(): void {

        console.log(chalk.cyan('Welcome to SweetBook!\n'));
        console.log(chalk.magenta('1.'), 'Sign In');
        console.log(chalk.magenta('2.'), 'Register');
        console.log(chalk.magenta('3.'), 'Exit\n');

        const userChoice = readline.question();

        switch(userChoice) {

            case '1':

                this.login();

                break;

            case '2':

                this.register();
            
                break;

            case '3':

                console.log(chalk.green('\nOk. Goodbye!!! :)\n'));
                
                BasicController.endSystem();


            default:
                
                console.log('\nDigite uma opção válida!\n');

                this.loginScreen();

        }
    }

    private static login(): void {

        console.log(chalk.green('\nYou chose to Sign in!'));

        let loginStatus: boolean = false;
        
        do {

        console.log(('\nEnter the'), chalk.magenta('username:\n'));

        const username: string = readline.question();

        console.log(('\nEnter the'), chalk.magenta('password:\n'));

        const password: string = readline.question();

        loginStatus = DatabaseController.login(username, password);

        if (loginStatus) {   
            
            console.log('\nYou have successfully logged in!\/');

        } else {

            console.log(chalk.red('\nInvalid username or password.\n'));

        }

        } while (loginStatus == false);
    
    }

    private static register(): void {

        let confirmPassword: string = '1',
            registerPassword: string = '',
            registerUsername: string = '',
            fullName: string = '';

        console.log('\nYou chose to Register!');
        
        do {

            console.log(('\nEnter your'), chalk.magenta('first two'), ('names:\n'));

            fullName = readline.question();

            console.log(('\nEnter your'), chalk.magenta('username:\n'));

            registerUsername = readline.question();

            do {

                console.log(('\nEnter your'), chalk.magenta('password:\n'));

                registerPassword = readline.question();

                console.log(('\nConfirm your'), chalk.magenta('password\n'));
                
                confirmPassword = readline.question();

                if (confirmPassword != registerPassword) {

                    console.log(chalk.red('\nThe passwords are different! Try again.\n'));
                    
                }

            } while (confirmPassword != registerPassword);

        } while ((fullName == '') || (registerUsername == '') || (registerPassword == '')) ;

        if ((DatabaseController.register(registerUsername, registerPassword, fullName))) {
            //temporário
            console.log('Parabéns, você se cadastrou com sucesso!');

        } else {

            console.log('User already exists!');
            
        }
    }
}