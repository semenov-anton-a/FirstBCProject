/*** *********
 *  NAVIGATION */
const navigation = {
    state : false,
    navi: document.querySelector("nav#navi"),
    btn : document.querySelectorAll("nav#navi i"),
    closeMenu : function( ) {
        this.navi.setAttribute('data-active', false);
        this.state = false;
    },
    click : function(){
        let curretState = Boolean(this.navi.getAttribute('data-active'));
        this.state = ( curretState != this.state );
        this.navi.setAttribute('data-active', this.state);
    },
    init : function(){
        this.btn[0].addEventListener("click", ()=>{this.click()});
        this.btn[1].addEventListener("click", ()=>{this.click()});
        window.addEventListener('resize', function(){
            if( window.screen.width >= 767 ){ navigation.closeMenu(); }
        });
    },
}//Obj navigation END
/*
 *  NAVIGATION END
 *****************/
/*** *********
 *  SLIDER */
// const slider = {
//     elem : document.querySelector("div#slider > div"),
//     path : './access/img/',
//     curretIndex : 0,
//     imgs : [
//         'kebab.jpg',
//         'r.jpg',
//         'r2.jpg',
//         'r3.jpg',
//     ],
//     counter : function(){
//         /**
//          * @return Array [ curretIndex , lastIndex ]
//          */
//         let imgs = this.imgs.length - 1;
//         if( this.curretIndex >= this.imgs.length -1 ){
//             this.curretIndex = this.curretIndex - this.imgs.length + 1
//             return [ 0, this.imgs.length - 1 ];
//         }
//         return [ this.curretIndex = this.curretIndex + 1, this.curretIndex-1 ];
//     },
//     init : function(){
//         let path;
//         setInterval(() => {
//             path = this.path + this.imgs[ this.counter()[0] ];
//             this.elem.style.backgroundImage = 'url(' + path + ')';
//         }, 5000);
//     },
// }
/*
 *  SLIDER END 
** **********/
/** INITs */
navigation.init();
slider.init();