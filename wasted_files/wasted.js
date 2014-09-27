function calculateWastage() {
    console.log(screen.height + ' ' + screen.width);
    console.log(screen.availHeight + ' ' + screen.availWidth);
    console.log(document.documentElement.clientHeight + ' ' + document.documentElement.clientWidth);
    wastedHeightPer = ((screen.height - screen.availHeight) / screen.height)*100;
    console.log(wastedHeightPer.toFixed(0));
}

calculateWastage();
window.onresize =  calculateWastage;