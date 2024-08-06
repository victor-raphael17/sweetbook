import readlineSync from 'readline-sync';
import chalk from 'chalk';
import DatabaseController from '../control/DatabaseController.js';
import BasicController from '../control/BasicController.js';

export default class PrimaryScreen {

    public static loginScreen(): void {

        console.log(chalk.cyan('Welcome to SweetBook!\n'));
        console.log('Enter', chalk.magenta('1'), 'to Sign In');
        console.log('Enter', chalk.magenta('2'), 'to Register');
        console.log('Enter', chalk.magenta('3'), 'to Quit\n');

        const userChoice = readlineSync.questionInt();

        switch(userChoice) {

            case 1:

                this.login();

                break;

            case 2:

                this.register();
            
                break;

            case 3:

                console.log(chalk.green('\nOk. Goodbye!!!\n'));
                
                BasicController.endSystem();

        }
    }

    private static login(): void {

        console.log(chalk.green('\nYou chose to Sign in!'));

        let loginStatus: boolean = false;
        
        do {

        console.log(('\nEnter the'), chalk.magenta('username:\n'));

        const username: string = readlineSync.question();

        console.log(('\nEnter the'), chalk.magenta('password:\n'));

        const password: string = readlineSync.question();

        loginStatus = DatabaseController.login(username, password);

        if (loginStatus) {   
            //temporário
            console.log('\nParabéns');

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

            fullName = readlineSync.question();

            console.log(('\nEnter your'), chalk.magenta('username:\n'));

            registerUsername = readlineSync.question();

            do {

                console.log(('\nEnter your'), chalk.magenta('password:\n'));

                registerPassword = readlineSync.question();

                console.log(('\nConfirm your'), chalk.magenta('password\n'));
                
                confirmPassword = readlineSync.question();

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