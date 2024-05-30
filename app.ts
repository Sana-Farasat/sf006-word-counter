#! /usr/bin/env node
//Shebang

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.greenBright("\n\t======================================\t"));
console.log(chalk.greenBright("\t==============Word Counter============\t"));
console.log(chalk.greenBright("\t======================================\t"));

let condition=true;

while(condition){
const word_counter = await inquirer.prompt(
 [
    {
        name: 'sentence',
        type: 'input',
        message: chalk.blueBright('\n Enter your sentence to count words:'),
    },
 ]
)

console.log(chalk.greenBright(`\n\t ${word_counter.sentence}`));

const wordsCount = word_counter.sentence.trim().split(" ");
//console.log(chalk.blueBright.bold('\n\t' , wordsCount));

const letterCount = word_counter.sentence.replace(/\s+/g , "")
//console.log(chalk.blueBright.bold( letterCount));

console.log(chalk.greenBright(` \n\n\t Your sentence words count is ${wordsCount.length} \t\n`));
console.log(chalk.greenBright(` \n\t Your sentence letters count is ${letterCount.length} \t\n`));

let continue_exit=await inquirer.prompt(
    {
        name:'repeat',
        type:'list',
        message:chalk.blueBright('\nDo you want to continue or exit?'),
        choices:['Continue','Exit']
    }
)
 if(continue_exit.repeat === 'Continue'){
    condition=true;
 }else{
    condition=false;
 }
};
console.log(chalk.greenBright("\n\t======================================\t"));
console.log(chalk.greenBright.italic("\t===========Thanks For Using!==========\t"));
console.log(chalk.greenBright("\t======================================\t"));

