function validate() {
    var f = document.forms[0];
    
    if (f['username']){
        if ( f['password'].value !== f['password_confirm'].value) {
            alert('passwords don\'t match!')
            return false;
        }
        else {
            alert('they match!');
            return true;
        }
    }
    else
        alert('no username supplied. who are you?');
        return false;
}
