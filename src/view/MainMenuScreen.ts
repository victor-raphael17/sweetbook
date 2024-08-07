import chalk from "chalk";

export class MainMenuScreen {
    
    public static mainScreen(fullName: string): void {

        console.log(chalk.cyan('\nSweetBook\n'));
        console.log('\n Hello', (fullName));
        console.log(chalk.magenta('1.'), ('New Order\n'));
        console.log(chalk.magenta('2.'), ('Order List\n'));
        console.log(chalk.magenta('3.'), ('Exit\n'));
        
    }

}