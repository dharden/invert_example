function hex2rgb(color) {
  var r,g,b;
  if ( color.charAt(0) === '#' ) {
    color = color.substr(1);
  }
  if ( color.length === 3 ) {
    color = color.substr(0,1) + color.substr(0,1) + color.substr(1,2) + color.substr(1,2) + color.substr(2,3) + color.substr(2,3);
  }
  r = color.charAt(0) + '' + color.charAt(1);
  g = color.charAt(2) + '' + color.charAt(3);
  b = color.charAt(4) + '' + color.charAt(5);
  r = parseInt( r,16 );
  g = parseInt( g,16 );
  b = parseInt( b ,16);
  return [r, g, b];
}

function rgb2hex(r, g, b) {
  if (r > 255 || g > 255 || b > 255) {
    throw "Invalid color component";
  }
  return ((r << 16) | (g << 8) | b).toString(16);
}

function invertColor(hexTripletColor) {
    var color = hexTripletColor;
    color = parseInt(color, 16);          // convert to integer
    color = 0xFFFFFF ^ color;             // invert three bytes
    color = color.toString(16);           // convert to hex
    color = ("000000" + color).slice(-6); // pad with leading zeros
    return color;
}

window.colorUtils = {
  hex2rgb: hex2rgb,
  rgb2hex: rgb2hex,
  invertColor: invertColor
};

