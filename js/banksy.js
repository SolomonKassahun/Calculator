var array = new Array();
log.console("which types of banking you want");
log.console("1. deposit");
log.console("2. with draw");
log.console("3. transfer");
log.console("4. balance");
var service = prompt("enter which seriice you want frim the above");
if ( service == 1){
    function depositi(money){
        array.push(money);
        console.log("you save " + array.push(money) + " amount of money")
        var total = 0;
        for (var i = 0; i < array.length; i++){
              total += array[i]
        }
     }
} else if ( service ==2 ){
    function withDraw(money){
        array.pop(money);
        console.log("you with draw " + array.pop(money) + " amount of money")
    
    }
} else if( service == 3){
    function balance(){
        var balance;
        for (var i = 0; i < array.length; i++){
            total += array[i]
      }
         balance = total;
     }
} else if ( service ==4){
    

function transfer(){

}
}

