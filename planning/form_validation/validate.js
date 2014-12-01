// Basic JS Form Validation

// TO DO:
//  insert custom debug page elements with error messages below

function validate() {
    var f = document.forms[0];
    
    // if username exists
    if (f['username']){

        // 
        if (f['password'].value.length > 6 || f['password_confirm'].value.length > 6) {

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
        {
            alert('your password is too short');
            return false;
        }
    }
    else
        alert('no username supplied. who are you?');
        return false;
}
