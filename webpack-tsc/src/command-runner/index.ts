import fetch from 'node-fetch';
import fs from 'fs/promises';

export async function runATCommands() {
    console.log('Command Result at+version');
    const response = await fetch('http://api.github.com/users/juanjofp')
    const data = await response.json();
    console.log(data.name);
    const files = await fs.readdir('./');
    console.log(files);
    return 42;
}
