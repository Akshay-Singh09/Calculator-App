var exp="", flag="+";
var res, num=0, len=0,x;
document.getElementById("one").onclick = function() {
    x=document.getElementById("one").value;
    operand(x);
}

document.getElementById("two").onclick = function() {
    x=document.getElementById("two").value;
    operand(x);
}

document.getElementById("three").onclick = function() {
    x=document.getElementById("three").value;
    operand(x);
}

document.getElementById("four").onclick = function() {
    x=document.getElementById("four").value;
    operand(x);
}

document.getElementById("five").onclick = function() {
    x=document.getElementById("five").value;
    operand(x);
}

document.getElementById("six").onclick = function() {
    x=document.getElementById("six").value;
    operand(x);
}

document.getElementById("seven").onclick = function() {
    x=document.getElementById("seven").value;
    operand(x);
}

document.getElementById("eight").onclick = function() {
    x=document.getElementById("eight").value;
    operand(x);
}

document.getElementById("nine").onclick = function() {
    x=document.getElementById("nine").value;
    operand(x);
}

document.getElementById("zero").onclick = function() {
    x=document.getElementById("zero").value;
    operand(x);
}

document.getElementById("sign").onclick = function() {
    if(exp.slice(exp.length-1)!="=") {
        if(flag=="+") {
            if(Number.isInteger(parseInt(exp.slice(exp.length-1)))) {
            operation("x");
            }
            flag="-";
            exp+="("+flag;
        }
        else if(flag=="-") {
            flag="+";
            if(exp.length>2) {
                exp=exp.slice(0,exp.length-2);
            }
            else {
                exp="";
            }
        }
        document.getElementById("expression").innerHTML = exp;
    }
}

document.getElementById("dec").onclick = function() {
    if(exp.slice(exp.length-1)!="."&&exp.slice(exp.length-1)!="=") {
        if(exp=="") {
            exp+="0."
        }
        else {
            exp+=".";
        }
        document.getElementById("expression").innerHTML = exp;
    }
}

document.getElementById("add").onclick = function() {
    x=document.getElementById("add").value;
    operation(x);
}

document.getElementById("sub").onclick = function() {
    x=document.getElementById("sub").value;
    operation(x);
}

document.getElementById("mul").onclick = function() {
    x=document.getElementById("mul").value;
    operation(x);
}

document.getElementById("div").onclick = function() {
    x=document.getElementById("div").value;
    operation(x);
}

document.getElementById("clr").onclick = function() {
    reset();
}

document.getElementById("del").onclick = function() {
    if(!operator()) {
        if(exp.slice(exp.length-1,exp.length)=="=") {
            reset();
        }
        else {
            while(Number.isInteger(parseInt(exp.slice(exp.length-1)))) {
                exp=exp.slice(0,exp.length-1);
            }
        }
    }
    if(flag=="-") {
        flag="+";
        exp=exp.slice(0,exp.length-2);
    }
    document.getElementById("expression").innerHTML = exp;
}

document.getElementById("res").onclick = function() {
    if(exp!=""&&!operator()&&exp.slice(exp.length-1)!="=") {
        if(flag=="-") {
            flag="+";
            exp+=")";
            len+=1;
        }
        exp+="=";
        num=parseFloat(exp.slice(len));
        calc();
        document.getElementById("expression").innerHTML = exp;
        document.getElementById("res_out").innerHTML = " Ans:    " + res;
    }
}

function calc() {
    if(num<0) {
        len-=1;
    }
    var sign=exp.slice(len-1,len);
    switch(sign) {
        case "+" : res+=num;
                break;
        case "-" : res-=num;
                break;
        case "x" : res*=num;
                break;
        case "/" : res/=num;
                break;
    }
    document.getElementById("res_out").innerHTML = res;
}

function operator() {
    if (exp.slice(exp.length-1)=="+"||exp.slice(exp.length-1)=="-"||exp.slice(exp.length-1)=="x"||exp.slice(exp.length-1)=="/") {
        return true;
    }
    else {
        return false;
    }
}

function operation(val) {
    if(exp!="") {
        if(operator()&&flag!="-") {
            exp=exp.slice(0,exp.length-1)+val;
        }
        else {
            if(exp.slice(exp.length-1)=="=") {
                exp=""+res;
                res=undefined;
                len=0;
                document.getElementById("res_out").innerHTML="";
            }
            if(Number.isInteger(parseInt(exp.slice(exp.length-1)))) {
                if(flag=="-") {
                    len+=1;
                }
                num=parseFloat(exp.slice(len));
                if(flag=="-") {
                    exp+=")";
                    flag="+";
                }
                if(res==undefined) {
                    res=num;
                }
                else {
                    calc();
                }
                exp+=val;
                len=exp.length;
            }
        }
        document.getElementById("expression").innerHTML = exp;
    }
}

function reset() {
    exp="";
    res=undefined;
    document.getElementById("expression").innerHTML = exp;
    document.getElementById("res_out").innerHTML = "";
    len=0;
    if(flag=="-") {
        flag="+";
    }
}

function operand(num) {
    if(exp.slice(exp.length-1)=="=") {
        reset();
    }
    exp+=num;
    document.getElementById("expression").innerHTML = exp;
}