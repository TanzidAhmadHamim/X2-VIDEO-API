exports.name = '/videosex';
exports.index = async (req, res, next) => {
    const url = [
"https://i.imgur.com/WHuWqkn.mp4",
"https://i.imgur.com/xSm0Zd4.mp4",
"https://i.imgur.com/sb7jUeA.mp4",
"https://i.imgur.com/fYa6ObQ.mp4",
"https://i.imgur.com/ME6kPAR.mp4",
"https://i.imgur.com/FbPTvNO.mp4",
"https://i.imgur.com/dUQP0jS.mp4",
"https://i.imgur.com/cxPMJ0s.mp4",
"https://i.imgur.com/hB7EUWd.mp4",
"https://i.imgur.com/fTrxYYu.mp4",
"https://i.imgur.com/yU7srOD.mp4",
"https://i.imgur.com/HtA95oO.mp4",
"https://i.imgur.com/RDY7yQC.mp4",
"https://i.imgur.com/LZ5Nu8b.mp4",
"https://i.imgur.com/U3y67Dj.mp4",
"https://i.imgur.com/Un7Af9t.mp4",
"https://i.imgur.com/lvLW12l.mp4",
"https://i.imgur.com/H5jpSAO.mp4",
"https://i.imgur.com/j2YT5Jn.mp4",
"https://i.imgur.com/gi4Lmb4.mp4",
"https://i.imgur.com/0dc1sgt.mp4",
"https://i.imgur.com/lyBMJ1O.mp4",
"https://i.imgur.com/1nl7tFO.mp4",
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
