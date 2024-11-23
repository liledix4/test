import { readTextFile } from "./ajax.js";

const server = 'https://liledix4.alwaysdata.net';

document.getElementById('submit0').addEventListener('click', () => {
    readTextFile(
        {
            url: server
        },
        response => {
            const json = JSON.parse(response);
            const statusSelector = document.getElementById('access-allowed');
            switch (json[0]['Is access allowed?']) {
                case true:
                    statusSelector.innerHTML = 'Access is allowed!';
                    break;
                case false:
                    statusSelector.innerHTML = 'Access is NOT allowed!';
                    break;
                default:
                    statusSelector.innerHTML = '???? Try again';
            }
            document.getElementById('content').innerText = response;
        }
    );
});