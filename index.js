// @ check mobile
function isMobile(str) {
    let regexp = /1[^12]{10}$/;
    return regexp.test(str);
}
// @ check password
function isPassword(str , min, max) {
    let regexp = new RegExp("^[\\w]{" + min + "," + max +"}$");
    return regexp.test(str);
}
// @ check username 
function isName(str , min ,max) {
    let regexp = new RegExp("^[\\w\\u4e00-\\u9fa5]{" + min + "," + max + "}$");
    return regexp.test(str);
}
// @ check postalcode
function isPostalcode(str) {
    let regexp = /^\d{6}$/;
    return regexp.test(str);
}
// @ check email
function isEmail(str) {
    let regexp = /^[\w]{4,16}@\w{2,10}.(com|COM)$/;
    return regexp.test(str);
}
// @ exports
module.exports = {
    isMobile: isMobile,
    isPassword: isPassword,
    isName: isName,
    isPostalcode: isPostalcode,
    isEmail: isEmail
};


