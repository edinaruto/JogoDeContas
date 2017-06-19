d = document;
function id(i){return d.getElementById(i);}

function aviso(jnl, txt, l)
{
	jnl = "#"+jnl;
	if(!l){l = 400;}
	$(function() {
		$(jnl).dialog({
			width: l,
			modal: true,
			text: $(jnl).html(txt)		
		});
	});
}

function geraNumAleatorio(n)
{
	n = n.toString();
	if(n.match(/[0-9]/gi) != null)
	{
		return (Math.floor(Math.random() * n)+1);
	}else{
		//codigo antigo
		//alert("/!\\Ocorreu um erro!\n\n A variavel informada não é um numero.\n\nvariavel: "+n);
		
		
		
	}
}

function geraConta()
{
	
	/*inicio do codigo que Pega os sinais selecionados pelo usuario */
	var n = 0;
	var sinais = [];
	sinaisObj = document.getElementsByName("contasTipo");	
	for(x=0; x<sinaisObj.length; x++)
	{
		if(sinaisObj[x].checked == true)
		{
			sinais[n] = sinaisObj[x].getAttribute("valor");
			n ++;
		}
	}
	if(n == 0)
	{
		alert("Ops! Ocorreu um erro.\nVocê deve selecionar pelo menos um sinal matematico.\n selecione um sinal e tente novamente.");
	}else{
		n = 0; // reseta a variavel;
		/*fim do codigo que Pega os sinais selecionados pelo usuario */
		
		/*gera uma conta*/
		numMax = id("contasNumeroMaximo").value;
		numQt = id("contasNumeroQt").value;
		
		if(numQt>0){
			if(numMax>0){
				//gera os numeros aleatorias para a conta
				nums = [];	
				for(x=0; x<numQt; x++)
				{
					nums[x] = geraNumAleatorio(numMax);
				}
		
			//gera a conta
			var conta = "";
			
			numQt = eval((numQt*2)-1);
		
			nn = 0;
			y = 0;
			z = 0;
		
			for(x=0; x<numQt; x++)
			{
				if(nn == 0)
				{
					conta += nums[y];
					nn = 1;
					y++;
				}else{
					conta += sinais[geraNumAleatorio(sinais.length)-1];
					nn = 0;
					z++;
				}
			}
		
			//alert(conta+"= ?");
			responde(conta);
		
			conta = null;
			}else{
				alert("Ops! Ocorreu um erro!\n O numero maximo deve ser maior que 0(zero). você colocou: "+numMax+"\n Corrija o numero e tente novamente.");
			}
		}else{
			alert("Ops! Ocorreu um erro!\n A quantidade de numeros deve ser maior que 0(zero). você colocou: "+numQt+"\n Corrija a quantidade de numeros e tente novamente.");	
		}
	}
}

function responde(c)
{
	var conta = c;
	var resposta = eval(c);
	var respostaUsuario = prompt("Qual a Resposta para a conta abaixo?\n" + conta + "\n\n\nAperte CANCELAR para desistir", "");
	
	if(respostaUsuario != null)
	{
		if(respostaUsuario.match(/[0-9]/) == null)
		{
			//alert("Ops! Ocorreu um erro!\n\nApenas numeros são aceitos. a resposta que você informou não é valida. Tente novamente.");
			aviso("aviso", "Ops! Ocorreu um erro!<br><br><small>Apenas numeros são aceitos. a resposta que você informou não é valida. Tente novamente.</small>", 450);
		}else
		if( respostaUsuario == resposta)
		{
			if(resposta == 42) //inicio do easteregg
			{
				d.body.style.background = "url('http://images.lainformacion.com/cms/el-telescopio-hubble-encuentra-siete-galaxias-de-la-infancia-del-universo/2012_12_13_xihWioa3YGy5WjvUuxBgH5.jpg')";
				d.body.style.color = "white";
				alert("Parabéns! você acertou! :D\n\n A resposta para: " + conta + " é: " + resposta + ". \n\nVocê sabia que essa é a resposta para o universo?");
			 //fim do easteregg	
			}else{
				alert("Parabéns! você acertou! :D\n\n A resposta para: " + conta + " é: " + resposta + ".");
			}
		}else{
			if(resposta == 42) //inicio do easteregg
			{
				d.body.style.background = "url('http://images.lainformacion.com/cms/el-telescopio-hubble-encuentra-siete-galaxias-de-la-infancia-del-universo/2012_12_13_xihWioa3YGy5WjvUuxBgH5.jpg')";
				d.body.style.color = "white";
				alert("Ops, Infelizmente você  errou. :(\n\n A resposta para: " + conta + " não é " + respostaUsuario + ", a resposta correta é: " + resposta + ".\n\nVocê sabia que essa é a resposta para o universo?")
			 //fim do easteregg
			}else{
				alert("Ops, Infelizmente você  errou. :(\n\n A resposta para: " + conta + " não é " + respostaUsuario + ", a resposta correta é: " + resposta + ".")
			}
		}
	}	
}