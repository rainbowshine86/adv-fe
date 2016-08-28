(function () {
    var global = window;
    global.Data = {
        getUser: function (userId) {
            return users.filter(function (user) {
                return user.id == userId;
            })[0];
        },
        getPosts: function () {
            return posts;
        },
        getRelatedPosts: function () {
            return posts.slice(5, 14);
        },
        getPostComments: function () {
            return [{
                username: 'Nick',
                text: 'my comment'
            }, {
                username: 'Alice',
                text: 'Alice comment'
            }]
        },
        getCurrentPost: function () {
            // parse ?id=2 => 2
            var id = location.search.slice(1).split('=')[1];
            return this.getPost(id);
        },
        getPost: function (id) {
            return ( id ? posts.filter(function (post) {
                return post.id == id;
            }) : this.getPosts() )[0];
        }
    };

    var posts = [
        {
            "imgUrl": "https://s-media-cache-ak0.pinimg.com/474x/8a/25/cf/8a25cf66b7ee0fef0ebce57c6ee1d831.jpg",
            "likeCount": 0,
            "description": "A little flat lay inspiration for the stylish dresser who is looking for a timeless look.",
            "userId": "aab",
            "id": "738"
        },
        {
            "imgUrl": "https://s-media-cache-ak0.pinimg.com/474x/44/2b/66/442b66137142f7ae3412c5e5a701eb7a.jpg",
            "likeCount": 0,
            "description": "Den Look kaufen:  <a href=\"https://lookastic.de/herrenmode/wie-kombinieren/pullover-mit-rundhalsausschnitt-chinohose-bootsschuhe-rucksack-uhr/1076\" rel=\"nofollow\" target=\"_blank\">lookastic.de/...</a>  — Weißer und dunkelblauer horizontal gestreifter Pullover mit Rundhalsausschnitt  — Beige Chinohose  — Blaue Segeltuch Bootsschuhe  — Beige Rucksack  — Weiße keramische Uhr",
            "userId": "aaa",
            "id": "839"
        },
        {
            "imgUrl": "https://s-media-cache-ak0.pinimg.com/474x/9e/a0/2b/9ea02bd640366f9bcf22656e428f42c0.jpg",
            "likeCount": 0,
            "description": "<a class=\"pintag\" href=\"/explore/hairstyles/\" title=\"#hairstyles explore Pinterest\">#hairstyles</a>",
            "userId": "aac",
            "id": "840"
        },
        {
            "imgUrl": "https://s-media-cache-ak0.pinimg.com/474x/cd/9e/fb/cd9efb1570bd5c346a825957ad7cfbe2.jpg",
            "likeCount": 0,
            "description": "Under cut with shaved bottom and very little graduation to next section and no graduation between side and top",
            "userId": "aac",
            "id": "541"
        },
        {
            "imgUrl": "https://s-media-cache-ak0.pinimg.com/474x/01/bf/8d/01bf8d3e900af748c238db80e210243b.jpg",
            "likeCount": 0,
            "description": "For a comfortable-as-your-couch outfit, consider wearing a dark brown wool blazer and navy jeans. Finish it off with dark brown suede derby shoes. Shop this look for $297: <a href=\"http://lookastic.com/men/looks/derby-shoes-and-jeans-and-scarf-and-blazer-and-bow-tie-and-dress-shirt-and-shawl-cardigan-and-sunglasses/4130\" rel=\"nofollow\" target=\"_blank\">lookastic.com/...</a> — Dark Brown Suede Derby Shoes — Navy Jeans — Charcoal Scarf — Dark Brown Wool Blazer — Red Plaid Bow-tie — White Dress Shirt — Charcoal Shawl Cardigan — Dark Brown ...",
            "userId": "aab",
            "id": "742"
        }
    ];

    var users = [
        {
            "id": "aaa",
            "email": "testuser1@yandex.ua",
            "name": "testuser1",
            "image": "https://scontent-ams2-1.cdninstagram.com/t51.2885-15/e35/12545398_945000835580309_730600571_n.jpg",
            "password": "322e6eeaa1c49cb201a68bcff9b0567399ed4848e3b92046d063690616becaec",
            "following": {
                "tags": [],
                "users": []
            }
        },
        {
            "id": "aab",
            "email": "nickolas.shishov@yandex.ua",
            "name": "okonkwo",
            "image": "https://s-media-cache-ak0.pinimg.com/avatars/horujaya_1428587412_280.jpg",
            "password": "cb0c9e0026a21e8a0d5a163f4ae4a2e4978e22f8bc705840ebdad1a99762bf79",
            "following": {
                "tags": [
                    {
                        "name": "sport",
                        "active": true
                    },
                    {
                        "name": "climbing",
                        "active": true
                    }
                ],
                "users": [
                    {
                        "id": "aaa",
                        "active": true
                    },
                    {
                        "id": "aac",
                        "active": true
                    }
                ]
            }
        },
        {
            "id": "aac",
            "email": "qwerty@yandex.ua",
            "name": "qwerty",
            "image": "https://s-media-cache-ak0.pinimg.com/avatars/horujaya_1428587412_280.jpg",
            "password": "322e6eeaa1c49cb201a68bcff9b0567399ed4848e3b92046d063690616becaec",
            "following": {
                "tags": [],
                "users": []
            }
        }
    ];
})();