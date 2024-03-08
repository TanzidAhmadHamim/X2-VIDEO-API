exports.name = '/anime';
exports.index = async (req, res, next) => {
    const url = [

        "https://i.imgur.com/KEsmg0b.mp4",
        "https://i.imgur.com/JtNsW12.mp4",
        "https://i.imgur.com/M74pm8l.mp4",
        "https://i.imgur.com/mjlhxpg.mp4",
        "https://i.imgur.com/kSEJs6q.mp4",
        "https://i.imgur.com/LE5rSAd.mp4",
        "https://i.imgur.com/H4sgSzB.mp4",
        "https://i.imgur.com/s6cIzAo.mp4",
        "https://i.imgur.com/hJKVtpO.mp4",
        "https://i.imgur.com/CRqLx2d.mp4",
        "https://i.imgur.com/L5OXAqi.mp4",
        "https://i.imgur.com/LE5rSAd.mp4",
        "https://i.imgur.com/H4sgSzB.mp4",
        "https://i.imgur.com/s6cIzAo.mp4",
        "https://i.imgur.com/hJKVtpO.mp4",
        "https://i.imgur.com/VAi8Dme.mp4",
        "https://i.imgur.com/uupuSZm.mp4",
        "https://i.imgur.com/PoNv0VP.mp4",
        "https://i.imgur.com/n0wxAnZ.mp4",
        "https://i.imgur.com/lvh9hrc.mp4",
        "https://i.imgur.com/D6FeFHD.mp4",
        "https://i.imgur.com/zhLqD8p.mp4",
        "https://i.imgur.com/VAi8Dme.mp4",
        "https://i.imgur.com/uupuSZm.mp4",
        "https://i.imgur.com/n0wxAnZ.mp4",


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
