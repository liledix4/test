import { readTextFile } from "./ajax.js";

const server = 'https://liledix4.alwaysdata.net';

document.getElementById('submit0').addEventListener('click', () => {
    readTextFile(
        {
            url: server
        },
        response => {
            document.getElementById('content').innerHTML = response;
        }
    );
});