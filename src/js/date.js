var now = new Date();

document.body.className += now.getHours() >= 18 ? ' night' : '';