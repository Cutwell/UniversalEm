#  Convert px values in documents to em equivalents.
#  Use on CSS styling files for multi-device compatibility.

import re

def convert(file, base_pixel_size=16, decimals=2):

    #  1em is 1.5x the base pixel size of the webpage, by default 16
    em_size = 1.5*base_pixel_size

    #  locate all the pixel values in the passed stylesheet
    pattern = re.compile(r"\d+px")
    count = pattern.findall(file)

    em_dict = {}
    for item in count:
        #  create a dictionary which links each pixel size to it's em conversion
        em_dict.update({item:round(float(int(item.replace("px", ""))/em_size, ), decimals)})

    #  iterate over the stylesheet, replacing pixel sizes with em equivalents
    for item in count:
        em_str = "{}em".format(em_dict[item])    #  add "em" to the end of each value
        file = file.replace(item, em_str)    #  replace the pixel size with its em conversion

    #  return the edited filesheet
    return file


if __name__ == "__main__":

    with open("tests/test.css", "r") as file:
        output = convert(file.read())
        print(output)
