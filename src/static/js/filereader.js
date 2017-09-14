var openFile = function(event) {
    var input = event.target;

    var reader = new FileReader();
    reader.onload = function(){
      var data = reader.result;
      convert(data, 16, 2);
    };
    reader.readAsBinaryString(input.files[0]);
};
