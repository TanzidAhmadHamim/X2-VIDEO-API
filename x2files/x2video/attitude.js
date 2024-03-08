exports.name = '/attitude';
exports.index = async (req, res, next) => {
    const url = [
     "https://drive.google.com/uc?id=1JXqhDn7dpdv9946LqC5pbRqjYSthoAsl",
     "https://drive.google.com/uc?id=1JzbWziwK75R8DcIIWNpPlsLJmGn5WqEP",
     "https://drive.google.com/uc?id=1JYD6e1vkxVLqgPZKOSpkxXXUOpw_hbNg",
     "https://drive.google.com/uc?id=1JqNF2zPuuq9nSyuf2ntdSM9XznekjfiB",
     "https://drive.google.com/uc?id=1K-0JsyNorU-rCimpHytsBGIuR-2_o8Qt",
     "https://drive.google.com/uc?id=1JqNF2zPuuq9nSyuf2ntdSM9XznekjfiB",
     "https://drive.google.com/uc?id=1JzCkq_WrcfiR8c8ZchzI_cIPxJsBKbFl",
     "https://drive.google.com/uc?id=1JBwSwNEhTSH5PKWOfreds1nXWtB3XxZu",
     "https://drive.google.com/uc?id=1JDC_7Neqt2ZnPcZOb30-rbU1TJ52AHsL",
     "https://drive.google.com/uc?id=1JXiBhdHAvuaSJlca2h2SwHW0sasuCAFh"
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
