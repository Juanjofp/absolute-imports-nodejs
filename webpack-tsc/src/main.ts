import { runATCommands } from 'src/command-runner';
import { sum } from '@/mylib/sum';

async function main() {
    const result = await runATCommands();
    console.log(result, sum(9, 9));
}

main().catch(err => {
    console.log('Error: ', err);
    process.exit(1);
});
