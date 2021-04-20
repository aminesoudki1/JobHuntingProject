'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "65e544829b7ad60bd3ff87971c937148",
".git/config": "aeaadea9bc7638d9edeb9a79fc10e4fd",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "05b60313dda31ad2ed9141955a739e83",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "574060637fef65dbb733890c4e489bb2",
".git/logs/refs/heads/master": "574060637fef65dbb733890c4e489bb2",
".git/objects/03/cd9fc05ad4d1a3a48ea0844e00c11aa6f3a740": "983be9985d85916f5806d38a12274ce9",
".git/objects/07/b9109184037127e114962a145c28ba054cd767": "e45e697646fa2dee4c6875645f668c6b",
".git/objects/09/d4391482be68e9e4a07fab769b5de337d16eb1": "a603712ac5534497bc4fd35ebd46b0b7",
".git/objects/0a/741cb43d66c6790a2a913fa24c8878fb1ab7b5": "307011b7f3f57c355deba17946cc9f69",
".git/objects/0b/edcf2fd46788ae3a01a423467513ff59b5c120": "23a6b285e31cde5ab29a2fc1ebfdb935",
".git/objects/0c/c1172cc8c67ff81fd0eca4b20da5311ec4d551": "69f49d91941cbb95200fadac54642b4a",
".git/objects/0d/2554bd7969f71a5b4902a7f2db7cc71c73966f": "43d4ab415ef0108d92dabfbf26196d15",
".git/objects/13/5a3f566ef0f67f055309dc4ab65aa26ac69967": "b9e902e0488ad9c20b4e1c6698a09098",
".git/objects/14/8da3098986ea6c098d5a7b1f8e9cbf6b427b56": "9bfb32c54891d8b9226a37dddd010698",
".git/objects/16/d57d319d227d512e7742646a495293b4d629d1": "a54c69804f76e3bfb6262cb55b6de38d",
".git/objects/17/987b79bb8a35cc66c3c1fd44f5a5526c1b78be": "f47de426b1d6c272d2659c734c9de80f",
".git/objects/17/e9516a74074fad22bac3e52e39131886697622": "2cccf0b2cd7b787a1f969f9552b76de3",
".git/objects/18/d981003d68d0546c4804ac2ff47dd97c6e7921": "318597cf2655c5770342bae4ab7b90a3",
".git/objects/19/741593c64366f783a36a01ab43cac785f1399b": "2cc63098cb200fd64dc37f8818a796ad",
".git/objects/1b/21b32db6a9036331c5769c0127091f72b3c182": "a36b77b4e00e34fb5eb220bc8d5847da",
".git/objects/1d/526a16ed0f1cd0c2409d848bf489b93fefa3b2": "12bcdfd9683b55567627456d0773a4e5",
".git/objects/1e/45fc1bfed9e979a3a1540fdd7d58139a0eb81c": "f6bfaac003d5289ba3cf6356e768c14a",
".git/objects/1f/83a33fd4f2c45c5ffa5b6c1b729c431fd445fc": "0738e3d4ae36142fab410ded3b12b22a",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/21/2fc0d6b96efa5c58788a6f9cd63eaf57294404": "89576040f17e90a17d11b47f1d68c894",
".git/objects/21/df6920867d0eaeb6e956643d1e8a4343c0d537": "bc3f42772c3fd0ca273f01fb34c3e597",
".git/objects/24/7f5694ce6ce339f35bb58a657960ba9b26a6bc": "26ea2621da751d7b92d3f1984d54851b",
".git/objects/28/c6bf03016f6c994b70f38d1b7346e5831b531f": "859e347621927457ff896dba865a18fd",
".git/objects/29/6b146b7318dd58663296dbb7555df9ff328ec2": "cd7bfa51bd49d68b3d805ceb7199e1a5",
".git/objects/2a/b8c137b74afc94c154670bdb2d223fb253128f": "5886de3dbcb6bb021258c95e3b957093",
".git/objects/2b/62ab410f44e6f7c2b96ff80bc6909206ce6737": "4bc6952b453ae542747ed808f70a2f7d",
".git/objects/2b/9482b5b27db47157cb8784f71db0d8aaec913d": "0f3c11e586521bdcad2d43527607e7d6",
".git/objects/2c/2b6f899fe29f68d49bc4626001c88b3e30eeeb": "b6168181717ec63c1eb97c0d409d9bb0",
".git/objects/2c/cbfd967d9697cd4b83225558af2911e9571c9b": "79f574379587d27e91d5ebf05ea6e777",
".git/objects/2c/cf8309d2923c6ba090959da3da17bb826d1cbd": "527d2f81aaaa95ec6320cf8a3d0ad41c",
".git/objects/30/4732f8842013497e14bd02f67a55f2614fb8f7": "76eb293b5c9304707852ee681a90e8fc",
".git/objects/30/8a2a560b42f17aaf3c36e4e9c8cd07182fbb7e": "bc183808cfc617fa9474743616eb4aee",
".git/objects/31/00ad2d55532e58ed44b53dd3c2a04c5bcaf160": "378dddef8741925bc9b88f77775bd0c1",
".git/objects/31/8650b2d60f563a7765fc3dd3452268a3bc959a": "c83668e9947ed8f332ebc5190702498d",
".git/objects/36/9018c72c0bc609bfb926a580fd3777241d76fb": "6e5014e19f248180d3d95119e27ead74",
".git/objects/36/cbce676bcfbddfa689b9d0abf23ac40fd2e60b": "8c963983d40f36e775abdac45c7810e0",
".git/objects/38/e6570d43d793cd6306dba64fb25cd2d423b4b8": "26eab340bf90002364b6af1ded3b04e2",
".git/objects/3d/f3d1a91dec9f419bbf32c7dbd7ffe3049577b7": "2da7aed2720fec500109845fe6130ee3",
".git/objects/3e/7de99c0a8fca0566fc361d693554c58e3df9cc": "01fd4feb88e7ce36612770ac36148e86",
".git/objects/40/69cd02aea2e15f1c26e20a60b8445b682d204e": "6e9200bb241b21aa76c6e8d2ae260fb8",
".git/objects/41/2c89b5281728256eaaece32ecbd692679bf718": "2eb1f64936c01de1553d680341d0f3a4",
".git/objects/44/7f15f343e095c5b61333a01344371431fa7d26": "aa41b8123a30b229e762db79ad54884b",
".git/objects/44/e62bcf06ae649ea809590f8a861059886502e8": "2e42f843c31c0484de7ce7a7c79cd856",
".git/objects/45/303f9958e638faf87374486d0e96b89023351d": "7aaa290d8b5e7f86e33d4bffbaf2bf32",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/7ccabd32d4fce6d40c4ff383612d48a3400ef4": "0d851999ad9a04342fe95444189849d5",
".git/objects/46/b726bd53d47e61ba941eb355b9c8633ebbaa20": "480b1cf7af4c452e5722818c06aca052",
".git/objects/47/50a1d8d3e6bb896f11753191a11d16852bf33e": "e5b9006b8125ccf43a7cd9d1e38fb35d",
".git/objects/49/0a93753560986293eb42a3793aed1515878643": "f65ff36e0a3c2ef6f6341d7bd133abce",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4b/88d8b26a3ca0df2853b9095ab8e3961968dd33": "7a3980cdf8c2124079cc6a67356579dc",
".git/objects/4c/483d35e15de8fb7c13d1814cf823911d0f893a": "1b46f4d15356a471dbf9477732194178",
".git/objects/4c/de12118dda48d71e01fcb589a74d069c5d7cb5": "28e8a446706511f1a67da714824896ea",
".git/objects/4d/6372eebdb28e45604e46eeda8dd24651419bc0": "1a6a714da9180a4b75ff188c6eb0514f",
".git/objects/4e/6be5f3ef218de944630654575231de4656b692": "99c824f418fa95f539d7ee853038939e",
".git/objects/59/2ceee85b89bd111b779db6116b130509ab6d4b": "348329ef452b809389b6496387db6913",
".git/objects/5c/4309590b85081aa91cc50f15d50f9a6290d545": "c10f49ba65cd7bde98ae40f09eaf9ed4",
".git/objects/5c/8bd1266b04758349929a8bc6c82933b8d1d24e": "faf76599382362778d64a3666801de8b",
".git/objects/5c/ab0f911f7e40e0eca1beb326b692371771bfc7": "f13ac1651d3dea7713a6860abf1338b4",
".git/objects/63/1b2c682021b48cd1d1f5d0d2c65c8e5ac7be19": "e72abb7532a103cfecb80180a3a40d19",
".git/objects/65/792c6bb1165f2d716dcd9084861830abff148e": "cea0fdf9b344e68b6630d8d24e0300fe",
".git/objects/6a/84f41e14e27f4b11f16f9ee39279ac98f8d5ac": "a913aaf750cc736879f14f53488f5c42",
".git/objects/6b/4c0f78a7850094f62713858e533a2fc8eda617": "9751640a3a7d1089aa97e40d00252ea3",
".git/objects/6c/8e736c9131cbed40246aad6c478f4be38fbd3f": "f2b1e79be5b3a72ec8b64640a7d3e089",
".git/objects/70/693e4a8c128fc4350b157416374ca599ac8c7b": "6942d9ddf2906a8e847e7ef6889a4221",
".git/objects/71/79637677af76efbdb7e83504ceaafff30db9d6": "563f35f20b40ebfb78eab0b2b4bd8906",
".git/objects/73/ed84f352605fa0e52e1f86ff15fefbb7418971": "9845998a3f73a45ef1ca5096668944c6",
".git/objects/74/781f5193ec35b96169d946dbd13125717adbb3": "2a607780f455fae4e5054f7b20546f4a",
".git/objects/74/957b6d75bdc3a0ec23940bc439f11030666319": "0798f359e91b82e6a2d09613985f8497",
".git/objects/75/b2d164a5a98e212cca15ea7bf2ab5de5108680": "d453ef5dc75a6b2e158c081f7a51acac",
".git/objects/7c/ea2fd6197aa5eda5a9869938f6a09397cd940a": "997aef55a484dc6ff0989e9ded419133",
".git/objects/80/dd6848309958801f535eb1fdd3069e37929959": "273e930701b67a4e962d9880203f0801",
".git/objects/81/a8039e0d378f64bed22292dfea01c56a041e47": "85ff51ade0faa00cb6ebae1a401b7a70",
".git/objects/83/6ca51e06352394a27d339a01bc26c28eef14ba": "8cd07ae5d918d0b07ce2aa02e68fcb43",
".git/objects/84/d08f7b151f10507b1d8c24043ab1d088f4c0aa": "a6fbdf88da12c6ac558a3a6de7fc2c33",
".git/objects/86/ad0bd637a46563b26d802ce98b81e69be1d10e": "a9e76bed12bcaa035c2f18387d9ba366",
".git/objects/87/1eaeeaae6f491c8fad1ce44aa9d9d0858609d5": "225d02e4f4986cb34a9c2d600861a1fa",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/c2725b70f1882be97f5214fafe22d27a0ec01e": "99b17ebd650decc04c5de3b0893b27f7",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/cab49abd8e6d6c428a78d0c67cbd052051b144": "0fb31a2d19b3e33180e2d066ef599527",
".git/objects/8b/c86b302a0a4edf77bd45835a73e6bd15765bcf": "e41b427843ca1e3d0ce8e7ad4af9a263",
".git/objects/8f/2091f4469d2b917a351afa38712b5d3e2a8b7e": "c4070076b58525abf3bb2738d6db7490",
".git/objects/94/8c4767e8a9f3c27b7008d0728f9d00bae13119": "9964b00f85f16afb10a025605a119e25",
".git/objects/94/adc3a3f97aa8ae37ba567d080f94f95ee8f9b7": "daee15d8fbbf348420b6eaf3d86cbf40",
".git/objects/9d/a19eacad3b03bb08bbddbbf4ac48dd78b3d838": "1176aaa6ff7a19c56cf9a6ea692a2c03",
".git/objects/a1/c3d55dfb9693df891b84c4960629e542d9e78e": "2c1f056793ca4645b3f841a8faee1d49",
".git/objects/a1/ce08c908059adf3108bbae3245a044b1bad43d": "a40d907eebc3071c11ec0c5fea6ce1f5",
".git/objects/a2/8140cfdb3ff9b7a11a9497b84546d615db2afa": "6d7635289ce43450f1e676e1c5444b06",
".git/objects/a2/f6acee23796f961a0958d9f384114ea0e9044c": "b91144a1faaf4ac125b4e9fe67c52c99",
".git/objects/a4/9593e9aff6dc5d4c043d9c64a2242f3ceec324": "efcfe011b5fb19523e279698bc18e2e5",
".git/objects/a4/dc9ffa78fc5497363c1eef49ef4a9de9a969a0": "ddae94f9111e1e24a98e7115e51b568f",
".git/objects/a5/561c85a50d2b266bab7c68c568bbc1bc0b5453": "74f842f4c170668b78b7ae03ce188c35",
".git/objects/a5/74fb9e3907608e950927d928b60aed4a83795a": "7523ce0bb7bc23ef4659f02814cc43df",
".git/objects/a6/0c1c1b9cb86798e089e6d8badd58e1a910e063": "dd0ed005c56807b66137b87591e025b1",
".git/objects/a6/2921573420d790fcaea919c16e24c60fcd6ce4": "0fa7b9d447683a2f37923faf2fd20837",
".git/objects/a6/368af0ee7628fa194ef8fe3bbe4523113d6e05": "bafb07bb0e67f8a015ad7c670f7072fd",
".git/objects/a6/d6b8609df07bf62e5100a53a01510388bd2b22": "821831c6c42de47994c16f6a1db3ea7e",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/b2/7565f857cb894f1cefb370de74fb6ac1814b29": "0b4868561b526a22dcad261127df056c",
".git/objects/b3/dc4cff62dfd5ef3be90b513bf90ac25fefa4b0": "dd59280e08bb6c376f971226d46591fc",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/321d71b83590823aee93420bd2f85951693464": "aa921751b777037a3f556b80912eb4c7",
".git/objects/c0/6652c715657321ca829d5bd566891c5c9a997e": "46dffcfc7b5e71d9f5242bf456b1dfd7",
".git/objects/c0/cf458ff3a2a62b5fdfc2642c6c388e1369359c": "6ce788570bfbe8e4be7dd2c7a5077d88",
".git/objects/c1/5e710775e86043a8be4539e3b1a4fef1b64ba3": "a1543b2f17cc16f6f221c11462be72a9",
".git/objects/c4/df70d39da7941ef3f6dcb7f06a192d8dcb308d": "d394f8200d968d57839b22cbe657146e",
".git/objects/c5/86face726bc39b8f321a4cef2a23317dd03f45": "518c3a1549754544c8ad0f368688bdc2",
".git/objects/c8/f9ed8f5cee1c98386d13b17e89f719e83555b2": "0fc2e076b543f37f90a9e7159555320c",
".git/objects/c9/f598a6681c75ed85f8a84afa2aa63ed83f6d3b": "0e517b716e6e6bd0eb86cc5658beda38",
".git/objects/ca/fed72f608645cc3a9d0d3419440a79c1c5614d": "039b2c679a3b78f40ffc22833296b38c",
".git/objects/cb/447930b37710eb1f2b0f5716908ec1a028d6f4": "eb0769888f2fcee715cb1cc92e16476c",
".git/objects/cc/2a39fa7968819648707e8fc5385e1ffddf3153": "5ae6237acb7d1961e8eeaca950cebeaf",
".git/objects/cc/adb91e23e40dabd2973a758dbd0972846d731c": "8c2739d728b9d8b408e395fb111f7dff",
".git/objects/ce/e1becf0f4388f2af857415cd9339437f938dc0": "27aa006c01f2337f5bded53a715a0ab3",
".git/objects/d0/e1f58536026aebc4f1f70e481f6993c9ff088d": "18109e32e7fc3bf04e529c14b8723746",
".git/objects/d0/ef06e7edb86cdfe0d15b4b0d98334a86163658": "4d865184682ad08c3405e3934cd91fa9",
".git/objects/d1/69ea54b0c9e9fa2973f84114085f5d41a10d87": "97d5f0c5edb2988ecb0b486ba79be3ec",
".git/objects/d2/39a3f0938bcc7c0d4f452bd2c924383bdacdf8": "a98bfbe24eadb120b261bf1c0d7bc55d",
".git/objects/d2/96fe0bf9a95b5a5e9a58a94eb612987fe02a67": "da90e742291c54904e6089961390761a",
".git/objects/d3/6b1fab2d9dea668a4f83df94d525897d9e68dd": "f19c13a91df6187b27767a0c81787173",
".git/objects/d3/ddb59ffc9fcd8b672d2eeb265154671b6b0df8": "ebf970b7d2e889b7852de3caec797988",
".git/objects/d5/74de9b01e12bdd7a353d25515e9a90f6a326c2": "1ab41c84efad8b4ddc69d937fd1e25de",
".git/objects/d5/f1c8d34e7a88e3f88bea192c3a370d44689c3c": "2e5a4148dc9ebc15b186574d9fb60432",
".git/objects/d7/61c53178cc135119f252e047fb2f6e08512ed0": "54c64d1a96d272170806761ec67134b6",
".git/objects/db/77bb4b7b0906d62b1847e87f15cdcacf6a4f29": "a2e10fc9c4f60ac00e2b9b1ed3a0b5ac",
".git/objects/dc/9ada4725e9b0ddb1deab583e5b5102493aa332": "e8022082c258e4c83e27519f77484618",
".git/objects/dc/dc2306c28505ebc0b6c3a359c4d252bf626b9f": "e712bf13b0d526e57c6ee1c8acc412d4",
".git/objects/e9/6ef602b8d172f7cd28ba656aac097f741c736d": "c3323f418dab0a55952c00cd3adbeb55",
".git/objects/f0/825d74890d56cc286ee7b41b35d176eb2bbb63": "46a833f3b3bc3b18d8299e2e21bc0264",
".git/objects/f0/91b6b0bca859a3f474b03065bef75ba58a9e4c": "1aef8d0dea7cfdb7ffb51559c81d2fdf",
".git/objects/f1/48025e5063416b03f041cc2640fc15e285126d": "01e9fffa1fe4436f81f464a16a57e75d",
".git/objects/f1/f568eb7439de1e9e0a99b3164ecbd6c6c1aa30": "091e58bbe8d72ffa8aed85356375f04f",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f2/e259c7c9390ff69a6bbe1e0907e6dc366848e7": "094726a4a1cc307c0a019e65a323f850",
".git/objects/f3/46021e5e353f2f827b3a136a02d0f53631c785": "95dac5423c0c75a27b351527c71190cf",
".git/objects/f3/c28516fb38e64d88cfcf5fb1791175df078f2f": "bccf9d20d0adcc345fe8e5f4a745c4ae",
".git/objects/f6/421afa4063e0c8514356cc623798a87fb54b93": "b2a1727e76acde3fc70b435186076e02",
".git/objects/f8/ca60653f93d4bfe51c35b049b309913a286a41": "40f676f874f94b49912ba1a342e61398",
".git/objects/f9/b0d7c5ea15f194be85eb6ee8e6721a87ff4644": "db1ee38473c66e5ffa9d28f6dfe66938",
".git/objects/fe/2bfcf95c1c341704e5d266a433b006efec5617": "19c6f6427a9329c00cc6642a04660850",
".git/objects/fe/960e22c4eac758160cc30d7e2dec741af1314e": "979507c4d7faa9f37a02d8dc33113917",
".git/refs/heads/master": "b1fbba61f8f18d16912238495a3aa5e3",
"assets/AssetManifest.json": "b331dd35913a1f6bcff610ed98210cc9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/images/indeed-logo.svg": "04fe533cf3ac984d69cb91907ba04f25",
"assets/images/indeed.png": "b9a120ea265f1b572b291027b72564a2",
"assets/images/Indeed_logo.png": "ab33b28b9c21b6750847a78bb524a6c8",
"assets/images/linkedIn.png": "24eeba595c96018994527df53656e579",
"assets/images/linkedin.svg": "2a78276d8af1a51f1517bda99db848f0",
"assets/NOTICES": "cb2d978f8cebff729b228e3068d706a1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "8abda54a025085af78918684f6bddb67",
"/": "8abda54a025085af78918684f6bddb67",
"main.dart.js": "3f1d53c3a3f59a3036f93af11ace5912",
"manifest.json": "5e2df4d35c797f6e341d90f3f0ce4b4f",
"version.json": "f716fa3157c1c2063e2ebe1f87532b70"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
