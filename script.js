// 重點:在表單裡頭雖然有許多input跟按鈕或是選單
// 但是真正要綁定事件是在表單form身上
//form(誰)在submit事件(什麼時候)(做什麼事)
const form = document.getElementById('form')
form.addEventListener('submit', e => {
    e.preventDefault();
    // form裡面的成員可以這樣抓取標籤form[這裡是id],不是form成員都不行
    const firstname = form['firstname'].value;
    const lastname = form['lastname'].value;
    const email = form['email'].value;
    const password = form['password'].value;
    //---------------------------------------------------------------------
    if (firstname === '') {
        const formControl = form['firstname'].parentNode;
        formControl.classList.add('error');
        const small = form['firstname'].parentNode.querySelector('small');
        small.innerText = '此欄位不可為空'
        small.style.opacity = '1'
    } else {
        removeErr('firstname')
    }


    if (lastname === '') {
        getErrTo('lastname', '此欄位不可為空')
    } else {
        removeErr('lastname')
    }



    if (email === '') {
        getErrTo('email', '此欄位不可為空')
    } else if (!isValid(email)) {
        // if(!isValid(email)如果驗證!不是email格式"
        getErrTo('email', '必須式完整Email格式')
    } else {
        removeErr('email')
    }


    if (password === '') {
        getErrTo('password', '此欄位不可為空')
    } else {
        removeErr('password')
    }
    // 因為認證表單這個動作(認證姓名,email,密碼)要重複執行所以寫成function,在呼叫這個function時再把參數傳進去
    function getErrTo(field, massage) {
        const formControl = form[field].parentNode;
        formControl.classList.add('error');
        const small = formControl.querySelector('small');
        small.innerText = massage
        small.style.opacity = '1'
    }
    //移除error樣式 紅邊框 
    function removeErr(field) {
        const formControl = form[field].parentNode;
        formControl.classList.remove('error');
        const small = formControl.querySelector('small');
        small.style.opacity = '0'
    }
    // 認證是否符合email標準格式，上網抓正規表示式function就好了XD
    function isValid(email) {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
})



// 1.只是把要找的"誰"變成一堆變數跟參數
// 2.變數在"什麼時候" "做什麼事"而已
// 3.試著把重複動作寫成function，刻意留下第一個判斷式看一下寫成function的差別

