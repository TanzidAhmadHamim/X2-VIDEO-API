exports.name = '/lovestory';
exports.index = async (req, res, next) => {
    const url = [
"https://drive.google.com/uc?id=1Z-6qll7ACq8Ka1pKpnC3guGcXU0gNvoL", "https://drive.google.com/uc?id=1YHm_oC7xItLokbt_MCWu-VdMGavvx-G4", "https://drive.google.com/uc?id=1YvDanPpMZKK4s547h9Bsf0uL719AvVEG", "https://drive.google.com/uc?id=1YemK-RQH3gUX_I9ThgNJLC89yPF-VtEY", "https://drive.google.com/uc?id=1YN25UGQQCpZvN29Y5a84ZCYlL-rc_JL_", "https://drive.google.com/uc?id=1YXbox7CyKc6Gu-56WAtAPlxSTs51Yo9n", "https://drive.google.com/uc?id=1YNVe1cEM0JM3lj7sU49tuJn4-8ASYVd8", "https://drive.google.com/uc?id=1ZDjeuPfIyUkovgmJCRsE7vE67aOe0Sp2", "https://drive.google.com/uc?id=1YcJciCtidcUxRGihUyx2uDgDg3cBYUE5", "https://drive.google.com/uc?id=1ZIE6xPwXg6_oxG0K7xCWKS04MNyag3QL", "https://drive.google.com/uc?id=1ZF9cOD_fj26rpWDf6WOjUQNz8QuRJhkv", "https://drive.google.com/uc?id=1ZAXQwA5BsnN555FrWii2bb-kdLaoMxLP", "https://drive.google.com/uc?id=1YvWRk-wQ_I8kuJzOuw2Mx7Q-Rrgbw6CT", "https://drive.google.com/uc?id=1Z8vKgEBUkKbwgMPvv_6K_lvVsrBca_X8", "https://drive.google.com/uc?id=1ZG-BJq7pP4oh93U6tHIKuYvZ8XiidlCV"
  ];

      const randomIndex = Math.floor(Math.random() * url.length);
      const randomUrl = url[randomIndex];

      const trai = {
          "data": randomUrl,
          "author": "X2",
          "success": "true",
      };

      const rdimg = JSON.stringify(trai);

      const i = ['\\/v\\/', '\\/', 'X2 IS HERE'];
      const t = ['/v/', '/', 'X2 IS HERE'];

      const j = rdimg.replace(new RegExp(i.join('|'), 'g'), (m) => t[i.indexOf(m)]);

      console.log(j); // Log the modified JSON
    res.json({
      resultX2: trai,
    });

      // If you want to send the modified JSON as a response, you can do something like:
      // res.json(JSON.parse(j));
  };
