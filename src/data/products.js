// Complete product database for Nike store
export const products = [
  // MEN'S SHOES
  {
    id: 1,
    name: "Air Max 270",
    price: "$150",
    originalPrice: "$180",
    image:
      "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=500",
    images: {
      Black:
        "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=500",
      White:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9b4986eb-c9c3-47c6-ab7f-db0fe7e6341a/AIR+ZOOM+PEGASUS+41.png",
      Red: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b17c15b4-899e-440e-88f9-52e4be2bb6a8/NIKE+DUNK+LOW+RETRO+SE.png",
      Blue: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d0243afc-feac-45a7-aaa3-18315720e1fc/AIR+MAX+90+G.png",
    },

    colors: ["Black", "White", "Red", "Blue"],
    category: "men",
    subcategory: "shoes",
    type: "running",
    rating: 4.5,
    reviews: 127,
    sizes: [
      "7",
      "7.5",
      "8",
      "8.5",
      "9",
      "9.5",
      "10",
      "10.5",
      "11",
      "11.5",
      "12",
    ],
    sale: true,
    featured: true,
    description:
      "The Nike Air Max 270 delivers visible Air cushioning underfoot with a sleek, modern design.",
    features: ["Max Air cushioning", "Mesh upper", "Durable rubber outsole"],
  },
  {
    id: 2,
    name: "Air Force 1 Low",
    price: "$120",
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8f08ab32-cef5-478c-99e7-9464f6fa4316/WMNS+AIR+FORCE+1+%2707+LX.png",
    images: {
      White:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8f08ab32-cef5-478c-99e7-9464f6fa4316/WMNS+AIR+FORCE+1+%2707+LX.png",
      Black:
        "https://images.pexels.com/photos/1464624/pexels-photo-1464624.jpeg?auto=compress&cs=tinysrgb&w=500",
      Red: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/09db5ab7-df74-4c82-907a-abcc26807fe5/WMNS+AIR+FORCE+1+%2707.png",
      Navy: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/98fe7141-edae-4e81-9cbf-69a7a038a8cd/AIR+FORCE+1+%2707+LV8.png",
    },

    category: "men",
    subcategory: "shoes",
    type: "lifestyle",
    rating: 4.8,
    reviews: 342,
    colors: ["White", "Black", "Red", "Navy"],
    sizes: [
      "7",
      "7.5",
      "8",
      "8.5",
      "9",
      "9.5",
      "10",
      "10.5",
      "11",
      "11.5",
      "12",
    ],
    sale: false,
    featured: true,
    description:
      "The classic basketball shoe that started it all. Clean, simple, and timeless.",
    features: ["Leather upper", "Air-Sole unit", "Rubber outsole"],
  },
  {
    id: 3,
    name: "React Infinity Run",
    price: "$160",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/53e66307-3853-4168-a04a-a9f4ffd06b56/NIKE+RUN+DEFY.png",
    images: {
      Black:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/53e66307-3853-4168-a04a-a9f4ffd06b56/NIKE+RUN+DEFY.png",
      White:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/i1-58646f4c-ff23-44cb-8bd5-d99f534fd7ba/W+NIKE+REACT+PHANTOM+RUN+FK+2.png",
      Gray: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/efdd01f4-2345-4585-8694-fa5e6e4a9418/NIKE+RUN+DEFY.png",
      Blue: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f2309f29-416b-4a79-a1d7-b3453e060ac5/NIKE+RUN+SWIFT+3.png",
    },
    category: "men",
    subcategory: "shoes",
    type: "running",
    rating: 4.6,
    reviews: 198,
    colors: ["Black", "White", "Gray", "Blue"],
    sizes: [
      "7",
      "7.5",
      "8",
      "8.5",
      "9",
      "9.5",
      "10",
      "10.5",
      "11",
      "11.5",
      "12",
    ],
    sale: false,
    featured: false,
    description: "Designed to help reduce injury and keep you on the run.",
    features: ["React foam", "Flyknit upper", "Rocker geometry"],
  },
  {
    id: 4,
    name: "Zoom Pegasus 40",
    price: "$130",
    originalPrice: "$150",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/81711d75-ce61-4233-b76e-a133d7a0cae8/NIKE+PEGASUS+PREMIUM.png",
    images: {
      Black:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/81711d75-ce61-4233-b76e-a133d7a0cae8/NIKE+PEGASUS+PREMIUM.png",
      White:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/00d9db34-1ee6-4a0f-b2f4-d404abd87d89/NIKE+PEGASUS+PREMIUM.png",
      Gray: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2d158090-0b1f-4a76-a453-a1e1277af85e/AIR+ZOOM+PEGASUS+41.png",
      Green:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fd2a0420-e598-407d-a015-9f5fb409d486/NIKE+PEGASUS+PREMIUM.png",
    },

    category: "men",
    subcategory: "shoes",
    type: "running",
    rating: 4.4,
    reviews: 156,
    colors: ["Black", "White", "Gray", "Green"],
    sizes: [
      "7",
      "7.5",
      "8",
      "8.5",
      "9",
      "9.5",
      "10",
      "10.5",
      "11",
      "11.5",
      "12",
    ],
    sale: true,
    featured: false,
    description: "The most trusted running shoe, now with enhanced comfort.",
    features: ["Zoom Air unit", "Engineered mesh", "Waffle outsole"],
  },
  {
    id: 5,
    name: "Dunk Low",
    price: "$110",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2990f85d-8844-4e5b-a222-31ed53a5a9d4/NIKE+DUNK+LOW+RETRO.png",
    images: {
      White:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2990f85d-8844-4e5b-a222-31ed53a5a9d4/NIKE+DUNK+LOW+RETRO.png",
      Black:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0f76f73e-2578-4d62-abab-c5563ea4f78c/NIKE+DUNK+LOW+RETRO.png",
      Red: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4c07bec7-d921-46b9-a2ee-dfaeffab273e/NIKE+SB+DUNK+LOW+PRO.png",
      Blue: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/73bae011-33b9-46dc-852b-5266809976b0/NIKE+DUNK+LOW+RETRO.png",
      Green:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8293ca0b-c851-4cdb-bab8-58c9c3e4513a/NIKE+SB+DUNK+LOW+PRO+B.png",
    },
    category: "men",
    subcategory: "shoes",
    type: "lifestyle",
    rating: 4.7,
    reviews: 289,
    colors: ["White", "Black", "Red", "Blue", "Green"],
    sizes: [
      "7",
      "7.5",
      "8",
      "8.5",
      "9",
      "9.5",
      "10",
      "10.5",
      "11",
      "11.5",
      "12",
    ],
    sale: false,
    featured: false,
    description: "Created for the hardwood but taken to the streets.",
    features: ["Leather upper", "Foam midsole", "Rubber outsole"],
  },

  // MEN'S CLOTHING
  {
    id: 6,
    name: "Dri-FIT Training Shirt",
    price: "$35",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/95092704-4d36-4048-9af3-9052742e1869/AS+M+NP+DF+TIGHT+TOP+SS.png",
    images: {
      Black:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/95092704-4d36-4048-9af3-9052742e1869/AS+M+NP+DF+TIGHT+TOP+SS.png",
      White:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/28b86da4-52cc-4dd7-b420-f833362f9903/AS+M+NP+DF+TIGHT+TOP+SS.png",
      Gray: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/14cf6b6a-49cb-48ca-86fb-8fe4f04dbd29/AS+M+NK+DF+TEE+RLGD+RESET.png",
      Navy: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/21ea67e3-89bf-409d-912e-12ebee68afa2/AS+M+NP+DF+TIGHT+TOP+LS.png",
    },
    category: "men",
    subcategory: "clothing",
    type: "tops",
    rating: 4.3,
    reviews: 156,
    colors: ["Black", "White", "Gray", "Navy"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    sale: false,
    featured: true,
    description: "Sweat-wicking technology keeps you dry and comfortable.",
    features: ["Dri-FIT technology", "Standard fit", "Crew neck"],
  },
  {
    id: 7,
    name: "Pro Flex Shorts",
    price: "$45",
    originalPrice: "$60",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/38e84074-7b89-4433-a649-26232214334c/AS+M+NK+DF+WVN+DNA+6IN+SHORT.png",
    images: {
      Black:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/38e84074-7b89-4433-a649-26232214334c/AS+M+NK+DF+WVN+DNA+6IN+SHORT.png",
      Navy: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/9c53fd3a-6287-4606-83d4-24b3a519f5ec/PSG+M+NK+DF+STRK+SHORT+KZ+4TH.png",
      Gray: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/636e3c84-48fd-4549-bd2c-07f794f85c4c/AS+M+NK+CLUB+FLOW+FT+SHORT.png",
      Khaki:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/920e44a9-a8df-4737-91cb-70ca537e7585/AS+U+NK+DF+KEARNY+CRGO+SHORT+O.png",
    },

    category: "men",
    subcategory: "clothing",
    type: "bottoms",
    rating: 4.6,
    reviews: 203,
    colors: ["Black", "Navy", "Gray", "Khaki"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    sale: true,
    featured: false,
    description: "Flexible fabric moves with you during intense workouts.",
    features: ["Flex fabric", "Moisture-wicking", "Side pockets"],
  },
  {
    id: 8,
    name: "Tech Fleece Hoodie",
    price: "$90",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d3ad3f25-ea07-43b3-8175-3455e3d8803e/AS+M+NK+DF+FORM+HD+JKT+SWOOSH.png",
    images: {
      Black:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d3ad3f25-ea07-43b3-8175-3455e3d8803e/AS+M+NK+DF+FORM+HD+JKT+SWOOSH.png",
      Gray: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/4bdb8ce2-f6bc-4cd0-951d-64451cd53b95/M+J+DF+SPRT+HOOP+FLC+PO.png",
      Blue: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/65526705-26d0-403e-a18b-360ae7cd3ccc/AS+M+NP+DF+NPT+MIDLAYER+HOODIE.png",
      Green:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7c9f57d9-1952-4f97-bd55-c0bd337e946a/AS+M+NK+TCH+FLC+HOODIE+DYE.png",
    },
    category: "men",
    subcategory: "clothing",
    type: "tops",
    rating: 4.8,
    reviews: 234,
    colors: ["Black", "Gray", "Blue", "Green"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    sale: false,
    featured: true,
    description: "Premium fleece with a modern, streamlined fit.",
    features: ["Tech Fleece fabric", "Zippered pockets", "Adjustable hood"],
  },
  {
    id: 9,
    name: "Basketball Jersey",
    price: "$85",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1a81b580-3e87-462e-81ea-173530c7fbf1/AS+M+NK+DF+ICON+JSY+STRTFV.png",
    images: {
      Black:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1a81b580-3e87-462e-81ea-173530c7fbf1/AS+M+NK+DF+ICON+JSY+STRTFV.png",
      White:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c03c36d7-b45d-4fa5-b074-e88a6c1b4450/AS+M+NK+DF+TEE+RLGD+OC+3.png",
      Red: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/198ef57b-17dc-4964-9a69-c7f6d5babff5/M+J+DF+SPRT+SLVLS+TOP.png",
      Blue: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/bfc1673b-512a-41f2-ac9f-d0e3eb9f9190/AS+AW+M+NK+DF+TEE+AJA+SIGNATUR.png",
    },
    category: "men",
    subcategory: "clothing",
    type: "tops",
    rating: 4.4,
    reviews: 89,
    colors: ["Black", "White", "Red", "Blue"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    sale: false,
    featured: false,
    description: "Authentic basketball jersey with moisture-wicking fabric.",
    features: ["Dri-FIT technology", "Mesh panels", "Team graphics"],
  },

  // MEN'S ACCESSORIES
  {
    id: 10,
    name: "Running Cap",
    price: "$25",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0d8b1e0d-1d41-4b32-9baf-c34208fc6f2b/U+NK+DFADV+CLUB+CAP+U+SAB+P.png",
    images: {
      Black:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0d8b1e0d-1d41-4b32-9baf-c34208fc6f2b/U+NK+DFADV+CLUB+CAP+U+SAB+P.png",
      White:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6dccda06-1217-419e-aa20-e57bc00f355a/U+NK+DFADV+CLUB+CAP+S+AB+P.png",
      Navy: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0f0a7877-7aef-447f-86c2-1ef62d7c1c93/U+NK+DF+CLUB+CAP+U+CB+MTSWSH+L.png",
      Gray: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c45ce5f8-816c-43f6-adb1-ff760d022e08/U+NK+CLUB+CAP+U+CB+FUT+WSH+L.png",
    },
    category: "men",
    subcategory: "accessories",
    type: "headwear",
    rating: 4.2,
    reviews: 67,
    colors: ["Black", "White", "Navy", "Gray"],
    sizes: ["One Size"],
    sale: false,
    featured: false,
    description: "Lightweight cap with sweat-wicking sweatband.",
    features: ["Dri-FIT sweatband", "Adjustable strap", "Curved brim"],
  },
  {
    id: 11,
    name: "Training Gloves",
    price: "$30",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2df30f5e-46ad-419f-91af-928706568060/NK+GK+MATCH+-+HO24.png",
    images: {
      Black:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2df30f5e-46ad-419f-91af-928706568060/NK+GK+MATCH+-+HO24.png",
      Gray: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3c812e6d-4f00-4e26-9431-11caf42474fc/NK+GK+MATCH+-+HO24.png",
    },
    category: "men",
    subcategory: "accessories",
    type: "equipment",
    rating: 4.5,
    reviews: 123,
    colors: ["Black", "Gray"],
    sizes: ["S", "M", "L", "XL"],
    sale: false,
    featured: false,
    description: "Durable training gloves with enhanced grip.",
    features: ["Synthetic leather palm", "Mesh back", "Wrist wrap"],
  },

  // WOMEN'S SHOES
  {
    id: 12,
    name: "Air Max 97",
    price: "$170",
    originalPrice: "$200",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/942e739a-e836-426d-870e-d8340042225c/W+AIR+MAX+DN.png",
    images: {
      White:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/942e739a-e836-426d-870e-d8340042225c/W+AIR+MAX+DN.png",
      Pink: " https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7648f261-f1e5-4b66-b0e2-2d29890901e1/W+AIR+MAX+DN8.png",
      Silver:
        " https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/da65bdd4-2934-47d8-8df1-1c1af2c2835f/W+AIR+MAX+DN8.png",
      Black:
        " https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/61e65571-dff5-4043-96fc-045486a652a7/AIR+MAX+DN8+PRM.png",
    },
    category: "women",
    subcategory: "shoes",
    type: "lifestyle",
    rating: 4.7,
    reviews: 189,
    colors: ["White", "Pink", "Silver", "Black"],
    sizes: ["5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10"],
    sale: true,
    featured: true,
    description:
      "Inspired by Japanese bullet trains with full-length Air cushioning.",
    features: [
      "Full-length Air unit",
      "Reflective details",
      "Wavy design lines",
    ],
  },
  {
    id: 13,
    name: "React Infinity Run",
    price: "$160",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/beb4fae2-f980-464b-b9f1-a5cf2e0ef1c9/W+PEGASUS+PLUS.png",
    images: {
      Pink: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/beb4fae2-f980-464b-b9f1-a5cf2e0ef1c9/W+PEGASUS+PLUS.png",
      White:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4e765f2a-dfe8-495a-930f-7584ba85fb15/WMNS+NIKE+AIR+WINFLO+11.png",
      Purple:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4d40d814-fe8c-43f4-a5b0-40ad63d70fd3/W+NIKE+PEGASUS+PREMIUM+FK.png",
      Black:
        " https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b54d1a4b-10af-4894-b0bb-77c1e271bad5/W+PEGASUS+EASYON.png",
    },
    category: "women",
    subcategory: "shoes",
    type: "running",
    rating: 4.6,
    reviews: 234,
    colors: ["Pink", "White", "Purple", "Black"],
    sizes: ["5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10"],
    sale: false,
    featured: true,
    description: "Designed to help reduce injury and keep you on the run.",
    features: ["React foam", "Flyknit upper", "Rocker geometry"],
  },
  {
    id: 14,
    name: "Air Force 1 Shadow",
    price: "$110",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/l3w4varugbogihcpj40e/W+AF1+SHADOW.png",
    images: {
      White:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/l3w4varugbogihcpj40e/W+AF1+SHADOW.png",
      Pink: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e5aee4c9-5144-43a7-b59e-7dd44d599463/AIR+FORCE+1+SP+%28GS%29.png",
      Purple:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f6145e59-2ab8-4531-8671-9d84c166adcc/W+AIR+FORCE+1+%2707.png",
      Black:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7dbcf447-09fd-44b0-aa75-436626a318c5/AIR+FORCE+1+%2707+LV8.png",
    },
    category: "women",
    subcategory: "shoes",
    type: "lifestyle",
    rating: 4.5,
    reviews: 167,
    colors: ["White", "Pink", "Purple", "Black"],
    sizes: ["5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10"],
    sale: false,
    featured: false,
    description: "A fresh take on the classic with layered details.",
    features: ["Layered upper", "Double Swoosh", "Elevated midsole"],
  },
  {
    id: 15,
    name: "Zoom Pegasus 40",
    price: "$130",
    originalPrice: "$150",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7f673fe1-b535-45c9-8ffe-21573d36a98f/W+PEGASUS+TRAIL+5+GTX.png",
    images: {
      Pink: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7f673fe1-b535-45c9-8ffe-21573d36a98f/W+PEGASUS+TRAIL+5+GTX.png",
      White:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/40851f6f-8055-4374-b33c-1ab8e69b34a8/W+NIKE+PEGASUS+PREMIUM.png",
      Purple:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4d40d814-fe8c-43f4-a5b0-40ad63d70fd3/W+NIKE+PEGASUS+PREMIUM+FK.png",
      Gray: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6a3aa722-c36e-45e9-8d25-c1802306e042/W+NIKE+REACTX+PEGASUS+TRAIL+5.png",
    },
    category: "women",
    subcategory: "shoes",
    type: "running",
    rating: 4.4,
    reviews: 198,
    colors: ["Pink", "White", "Purple", "Gray"],
    sizes: ["5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10"],
    sale: true,
    featured: false,
    description: "The most trusted running shoe, now with enhanced comfort.",
    features: ["Zoom Air unit", "Engineered mesh", "Waffle outsole"],
  },

  // WOMEN'S CLOTHING
  {
    id: 16,
    name: "Yoga Luxe Crop Top",
    price: "$55",
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b42e37ce-f2ab-49d3-84ac-108ae4ce2f82/AS+W+NK+INF+DF+SS+TOP+WD+RIB.png",
    images: {
      Black:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b42e37ce-f2ab-49d3-84ac-108ae4ce2f82/AS+W+NK+INF+DF+SS+TOP+WD+RIB.png",
      Blue: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/09473c87-748b-4855-b7af-4cf85ef03afb/AS+W+NK+INF+DF+SS+TOP+WD+RIB.png",
      Brown:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5c87dcce-f260-464b-a04b-b7d25483b81c/AS+W+NK+INF+DF+LS+TOP.png",
    },
    category: "women",
    subcategory: "clothing",
    type: "tops",
    rating: 4.8,
    reviews: 156,
    colors: ["Black", "Blue", "Brown"],
    sizes: ["XS", "S", "M", "L", "XL"],
    sale: false,
    featured: true,
    description: "Soft, stretchy fabric perfect for yoga and everyday wear.",
    features: ["Infinalon fabric", "Non-sheer", "Minimal seaming"],
  },
  {
    id: 17,
    name: " Women Hoodies",
    price: "$40",
    originalPrice: "$50",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d98c9df3-a812-4307-8156-93a4e92e0171/AS+W+NK+24.7+DF+HZ+TOP+SOFT.png",
    images: {
      Black:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d98c9df3-a812-4307-8156-93a4e92e0171/AS+W+NK+24.7+DF+HZ+TOP+SOFT.png",
      White:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1b29216b-4c1d-4f02-ba91-d88afd5f5f14/AS+W+NSW+NK+CHLL+FT+FZ+HDY.png",
      Pink: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5c1ef46b-2068-43b5-8027-39e8a59039bc/AS+W+NSW+CLUB+FLC+STD+GX+CREW.png",
      Gray: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e34f6bb2-3fbb-4bcd-8c68-15d3f956b045/AS+W+NSW+PHNX+FLC+CROP+VNECK+O.png",
    },
    category: "women",
    subcategory: "clothing",
    type: "tops",
    rating: 4.5,
    reviews: 203,
    colors: ["Black", "White", "Pink", "Gray"],
    sizes: ["XS", "S", "M", "L", "XL"],
    sale: true,
    featured: false,
    description: "Medium-support sports bra with moisture-wicking fabric.",
    features: ["Dri-FIT technology", "Removable pads", "Racerback design"],
  },
  {
    id: 18,
    name: "Dri-FIT Leggings",
    price: "$65",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1506bb9c-2137-4edc-928b-068aa902e6c7/AS+W+NSW+NK+CLSC+GX+HR+TIGHT+F.png",
    images: {
      Black:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1506bb9c-2137-4edc-928b-068aa902e6c7/AS+W+NSW+NK+CLSC+GX+HR+TIGHT+F.png",
      Blue: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3c3b06e9-8f11-4498-9c8a-bc2974d00f45/AS+W+NK+DF+ZENVY+HR+TGHT.png",
      Purple:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d9731b6b-8f23-4a8d-a1d5-432ddcc6e8b2/AS+W+NK+DF+ZENVY+HR+TGHT.png",
      Brown:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6f131d1f-ef1d-4a9b-9807-56b91d4af74b/AS+W+NK+DF+ZENVY+HR+7%2F8+TGHT.png",
    },
    category: "women",
    subcategory: "clothing",
    type: "bottoms",
    rating: 4.9,
    reviews: 312,
    colors: ["Black", "Blue", "Purple", "Brown"],
    sizes: ["XS", "S", "M", "L", "XL"],
    sale: false,
    featured: true,
    description: "High-waisted leggings with sweat-wicking technology.",
    features: ["Dri-FIT technology", "High waistband", "Side pockets"],
  },
  {
    id: 19,
    name: "Women Jackets",
    price: "$75",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/374c403e-7b2f-47c9-87fa-ea74da642b4b/AS+W+NSW+NK+WR+WVN+UV+FZ+JKT.png",
    images: {
      Black:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/374c403e-7b2f-47c9-87fa-ea74da642b4b/AS+W+NSW+NK+WR+WVN+UV+FZ+JKT.png",
      Gray: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6a65a8d3-b37b-4a72-8f97-4cb5882e881d/AS+W+NSW+STREET+WVN+JKT.png",
      Red: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/581de38c-b535-4d7e-a756-b097dbc2ba95/AS+W+NSW+NK+WR+POLY+KNIT+JKT.png",
      White:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7b89287b-3ddf-4d7b-ac7c-3770ca6ca068/AS+W+NSW+EVRTHNG+WVN+RPL+UV.png",
    },
    category: "women",
    subcategory: "clothing",
    type: "tops",
    rating: 4.6,
    reviews: 189,
    colors: ["Black", "Gray", "Red", "White"],
    sizes: ["XS", "S", "M", "L", "XL"],
    sale: false,
    featured: false,
    description: "Relaxed fit hoodie with soft fleece interior.",
    features: ["French terry fabric", "Kangaroo pocket", "Drawstring hood"],
  },

  // WOMEN'S ACCESSORIES
  {
    id: 20,
    name: "Training Headband",
    price: "$18",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d1ec2a89-4f89-47f3-9cc5-0ab4d322e1b4/U+NK+DFADV+ACE+VISOR+U+SAB+P.png",
    images: {
      Black:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d1ec2a89-4f89-47f3-9cc5-0ab4d322e1b4/U+NK+DFADV+ACE+VISOR+U+SAB+P.png",
      White:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8d7401e2-3d78-4e06-ac3d-00bf76e98452/U+NK+DFADV+ACE+VISOR+U+SAB+P.png",
    },
    category: "women",
    subcategory: "accessories",
    type: "headwear",
    rating: 4.3,
    reviews: 89,
    colors: ["Black", "White"],
    sizes: ["One Size"],
    sale: false,
    featured: false,
    description: "Sweat-wicking headband for intense workouts.",
    features: ["Dri-FIT technology", "Stretchy fabric", "Secure fit"],
  },
  {
    id: 21,
    name: "Gym Bag",
    price: "$45",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e1e3b396-f6e7-442b-afc6-1dcaf2c3c721/NK+BRSLA+M+DUFF+-+9.0+%2860L%29.png",
    images: {
      Black:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e1e3b396-f6e7-442b-afc6-1dcaf2c3c721/NK+BRSLA+M+DUFF+-+9.0+%2860L%29.png",
      Pink: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8f34c0bb-9d42-4777-9db3-e7aa901769d4/NK+GYM+CLUB+BAG+-+SP23.png",
      Gray: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ed8e8de1-ab3e-4b4c-ae05-ea63a6866211/NK+GYM+CLUB+BAG+-+SP23.png",
    },
    category: "women",
    subcategory: "accessories",
    type: "bags",
    rating: 4.4,
    reviews: 134,
    colors: ["Black", "Pink", "Gray", "White"],
    sizes: ["One Size"],
    sale: false,
    featured: false,
    description: "Spacious gym bag with multiple compartments.",
    features: ["Water-resistant", "Shoe compartment", "Adjustable strap"],
  },

  // KIDS' SHOES
  {
    id: 22,
    name: "Air Max SC Kids",
    price: "$65",
    originalPrice: "$80",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0a6b0fde-b870-43e6-b1fd-9168e324e09c/KOBE+IX+LOW+EM+%28GS%29.png",
    images: {
      Blue: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0a6b0fde-b870-43e6-b1fd-9168e324e09c/KOBE+IX+LOW+EM+%28GS%29.png",
      White:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/2692e4cf-0384-4e1f-9f92-3a5a6eda646c/AIR+JORDAN+3+RETRO+%28GS%29.png",
      Red: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e2cfa2cf-faad-407d-a2bb-5b96467a34da/FLEX+RUNNER+4+%28GS%29.png",
      Pink: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4e4c4104-592b-4b5f-b460-88656d9133dd/VOMERO+5+%28GS%29.png",
    },
    category: "kids",
    subcategory: "shoes",
    type: "lifestyle",
    rating: 4.6,
    reviews: 145,
    colors: ["Blue", "White", "Red", "Pink"],
    sizes: [
      "10C",
      "10.5C",
      "11C",
      "11.5C",
      "12C",
      "12.5C",
      "13C",
      "13.5C",
      "1Y",
      "1.5Y",
      "2Y",
      "2.5Y",
      "3Y",
    ],
    sale: true,
    featured: true,
    ageGroup: "big-kids",
    description: "Classic Air Max style designed for active kids.",
    features: ["Air cushioning", "Durable construction", "Easy on/off"],
  },
  {
    id: 23,
    name: "Revolution 6 Kids",
    price: "$55",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9b3da1e0-6603-4094-87bf-ef8906ed10fc/FLEX+RUNNER+4+%28GS%29.png",
    images: {
      Pink: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9b3da1e0-6603-4094-87bf-ef8906ed10fc/FLEX+RUNNER+4+%28GS%29.png",
      Purple:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c4b2743f-9950-4ee8-bdb0-ed355d799975/NIKE+COSMIC+RUNNER+%28GS%29.png",
      White:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/af3efb81-39b4-4d1c-9b9b-3b9ebe3a2965/AIR+FORCE+1+MID+EASYON+%28GS%29.png",
      Blue: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6dafd6ef-a6d2-4744-a951-1fdf4678fa09/NIKE+STAR+RUNNER+5+%28GS%29.png",
    },

    category: "kids",
    subcategory: "shoes",
    type: "running",
    rating: 4.4,
    reviews: 98,
    colors: ["Pink", "Purple", "White", "Blue"],
    sizes: [
      "10C",
      "10.5C",
      "11C",
      "11.5C",
      "12C",
      "12.5C",
      "13C",
      "13.5C",
      "1Y",
      "1.5Y",
      "2Y",
      "2.5Y",
      "3Y",
    ],
    sale: false,
    featured: false,
    ageGroup: "little-kids",
    description: "Comfortable running shoes for everyday adventures.",
    features: ["Soft foam midsole", "Flexible outsole", "Breathable upper"],
  },
  {
    id: 24,
    name: "Force 1 Kids",
    price: "$60",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/aebe13df-bd28-4281-b78d-abd5ca707d06/JORDAN+3+RETRO+%28PS%29.png",
    images: {
      White:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/aebe13df-bd28-4281-b78d-abd5ca707d06/JORDAN+3+RETRO+%28PS%29.png",
      Black:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8f595419-edc2-4e4a-baea-b1560b7d5dab/NIKE+VARSITY+LEATHER+%28PSV%29.png",
      Pink: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1318a33b-4e94-4810-ba24-38dcbf869610/NIKE+COSMIC+RUNNER+%28PSV%29.png",
      Blue: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/15851241-d3a7-4744-a033-82aaf83a6597/JORDAN+1+RETRO+HIGH+OG+%28PS%29.png",
    },
    category: "kids",
    subcategory: "shoes",
    type: "lifestyle",
    rating: 4.5,
    reviews: 167,
    colors: ["White", "Black", "Pink", "Blue"],
    sizes: [
      "10C",
      "10.5C",
      "11C",
      "11.5C",
      "12C",
      "12.5C",
      "13C",
      "13.5C",
      "1Y",
      "1.5Y",
      "2Y",
      "2.5Y",
      "3Y",
    ],
    sale: false,
    featured: true,
    ageGroup: "big-kids",
    description: "The classic basketball shoe sized for kids.",
    features: ["Leather upper", "Air-Sole unit", "Rubber outsole"],
  },

  // KIDS' CLOTHING
  {
    id: 25,
    name: " Kids T-Shirt",
    price: "$20",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9fbe5eb0-f870-4093-a094-930e3267785f/K+NSW+TEE+BOXY+BREAK+DANCE.png",
    images: {
      Blue: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9fbe5eb0-f870-4093-a094-930e3267785f/K+NSW+TEE+BOXY+BREAK+DANCE.png",
      Green:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2e40efff-80c0-4b88-8fd3-d592b32ade82/K+NIKE+SB+DF+SS+JERSEY+GFX.png",
      Orange:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c3a88a5e-abea-492c-ae50-8f1348d5005d/G+NSW+TEE+BOXY+ESSNTL+LBR.png",
      Pink: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/96d8d191-1b6b-446c-95e3-a594828a6640/K+NSW+TEE+EMB+FUTURA+LBR.png",
    },
    category: "kids",
    subcategory: "clothing",
    type: "tops",
    rating: 4.5,
    reviews: 167,
    colors: ["Blue", "Green", "Orange", "Pink"],
    sizes: ["XS", "S", "M", "L", "XL"],
    sale: false,
    featured: true,
    ageGroup: "big-kids",
    description: "Moisture-wicking tee perfect for active kids.",
    features: ["Dri-FIT technology", "Soft fabric", "Fun graphics"],
  },
  {
    id: 26,
    name: "Kids Shorts Set",
    price: "$35",
    originalPrice: "$45",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e57bc049-44e7-42b9-8f95-98f02eeebe72/K+NSW+CLUB+FT+SHORT+FMLY+-PD.png",
    images: {
      Blue: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e57bc049-44e7-42b9-8f95-98f02eeebe72/K+NSW+CLUB+FT+SHORT+FMLY+-PD.png",
      Orange:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f1ad569a-fcba-4d47-b516-7e66616d0e1d/K+NSW+CLUB+WVN+SHORT+4.5IN.png",
      Green:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/248cdab4-bb14-427a-b044-ac1c0096f803/K+NSW+CLUB+KNIT+SHORT+6IN+LBR.png",
      Purple:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a14fa73d-227b-4ab0-9cd8-a780471af13b/G+NSW+WVN+CRGO+SHORT+STY+STAR.png",
    },

    category: "kids",
    subcategory: "clothing",
    type: "sets",
    rating: 4.3,
    reviews: 89,
    colors: ["Blue", "Orange", "Green", "Purple"],
    sizes: ["XS", "S", "M", "L", "XL"],
    sale: true,
    featured: false,
    ageGroup: "little-kids",
    description: "Comfortable shorts and tee set for everyday play.",
    features: ["Soft cotton blend", "Elastic waistband", "Matching set"],
  },
  {
    id: 27,
    name: "Kids Hoodie",
    price: "$45",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a43f2be1-32c6-4c1d-9429-c76a0b9db86c/K+NSW+CLUB+FT+HD+FZ+LS+LBR.png",
    images: {
      Gray: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a43f2be1-32c6-4c1d-9429-c76a0b9db86c/K+NSW+CLUB+FT+HD+FZ+LS+LBR.png",
      Blue: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b7945a67-208a-42fb-a0af-3124332186cf/K+NK+RPL+CROSSOVER+JKT.png",
      Black:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/76be69d0-7dae-4469-8402-599f6a4893d6/K+NSW+CLUB+KNIT+FZ+LS+LBR.png",
      Pink: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6e843f30-654c-4c08-b4dc-541edf08799c/AJA+K+NK+CLUB+FLC+HDY.png",
    },
    category: "kids",
    subcategory: "clothing",
    type: "tops",
    rating: 4.7,
    reviews: 234,
    colors: ["Gray", "Blue", "Black", "Pink"],
    sizes: ["XS", "S", "M", "L", "XL"],
    sale: false,
    featured: true,
    ageGroup: "big-kids",
    description: "Cozy hoodie with fun Nike branding.",
    features: ["Soft fleece lining", "Kangaroo pocket", "Adjustable hood"],
  },

  // KIDS' ACCESSORIES
  {
    id: 28,
    name: "Kids Backpack",
    price: "$30",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cd59985c-6574-4472-b754-5f949c072f27/Y+NK+BRSLA+JDI+MINI+BKPK-JELLY.png",
    images: {
      Blue: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cd59985c-6574-4472-b754-5f949c072f27/Y+NK+BRSLA+JDI+MINI+BKPK-JELLY.png",
      Pink: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/74498290-3bc9-4cbd-beb7-c6eb5497dcb8/Y+NK+BRSLA+JDI+MINI+BKPK.png",
      Black:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ac718c7a-fd95-42b7-8238-345b59abcd4c/Y+NK+BRSLA+JDI+MNI+BK-AOP+FA25.png",
      Purple:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d25d29b3-44a2-402d-b836-f935ee023eb3/Y+NK+BRSLA+JDI+MINI+BKPK-JELLY.png",
    },
    category: "kids",
    subcategory: "accessories",
    type: "bags",
    rating: 4.2,
    reviews: 76,
    colors: ["Blue", "Pink", "Black", "Purple"],
    sizes: ["One Size"],
    sale: false,
    featured: false,
    ageGroup: "big-kids",
    description: "Durable backpack perfect for school or sports.",
    features: ["Multiple compartments", "Padded straps", "Water bottle holder"],
  },
  {
    id: 29,
    name: "Kids Cap",
    price: "$20",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6d7dee79-e229-4971-9564-5501ce781a92/K+NK+RISE+CAP+S+CB+TRKR.png",
    images: {
      Blue: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6d7dee79-e229-4971-9564-5501ce781a92/K+NK+RISE+CAP+S+CB+TRKR.png",
      Black:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/39ca84de-2056-4e39-a5cd-f46cc9e78943/K+NK+DF+CLUB+CAP+US+CB+FTHLT.png",
      Pink: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3b68b872-c849-4f9c-9d97-7bb1859cbdf5/K+NK+CLUB+CAP+US+CB+FRUIT+PACK.png",
    },
    category: "kids",
    subcategory: "accessories",
    type: "headwear",
    rating: 4.4,
    reviews: 92,
    colors: ["Blue", "Black", "Pink"],
    sizes: ["One Size"],
    sale: false,
    featured: false,
    ageGroup: "big-kids",
    description: "Adjustable cap with fun Nike branding.",
    features: ["Adjustable strap", "Curved brim", "Embroidered logo"],
  },

  // ADDITIONAL FEATURED PRODUCTS
  {
    id: 30,
    name: "Air Jordan 1 Low",
    price: "$140",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/3fcec3e3-1551-400b-90f9-56ecebebbb78/JORDAN+MAX+AURA+2+%28PS%29.png",
    images: {
      Black:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/3fcec3e3-1551-400b-90f9-56ecebebbb78/JORDAN+MAX+AURA+2+%28PS%29.png",
      White:
        " https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/aebe13df-bd28-4281-b78d-abd5ca707d06/JORDAN+3+RETRO+%28PS%29.png",
      Blue: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/18129cf0-b2c1-4668-960c-ab76c4eae933/JORDAN+TATUM+3+%28PS%29.png",
    },
    category: "men",
    subcategory: "shoes",
    type: "lifestyle",
    rating: 4.9,
    reviews: 456,
    colors: ["Black", "White", "Blue"],
    sizes: [
      "7",
      "7.5",
      "8",
      "8.5",
      "9",
      "9.5",
      "10",
      "10.5",
      "11",
      "11.5",
      "12",
    ],
    sale: false,
    featured: true,
    description: "The iconic Jordan silhouette in a low-top design.",
    features: ["Premium leather", "Air-Sole unit", "Wings logo"],
  },
];

// Helper functions for filtering products
export const getProductsByCategory = (category) => {
  return products.filter((product) => product.category === category);
};

export const getProductsBySubcategory = (category, subcategory) => {
  return products.filter(
    (product) =>
      product.category === category && product.subcategory === subcategory
  );
};

export const getFeaturedProducts = () => {
  return products.filter((product) => product.featured);
};

export const getSaleProducts = () => {
  return products.filter((product) => product.sale);
};

export const getProductById = (id) => {
  const product = products.find((product) => product.id === parseInt(id));
  if (!product) return null;
  // Ensure images array exists
  return {
    ...product,
    images: product.images ? product.images : [product.image], // fallback to single image
    specifications: product.specifications || {}, // fallback if missing
    colors: product.colors || [],
  };
};

export const searchProducts = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(lowercaseQuery) ||
      product.description.toLowerCase().includes(lowercaseQuery) ||
      product.category.toLowerCase().includes(lowercaseQuery) ||
      product.subcategory.toLowerCase().includes(lowercaseQuery)
  );
};
