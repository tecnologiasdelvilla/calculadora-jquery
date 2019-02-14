$(function() {
	var pi=Math.PI, e= Math.E;
	var flag =0,  acc = 0, op="", mem=0;
	var num=$("#n1").val();
	
    $("#n1").on("click", 
      function(){ $("#n1").val("");
	  flag =0;}
    );
	$("#borra").click(
	function () {$("#n1").val("");
	acc=0;}
	);
	$(".op").on("click",
		function (){
			flag =1;
		}
		);
	$("#del").on("click",
	function (){n1=$("#n1").val(); 
		$("#n1").val(n1.substring(0,n1.length-1)); }
	);
    /*----------------------------un operando------------*/
	$("#x2").on("click", 
      function() {
        var num = $("#n1");
        num.val(num.val() * num.val());
      }
    );
	$("#masmenos").on("click", 
      function() {
        var num = $("#n1");
        num.val(-1*num.val());
      }
    );
	$("#raiz").on("click", 
      function() {
        var num = $("#n1");
        num.val(Math.pow( num.val(),0.5) );
      }
    );
	
	$("#inv").on("click", 
      function() {
        var num = $("#n1");
        num.val(1/num.val());
      }
    );
	/*-------memoria----*/
	$("#amemo").on("click", function() { mem = $("#n1").val(); $("#mem").val(mem);});
	$("#dememo").on("click", function() {$("#n1").val(mem); $("#mem").val("");});
	/*-----------constantes---------------------------------*/
	$("#e").on("click", 
	function(){ $("#n1").val(e);}
	);
	$("#pi").on("click", 
	function(){ $("#n1").val(pi);}
	);
	/*----------------trigonometricas--------------------------*/
	$("#sen").on("click", 
      function() {
        var num = $("#n1");
        num.val(Math.sin( num.val()*pi/180));
      }
    );
	$("#cos").on("click", 
      function() {
        var num = $("#n1");
        num.val(Math.cos( num.val()*pi/180) );
      }
    );
	$("#tan").on("click", 
      function() {
        var num = $("#n1");
        num.val(Math.tan( num.val()*pi/180) );
      }
    );
	$("#asen").on("click", 
      function() {
        var num = $("#n1");
        num.val(180*Math.asin( num.val())/pi);
      }
    );
	$("#acos").on("click", 
      function() {
        var num = $("#n1");
        num.val(180*Math.acos( num.val())/pi);
      }
    );
	$("#atan").on("click", 
      function() {
        var num = $("#n1");
        num.val(180*Math.atan(num.val())/pi);
      }
    );
	/*---------------------------Numeros--------------------*/
	$(".numeros").on("click", 
	function (){
		if (flag ===0) {
		var n = $(this).val();
		var num =$("#n1").val();
		$("#n1").val(num + n);}
		if (flag===1){$("#n1").val($(this).val()); flag =0;}
		
		}
	);
	/*--------------------------dos operandos-----------------*/
	$("#mas").on("click", 
		function (){acc= $("#n1").val(); op="+";});
		
	$("#menos").on("click", 
		function (){acc= $("#n1").val(); op="-";});
	$("#div").on("click", 
		function (){acc= $("#n1").val(); op="/";});
		
	$("#por").on("click", 
		function (){acc= $("#n1").val(); op="*";});	
		
	$("#xy").on("click", 
		function (){acc= $("#n1").val(); op="xy";});	
	
	$("#igual").on("click", 
	function (){
		switch(op){
		case ("+"): num =$("#n1").val(); $("#n1").val(acc/1+ num/1);
		break;	
		case("-"): num =$("#n1").val(); $("#n1").val(acc- num);
		break;
		case ("*"): num =$("#n1").val(); $("#n1").val(acc/1* num/1);
		break;	
		case("/"): num =$("#n1").val(); $("#n1").val(acc/ num);
		break;
		case ("xy"): num =$("#n1").val(); $("#n1").val(Math.pow(acc, num));
		break;
		}
	
	});
	/*-------avanzadas------*/
	$("#fact").on("click", function (){
		var num=$("#n1").val(); 
		var n=$("#n1").val();
		for (i=1; i<num; i++){
			n = n*i;
		}
		$("#n1").val(n);
	});
	
  });