/*** *********
 *  NAVIGATION */
const navigation = {
    state : false,
    navi: document.querySelector("nav#navi"),
    btn : document.querySelectorAll("nav#navi i"),
    click : function(){
        let curretState = Boolean(this.navi.getAttribute('data-active'));
        this.state = ( curretState != this.state );
        this.navi.setAttribute('data-active', this.state);
    },
    init : function(){
        this.btn[0].addEventListener("click", ()=>{this.click()});
        this.btn[1].addEventListener("click", ()=>{this.click()});
        return false;
    },
}
navigation.init();
/*
 *  NAVIGATION END
 *****************/
