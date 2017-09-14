function convert(file, base_pixel_size) {

    var em_size = 1.5*base_pixel_size;
    var count = file.match(/\d+px/g);

    if (count != null) {
        var em_dict = {};
        count.map((item) => {
            em_dict[item] = Math.round(parseFloat(parseInt(item.replace('px', ''))/em_size)*100)/100;
        });

        count.map((item) => {
            var em_str = em_dict[item]+"em";
            file = file.replace(item, em_str);
        });

        document.getElementById('input').innerHTML = file;
    } else {
        document.getElementById('input').innerHTML = file
    }
}
