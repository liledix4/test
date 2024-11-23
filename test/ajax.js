export function readTextFile(xhrRequest, callback) {
    if (!xhrRequest.method) {xhrRequest.method = 'POST';}
    const xhr = new XMLHttpRequest();

    xhr.open(
        xhrRequest.method,
        xhrRequest.url,
        true
    );
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status == '200') {
            callback(xhr.responseText);
        }
    }
    xhr.send(xhrRequest.post);
}