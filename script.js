function toast({
    title = '',
    message = '',
    type = '',
    duration = 3000
}) {
    const main = document.getElementById('toast');
    if(main) {
        const toast = document.createElement('div');

        // Auto remove toast
        const autoRemoveId = setTimeout(function() {// sau khoảng thời gian thì gỡ đi
            main.removeChild(toast);
        }, duration + 1000)
        // Remove toast when clicked
        toast.onclick = function(e){
            //closest: tìm cái class của chính nó
            const close = e.target.closest('.toast__close')
            if(close) {
                main.removeChild(toast);
                clearTimeout(autoRemoveId);
            }
        }

        const icons = {
            succses: 'fa-solid fa-circle-check',
            info: 'fa-solid fa-circle-exclamation',
            warning: 'fa-solid fa-circle-exclamation',
            error: 'fa-solid fa-circle-exclamation'
        };
        const icon = icons[type];
        const delay = (duration / 1000).toFixed(2); // lấy ra số giây, toFixed: làm tròn

        toast.classList.add('toast', `toast--${type}`);
        toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;

        toast.innerHTML = `
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">${message}</p>
            </div>
            <div class="toast__close">
                <i class="fa-solid fa-xmark"></i>
            </div>
        `;
        main.appendChild(toast) 
        // đưa toast vào trong main 
       
    } 
}


function showSuccsesToast() {
    toast({
        title: 'Thành công!',
        message: 'Bạn đã đăng ký thành công',
        type: 'succses',
        duration: 5000
    })
}
function showErrorToast() {
    toast({
        title: 'Thất bại',
        message: 'Có lỗi xảy ra vui lòng liên hệ quản trị viên',
        type: 'error',
        duration: 5000
    })
}