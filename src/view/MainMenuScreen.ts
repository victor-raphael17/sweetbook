import chalk from "chalk";

export default class MainMenu {
    
    public static getMainScreen(): void {

        console.log(chalk.cyan('\nSweetBook\n'));
        console.log(chalk.magenta('1.'), ('New Order\n'));
        console.log(chalk.magenta('2.'), ('Order List\n'));
        console.log(chalk.magenta('3.'), ('Exit\n'));
        
    }

}