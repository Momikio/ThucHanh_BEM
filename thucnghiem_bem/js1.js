function toast({ title = '',
message = '',
type = '',
duration = 1 }) {
const main = document.getElementById('toast');
if (main) {
    
    const toast = document.createElement('div');
    
    // auto remove toast
 const autoRemote=  main.appendChild(toast);
    setTimeout(function () {
        main.removeChild(toast);
    }, duration+1000 )

    // onclick remove toast
    toast.onclick = function(e){
        if(e.target.closest('.toast__close')){
            main.removeChild(toast);
            clearTimeout(autoRemote);
        }
    }
    const icons = {
        success: 'fa fa-check-circle',
        error: 'fas fa-exclamation-circle',
        warning: 'fas fa-exclamation-circle',
        info: 'fas fa-info-circle'
    }
    const icon = icons[type];
    const delay = (duration / 1000).toFixed(2);
    toast.classList.add('toast', `toast--${type}`);
    toast.style.animation = `sliderInline ease 0.6s , fadeOut linear 1s ${delay}s forwards `;
    toast.innerHTML = `<div class="toast__icon">
<i class="${icon}" aria-hidden="true"></i>
</div>
<div class="toast__body">
<h3 class="toast__title">${title}</h3>
<p class="toast__msg">${message}}</p>
</div>
<div class="toast__close">
<i class="fa fa-times" aria-hidden="true"></i>
</div>` ;
   
}
}

function showSuccessToast() {
toast({
    title: "Thành công!",
    message: "Bạn đã đăng ký thành công tài khoản tại F8.",
    type: "success",
    duration:4000
});
}
function showWarningToast() {
toast({
    title: "Canh bao",
    message: "Ban co chac ve quyet dinh nay khong ,neu xoa se khong the khoi phuc",
    type: "warning",
    duration:4000
})
}

function showInFoToast() {
toast({
    title: "Thong tin",
    message: "Bay gio la muoi chin gio nam muoi tam phut toi",
    type: "info",
    duration:4000
})
}
function showErrorToast() {
toast({
    title: "Thất bại!",
    message: "Có lỗi xảy ra, vui lòng liên hệ quản trị viên.",
    type: "error",
    duration: 4000
});
}