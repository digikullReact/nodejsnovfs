//http and https
const http = require("http");
// Server With Simple HTTP

//const requestListener=

// Server Creation code

const arr=[
    {
      "_id": "622f4c5b0cf1d874db0fb6a9",
      "picture": "http://placehold.it/32x32",
      "name": "Elba Yang",
      "gender": "female",
      "company": "COMVEX"
    },
    {
      "_id": "622f4c5b7fa775d3a8c5ab96",
      "picture": "http://placehold.it/32x32",
      "name": "Singleton Bond",
      "gender": "male",
      "company": "ISOLOGIX"
    },
    {
      "_id": "622f4c5b126f3d3d70ec3a10",
      "picture": "http://placehold.it/32x32",
      "name": "Gross Kim",
      "gender": "male",
      "company": "ENTALITY"
    },
    {
      "_id": "622f4c5b9c418949702d2686",
      "picture": "http://placehold.it/32x32",
      "name": "Atkins Martin",
      "gender": "male",
      "company": "ONTAGENE"
    },
    {
      "_id": "622f4c5bd78b72303dab1935",
      "picture": "http://placehold.it/32x32",
      "name": "Moody Fleming",
      "gender": "male",
      "company": "GOKO"
    },
    {
      "_id": "622f4c5b7f6e0c6b25f97b8e",
      "picture": "http://placehold.it/32x32",
      "name": "Kathie Mendez",
      "gender": "female",
      "company": "GENESYNK"
    },
    {
      "_id": "622f4c5b3c0e77f91c069168",
      "picture": "http://placehold.it/32x32",
      "name": "Richards Ball",
      "gender": "male",
      "company": "SILODYNE"
    },
    {
      "_id": "622f4c5b20b8f58db55ade53",
      "picture": "http://placehold.it/32x32",
      "name": "Peterson Sweet",
      "gender": "male",
      "company": "BUNGA"
    },
    {
      "_id": "622f4c5bc7ddbaca25093558",
      "picture": "http://placehold.it/32x32",
      "name": "Ophelia Walter",
      "gender": "female",
      "company": "BITENDREX"
    },
    {
      "_id": "622f4c5bc597d26c4bb4b005",
      "picture": "http://placehold.it/32x32",
      "name": "Reba Gill",
      "gender": "female",
      "company": "BOVIS"
    },
    {
      "_id": "622f4c5be9f6db7e43702bbd",
      "picture": "http://placehold.it/32x32",
      "name": "Cardenas Daugherty",
      "gender": "male",
      "company": "LIQUICOM"
    },
    {
      "_id": "622f4c5b9813424281933c40",
      "picture": "http://placehold.it/32x32",
      "name": "Durham Noel",
      "gender": "male",
      "company": "VELOS"
    },
    {
      "_id": "622f4c5b8ac8ccafba80e763",
      "picture": "http://placehold.it/32x32",
      "name": "Holman Armstrong",
      "gender": "male",
      "company": "ZILLACTIC"
    },
    {
      "_id": "622f4c5b489f4d457ee05e02",
      "picture": "http://placehold.it/32x32",
      "name": "Sharlene Dickerson",
      "gender": "female",
      "company": "INVENTURE"
    },
    {
      "_id": "622f4c5b2a7b50024f221859",
      "picture": "http://placehold.it/32x32",
      "name": "Imelda Wyatt",
      "gender": "female",
      "company": "EGYPTO"
    },
    {
      "_id": "622f4c5b17695ec49bf2b798",
      "picture": "http://placehold.it/32x32",
      "name": "Jeanne Mcgowan",
      "gender": "female",
      "company": "CYCLONICA"
    },
    {
      "_id": "622f4c5b06ed3e5069b29cb2",
      "picture": "http://placehold.it/32x32",
      "name": "Alyssa Sampson",
      "gender": "female",
      "company": "CRUSTATIA"
    },
    {
      "_id": "622f4c5b3cfa3610e88257d8",
      "picture": "http://placehold.it/32x32",
      "name": "Aida Ellis",
      "gender": "female",
      "company": "COMTREK"
    },
    {
      "_id": "622f4c5bb84ac0cef6452e48",
      "picture": "http://placehold.it/32x32",
      "name": "Essie Small",
      "gender": "female",
      "company": "CYTREX"
    },
    {
      "_id": "622f4c5b7e770686bac42780",
      "picture": "http://placehold.it/32x32",
      "name": "Newman Waller",
      "gender": "male",
      "company": "GEOLOGIX"
    },
    {
      "_id": "622f4c5b11ea85f03b129029",
      "picture": "http://placehold.it/32x32",
      "name": "Althea Sharpe",
      "gender": "female",
      "company": "MEDIOT"
    },
    {
      "_id": "622f4c5b5653b64b86bc2314",
      "picture": "http://placehold.it/32x32",
      "name": "Salas Barton",
      "gender": "male",
      "company": "QUILCH"
    },
    {
      "_id": "622f4c5bd8b8c65db832cd2e",
      "picture": "http://placehold.it/32x32",
      "name": "Nelda Odom",
      "gender": "female",
      "company": "AQUASURE"
    },
    {
      "_id": "622f4c5b58401718acaa17e6",
      "picture": "http://placehold.it/32x32",
      "name": "Rebecca Perry",
      "gender": "female",
      "company": "LUXURIA"
    },
    {
      "_id": "622f4c5bb78d339e0b3e7cee",
      "picture": "http://placehold.it/32x32",
      "name": "Warner Rush",
      "gender": "male",
      "company": "PARCOE"
    },
    {
      "_id": "622f4c5b9d3342961f23eecc",
      "picture": "http://placehold.it/32x32",
      "name": "Vincent Benson",
      "gender": "male",
      "company": "SHADEASE"
    },
    {
      "_id": "622f4c5bebd730ddde47ea82",
      "picture": "http://placehold.it/32x32",
      "name": "Addie Kidd",
      "gender": "female",
      "company": "EBIDCO"
    },
    {
      "_id": "622f4c5be5e8dbe5cfccfe15",
      "picture": "http://placehold.it/32x32",
      "name": "Irwin Barry",
      "gender": "male",
      "company": "ADORNICA"
    },
    {
      "_id": "622f4c5bc9ca10050601b873",
      "picture": "http://placehold.it/32x32",
      "name": "Floyd Alston",
      "gender": "male",
      "company": "ZOINAGE"
    },
    {
      "_id": "622f4c5ba91e3033d0b1f6d2",
      "picture": "http://placehold.it/32x32",
      "name": "Latonya Burke",
      "gender": "female",
      "company": "BOLAX"
    },
    {
      "_id": "622f4c5b7bb7c531f07c5f6e",
      "picture": "http://placehold.it/32x32",
      "name": "Young Livingston",
      "gender": "male",
      "company": "ECOLIGHT"
    },
    {
      "_id": "622f4c5b237d94fa03955aa6",
      "picture": "http://placehold.it/32x32",
      "name": "Stein Mcmahon",
      "gender": "male",
      "company": "BARKARAMA"
    },
    {
      "_id": "622f4c5bb1389fa40d60124b",
      "picture": "http://placehold.it/32x32",
      "name": "Kirk Bruce",
      "gender": "male",
      "company": "PATHWAYS"
    },
    {
      "_id": "622f4c5b928f7976ed21021b",
      "picture": "http://placehold.it/32x32",
      "name": "Eloise Robles",
      "gender": "female",
      "company": "BOILCAT"
    },
    {
      "_id": "622f4c5b2e0310268d5ba07f",
      "picture": "http://placehold.it/32x32",
      "name": "Leticia Tran",
      "gender": "female",
      "company": "OPPORTECH"
    },
    {
      "_id": "622f4c5b3c8bead2545d165a",
      "picture": "http://placehold.it/32x32",
      "name": "Mcintosh Cox",
      "gender": "male",
      "company": "MANTRIX"
    },
    {
      "_id": "622f4c5bd6a59fd3240d6019",
      "picture": "http://placehold.it/32x32",
      "name": "Virgie Maxwell",
      "gender": "female",
      "company": "NIXELT"
    },
    {
      "_id": "622f4c5b41f3514dbff09606",
      "picture": "http://placehold.it/32x32",
      "name": "Solomon Pearson",
      "gender": "male",
      "company": "GEEKMOSIS"
    },
    {
      "_id": "622f4c5b8513d892e176ca9a",
      "picture": "http://placehold.it/32x32",
      "name": "Nannie Clay",
      "gender": "female",
      "company": "BLEEKO"
    },
    {
      "_id": "622f4c5b1cca28ef4560bef0",
      "picture": "http://placehold.it/32x32",
      "name": "Jo Larson",
      "gender": "female",
      "company": "ZEROLOGY"
    },
    {
      "_id": "622f4c5b403c526c5d35854e",
      "picture": "http://placehold.it/32x32",
      "name": "Latasha Workman",
      "gender": "female",
      "company": "NETUR"
    },
    {
      "_id": "622f4c5b42b8f277fe5b20d5",
      "picture": "http://placehold.it/32x32",
      "name": "Fay Alvarez",
      "gender": "female",
      "company": "PURIA"
    },
    {
      "_id": "622f4c5b52405a04b2874306",
      "picture": "http://placehold.it/32x32",
      "name": "Tammi Carney",
      "gender": "female",
      "company": "SUPPORTAL"
    },
    {
      "_id": "622f4c5bbcd0163cbbdda675",
      "picture": "http://placehold.it/32x32",
      "name": "Castro Morin",
      "gender": "male",
      "company": "QUARX"
    },
    {
      "_id": "622f4c5b4c056af08c175b3a",
      "picture": "http://placehold.it/32x32",
      "name": "Leon Gaines",
      "gender": "male",
      "company": "MARVANE"
    },
    {
      "_id": "622f4c5be2e33ff769c4d36d",
      "picture": "http://placehold.it/32x32",
      "name": "Calhoun Gould",
      "gender": "male",
      "company": "FURNITECH"
    },
    {
      "_id": "622f4c5b60f020eddd81985b",
      "picture": "http://placehold.it/32x32",
      "name": "Roslyn Howard",
      "gender": "female",
      "company": "ZILLAN"
    },
    {
      "_id": "622f4c5baeddbeaf3bc812e2",
      "picture": "http://placehold.it/32x32",
      "name": "Shari Walton",
      "gender": "female",
      "company": "EXOSWITCH"
    },
    {
      "_id": "622f4c5b2c31a06408efb636",
      "picture": "http://placehold.it/32x32",
      "name": "Keisha Hopper",
      "gender": "female",
      "company": "OBLIQ"
    },
    {
      "_id": "622f4c5b2ccf2896fee6e2ad",
      "picture": "http://placehold.it/32x32",
      "name": "Schneider Downs",
      "gender": "male",
      "company": "SYNKGEN"
    },
    {
      "_id": "622f4c5bd91fa0c30bb29767",
      "picture": "http://placehold.it/32x32",
      "name": "Bernadine Hess",
      "gender": "female",
      "company": "ZENTIX"
    },
    {
      "_id": "622f4c5ba6e5a4f7e0c5de78",
      "picture": "http://placehold.it/32x32",
      "name": "Dyer Knowles",
      "gender": "male",
      "company": "XURBAN"
    },
    {
      "_id": "622f4c5b895aab9982142efc",
      "picture": "http://placehold.it/32x32",
      "name": "Dianne Thornton",
      "gender": "female",
      "company": "CUJO"
    },
    {
      "_id": "622f4c5b95dd2236504bf289",
      "picture": "http://placehold.it/32x32",
      "name": "Madeleine Carroll",
      "gender": "female",
      "company": "MAKINGWAY"
    },
    {
      "_id": "622f4c5b9238921ec7a13de0",
      "picture": "http://placehold.it/32x32",
      "name": "Hill Reyes",
      "gender": "male",
      "company": "JUMPSTACK"
    },
    {
      "_id": "622f4c5b1ea837f17e9fed8c",
      "picture": "http://placehold.it/32x32",
      "name": "Harris Mcleod",
      "gender": "male",
      "company": "GREEKER"
    },
    {
      "_id": "622f4c5b362dee202c4d4c4f",
      "picture": "http://placehold.it/32x32",
      "name": "Alvarez Gutierrez",
      "gender": "male",
      "company": "PUSHCART"
    },
    {
      "_id": "622f4c5b66719dca5ab9662d",
      "picture": "http://placehold.it/32x32",
      "name": "Lorena Francis",
      "gender": "female",
      "company": "ENJOLA"
    },
    {
      "_id": "622f4c5b07581bea7470ad28",
      "picture": "http://placehold.it/32x32",
      "name": "Genevieve Shepard",
      "gender": "female",
      "company": "ZENTURY"
    },
    {
      "_id": "622f4c5ba6eeaf642bbb4edd",
      "picture": "http://placehold.it/32x32",
      "name": "Malone Trujillo",
      "gender": "male",
      "company": "XINWARE"
    },
    {
      "_id": "622f4c5be22190797842fa54",
      "picture": "http://placehold.it/32x32",
      "name": "Kasey Hicks",
      "gender": "female",
      "company": "MACRONAUT"
    },
    {
      "_id": "622f4c5bb9e7cf3b0373e8b9",
      "picture": "http://placehold.it/32x32",
      "name": "Corine Mcmillan",
      "gender": "female",
      "company": "SLUMBERIA"
    },
    {
      "_id": "622f4c5b34c05c93c407a58a",
      "picture": "http://placehold.it/32x32",
      "name": "Gilmore Buchanan",
      "gender": "male",
      "company": "GEEKNET"
    },
    {
      "_id": "622f4c5b22d134fb3f8245b1",
      "picture": "http://placehold.it/32x32",
      "name": "Johnson Mason",
      "gender": "male",
      "company": "PANZENT"
    },
    {
      "_id": "622f4c5b7d4f74bf0783ddca",
      "picture": "http://placehold.it/32x32",
      "name": "Della Velasquez",
      "gender": "female",
      "company": "GEEKULAR"
    },
    {
      "_id": "622f4c5ba0aa16481b372f47",
      "picture": "http://placehold.it/32x32",
      "name": "Beulah Sandoval",
      "gender": "female",
      "company": "DANJA"
    },
    {
      "_id": "622f4c5b6ae815e50ee9e723",
      "picture": "http://placehold.it/32x32",
      "name": "Hancock Rogers",
      "gender": "male",
      "company": "DECRATEX"
    },
    {
      "_id": "622f4c5b0ccdf98ecad84f7f",
      "picture": "http://placehold.it/32x32",
      "name": "Janie Dudley",
      "gender": "female",
      "company": "VENDBLEND"
    },
    {
      "_id": "622f4c5bce52ba837d36d5de",
      "picture": "http://placehold.it/32x32",
      "name": "Olive Stein",
      "gender": "female",
      "company": "SENSATE"
    },
    {
      "_id": "622f4c5b53a4ed6676458ca7",
      "picture": "http://placehold.it/32x32",
      "name": "Blackburn Mitchell",
      "gender": "male",
      "company": "ZENOLUX"
    },
    {
      "_id": "622f4c5b9366ced39ad0e95a",
      "picture": "http://placehold.it/32x32",
      "name": "Maude Carson",
      "gender": "female",
      "company": "ISOSTREAM"
    },
    {
      "_id": "622f4c5b2ad8d4dd584305e4",
      "picture": "http://placehold.it/32x32",
      "name": "Kristina Hernandez",
      "gender": "female",
      "company": "MAXEMIA"
    },
    {
      "_id": "622f4c5b11af707e36469f9e",
      "picture": "http://placehold.it/32x32",
      "name": "Bishop Burgess",
      "gender": "male",
      "company": "OVERPLEX"
    },
    {
      "_id": "622f4c5be90b0af8c1278a87",
      "picture": "http://placehold.it/32x32",
      "name": "Jones Lewis",
      "gender": "male",
      "company": "GENMY"
    },
    {
      "_id": "622f4c5b37a756e835d5d59c",
      "picture": "http://placehold.it/32x32",
      "name": "Church Calderon",
      "gender": "male",
      "company": "ZOSIS"
    },
    {
      "_id": "622f4c5bbe965e330551b6b8",
      "picture": "http://placehold.it/32x32",
      "name": "Dudley Mercado",
      "gender": "male",
      "company": "DIGINETIC"
    },
    {
      "_id": "622f4c5b0dc49f0ab0f8ac06",
      "picture": "http://placehold.it/32x32",
      "name": "Casey Baird",
      "gender": "male",
      "company": "EXTRAWEAR"
    },
    {
      "_id": "622f4c5bb80c7752472d9700",
      "picture": "http://placehold.it/32x32",
      "name": "Monica Cannon",
      "gender": "female",
      "company": "CEMENTION"
    },
    {
      "_id": "622f4c5bba1254e2a8ab1120",
      "picture": "http://placehold.it/32x32",
      "name": "Bettie Sweeney",
      "gender": "female",
      "company": "FRANSCENE"
    },
    {
      "_id": "622f4c5b6c2a8d83a41f3a2a",
      "picture": "http://placehold.it/32x32",
      "name": "Abigail Norris",
      "gender": "female",
      "company": "PROSURE"
    },
    {
      "_id": "622f4c5bbf9327dbe5a928d7",
      "picture": "http://placehold.it/32x32",
      "name": "Mays Rosa",
      "gender": "male",
      "company": "HATOLOGY"
    },
    {
      "_id": "622f4c5b73bf1a32364d0173",
      "picture": "http://placehold.it/32x32",
      "name": "Mcknight Stephenson",
      "gender": "male",
      "company": "PLAYCE"
    },
    {
      "_id": "622f4c5bc0671a3d6d6884c4",
      "picture": "http://placehold.it/32x32",
      "name": "Hopper Hopkins",
      "gender": "male",
      "company": "CYTREK"
    },
    {
      "_id": "622f4c5bb109cbc2fef4efd1",
      "picture": "http://placehold.it/32x32",
      "name": "Glover Herrera",
      "gender": "male",
      "company": "ISONUS"
    },
    {
      "_id": "622f4c5bb7a8c8a31c6b44a6",
      "picture": "http://placehold.it/32x32",
      "name": "Ana Jackson",
      "gender": "female",
      "company": "FLOTONIC"
    },
    {
      "_id": "622f4c5bbf7ad0fc79a82d84",
      "picture": "http://placehold.it/32x32",
      "name": "Summers Salas",
      "gender": "male",
      "company": "MIRACLIS"
    },
    {
      "_id": "622f4c5b580a852f2ec05a6e",
      "picture": "http://placehold.it/32x32",
      "name": "Chelsea Christensen",
      "gender": "female",
      "company": "RODEMCO"
    },
    {
      "_id": "622f4c5bee76baa0ea11221a",
      "picture": "http://placehold.it/32x32",
      "name": "Chase Warner",
      "gender": "male",
      "company": "INTERGEEK"
    },
    {
      "_id": "622f4c5bcc3e0794a3094067",
      "picture": "http://placehold.it/32x32",
      "name": "Hester Schroeder",
      "gender": "female",
      "company": "XIXAN"
    },
    {
      "_id": "622f4c5b4406a2da01a7bfa5",
      "picture": "http://placehold.it/32x32",
      "name": "Patti Logan",
      "gender": "female",
      "company": "REPETWIRE"
    },
    {
      "_id": "622f4c5bd61d06b2a14a368a",
      "picture": "http://placehold.it/32x32",
      "name": "Darlene Massey",
      "gender": "female",
      "company": "ZANYMAX"
    },
    {
      "_id": "622f4c5b8dd9fc5220beca53",
      "picture": "http://placehold.it/32x32",
      "name": "Ross Anderson",
      "gender": "male",
      "company": "DOGNOST"
    },
    {
      "_id": "622f4c5b745c94aaeff1a547",
      "picture": "http://placehold.it/32x32",
      "name": "Morrow Ballard",
      "gender": "male",
      "company": "TWIGGERY"
    },
    {
      "_id": "622f4c5b1415cf1e4c398af3",
      "picture": "http://placehold.it/32x32",
      "name": "Tate Todd",
      "gender": "male",
      "company": "COMCUBINE"
    },
    {
      "_id": "622f4c5b65c064ab9f3a6ae0",
      "picture": "http://placehold.it/32x32",
      "name": "Moran Coffey",
      "gender": "male",
      "company": "OZEAN"
    },
    {
      "_id": "622f4c5b2c6e57ce8896a3b5",
      "picture": "http://placehold.it/32x32",
      "name": "Conway Rivera",
      "gender": "male",
      "company": "TWIIST"
    },
    {
      "_id": "622f4c5b7e0079858274b3ab",
      "picture": "http://placehold.it/32x32",
      "name": "Booth Flynn",
      "gender": "male",
      "company": "SHOPABOUT"
    },
    {
      "_id": "622f4c5b59419e30f19cfe8c",
      "picture": "http://placehold.it/32x32",
      "name": "Ericka Mcintosh",
      "gender": "female",
      "company": "NORSUP"
    },
    {
      "_id": "622f4c5bc4a9fb2174dfe75e",
      "picture": "http://placehold.it/32x32",
      "name": "Lowe West",
      "gender": "male",
      "company": "EWAVES"
    },
    {
      "_id": "622f4c5b7761ebd946dcb4fc",
      "picture": "http://placehold.it/32x32",
      "name": "Huff Brady",
      "gender": "male",
      "company": "QUILM"
    },
    {
      "_id": "622f4c5bec0f647a8e300f64",
      "picture": "http://placehold.it/32x32",
      "name": "Helene Owen",
      "gender": "female",
      "company": "LETPRO"
    },
    {
      "_id": "622f4c5be8769d075e54f3fa",
      "picture": "http://placehold.it/32x32",
      "name": "Monique Hampton",
      "gender": "female",
      "company": "EARGO"
    },
    {
      "_id": "622f4c5b42c65eebf3dcc844",
      "picture": "http://placehold.it/32x32",
      "name": "Silvia Weiss",
      "gender": "female",
      "company": "XIIX"
    },
    {
      "_id": "622f4c5b5af36cee5ba54cae",
      "picture": "http://placehold.it/32x32",
      "name": "Vaughan Avery",
      "gender": "male",
      "company": "OPTICOM"
    },
    {
      "_id": "622f4c5bdb90be38eb3be6f2",
      "picture": "http://placehold.it/32x32",
      "name": "Jefferson Roach",
      "gender": "male",
      "company": "QUILTIGEN"
    },
    {
      "_id": "622f4c5b3d520b491fdc7be8",
      "picture": "http://placehold.it/32x32",
      "name": "Webster Patterson",
      "gender": "male",
      "company": "BRAINQUIL"
    },
    {
      "_id": "622f4c5b02f59520a86172a6",
      "picture": "http://placehold.it/32x32",
      "name": "Jennie Mueller",
      "gender": "female",
      "company": "REVERSUS"
    },
    {
      "_id": "622f4c5be9bc64fe03cc55e2",
      "picture": "http://placehold.it/32x32",
      "name": "Christina Pennington",
      "gender": "female",
      "company": "EYERIS"
    }
  ]

const server = http.createServer((req, res) => {
  console.log(req.url);

  if (req.url == "/home" && req.method == "POST") {
    // this data event wiill be meitted by http server
    req.on("data", (data) => {
      console.log(data.toString());
    });

    req.on("end", () => {
      res.setHeader("Content-Type", "text/html");
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("home"); // ending the response
    });
  } else if (req.url.match(/\/getRequest\/[1-9]/g) && req.method == "GET") {
    // this data event wiill be meitted by http server
    console.log(req.url.split("/"))
     let param=req.url.split("/")[2]


    let data=arr.filter(ele=>ele._id==param)
     

    res.setHeader("Content-Type", "application/json");
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(data)); // ending the response
  }
});

server.listen(9091, () => {
  console.log("Server Running At post 9091");
});


// C