var jimp = require('jimp');
// var frog1 = '';
// var frog2 = './assets/frog2.jpg';

exports.run = function(client, message, args) {


  var messageImg = jimp.read(message.attachments.first().proxyURL, function(err, image1) {
    image1.resize(360, jimp.AUTO) // resize
          .write('imgtest.jpg');

    var images = ['./assets/frog1.jpg', './assets/frog2.jpg', 'imgtest.jpg'];

    var jimps = [];

    for (var i = 0; i < images.length; i++) {
      jimps.push(jimp.read(images[i]));
    }
    console.log(jimps);

    Promise.all(jimps).then(function(data) {
      return Promise.all(jimps);
    }).then(function(data) {
      var height = data[2].bitmap.height;
      console.log(height);
      var blank = new jimp(360, height + 480 + 474, function(err, blank) {
        blank.composite(data[0], 0, 0);
        blank.composite(data[2], 0, 480);
        blank.composite(data[1], 0, 480 + height);
        blank.write('blank.jpg');
        message.channel.send({
          files: [{
            attachment: 'blank.jpg',
            name: 'blank.jpg'
          }]
        });
        // this image is 256 x 256, every pixel is set to 0x00000000
      });
    });
  });
};

exports.help = {
  name: 'fhug',
  description: 'Puck approves'
};
