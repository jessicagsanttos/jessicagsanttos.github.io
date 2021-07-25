function handleFileSelect() {
	var output = document.getElementById("result");
	arquivos = $("#files").prop("files");
	var nomes = $.map(arquivos, function(val) { return val.name; });
	for(x=0;x<nomes.length;x++){
		var extensao = nomes[x].split('.').pop().toLowerCase();
		var nome = nomes[x].substring(nomes[x].lastIndexOf("/"),nomes[x].length);
		var div = document.createElement("div");
		if(extensao == "doc" || extensao == "docx"){
			icone = "http://jonvilma.com/images/word-14.jpg";
		}else if(extensao == "pdf"){
			icone = "http://iconbug.com/data/5b/507/52ff0e80b07d28b590bbc4b30befde52.png";
		}else{
			icone = "https://orig01.deviantart.net/244d/f/2013/087/8/0/no_icon_by_slamiticon-d5z70lm.png";
		}
		div.innerHTML = "<img src='"+icone+"' height='24' /> "+nome;
		output.insertBefore(div, null);
	}
}

document.getElementById('files').addEventListener('change', handleFileSelect, false);