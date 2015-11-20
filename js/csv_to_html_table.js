function init_table(data) {// Thanks to Derek Eder under mit: Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
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

  $("#" + el).html("<table class='table table-striped table-condensed' id='my-table'></table>");

  //$.when($.get(csv_path)).then(function(data){

      data = data.replace(/[\r|\r\n]/g, "\n");
      
      var csv_data = $.csv.toArrays(data, csv_options);

      var table_head = "<thead><tr>";

      for (head_id = 0; head_id < csv_data[0].length; head_id++) { 
        table_head += "<th>" + csv_data[0][head_id] + "</th>";
      }

      table_head += "</tr></thead>";
      $('#my-table').append(table_head);
      $('#my-table').append("<tbody></tbody>");

      for (row_id = 1; row_id < csv_data.length; row_id++) { 
        var row_html = "<tr>";

          for (col_id = 0; col_id < csv_data[row_id].length; col_id++) { 
            row_html += "<td>" + csv_data[row_id][col_id] + "</td>";
          }
          
        row_html += "</tr>";
        $('#my-table tbody').append(row_html);
      }

      $("#my-table").DataTable(datatables_options);
	  document.getElementById('ioput').value="";
     // if (allow_download) $("#" + el).append("<p><a class='btn btn-info' href='" + csv_path + "'><i class='glyphicon glyphicon-download'></i> Download as CSV</a></p>");
    //    });
}
