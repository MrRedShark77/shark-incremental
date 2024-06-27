function addNotify(message,time=3) {
    const notify = document.createElement('div');
    notify.classList.add('notify-ctn');
    notify.innerHTML = message;
    el('notify').appendChild(notify);
    setTimeout(() => {
        notify.style.opacity = 0
        setTimeout(() => {
            notify.remove()
        },1000)
    },time*1000)
}