const products = [
  {
    name: "Airpods Wireless Bluetooth Headphones",
    image: "/images/airpods.jpg",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    category: "Electronics",
    price: 89.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    name: "iPhone 11 Pro 256GB Memory",
    image: "/images/phone.jpg",
    description:
      "Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life",
    brand: "Apple",
    category: "Electronics",
    price: 599.99,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
  },
  {
    name: "Cannon EOS 80D DSLR Camera",
    image: "/images/camera.jpg",
    description:
      "Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design",
    brand: "Cannon",
    category: "Electronics",
    price: 929.99,
    countInStock: 5,
    rating: 3,
    numReviews: 12,
  },
  {
    name: "Sony Playstation 4 Pro White Version",
    image: "/images/playstation.jpg",
    description:
      "The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music",
    brand: "Sony",
    category: "Electronics",
    price: 399.99,
    countInStock: 11,
    rating: 5,
    numReviews: 12,
  },
  {
    name: "Logitech G-Series Gaming Mouse",
    image: "/images/mouse.jpg",
    description:
      "Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience",
    brand: "Logitech",
    category: "Electronics",
    price: 49.99,
    countInStock: 7,
    rating: 3.5,
    numReviews: 10,
  },
  {
    name: "Amazon Echo Dot 3rd Generation",
    image: "/images/alexa.jpg",
    description:
      "Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space",
    brand: "Amazon",
    category: "Electronics",
    price: 29.99,
    countInStock: 0,
    rating: 4,
    numReviews: 12,
  },
  {
    name: "HP 100 Wired USB Keyboard",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81nme1qpLZL._SL1500_.jpg",
    description:
      "Features a full range of 109 keys, including 12 working function keys and 3 hot keys,Designed for comfort Natural contours and shape allow the keyboard to sit in a comfortable position for your wrist and hands,Connection is a breeze with USB connectivity so you can get up and running fast,Compatible with Windows 7/8/10 Operating Systems and available USB port compatibility, adjustable height.",
    brand: "HP",
    category: "Electronics",
    price: 9.99,
    countInStock: 5,
    rating: 4.6,
    numReviews: 8,
  },
  {
    name: "boAt Rockerz 510 Bluetooth On-Ear Headphone with Mic(Raging Red)",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61YvHa6o94L._SL1500_.jpg",
    description:
      "Battery: Rockerz 510 offers a playback time of up to 20 hours and gets charged to 100% in 2-2.5 hours,Bluetooth: It has Bluetooth v4.1 with a range of 10m and is compatible with Android & iOS,No. of Mic: 1,Other Inclusions: Micro USB Charging Cable, Warranty Card, User Manual,Instant Voice Assistant",
    brand: "BOAT",
    category: "Electronics",
    price: 24.99,
    countInStock: 3,
    rating: 4.8,
    numReviews: 9,
  },
  {
    name:
      "boAt Rockerz 255 Sports in-Ear Bluetooth Neckband Earphone with Mic(Neon)",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61BSpkRG7dL._SL1500_.jpg",
    description:
      "Battery: Rockerz 255 offers a playback time of up to 6 hours and gets charged to 100% in 1.5 hours. Standby Time 150 hours. Talktime 6 hours,Bluetooth: It has Bluetooth v4.1 with a range of 10m and is compatible with Android & iOS,No. of Mic: 1,Other Inclusions: Additional Earmuffs, Micro USB Charging Cable, Warranty Card, User Manual ",
    brand: "BOAT",
    category: "Electronics",
    price: 13.99,
    countInStock: 6,
    rating: 4.5,
    numReviews: 5,
  },
  {
    name:
      "Seagate Expansion Portable 1.5 TB External Hard Drive HDD – USB 3.0 for PC Laptop and 3-Year Rescue Services (STEA1500400)",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71p2W9Ykh7L._SL1000_.jpg",
    description:
      "Easily store and access 1 TB of content on the go with Seagate Expansion Portable hard drive,This external hard drive for Windows computers makes backup a snap — just drag-and-drop!,This USB drive provides plug-and-play simplicity with the included 18-inch USB 3.0 cable,Enjoy long-term peace of mind with the included 3-year limited warranty and 3-year Rescue Data",
    brand: "SEAGATE",
    category: "Electronics",
    price: 19.99,
    countInStock: 2,
    rating: 4.4,
    numReviews: 10,
  },
  {
    name:
      "Noble Skiodo 101.6 cm (40 Inches) Full HD LED Smart TV 42SM40P01 (Black) (2016 model)",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71MxjB%2BSx6L._SL1485_.jpg",
    description:
      "Resolution: Full HD (1920x1080p) | Refresh Rate: 60 Hertz,Display: FHD Resolution,,Smart TV Features: Buit-in WiFi | Multiple Inbuilt Apps | Smart Wireless Keyboard | Cortex A7 Dual Core CPU | 1Gb DDR4 RAM | 4GB EMMC Flash Memory | Mali450MP2 GPU,Connectivity: 2 HDMI ports to connect set top box, Blu Ray players, gaming console | 2 USB port to connect hard drives and other USB devices",
    brand: "Noble Skiodo",
    category: "Electronics",
    price: 1999.99,
    countInStock: 6,
    rating: 4.3,
    numReviews: 5,
  },
  {
    name: "Lenovo Smart Scale",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51jWKKnPkPL._SL1001_.jpg",
    description:
      "Bluetooth 4.0 BLE,Smart body fat scale with app support,Overall Dimension: 300x300x28mm,5kg-180kg capacity accuracy plus or minus 0.5 percent,BMI measuring (Body Mass Index),Body fat/water measuring,Muscle mass/bone mass measuring",
    brand: "LENOVO",
    category: "Electronics",
    price: 19.99,
    countInStock: 14,
    rating: 4.7,
    numReviews: 13,
  },
  {
    name:
      "IFITech Smart Life Wireless Video Doorbell + CHIME | 720P (1MP) Video Resolution | PIR Motion Detection Alert | Nigh Vision Full HD Camera | Built-in Rechargeable Battery | Remote Control From Anywhere-Silver…",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61ZBBmCeU6L._SL1038_.jpg",
    description:
      "✅ [Smart Video Doorbell 720P HD Camera]: 1MP HD wide-angle camera provides a clear and complete overview, wide-angle camera lens with 166 degrees, IFI Smart Life App smart control from anywhere. No wiring required when batteries used, and super long standby life. Indoor Chime to ring the bell everytime any one presses,No RJ45/LAN wiring required till the door, supports wifi 2.4GHz, Instant Push Alarm Notifications to mobile via APP ",
    brand: "IFITech",
    category: "Electronics",
    price: 16.99,
    countInStock: 6,
    rating: 4.4,
    numReviews: 11,
  },
  {
    name:
      "Focusrite Scarlett 2i2 (3rd Gen) USB Audio Interface with Pro Tools, First",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71ST3ZS964L._SL1500_.jpg",
    description:
      "Two of the best performing mic preamps the Scarlett range has ever seen, now with switchable Air mode to give your recordings a brighter and more open sound,Two high-headroom instrument inputs to plug in your guitar or bass,High-performance converters enable you to record and mix at up to 24-bit/192kHz",
    brand: "Focusrite",
    category: "Electronics",
    price: 24.99,
    countInStock: 3,
    rating: 4.7,
    numReviews: 19,
  },
  {
    name:
      "Samsung Galaxy Tab A 10.1 (10.1 inch, RAM 2GB, ROM 32GB, Wi-Fi-Only), Black",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71PWPoS%2BNtL._SL1500_.jpg",
    description:
      "10.1 inch (25.65 centimeters) WUXGA with 1920 x 1200 pixels resolution,1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase,8MP primary camera | 5MP front facing camera,2 GB RAM, 32 GB internal memory, expandable up to 512 GB",
    brand: "Samsung",
    price: 22.99,
    countInStock: 1,
    category: "Electronics",
    rating: 4.6,
    numReviews: 9,
  },
  {
    name:
      "Samsung 192 L 2 Star Direct Cool Single Door Refrigerator (RR19T241BSE/NL, Elective Silver)",
    image:
      "data:image/webp;base64,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",
    description:
      "Direct-cool refrigerator : economical and Cooling without fluctuation,Capacity 192 liters: suitable for families with 2 to 3 members and bachelors,Manufacturer warranty: 1 year on product, 10 years on compressor,Shelf type: spill proof toughened glass",
    brand: "Samsung",
    price: 1499.99,
    category: "Electronics",
    countInStock: 2,
    rating: 4.2,
    numReviews: 7,
  },
  {
    name:
      "Samsung 7 kg 5 star inverter Fully Automatic Front Load with In-built Heater White  (WW70J42G0BW/TL)",
    image:
      "https://rukminim1.flixcart.com/image/612/612/kd7pevk0/washing-machine-new/m/g/g/ww70j42g0bw-tl-samsung-original-imafu5eyzbspnha8.jpeg?q=70",
    description:
      "Fully Automatic Front Load Washing Machines have Great Wash Quality with very less running cost",
    brand: "samsung",
    category: "Electronics",
    price: 120,
    countInStock: 3,
    rating: 4.4,
    numReviews: 12,
  },
  {
    name:
      "Rk Aquafresh India AKM-200 Active Copper filter 12 L RO + UV + UF + Minerals Water Purifier  (White)",
    image:
      "https://rukminim1.flixcart.com/image/416/416/kfzq8i80/water-purifier/g/m/y/rk-aquafresh-india-akm-200-original-imafwc32fzaexzep.jpeg?q=70",
    description:
      "Electrical & Storage : Electric purification - suitable for areas with water shortage",
    brand: "Amazon",
    category: "Electronics",
    price: 50.99,
    countInStock: 5,
    rating: 4.2,
    numReviews: 12,
  },
  {
    name: "Bajaj Majesty DHX9 1000 W Dry Iron  (ivory)",
    image:
      "https://rukminim1.flixcart.com/image/612/612/kehfi4w0pkrrdj/iron-refurbished/m/7/e/a-majesty-dhx9-bajaj-original-imafv9utpvr8ggv5.jpeg?q=70",
    description:
      "Our innovative and comprehensive range of home appliances make life a whole lot easier. Like a helping hand, they ae designed to make life comfortable",
    brand: "Amazon",
    category: "Electronics",
    price: 30,
    countInStock: 3,
    rating: 3,
    numReviews: 12,
  },
  {
    name:
      "ESN 999 High Quality 2000 W Immersion Heater Rod 2000 Immersion Heater Rod  (Water)",
    image:
      "https://rukminim1.flixcart.com/image/612/612/jppsqkw0/immersion-rod/d/f/n/2000-high-quality-2000-w-immersion-heater-rod-esn-999-original-imafbsxzqafybehr.jpeg?q=70",
    description:
      "The immersion heating rod from ESN 999 is an ISI certified product. This is easy to use. One Of A Kind Immersion Water Heater, Totally Shock Proof DonT Worry Just Drop It Into The Water Bucket and your hot water is ready.",
    brand: "Amazon",
    category: "Electronics",
    price: 20,
    countInStock: 5,
    rating: 3.5,
    numReviews: 10,
  },
  {
    name:
      "RFV1 (tm) BF-888S UHF 400-470MHz CTCSS/DCS with Earpiece Handheld Amateur Radio Tranceiver Walkie Talkie Two Way Radio Long Range Black 4 Pack Walkie Talkie  (Black)",
    image:
      "https://rukminim1.flixcart.com/image/612/612/kbjox3k0/walkie-talkie/h/f/f/tm-bf-888s-uhf-400-470mhz-ctcss-dcs-with-earpiece-handheld-original-imafsvhgyjf8hkbz.jpeg?q=70",
    description:
      "RFV1 Descriptions Walkie Talkie Model: Baofeng BF-888s Rated Voltage: 3.7V DC Output power: Battery type: Li-ion battery Battery capacity:Basic Descriptions Walkie Talkie Model: Baofeng BF-888s Rated Voltage: 3.7V DC Output power: Battery type: Li-ion battery.",
    brand: "Amazon",
    category: "Electronics",
    price: 15,
    countInStock: 4,
    rating: 4.1,
    numReviews: 12,
  },
  {
    name: "Philips S 4 Socket Extension Boards  (White)",
    image:
      "https://rukminim1.flixcart.com/image/416/416/khp664w0-0/surge-protector/8/9/s/spn1247wd-94-philips-original-imafxnannr3bfpzy.jpeg?q=70",
    description:
      "One of the most portable device made fro the comfort of buyer",
    brand: "Amazon",
    category: "Electronics",
    price: 25,
    countInStock: 2,
    rating: 3.7,
    numReviews: 12,
  },
  {
    name: "Sansui 5 L Instant Water Geyser with Pipes (Azure, Cobalt Blue)",
    image:
      "https://rukminim1.flixcart.com/image/416/416/ke4kjgw0/water-geyser/z/n/x/azure-3000-sansui-5-original-imafuvpfrzhjxgev.jpeg?q=70",
    description:
      "Bathing, doing the dishes, or washing laundry during winters will not be painful tasks anymore with the Sansui Azure Instant Water Geyser in your home. This geyser features a heavy guage Copper Heating Element, a Stainless Steel Weldless Tank, pressure release valve, thermal cutout to offer you an efficient and durable product.",
    brand: "Amazon",
    category: "Electronics",
    price: 90,
    countInStock: 4,
    rating: 5,
    numReviews: 12,
  },
  {
    name: "pat Oeh-1220 OEH-1220 Fan Room Heater",
    image:
      "https://rukminim1.flixcart.com/image/612/612/jpsnma80/room-heater/x/d/b/oeh-1220-orpat-original-imafbyqfvmzaqrxf.jpeg?q=70",
    description:
      "ORPAT Group is a pioneer in India to develop in-house C.O.B. Technology. Being an ISO-9002 & 14001 Certified Company, it assures quality process, quality management systems and quality products. Quality Control and Quality Assurance processes are well designed to ensure superior quality products",
    brand: "Amazon",
    category: "Electronics",
    price: 50,
    countInStock: 6,
    rating: 4.5,
    numReviews: 10,
  },
  {
    name:
      "Crompton Super Briz Deco Smoked Brown 1200 mm 3 Blade Ceiling Fan  (Smoked Brown, Pack of 1)",
    image:
      "https://rukminim1.flixcart.com/image/612/612/kfikya80/fan/h/j/v/super-briz-deco-smoked-brown-74-1-ceiling-fan-1200-crompton-original-imafvya9u3p3qhud.jpeg?q=70",
    description:
      "It is a good-looking ceiling fan which has an ornamental design with attractive gold finish shanks. It has a metallic special finish for a perfect lustrous look. This ceiling fan has 3 blades which are broad at the end, to facilitate higher air delivery and air spread for a pleasant cooling during the hot weather.",
    brand: "Amazon",
    category: "Electronics",
    price: 40,
    countInStock: 8,
    rating: 3.9,
    numReviews: 12,
  },
  {
    name:
      "ELV Car Mount Adjustable Car Phone Holder Universal Long Arm, Windshield for Smartphones - Black",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61sCL37xvlL._SL1080_.jpg",
    description:
      "PRODUCT FEATURES : ELV Easy one touch mounting system locks and releases the device with just a push of a finger, Two step locking lever provides additional mounting support for multiple surfaces.",
    brand: "Amazon",
    category: "Electronics",
    price: 19.99,
    countInStock: 3,
    rating: 4.6,
    numReviews: 12,
  },
  {
    name: "Butterfly Rapid Kettle 1.5 Litre + Eco 750 Ml Water Bottle",
    image:
      "https://rukminim1.flixcart.com/image/832/832/k0wqwsw0/electric-kettle/g/t/d/butterfly-rapid-kettle-1-5-litre-wave-750-ml-water-bottle-rapid-original-imafkfy7zaekbubs.jpeg?q=70",
    description:
      "Prepare hot water, instant tea etc in a matter of minutes with Butterfly EKN 1.5 Kettle. With attractive features like automatic cut-off, ergonomically designed handles, unique designs with attractive finishes, lightweight and compact, making it easy to carry. To top it off, it also comes with the best in class safety features & stainless Steel water bottle , making it safe to use.",
    category: "Electronics",
    price: 59.99,
    countInStock: 8,
    rating: 4.7,
    numReviews: 6,
    brand: "Flipkart",
  },
  {
    name: "boAt Airdopes 441 TWS Ear-Buds with IWP Technology",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/614iWzISPoL._SL1500_.jpg",
    description:
      "Battery: Airdopes 441 offers a playback time of up to 5 hours in earbuds & 25 hours in charging case and earbuds get charged to 100% in 1.5 hours,Bluetooth: It has Bluetooth v5.0 with a range of 10m and is compatible with Android",
    brand: "BOAT",
    category: "Electronics",
    price: 39.99,
    countInStock: 8,
    rating: 4.8,
    numReviews: 12,
  },
  {
    name:
      "FOR GSM DUAL SIM F1+FIX WIRELESS PHONE,CORDED&CORDLESS Corded & Cordless Landline Phone with Answering Machine  (White)",
    image:
      "https://rukminim1.flixcart.com/image/612/612/jmp79u80-1/landline-phone/2/m/a/gsm-dual-sim-f1-fix-wireless-phone-corded-cordless-for-original-imaf9jxypsfacxgt.jpeg?q=70",
    description:
      "Type:Corded & Cordless Phone with Answering Machine ,Model Name:GSM DUAL SIM F1+FIX WIRELESS PHONE,CORDED&CORDLESS ,Network Types:ANY GSM SIM",
    brand: "Amazon",
    category: "Electronics",
    price: 36,
    countInStock: 2,
    rating: 3.9,
    numReviews: 7,
  },
  {
    name: "Prestige Cleanhome Typhoon05 Wet & Dry Vacuum Cleaner  (Red)",
    image:
      "https://rukminim1.flixcart.com/image/416/416/jge09e80/vacuum-cleaner/a/d/y/prestige-wet-and-dry-vacuum-cleaner-original-imaf4n3a4pfzxf62.jpeg?q=70",
    description:
      " Dusty furniture? Bring home this Prestige Wet and Dry vacuum cleaner and bid adieu to all your cleaning woes. With its Advanced HEPA Filter and High Dust Case Capacity, this vacuum cleaner will help you clean large areas with ease, without letting the motor get clogged by the accumulated dust particles.",
    brand: "Amazon",
    category: "Electronics",
    price: 29.99,
    countInStock: 0,
    rating: 4,
    numReviews: 12,
  },
  {
    name:
      "Orient Electric Wendy 1200 mm 3 Blade Ceiling Fan  (Azure Blue Silver, Pack of 1)",
    image:
      "https://rukminim1.flixcart.com/image/416/416/kao98cw0/fan/r/u/u/wendy-70-ceiling-fan-1200-orient-electric-original-imafs6w2nkrkxenu.jpeg?q=70",
    description:
      "Don’t let the summer heat make you feel tired and sweaty. Install the Orient Electric Wendy 3-blade Ceiling Fan in your home, so you can stay cool at all times. Featuring a stylish metallic finish and a powerful air delivery, this ceiling fan is sure to be an ideal addition to your home. The motor of this fan is made from copper and lasts long.",
    category: "Electronics",
    price: 29.99,
    brand: "Orient",
    countInStock: 6,
    rating: 2,
    numReviews: 5,
  },
];

export default products;
