const seedproducts = [
    {
        name: "ComfortStride Sneakers",
        description: "Experience unparalleled comfort with our ComfortStride Sneakers. These stylish and lightweight shoes are perfect for daily activities. The memory foam insoles provide superior cushioning, making every step a delight.",
        price: 540,
        discount: "43%",
        picture: "https://cdn.shopify.com/s/files/1/0038/1576/8176/products/Sif_Reflective-Sneakers-WL591-051_Dark_Grey_600x.jpg?v=1670319636",
        category: "Footwear",
        quantity: "13"
    },
    {
        name: "TrendFlex Running Shoes",
        description: "Elevate your running experience with TrendFlex Running Shoes. Designed for agility and style, these shoes feature breathable mesh uppers and a responsive sole for maximum performance. Step into the future of running.",
        price: 540,
        discount: "43%",
        picture: "https://www.mcarthurglen.com/globalassets/York/York--whats-on/2021/2021-sportswear/pro094_n267_webview.jpg?preset=contain-xl",
        category: "Footwear",
        quantity: "13"
    },
    {
        name: "UrbanChic Leather Boots",
        description: "Make a statement with UrbanChic Leather Boots. Crafted with premium leather, these boots blend style and durability seamlessly. The timeless design ensures you stay fashionable in any urban setting.",
        price: 540,
        discount: "43%",
        picture: "https://www.apia.com/media/catalog/product/cache/5e9795c4befdca2b121a167d16c62ae2/a/p/apia_jo_ghost_urban_chic_3843.jpg",
        category: "Footwear",
        quantity: "13"
    },
    {
        name: "FlexFit Cross-Trainers",
        description: "Achieve peak performance with FlexFit Cross-Trainers. Engineered for versatility, these shoes provide excellent support for various workouts. The breathable mesh and flexible design keep you comfortable during intense training sessions.",
        price: 540,
        discount: "43%",
        picture: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/23315076/2023/5/20/814e5dfa-462c-42ff-8594-287f4adf91301684598865486NikeFlexExperienceRun10MensRoadRunningShoes1.jpg",
        category: "Footwear",
        quantity: "13"
    },
    {
        name: "WinterWarm Snow Boots",
        description: "Embrace winter with WinterWarm Snow Boots. These insulated boots keep your feet warm in cold weather. The waterproof design and durable outsoles make them perfect for snowy adventures.",
        price: 540,
        discount: "43%",
        picture: "https://images-cdn.ubuy.com.sa/6530243449bfc80606796099-winter-warm-snow-boots-for-women.jpg",
        category: "Footwear",
        quantity: "13"
    },
    {
        name: "FashionFlex Slip-Ons",
        description: "Slip into style and comfort with FashionFlex Slip-Ons. These trendy shoes feature a sleek design and elastic inserts for easy wear. Whether for casual outings or a day at the office, these slip-ons are a fashion-forward choice.",
        price: 540,
        discount: "43%",
        picture: "https://www.jiomart.com/images/product/original/460570213_navyblue/flex-jr-idp-slip-on-casual-shoes-model3-460570213_navyblue-3-202209021958.jpg?im=Resize=(1000,1000)",
        category: "Footwear",
        quantity: "13"
    },
    {
        name: "TrailBlaze Hiking Boots",
        description: "Conquer the trails with TrailBlaze Hiking Boots. Engineered for rugged terrains, these boots offer ankle support and traction for a secure grip. The durable construction ensures they withstand the toughest outdoor adventures.",
        price: 540,
        discount: "43%",
        picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFPaPawgo-B3hyz5kjGbvGGQfLT9QcJTr_tMZM6SqMs7ALcA3RReIZzN0IsjjDCSn41e8&usqp=CAU",
        category: "Footwear",
        quantity: "13"
    },
    {
        name: "ClassicCanvas Casual Shoes",
        description: "Step out in style with ClassicCanvas Casual Shoes. These versatile shoes boast a classic canvas upper and a comfortable fit. Perfect for everyday wear, they effortlessly combine fashion and functionality.",
        price: 540,
        discount: "43%",
        picture: "https://m.media-amazon.com/images/I/51TItCCLx2L._AC_SY780_.jpg",
        category: "Footwear",
        quantity: "13"
    },
    {
        name: "ActiveGrip Sports Sandals",
        description: "Embrace the outdoors with ActiveGrip Sports Sandals. Designed for adventure, these sandals feature a secure grip and adjustable straps for a customized fit. Ideal for water activities and exploring nature.",
        price: 540,
        discount: "43%",
        picture: "https://m.media-amazon.com/images/I/51TItCCLx2L._AC_SY780_.jpg",
        category: "Footwear",
        quantity: "13"
    },
    {
        name: "Classic Stainless Steel Watch",
        description: "Elevate your style with our Classic Stainless Steel Watch. This timeless timepiece features a stainless steel case and bracelet, a minimalist dial with date display, and reliable quartz movement. A perfect blend of sophistication and functionality.",
        price: 720,
        discount: "15%",
        picture: "https://cdn1.ethoswatches.com/media/catalog/product/cache/6e5de5bc3d185d8179cdc7258143f41a/o/m/omega-seamaster-220-10-41-21-03-004-large.jpg",
        category: "Watch",
        quantity: "30"
    },
    {
        name: "Sporty Chronograph Watch",
        description: "Stay on track with our Sporty Chronograph Watch. Ideal for active lifestyles, this watch offers precise timekeeping and stopwatch functionality. The rugged design, water resistance, and durable materials make it a reliable companion for any adventure.",
        price: 4250,
        discount: "20%",
        picture: "https://cdn1.ethoswatches.com/media/catalog/product/cache/6e5de5bc3d185d8179cdc7258143f41a/t/i/tissot-t-sport-t125-617-11-041-00-large.jpg",
        category: "Watch",
        quantity: "25"
    },
    {
        name: "Luxury Leather Strap Watch",
        description: "Indulge in luxury with our Luxury Leather Strap Watch. This exquisite timepiece features a genuine leather strap, a sophisticated dial, and automatic movement. Elevate your everyday style with this elegant and timeless watch.",
        price: 1780,
        discount: "10%",
        picture: "https://cdn1.ethoswatches.com/media/catalog/product/cache/6e5de5bc3d185d8179cdc7258143f41a/o/m/omega-de-ville-432-53-40-21-02-002-large.jpg",
        category: "Watch",
        quantity: "20"
    },
    {
        name: "Smart Fitness Tracker Watch",
        description: "Stay fit and connected with our Smart Fitness Tracker Watch. This advanced wearable features fitness tracking, heart rate monitoring, and smart notifications. The sleek design and customizable watch faces make it a stylish and functional accessory.",
        price: 490,
        discount: "25%",
        picture: "https://m.media-amazon.com/images/I/61ZjlBOp+rL._SY450_.jpg",
        category: "Watch",
        quantity: "35"
    },
    {
        name: "Modern Digital Sports Watch",
        description: "Embrace modernity with our Modern Digital Sports Watch. Packed with features like backlight, alarm, and water resistance, this digital watch is perfect for sports enthusiasts. The bold design adds a contemporary touch to your wrist.",
        price: 160,
        discount: "30%",
        picture: "https://m.media-amazon.com/images/I/61Q8EUtsdmL._SL1500_.jpg",
        category: "Watch",
        quantity: "40"
    },
    {
        name: "Aviator Pilot Watch",
        description: "Take flight with our Aviator Pilot Watch. Inspired by aviation, this watch features a large, easy-to-read dial, a durable leather strap, and precise quartz movement. Make a statement with this bold and masculine timepiece.",
        price: 550,
        discount: "15%",
        picture: "https://m.media-amazon.com/images/I/61TZKEZgG+L._AC_UL480_FMwebp_QL65_.jpg",
        category: "Watch",
        quantity: "25"
    },
    {
        name: "Rose Gold Elegance Watch",
        description: "Radiate elegance with our Rose Gold Elegance Watch. This stunning timepiece features a rose gold-plated case, a minimalist dial with Swarovski crystals, and a chic mesh strap. Elevate your style with this glamorous and feminine watch.",
        price: 380,
        discount: "20%",
        picture: "https://m.media-amazon.com/images/I/71SMpLB1n5L._AC_UL480_FMwebp_QL65_.jpg",
        category: "Watch",
        quantity: "30"
    },
    {
        name: "Diver's Waterproof Watch",
        description: "Dive into adventure with our Diver's Waterproof Watch. Designed for underwater exploration, this watch features a robust case, luminous hands, and water resistance. The unidirectional bezel ensures precise timing during your dives.",
        price: 620,
        discount: "15%",
        picture: "https://m.media-amazon.com/images/I/71LWE5EWxDL._AC_UL480_FMwebp_QL65_.jpg",
        category: "Watch",
        quantity: "15"
    },
    {
        name: "Vintage Mechanical Pocket Watch",
        description: "Go vintage with our Vintage Mechanical Pocket Watch. This classic timepiece pays homage to the past with its intricate mechanical movement and antique-inspired design. Carry a piece of history in your pocket with this timeless pocket watch.",
        price: 290,
        discount: "25%",
        picture: "https://m.media-amazon.com/images/I/41eHWK83o-L._SX300_SY300_QL70_FMwebp_.jpg",
        category: "Watch",
        quantity: "20"
    },
    {
        name: "Casual Canvas Strap Watch",
        description: "Stay casual and stylish with our Casual Canvas Strap Watch. This laid-back timepiece features a comfortable canvas strap, a simple dial, and reliable quartz movement. Perfect for everyday wear, adding a touch of relaxed charm to your look.",
        price: 120,
        discount: "35%",
        picture: "https://m.media-amazon.com/images/I/61vkodEuEwL._AC_UL480_FMwebp_QL65_.jpg",
        category: "Watch",
        quantity: "45"
    },
    {
        name: "Tech-Infused Smartwatch",
        description: "Experience the future with our Tech-Infused Smartwatch. This cutting-edge wearable combines style with functionality, offering features like health monitoring, GPS, and app notifications. Stay connected and in control with this modern smartwatch.",
        price: 350,
        discount: "30%",
        picture: "https://m.media-amazon.com/images/I/61UwlgtWQ7L._AC_UY327_FMwebp_QL65_.jpg",
        category: "Watch",
        quantity: "40"
    },
    {
        name: "Retro-Style Mechanical Watch",
        description: "Embrace the charm of yesteryear with our Retro-Style Mechanical Watch. This mechanical marvel features a transparent case back, showcasing the intricate movement. The vintage design and genuine leather strap make it a timeless accessory.",
        price: 490,
        discount: "15%",
        picture: "https://m.media-amazon.com/images/I/81tfgLJGX1L._AC_UL480_FMwebp_QL65_.jpg",
        category: "Watch",
        quantity: "25"
    },
    {
        name: "Classic Denim Jacket",
        description: "Upgrade your wardrobe with our Classic Denim Jacket. This timeless piece combines style and versatility, featuring a durable denim fabric, button-up front, and multiple pockets. Perfect for layering and adding a touch of cool to any outfit.",
        price: 85,
        discount: "20%",
        picture: "https://m.media-amazon.com/images/I/71-Yor8u-XL._AC_UL480_FMwebp_QL65_.jpg",
        category: "Men",
        quantity: "40"
    },
    {
        name: "Slim Fit Cotton Shirt",
        description: "Look sharp in our Slim Fit Cotton Shirt. Tailored for a modern silhouette, this shirt is made from breathable cotton, ensuring both comfort and style. Ideal for business casual or smart-casual occasions, it's a wardrobe essential.",
        price: 45,
        discount: "15%",
        picture: "https://m.media-amazon.com/images/I/61DGAlvxRLL._AC_UL480_FMwebp_QL65_.jpg",
        category: "Men",
        quantity: "50"
    },
    {
        name: "Casual Cargo Shorts",
        description: "Stay comfortable and stylish in our Casual Cargo Shorts. Designed for a relaxed fit, these shorts feature multiple pockets for added convenience. The breathable fabric and versatile design make them perfect for casual outings.",
        price: 30,
        discount: "25%",
        picture: "https://m.media-amazon.com/images/I/913ZIEIQtmL._AC_UL480_FMwebp_QL65_.jpg",
        category: "Men",
        quantity: "60"
    },
    {
        name: "Classic Leather Belt",
        description: "Complete your look with our Classic Leather Belt. Crafted from genuine leather, this timeless accessory adds a touch of sophistication to any outfit. The adjustable buckle ensures a perfect fit for every occasion.",
        price: 25,
        discount: "30%",
        picture: "https://m.media-amazon.com/images/I/61WcVZyMn4L._AC_UL480_FMwebp_QL65_.jpg",
        category: "Men",
        quantity: "80"
    },
    {
        name: "Formal Slim-Fit Suit",
        description: "Make a statement in our Formal Slim-Fit Suit. Tailored for a modern and sophisticated look, this suit features a slim-fit jacket and trousers crafted from high-quality fabric. Perfect for weddings, parties, or formal events.",
        price: 200,
        discount: "10%",
        picture: "https://m.media-amazon.com/images/I/51nVJWSUUeL._AC_UL480_FMwebp_QL65_.jpg",
        category: "Men",
        quantity: "30"
    },
    {
        name: "Athletic Jogger Pants",
        description: "Combine comfort and style with our Athletic Jogger Pants. Featuring a relaxed fit and elastic cuffs, these pants are perfect for both workouts and casual wear. The breathable fabric provides all-day comfort.",
        price: 305,
        discount: "20%",
        picture: "https://m.media-amazon.com/images/I/31yaiq+FlXL._AC_UL480_FMwebp_QL65_.jpg",
        category: "Men",
        quantity: "45"
    },
    {
        name: "Leather Biker Jacket",
        description: "Add a touch of edge to your look with our Leather Biker Jacket. Crafted from genuine leather, this jacket features a zip-front closure and stylish details. Perfect for creating a rugged and stylish ensemble.",
        price: 860,
        discount: "15%",
        picture: "https://m.media-amazon.com/images/I/41Gqz5gS2wL._AC_UL480_FMwebp_QL65_.jpg",
        category: "Men",
        quantity: "25"
    },
    {
        name: "Sporty Hooded Sweatshirt",
        description: "Embrace a sporty vibe with our Sporty Hooded Sweatshirt. Featuring a hood and a front pouch pocket, this sweatshirt is both stylish and functional. Ideal for workouts or casual days when you want to stay warm and active.",
        price: 420,
        discount: "30%",
        picture: "https://m.media-amazon.com/images/I/51YtMmcqMPL._AC_UL480_FMwebp_QL65_.jpg",
        category: "Men",
        quantity: "50"
    },
    {
        name: "Elegant A-Line Dress",
        description: "Make a statement with our Elegant A-Line Dress. This timeless piece features a flattering A-line silhouette, a delicate floral pattern, and a comfortable fit. Perfect for special occasions, weddings, or a night out on the town.",
        price: 120,
        discount: "15%",
        picture: "https://m.media-amazon.com/images/I/51nso7wZP9L._AC_UL480_FMwebp_QL65_.jpg",
        category: "Women",
        quantity: "40"
    },
    {
        name: "Chic High Heels",
        description: "Step into style with our Chic High Heels. These versatile heels feature a classic design, a comfortable heel height, and a pointed toe. Elevate your look with these must-have shoes for any formal or semi-formal event.",
        price: 80,
        discount: "20%",
        picture: "https://m.media-amazon.com/images/I/41PFoZwa+GL._AC_UL480_FMwebp_QL65_.jpg",
        category: "Women",
        quantity: "50"
    },
    {
        name: "Bohemian Maxi Skirt",
        description: "Channel your inner bohemian spirit with our Bohemian Maxi Skirt. This flowy and vibrant skirt is perfect for a carefree and stylish look. The comfortable elastic waistband ensures a flattering and comfortable fit.",
        price: 610,
        discount: "25%",
        picture: "https://m.media-amazon.com/images/I/61JOLiesXaL._AC_UL480_FMwebp_QL65_.jpg",
        category: "Women",
        quantity: "60"
    },
    {
        name: "Classic Leather Handbag",
        description: "Complete your outfit with our Classic Leather Handbag. This timeless accessory features genuine leather, a spacious interior, and stylish hardware. The versatile design makes it perfect for both casual and formal occasions.",
        price: 230,
        discount: "30%",
        picture: "https://m.media-amazon.com/images/I/41bT9F0k-uL._AC_UL480_FMwebp_QL65_.jpg",
        category: "Women",
        quantity: "80"
    },
    {
        name: "Stylish Wide-Leg Jumpsuit",
        description: "Make a fashion statement with our Stylish Wide-Leg Jumpsuit. This chic one-piece features a flattering wide-leg silhouette, a belted waist, and a trendy design. Perfect for a sophisticated and modern look.",
        price: 1205,
        discount: "20%",
        picture: "https://m.media-amazon.com/images/I/81U3yfrAXDL._SL1500_.jpg",
        category: "Women",
        quantity: "45"
    },
    {
        name: "Fashionable Trench Coat",
        description: "Stay stylish in any weather with our Fashionable Trench Coat. This classic coat features a timeless design, a waist belt for a flattering fit, and durable materials. A must-have for your outerwear collection.",
        price: 950,
        discount: "25%",
        picture: "https://m.media-amazon.com/images/I/71HJjm2FLeL._AC_UL480_FMwebp_QL65_.jpg",
        category: "Women",
        quantity: "55"
    },
    {
        name: "Chic Wrap Dress",
        description: "Flatter your figure with our Chic Wrap Dress. This timeless and versatile dress features a classic wrap design, a V-neckline, and a tie waist for a customizable fit. Ideal for a polished look at work or social events.",
        price: 570,
        discount: "30%",
        picture: "https://m.media-amazon.com/images/I/31a2j6mFWhS._AC_UL480_FMwebp_QL65_.jpg",
        category: "Women",
        quantity: "50"
    },
    {
        name: "Statement Oversized Sunglasses",
        description: "Make a statement with our Oversized Sunglasses. These chic shades feature a bold frame, UV protection, and a glamorous oversized design. Perfect for adding a touch of glamour to your summer outfits.",
        price: 35,
        discount: "25%",
        picture: "https://m.media-amazon.com/images/I/51+fOjD-89L._AC_UL480_FMwebp_QL65_.jpg",
        category: "Women",
        quantity: "40"
    },
    {
        name: "Cozy Knit Sweater",
        description: "Stay cozy and stylish in our Cozy Knit Sweater. This soft and warm sweater features a relaxed fit, a ribbed hem and cuffs, and a classic knit design. Perfect for chilly days, adding a touch of comfort to your wardrobe.",
        price: 55,
        discount: "35%",
        picture: "https://m.media-amazon.com/images/I/71WGgiUG1nL._AC_UL480_FMwebp_QL65_.jpg",
        category: "Women",
        quantity: "65"
    },
    {
        name: "Adorable Animal Print Onesie",
        description: "Dress your little one in our Adorable Animal Print Onesie. This cute and comfortable onesie features playful animal prints, a snap-button closure for easy changing, and soft cotton fabric. Perfect for keeping your baby stylish and cozy.",
        price: 25,
        discount: "15%",
        picture: "https://m.media-amazon.com/images/I/51JmaIXAddL._AC_UL480_FMwebp_QL65_.jpg",
        category: "Kids",
        quantity: "50"
    },
    {
        name: "Colorful Kids Sneakers",
        description: "Let your child step out in style with our Colorful Kids Sneakers. These vibrant sneakers feature a secure velcro closure, a cushioned insole, and a durable rubber sole. Ideal for active play and adding a pop of color to their outfits.",
        price: 30,
        discount: "20%",
        picture: "https://m.media-amazon.com/images/I/81pmfuxv03L._AC_UL480_FMwebp_QL65_.jpg",
        category: "Kids",
        quantity: "60"
    },
    {
        name: "Cozy Cartoon Character Pajamas",
        description: "Make bedtime fun with our Cozy Cartoon Character Pajamas. These adorable pajamas feature beloved cartoon characters, a comfortable fit, and soft fabric for a good night's sleep. Your child will love bedtime in these cute PJs.",
        price: 20,
        discount: "25%",
        picture: "https://m.media-amazon.com/images/I/61UoPGlkxzL._AC_UL480_FMwebp_QL65_.jpg",
        category: "Kids",
        quantity: "70"
    },
    {
        name: "Dinosaur Backpack",
        description: "Spark your child's imagination with our Dinosaur Backpack. This playful backpack features a dinosaur design, adjustable straps, and multiple compartments for school essentials. Perfect for adding a touch of fun to their school days.",
        price: 15,
        discount: "30%",
        picture: "https://m.media-amazon.com/images/I/71qzzwoMByL._AC_UL480_FMwebp_QL65_.jpg",
        category: "Kids",
        quantity: "80"
    },
    {
        name: "Cute Floral Dress for Girls",
        description: "Dress up your little princess in our Cute Floral Dress. This charming dress features a lovely floral print, a twirl-worthy skirt, and a comfortable fit. Perfect for special occasions or just a day of play.",
        price: 35,
        discount: "10%",
        picture: "https://m.media-amazon.com/images/I/51U-i32i-FL._AC_UL480_FMwebp_QL65_.jpg",
        category: "Kids",
        quantity: "40"
    },
    {
        name: "Superhero Graphic T-Shirt",
        description: "Let your little hero shine with our Superhero Graphic T-Shirt. Featuring their favorite superheroes, this cool t-shirt is made from soft cotton and is perfect for everyday adventures. Your child will feel like a superhero in no time!",
        price: 18,
        discount: "15%",
        picture: "https://m.media-amazon.com/images/I/7118y2FcuHL._AC_UL480_FMwebp_QL65_.jpg",
        category: "Kids",
        quantity: "55"
    },
    {
        name: "Cuddly Teddy Bear Plush Toy",
        description: "Give your child a new cuddly companion with our Teddy Bear Plush Toy. This adorable teddy bear is soft, huggable, and ready for countless adventures. A perfect gift for birthdays or just to bring comfort and joy.",
        price: 12,
        discount: "25%",
        picture: "https://m.media-amazon.com/images/I/71dKqQONgaL._AC_UL480_FMwebp_QL65_.jpg",
        category: "Kids",
        quantity: "65"
    },
    {
        name: "Cartoon Character Raincoat",
        description: "Keep your child dry and happy with our Cartoon Character Raincoat. Featuring a cheerful cartoon character design, a hood, and waterproof material, this raincoat will make rainy days more fun for your little one.",
        price: 205,
        discount: "20%",
        picture: "https://image.alza.cz/products/BABY3378/BABY3378-02.jpg?width=500&height=500",
        category: "Kids",
        quantity: "50"
    },
    {
        name: "Denim Overall Shorts",
        description: "Dress your little trendsetter in our Denim Overall Shorts. These stylish shorts feature a classic denim design, adjustable straps, and pockets for a cool and comfortable look. Perfect for playdates and summer adventures.",
        price: 28,
        discount: "15%",
        picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeYKgdAb9QAWIO4nJx1oQfbx_TKGXF-kIQp9B4pi_qDnqNyZ7Hb7kOmz8b7mqggJ6T1Qc&usqp=CAU",
        category: "Kids",
        quantity: "45"
    },
    {
        name: "Playful Unicorn Backpack",
        description: "Add a touch of magic to your child's day with our Playful Unicorn Backpack. This whimsical backpack features a unicorn design, adjustable shoulder straps, and a spacious interior for school essentials. Perfect for young unicorn enthusiasts.",
        price: 22,
        discount: "30%",
        picture: "https://vismiintrend.com/wp-content/uploads/2023/04/DSC04592-scaled.jpg",
        category: "Kids",
        quantity: "60"
    },
    {
        name: "Sporty Track Suit for Boys",
        description: "Get your little athlete ready for action with our Sporty Track Suit. This comfortable and stylish track suit features a zip-up jacket and matching pants, perfect for sports practice or casual play. Let them move with confidence and style.",
        price: 280,
        discount: "20%",
        picture: "https://www.diadora.com/dw/image/v2/BBPK_PRD/on/demandware.static/-/Sites-diadora-master/default/dw07aa55a4/images/hi-res/102.178715_40015_00_HR.jpg?sw=1920",
        category: "Kids",
        quantity: "50"
    }

]

const seeduser = {}
module.exports = { seedproducts, seeduser }