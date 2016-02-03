document.getElementById('files').addEventListener('change', handleFileSelect, false);


/*
	  	var //hh=CryptoJS.SHA256(data).toString();
			h=SHA256in32(data);
			//base16to32of64(CryptoJS.SHA256(data).toString());// 7/8 bases : hh in  16 -> h in 32
		 
			 window.hname+=h;
			// document.getElementById('ioput').value= h;//h;//str.toUpperCase();
	 

	
	 }*/
//var reader;
//function abortRead() {    reader.abort();}// <button onclick="abortRead();">Cancel</button>	
/* <div id="progress_bar">	<div class="percent">0%</div></div>	
 function updateProgress(evt) {
    
    // evt is an ProgressEvent.
    if (evt.lengthComputable) {
      var percentLoaded = Math.round((evt.loaded / evt.total) * 100);
      // Increase the progress bar length.
      if (percentLoaded < 100) {
        progress.style.width = percentLoaded + '%';
        progress.textContent = percentLoaded + '%';
      } //else if (percentLoaded == 100){}
		  
    }

} */
function display_c(){ var refresh=300; // Refresh rate in milli seconds
	mytime=setTimeout('display_ct()',refresh);} // when .. <body onload="display_ct()">

function display_ct() {
	//var strcount;
	var x = new Date();
	document.getElementById('wizardElement').innerHTML = x.getUTCSeconds()	;
	tt=display_c();}
	
function base16to32of64(hh){
	return 	 parseInt(hh.slice(0,8),16).toString(32).toUpperCase()+
			 parseInt(hh.slice(8,16),16).toString(32).toUpperCase()+
 			 parseInt(hh.slice(16,24),16).toString(32).toUpperCase()+ 			 
			 parseInt(hh.slice(24,32),16).toString(32).toUpperCase()+
			 parseInt(hh.slice(32,40),16).toString(32).toUpperCase()+
			 parseInt(hh.slice(40,48),16).toString(32).toUpperCase()+
			 parseInt(hh.slice(48,56),16).toString(32).toUpperCase()+			 			 
 			 parseInt(hh.slice(56,64),16).toString(32).toUpperCase() ;}	
function SHA256in32(data){ return	base16to32of64(CryptoJS.SHA256(data).toString());}
function ab2str(buf){ v= new DataView(buf);
	return  v.getUint8(buf) ;}
// {  return String.fromCharCode.apply(null, new Uint16Array(buf));}//https://developers.google.com/web/updates/2012/06/How-to-convert-ArrayBuffer-to-and-from-String
function arrayBufferToWordArray(ab) {
  var i8a = new Uint8Array(ab);
  var a = [];
  for (var i = 0; i < i8a.length; i += 4) {
    a.push(i8a[i] << 24 | i8a[i + 1] << 16 | i8a[i + 2] << 8 | i8a[i + 3]);
  }
  return CryptoJS.lib.WordArray.create(a, i8a.length);
}
function hashBlob(c){ return SHA256in32(arrayBufferToWordArray(c));	}
function hashText(c){ return SHA256in32(c);	}

///dataview.getUint8(byteOffset)
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/getUint8
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView
function str2ab(str) {
  var buf = new ArrayBuffer(str.length*2); // 2 bytes for each char
  var bufView = new Uint16Array(buf);
  for (var i=0, strLen=str.length; i<strLen; i++) {
    bufView[i] = str.charCodeAt(i);
  }
  return buf;
}

/*
function bin2hex(s) {//https://github.com/kvz/phpjs/blob/master/functions/strings/bin2hex.js
  var l,i,  o = '',    n;
  //s += '';
  for (i = 0, l =s.byteLength; i < l; i++) {
    n = s.charCodeAt(i).toString(16);
    o += n.length < 2 ? '0' + n : n;  }
    //console.log(0);
  return o;
}*/
//function hash(data){document.getElementById('ioput').value= SHA256in32(data);}
function GenrteIiaom(){
	if (!window.GenIiaomStep){
		//window.hname=null;
		
		 prompt( "Step 1 of 3: Click Browse.. to open your image file.","continue?");
		document.getElementById('ioput').value="In 3 steps:\r\n\
1. Click Browse to open your image file and \r\n\
2. Archive the image file (zip or 7z) with your password and open the encryped file \r\n\
3. Save the encrypted file - the name of this file is your iiaom."; 
		window.GenIiaomStep=1;
		document.getElementById("Giiaom").value = "1";
	} else{
		//document.getElementById('ioput').value= window.hname;				
		document.getElementById("Giiaom").value = "0";						
	  	  }
}
			 
//function EditContent(data){   document.getElementById('ioput').value=data;}

function onc(i) {var t = prompt( "Press ok to replace the value: " + i.textContent  , i.textContent);//("+i.parentNode.rowIndex +","+ i.cellIndex +")
 if (t != null)  i.textContent=t;}
 
function export2csv() {$('#table-container').table2CSV();}//	var t = prompt( "Press ok to" , "123i.textContent");}


function init_table(data) {// Thanks to Derek Eder under mit: Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	//if (data==null) return;
	// data=ab2str(data);
  var options={
   //     csv_path: 'fatty_acid_profiles.csv',
        element: 'table-container', 
    //    allow_download: true,
        csv_options: {separator: ',', delimiter: '"'},
        datatables_options: {"paging": true}//false}
      };
  options = options || {};
 // var csv_path = options.csv_path || "";
  var el = options.element || "table-container";
  var allow_download = options.allow_download || false;
  var csv_options = options.csv_options || {};
  var datatables_options = options.datatables_options || {};
  //var bsave='<button onclick="saveioput this( document.getElementById('ioput').value  );"' ;
  //+'<button onclick="saveioput();">Save</button>'
//  '<button onclick="export2csv();">Update</button>'+
  $("#" + el).html('<button onclick="export2csv();">Update</button>'+'<button onclick="saveioput();">Save</button>'+"<table class='table table-striped table-condensed' id='my-table'></table>");

  //$.when($.get(csv_path)).then(function(data){

      data = data.replace(/[\r|\r\n]/g, "\n");
      
      var csv_data = $.csv.toArrays(data, csv_options);
      
      var   table_head=  "<thead><tr>";

      for (head_id = 0; head_id < csv_data[0].length; head_id++) { 
		table_head += "<th>" + csv_data[0][head_id] + "</th>";
 
      }

      table_head += "</tr></thead>";
     
      $('#my-table').append(table_head);
     
      $('#my-table').append("<tbody></tbody>");

      for (row_id = 1; row_id < csv_data.length; row_id++) { 
        var row_html = "<tr>";

          for (col_id = 0; col_id < csv_data[row_id].length; col_id++) { 
            row_html += "<td  onclick='onc(this)'>" + csv_data[row_id][col_id] + "</td>";
          }
          
        row_html += "</tr>";

        $('#my-table tbody').append(row_html);
      }

      $("#my-table").DataTable(datatables_options);// sorting it all

	  //document.getElementById('ioput').value=null;
     // if (allow_download) $("#" + el).append("<p><a class='btn btn-info' href='" + csv_path + "'><i class='glyphicon glyphicon-download'></i> Download as CSV</a></p>");
    //    });
}

function clearvar(){ // why it is not worling?
//	  window.content=null;
	 // window.Scontent="";
	 
//    window.hname=null;
    document.getElementById('ioput').value= "";//null;   // document.getElementById('harea').value= null;
	init_table(null);}
	
//---------------------------OpenFile http://www.html5rocks.com/en/tutorials/file/dndfiles/

function errorHandler(evt) {
    switch(evt.target.error.code) {
      case evt.target.error.NOT_FOUND_ERR:
        alert('File Not Found!');
        break;
      case evt.target.error.NOT_READABLE_ERR:
        alert('File is not readable');
        break;
      case evt.target.error.ABORT_ERR:
        break; // noop
      default:
        alert('An error occurred reading this file.');
    };
 }



function handleFileSelect(evt) {
    // Reset progress indicator on new file selection.
    
    //var progress = document.querySelector('.percent');
    //progress.style.width = '0%';
    //progress.textContent = '0%';
 
    reader = new FileReader();
    reader.onerror = errorHandler;
    //reader.onprogress = updateProgress;
    reader.onabort = function(e) {
      alert('File read cancelled');
    };
    reader.onloadstart = function(e) {  //    document.getElementById('progress_bar').className = 'loading'; 
		 };
    reader.onload  = function(e) {
//    window.content = this.result;
    var c  = this.result,
	fileName = evt.target.files[0].name,
	i  = fileName.lastIndexOf('.'),
	ext = fileName.substring(i+1);
    if(window.GenIiaomStep)
      {//window.GenIiaomStep++;
	   if(++window.GenIiaomStep==2){
		   //document.getElementById('ioput').value= "Step 2 of 3: Click Browse.. to open the encrypt file." ;
		   document.getElementById('ioput').value =hashBlob(c);
		   document.getElementById("Giiaom").value = "2";
		   prompt( "Step 2 of 3: Encrypt the image file and then open the encrypted file.","Continu?");
		   }
	  else{ //var h1=document.getElementById('ioput').value+hashBlob(c);
		  //document.getElementById('ioput').value= h1;
		  document.getElementById('ioput').value= hashText(document.getElementById('ioput').value+hashBlob(c));
		  prompt("Last step of 3: save this file. its name is your iiaom" ,"Continu?");
		  //document.getElementById('ioput').value= hashText(h1);
		  
		    
		  	document.getElementById("Giiaom").value = "3";
	//	  	document.getElementById('ioput').value= 	SHA256in32(document.getElementById('ioput').value+bin2hex(c));
		  	
//		  	document.getElementById('ioput').value=hash(document.getElementById('ioput').value);
		  	savefile(document.getElementById('ioput').value +'.iiaom',c);
		    
		  	window.GenIiaomStep=0;
		  	document.getElementById("Giiaom").value="0";
		   }
		   
		   
		   
	//prompt( "please brouse your image file  and then encrypt it" ,0);
	//	prompt( "please browse the encrypter  your image file " );
	//.1 open image fiile
	// 2.open it encrypted ver
//	savefile(SHA256in32(window.hname)+'.type',window.content);// 3.save the iiaom
	//window.GenIiaomStep=0;
	    
	  } 
	 else
      { document.getElementById('ioput').value=c;	
	switch(ext) {
	case 'csv':
		init_table(c) ;break;
        case 'jpg':
        case 'png':
        case 'gif':
            //alert('was jpg png gif');  // There's was a typo in the example where
        break;                         // the alert ended with pdf instead of gif.
        case 'zip':
        case 'rar':
            //alert('was zip rar');
        break;
        case 'pdf':
            //alert('was pdf');
        break;

        default://            alert('who knows');
       }
	 // if('csv' ==  )
	//	init_table(c) ;
      }
//	  (window.content);
	  		// Ensure that the progress bar displays 100% at the end.
//      progress.style.width = '100%';
 //     progress.textContent = '100%';          
   //   setTimeout("document.getElementById('progress_bar').className='';", 2000);
     
    }
    if ( window.GenIiaomStep)//AsText=!ToHash
         {reader.readAsArrayBuffer(evt.target.files[0]);// needed to be save as is : Read in the image file as a binary string.
          //reader.readAsText(evt.target.files[0]);// UTF-8 ? needed for hash manipuations : Read in the image file as a  string.
          
	  }
    else{reader.readAsBinaryString(evt.target.files[0]);}// Read in the image file as a binary string.
//readAsText
    //if ( document.getElementById("AsText").checked){           reader.readAsBinaryString(evt.target.files[0]);// Read in the image file as a binary string.
    //}else{ reader.readAsArrayBuffer(evt.target.files[0]);}// Read in the image file as a binary string.
}


//--------------------------savefile
function saveioput(){savefile('nameit.csv', document.getElementById('ioput').value);}

function savefile(fileName,content){ // saveas http://stackoverflow.com/questions/28263221/save-html-textarea-state
//var ToWrite =window.content ; //document.getElementById('ioput').value;
    //var blobas = new Blob([window.content]);//[ToWrite]);//, {type:'text/plain'});
     var blobas = new Blob([content]);//[ToWrite]);//, {type:'text/plain'});
    var saveas = document.createElement("a");
    saveas.download = fileName;
    saveas.innerHTML = "Download File";
    if (window.webkitURL != null){        // Chrome allows the link to be clicked without actually adding it to the DOM.
        saveas.href = window.webkitURL.createObjectURL(blobas);
    }    else    {        // Firefox requires the link to be added to the DOM before it can be clicked.
        saveas.href = window.URL.createObjectURL(blobas);
        saveas.onclick = destroyClickedElement;
        saveas.style.display = "none";
        document.body.appendChild(saveas);
    }

    saveas.click();
}

function destroyClickedElement(event){    document.body.removeChild(event.target);}
/* var extension = file.substr( (file.lastIndexOf('.') +1) );
    switch(extension) {
        case 'jpg':
        case 'png':
        case 'gif':
            alert('was jpg png gif');  // There's was a typo in the example where
        break;                         // the alert ended with pdf instead of gif.
        case 'zip':
        case 'rar':
            alert('was zip rar');
        break;
        case 'pdf':
            alert('was pdf');
        break;
        default:
            alert('who knows');
    }*/





//	 var buffer = new ArrayBuffer(12);
//var dataView = new DataView(buffer);
//var str =ab2str(data); 
//new Uint8Array(data);
//var str = data.toString();
//String.fromCharCode.apply(null, new Uint16Array(data));


/*
 function (data){
	     if ( window.GenIiaomStep){
			var //hh=CryptoJS.SHA256(data).toString();
			h=SHA256in32(data);
			//base16to32of64(CryptoJS.SHA256(data).toString());// 7/8 bases : hh in  16 -> h in 32
		 
			 window.hname+=h;
			// document.getElementById('ioput').value= h;//h;//str.toUpperCase();
	 }

	
	 }//window.hname+=SHA256in32(data);
	 */	

 //----------------------ViewTable
/* to locate the row on line and colm on skip comma on the ioput
function clicked() {//http://stackoverflow.com/questions/28357314/find-row-and-column-of-clicked-table-cell-in-javascript-without-jquery
    alert("clicked cell at: " + this.cellIndex + ", " + this.parentNode.rowIndex);
}*/
// $(".container-fluid .var_app").html(); // Using the jQuery library 
