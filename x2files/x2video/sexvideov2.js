exports.name = '/sexv2';
exports.index = async (req, res, next) => {
    const url = [
"https://drive.google.com/uc?id=1soKOBJwaXKkYTEuKuVPuYNd-oWHCqDZ5",
"https://drive.google.com/uc?id=1T_-cRx1nzhpy_kDxGX3nDgHxMWi3o_Li",
"https://drive.google.com/uc?id=1xsHGuPSNnspZh4r7I4fP9k2virBzIlWS",
"https://drive.google.com/uc?id=1yc3dUn-O9cpB2pQ7twpE-DVXdenB6sWE",
"https://drive.google.com/uc?id=15wU4zOeMa7kNNDdo69zuheLoMq3Ibu6R",
"https://drive.google.com/uc?id=1OgWnOw1KdUHcl9ak-cNF7yV8Wmz0dib6",
"https://drive.google.com/uc?id=1nMWHBISSslC5Zr7e811lWvrQRJzJ0vEz",
"https://drive.google.com/uc?id=1RfkmSuT5hcCOSXH5QAU3svFjnULcI71w",
"https://drive.google.com/uc?id=19-K3cypZWHoUpO3k6wMvKB-8NkDfwMN7",
"https://drive.google.com/uc?id=1U5REZDU6F5W1xlzyBvdrN3OxptYYSKgy",
"https://drive.google.com/uc?id=1rOJBhupH3jWLECaPdg__TkQf21eQVvhi",
"https://drive.google.com/uc?id=1XzkmuWNfo2txjsiqIhrK16slABDB7heC",
"https://drive.google.com/uc?id=14epu8Di7Ny-VL_c0g9wyuf1_mO-3gIg8",
"https://drive.google.com/uc?id=1mAu7srwnYIdhzR2ZdWabbL_YhOLBMTzd",
"https://drive.google.com/uc?id=1jMqOP-KgISoDXb_LkVx3OHI2GUA7QQsS",
"https://drive.google.com/uc?id=1-rGB1dS_lOqksgeB8aIPsJQ28Lyepg7e",
"https://drive.google.com/uc?id=1aWyNjXbFK5lg9iwv0OqAFkzdmK0345Bt",
"https://drive.google.com/uc?id=1_iBPg96Fxv4USkqAyQwtq3whXKIMmIoL",
"https://drive.google.com/uc?id=1zv6wB1QxWsry-JIqsEa9xhn2CwvR30qH",
"https://drive.google.com/uc?id=1DyrNtJ5kbwJyBCgWNLo96gqz-f6C4kpp",
"https://drive.google.com/uc?id=1m2WBpPQddRl-PqjDspNz4xmG_Tcx2kQt",
"https://drive.google.com/uc?id=18b3Z-YqFBcd4IEfEulaNJM1cP64fT0HL",
"https://drive.google.com/uc?id=15EBvLFTGyMyk9Kos0EVh9zH2WWvhOolr",
"https://drive.google.com/uc?id=1Wb9nkMgAUKgImVGrjohXuS3N4rKBodDM",
"https://drive.google.com/uc?id=15mdb5UlxDK-WVte8gML-Rj9dvQxFv22k",
"https://drive.google.com/uc?id=1HgOl9iRX99XIzNMdnYeRSI7zkZsAkCE8",
"https://drive.google.com/uc?id=1LGo4ysWIXjlklRUoc0xDW5t1qYyg7CX2",
"https://drive.google.com/uc?id=1Qa63DhD83NZPony9qODhYyMI2cGLe5Xw",
"https://drive.google.com/uc?id=13I7KRVc59_b5kjnRW4yhRbNZHIYrwdI8",
"https://drive.google.com/uc?id=1K1zdHxfEY3ksnxiQzJtT7jf4YZnx9qoT",
"https://drive.google.com/uc?id=1anmopLwrJM1Lo-oDnlDT_XUV54ZGLECN",
"https://drive.google.com/uc?id=1oOz-ZrzCYgRoPi75LdHvGf-tLGiLJU7z",
"https://drive.google.com/uc?id=1PnuO6EvU60pcf0N2BLHLEHzdtNt9CPJS",
"https://drive.google.com/uc?id=1JSaXR7DKFTsWeqPJBt3m630WVNani86S",
"https://drive.google.com/uc?id=1aKR8hWFN_Mn5_JG5Jnm0Id84QE9EB8__",
"https://drive.google.com/uc?id=1kHo7S9bT9D4qoaaCeVBZNG6lgUomBIuC",
"https://drive.google.com/uc?id=14VOzTSCvmDe6nlNSUeF1PPfNBiMlpM6F",
"https://drive.google.com/uc?id=1vuanHXF8R8H1Qv4aONFA38xArZMMimQ5",
"https://drive.google.com/uc?id=1xnsF_ZRp4hdM4GEHVHyCNGYk4s5Uf3S6",
"https://drive.google.com/uc?id=1ndWfDri12YtdTCbAkCMCdHeAhKNXgOBu",
"https://drive.google.com/uc?id=1ljkZOVamznTzB_SsstujEwTZ7-be7N4Q"
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
