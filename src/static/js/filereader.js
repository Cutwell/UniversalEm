var openFile = function(event) {
    var input = event.target;

    var reader = new FileReader();
    reader.onload = function(){
      var data = reader.result;

      // run convert function
      var base_pixel_size = document.getElementById('base_pixel_size').value;
      convert(data, base_pixel_size);
    };
    reader.readAsBinaryString(input.files[0]);
};
