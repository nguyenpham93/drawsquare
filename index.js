function drawSquare(m){
    for(var i = 0; i < m;i++){
        let temp = "";
        if(i == 0 || i == (m-1)){
            for(var j = 0; j < m ; j++){
                temp += "* ";
            }
            console.log(temp);
        }else{
            for(var k = 0;k < m; k++){
                if(k == 0 || k == (m-1)){
                    temp += "* ";
                }else{  
                    temp += "  ";
                }
            }
            console.log(temp);
        }
    }
}
drawSquare(4);