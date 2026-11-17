const products = [
  {
    "id": 1,
    "name": "Everyday Oversized Tee",
    "category": "Clothing",
    "description": "An easy-to-style wardrobe staple",
    "price": 528,
    "oldPrice": 678,
    "tag": "JUST IN",
    "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85",
    "bg": "#e9e3d9",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Clothing"
  },
  {
    "id": 2,
    "name": "Classic Everyday Sneakers",
    "category": "Clothing",
    "description": "An easy-to-style wardrobe staple",
    "price": 694,
    "oldPrice": 844,
    "tag": "POPULAR",
    "image": "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=900&q=85",
    "bg": "#e6e5df",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Clothing"
  },
  {
    "id": 3,
    "name": "Relaxed Fit Cotton T-Shirt",
    "category": "Clothing",
    "description": "An easy-to-style wardrobe staple",
    "price": 860,
    "oldPrice": 1060,
    "tag": "EVERYDAY PICK",
    "image": "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=85",
    "bg": "#dedfd6",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Clothing"
  },
  {
    "id": 4,
    "name": "Premium Crewneck Tee",
    "category": "Clothing",
    "description": "An easy-to-style wardrobe staple",
    "price": 1026,
    "oldPrice": 1276,
    "tag": "EDITOR’S PICK",
    "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85",
    "bg": "#e8dfd4",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Clothing"
  },
  {
    "id": 5,
    "name": "Graphic Print T-Shirt",
    "category": "Clothing",
    "description": "An easy-to-style wardrobe staple",
    "price": 1192,
    "oldPrice": 1492,
    "tag": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85",
    "bg": "#e9e3d9",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Clothing"
  },
  {
    "id": 6,
    "name": "Polo Collar T-Shirt",
    "category": "Clothing",
    "description": "An easy-to-style wardrobe staple",
    "price": 1358,
    "oldPrice": 1708,
    "tag": "JUST IN",
    "image": "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=900&q=85",
    "bg": "#e6e5df",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Clothing"
  },
  {
    "id": 7,
    "name": "Linen Blend Shirt",
    "category": "Clothing",
    "description": "An easy-to-style wardrobe staple",
    "price": 1524,
    "oldPrice": 1924,
    "tag": "POPULAR",
    "image": "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=85",
    "bg": "#dedfd6",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Clothing"
  },
  {
    "id": 8,
    "name": "Oxford Casual Shirt",
    "category": "Clothing",
    "description": "An easy-to-style wardrobe staple",
    "price": 1690,
    "oldPrice": 2090,
    "tag": "EVERYDAY PICK",
    "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85",
    "bg": "#e8dfd4",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Clothing"
  },
  {
    "id": 9,
    "name": "Checked Casual Shirt",
    "category": "Clothing",
    "description": "An easy-to-style wardrobe staple",
    "price": 1856,
    "oldPrice": 2306,
    "tag": "EDITOR’S PICK",
    "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85",
    "bg": "#e9e3d9",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Clothing"
  },
  {
    "id": 10,
    "name": "Striped Resort Shirt",
    "category": "Clothing",
    "description": "An easy-to-style wardrobe staple",
    "price": 2022,
    "oldPrice": 2522,
    "tag": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=900&q=85",
    "bg": "#e6e5df",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Clothing"
  },
  {
    "id": 11,
    "name": "Classic Denim Shirt",
    "category": "Clothing",
    "description": "An easy-to-style wardrobe staple",
    "price": 2188,
    "oldPrice": 2738,
    "tag": "JUST IN",
    "image": "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=85",
    "bg": "#dedfd6",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Clothing"
  },
  {
    "id": 12,
    "name": "Oversized Button-Down",
    "category": "Clothing",
    "description": "An easy-to-style wardrobe staple",
    "price": 2354,
    "oldPrice": 2954,
    "tag": "POPULAR",
    "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85",
    "bg": "#e8dfd4",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Clothing"
  },
  {
    "id": 13,
    "name": "Casual Cuban Collar Shirt",
    "category": "Clothing",
    "description": "An easy-to-style wardrobe staple",
    "price": 519,
    "oldPrice": 669,
    "tag": "EVERYDAY PICK",
    "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85",
    "bg": "#e9e3d9",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Clothing"
  },
  {
    "id": 14,
    "name": "Slim Fit Chinos",
    "category": "Clothing",
    "description": "An easy-to-style wardrobe staple",
    "price": 685,
    "oldPrice": 835,
    "tag": "EDITOR’S PICK",
    "image": "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=900&q=85",
    "bg": "#e6e5df",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Clothing"
  },
  {
    "id": 15,
    "name": "Relaxed Cargo Pants",
    "category": "Clothing",
    "description": "An easy-to-style wardrobe staple",
    "price": 851,
    "oldPrice": 1051,
    "tag": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=85",
    "bg": "#dedfd6",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Clothing"
  },
  {
    "id": 16,
    "name": "Straight Fit Jeans",
    "category": "Clothing",
    "description": "An easy-to-style wardrobe staple",
    "price": 1017,
    "oldPrice": 1267,
    "tag": "JUST IN",
    "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85",
    "bg": "#e8dfd4",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Clothing"
  },
  {
    "id": 17,
    "name": "Tapered Denim Jeans",
    "category": "Clothing",
    "description": "An easy-to-style wardrobe staple",
    "price": 1183,
    "oldPrice": 1483,
    "tag": "POPULAR",
    "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85",
    "bg": "#e9e3d9",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Clothing"
  },
  {
    "id": 18,
    "name": "Everyday Joggers",
    "category": "Clothing",
    "description": "An easy-to-style wardrobe staple",
    "price": 1349,
    "oldPrice": 1699,
    "tag": "EVERYDAY PICK",
    "image": "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=900&q=85",
    "bg": "#e6e5df",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Clothing"
  },
  {
    "id": 19,
    "name": "Cotton Track Pants",
    "category": "Clothing",
    "description": "An easy-to-style wardrobe staple",
    "price": 1515,
    "oldPrice": 1915,
    "tag": "EDITOR’S PICK",
    "image": "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=85",
    "bg": "#dedfd6",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Clothing"
  },
  {
    "id": 20,
    "name": "Tailored Trousers",
    "category": "Clothing",
    "description": "An easy-to-style wardrobe staple",
    "price": 1681,
    "oldPrice": 2081,
    "tag": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85",
    "bg": "#e8dfd4",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Clothing"
  },
  {
    "id": 21,
    "name": "Utility Cargo Shorts",
    "category": "Clothing",
    "description": "An easy-to-style wardrobe staple",
    "price": 1847,
    "oldPrice": 2297,
    "tag": "JUST IN",
    "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85",
    "bg": "#e9e3d9",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Clothing"
  },
  {
    "id": 22,
    "name": "Classic Denim Shorts",
    "category": "Clothing",
    "description": "An easy-to-style wardrobe staple",
    "price": 2013,
    "oldPrice": 2513,
    "tag": "POPULAR",
    "image": "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=900&q=85",
    "bg": "#e6e5df",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Clothing"
  },
  {
    "id": 23,
    "name": "Cotton Lounge Shorts",
    "category": "Clothing",
    "description": "An easy-to-style wardrobe staple",
    "price": 2179,
    "oldPrice": 2729,
    "tag": "EVERYDAY PICK",
    "image": "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=85",
    "bg": "#dedfd6",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Clothing"
  },
  {
    "id": 24,
    "name": "Lightweight Hoodie",
    "category": "Clothing",
    "description": "An easy-to-style wardrobe staple",
    "price": 2345,
    "oldPrice": 2945,
    "tag": "EDITOR’S PICK",
    "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85",
    "bg": "#e8dfd4",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Clothing"
  },
  {
    "id": 25,
    "name": "Zip-Up Hoodie",
    "category": "Clothing",
    "description": "An easy-to-style wardrobe staple",
    "price": 510,
    "oldPrice": 660,
    "tag": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85",
    "bg": "#e9e3d9",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Clothing"
  },
  {
    "id": 26,
    "name": "Classic Crewneck Sweatshirt",
    "category": "Clothing",
    "description": "An easy-to-style wardrobe staple",
    "price": 676,
    "oldPrice": 826,
    "tag": "JUST IN",
    "image": "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=900&q=85",
    "bg": "#e6e5df",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Clothing"
  },
  {
    "id": 27,
    "name": "Minimal Pullover Sweatshirt",
    "category": "Clothing",
    "description": "An easy-to-style wardrobe staple",
    "price": 842,
    "oldPrice": 1042,
    "tag": "POPULAR",
    "image": "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=85",
    "bg": "#dedfd6",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Clothing"
  },
  {
    "id": 28,
    "name": "Varsity Jacket",
    "category": "Clothing",
    "description": "An easy-to-style wardrobe staple",
    "price": 1008,
    "oldPrice": 1258,
    "tag": "EVERYDAY PICK",
    "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85",
    "bg": "#e8dfd4",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Clothing"
  },
  {
    "id": 29,
    "name": "Lightweight Bomber Jacket",
    "category": "Clothing",
    "description": "An easy-to-style wardrobe staple",
    "price": 1174,
    "oldPrice": 1474,
    "tag": "EDITOR’S PICK",
    "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85",
    "bg": "#e9e3d9",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Clothing"
  },
  {
    "id": 30,
    "name": "Denim Trucker Jacket",
    "category": "Clothing",
    "description": "An easy-to-style wardrobe staple",
    "price": 1340,
    "oldPrice": 1690,
    "tag": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=900&q=85",
    "bg": "#e6e5df",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Clothing"
  },
  {
    "id": 31,
    "name": "Casual Overshirt",
    "category": "Clothing",
    "description": "An easy-to-style wardrobe staple",
    "price": 1506,
    "oldPrice": 1906,
    "tag": "JUST IN",
    "image": "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=85",
    "bg": "#dedfd6",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Clothing"
  },
  {
    "id": 32,
    "name": "Quilted Everyday Jacket",
    "category": "Clothing",
    "description": "An easy-to-style wardrobe staple",
    "price": 1672,
    "oldPrice": 2072,
    "tag": "POPULAR",
    "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85",
    "bg": "#e8dfd4",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Clothing"
  },
  {
    "id": 33,
    "name": "Windbreaker Jacket",
    "category": "Clothing",
    "description": "An easy-to-style wardrobe staple",
    "price": 1838,
    "oldPrice": 2288,
    "tag": "EVERYDAY PICK",
    "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85",
    "bg": "#e9e3d9",
    "audience": [
      "Men"
    ],
    "section": "Clothing"
  },
  {
    "id": 34,
    "name": "Knit Cardigan",
    "category": "Clothing",
    "description": "An easy-to-style wardrobe staple",
    "price": 2004,
    "oldPrice": 2504,
    "tag": "EDITOR’S PICK",
    "image": "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=900&q=85",
    "bg": "#e6e5df",
    "audience": [
      "Men"
    ],
    "section": "Clothing"
  },
  {
    "id": 35,
    "name": "Fine Knit Sweater",
    "category": "Clothing",
    "description": "An easy-to-style wardrobe staple",
    "price": 2170,
    "oldPrice": 2720,
    "tag": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=85",
    "bg": "#dedfd6",
    "audience": [
      "Men"
    ],
    "section": "Clothing"
  },
  {
    "id": 36,
    "name": "Ribbed Tank Top",
    "category": "Clothing",
    "description": "An easy-to-style wardrobe staple",
    "price": 2336,
    "oldPrice": 2936,
    "tag": "JUST IN",
    "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85",
    "bg": "#e8dfd4",
    "audience": [
      "Men"
    ],
    "section": "Clothing"
  },
  {
    "id": 37,
    "name": "Classic Vest",
    "category": "Clothing",
    "description": "An easy-to-style wardrobe staple",
    "price": 501,
    "oldPrice": 651,
    "tag": "POPULAR",
    "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85",
    "bg": "#e9e3d9",
    "audience": [
      "Men"
    ],
    "section": "Clothing"
  },
  {
    "id": 38,
    "name": "Longline T-Shirt",
    "category": "Clothing",
    "description": "An easy-to-style wardrobe staple",
    "price": 667,
    "oldPrice": 817,
    "tag": "EVERYDAY PICK",
    "image": "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=900&q=85",
    "bg": "#e6e5df",
    "audience": [
      "Men"
    ],
    "section": "Clothing"
  },
  {
    "id": 39,
    "name": "Women’s Relaxed Tee",
    "category": "Clothing",
    "description": "An easy-to-style wardrobe staple",
    "price": 833,
    "oldPrice": 1033,
    "tag": "EDITOR’S PICK",
    "image": "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=85",
    "bg": "#dedfd6",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Clothing"
  },
  {
    "id": 40,
    "name": "Women’s Crop Tee",
    "category": "Clothing",
    "description": "An easy-to-style wardrobe staple",
    "price": 999,
    "oldPrice": 1249,
    "tag": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85",
    "bg": "#e8dfd4",
    "audience": [
      "Women"
    ],
    "section": "Clothing"
  },
  {
    "id": 41,
    "name": "Women’s Satin Blouse",
    "category": "Clothing",
    "description": "An easy-to-style wardrobe staple",
    "price": 1165,
    "oldPrice": 1465,
    "tag": "JUST IN",
    "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85",
    "bg": "#e9e3d9",
    "audience": [
      "Women"
    ],
    "section": "Clothing"
  },
  {
    "id": 42,
    "name": "Women’s Linen Shirt",
    "category": "Clothing",
    "description": "An easy-to-style wardrobe staple",
    "price": 1331,
    "oldPrice": 1681,
    "tag": "POPULAR",
    "image": "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=900&q=85",
    "bg": "#e6e5df",
    "audience": [
      "Women"
    ],
    "section": "Clothing"
  },
  {
    "id": 43,
    "name": "Women’s Wide-Leg Pants",
    "category": "Clothing",
    "description": "An easy-to-style wardrobe staple",
    "price": 1497,
    "oldPrice": 1847,
    "tag": "EVERYDAY PICK",
    "image": "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=85",
    "bg": "#dedfd6",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Clothing"
  },
  {
    "id": 44,
    "name": "Women’s Straight Jeans",
    "category": "Clothing",
    "description": "An easy-to-style wardrobe staple",
    "price": 1663,
    "oldPrice": 2063,
    "tag": "EDITOR’S PICK",
    "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85",
    "bg": "#e8dfd4",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Clothing"
  },
  {
    "id": 45,
    "name": "Women’s Midi Skirt",
    "category": "Clothing",
    "description": "An easy-to-style wardrobe staple",
    "price": 1829,
    "oldPrice": 2279,
    "tag": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85",
    "bg": "#e9e3d9",
    "audience": [
      "Women"
    ],
    "section": "Clothing"
  },
  {
    "id": 46,
    "name": "Women’s Casual Dress",
    "category": "Clothing",
    "description": "An easy-to-style wardrobe staple",
    "price": 1995,
    "oldPrice": 2495,
    "tag": "JUST IN",
    "image": "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=900&q=85",
    "bg": "#e6e5df",
    "audience": [
      "Women"
    ],
    "section": "Clothing"
  },
  {
    "id": 47,
    "name": "Women’s Shirt Dress",
    "category": "Clothing",
    "description": "An easy-to-style wardrobe staple",
    "price": 2161,
    "oldPrice": 2711,
    "tag": "POPULAR",
    "image": "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=85",
    "bg": "#dedfd6",
    "audience": [
      "Women"
    ],
    "section": "Clothing"
  },
  {
    "id": 48,
    "name": "Women’s Co-ord Set",
    "category": "Clothing",
    "description": "An easy-to-style wardrobe staple",
    "price": 2327,
    "oldPrice": 2927,
    "tag": "EVERYDAY PICK",
    "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85",
    "bg": "#e8dfd4",
    "audience": [
      "Women"
    ],
    "section": "Clothing"
  },
  {
    "id": 49,
    "name": "Women’s Everyday Leggings",
    "category": "Clothing",
    "description": "An easy-to-style wardrobe staple",
    "price": 2493,
    "oldPrice": 3093,
    "tag": "EDITOR’S PICK",
    "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85",
    "bg": "#e9e3d9",
    "audience": [
      "Women"
    ],
    "section": "Clothing"
  },
  {
    "id": 50,
    "name": "Unisex Everyday Hoodie",
    "category": "Clothing",
    "description": "An easy-to-style wardrobe staple",
    "price": 658,
    "oldPrice": 808,
    "tag": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=900&q=85",
    "bg": "#e6e5df",
    "audience": [
      "Men"
    ],
    "section": "Clothing"
  },
  {
    "id": 51,
    "name": "Modern Frame Sunglasses",
    "category": "Accessories",
    "description": "The finishing touch for everyday looks",
    "price": 577,
    "oldPrice": 727,
    "tag": "JUST IN",
    "image": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=85",
    "bg": "#e8dfd4",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 52,
    "name": "Layered Chain Necklace",
    "category": "Accessories",
    "description": "The finishing touch for everyday looks",
    "price": 743,
    "oldPrice": 943,
    "tag": "POPULAR",
    "image": "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=85",
    "bg": "#e9e3d9",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 53,
    "name": "Classic Aviator Sunglasses",
    "category": "Accessories",
    "description": "The finishing touch for everyday looks",
    "price": 909,
    "oldPrice": 1159,
    "tag": "EVERYDAY PICK",
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85",
    "bg": "#dedfd6",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 54,
    "name": "Square Frame Sunglasses",
    "category": "Accessories",
    "description": "The finishing touch for everyday looks",
    "price": 1075,
    "oldPrice": 1325,
    "tag": "EDITOR’S PICK",
    "image": "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=85",
    "bg": "#e4d9ce",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 55,
    "name": "Round Frame Sunglasses",
    "category": "Accessories",
    "description": "The finishing touch for everyday looks",
    "price": 1241,
    "oldPrice": 1541,
    "tag": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=85",
    "bg": "#e8dfd4",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 56,
    "name": "Blue-Light Glasses",
    "category": "Accessories",
    "description": "The finishing touch for everyday looks",
    "price": 1407,
    "oldPrice": 1757,
    "tag": "JUST IN",
    "image": "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=85",
    "bg": "#e9e3d9",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 57,
    "name": "Minimal Stud Earrings",
    "category": "Accessories",
    "description": "The finishing touch for everyday looks",
    "price": 372,
    "oldPrice": 522,
    "tag": "POPULAR",
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85",
    "bg": "#dedfd6",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 58,
    "name": "Hoop Earrings Set",
    "category": "Accessories",
    "description": "The finishing touch for everyday looks",
    "price": 538,
    "oldPrice": 688,
    "tag": "EVERYDAY PICK",
    "image": "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=85",
    "bg": "#e4d9ce",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 59,
    "name": "Pearl Drop Earrings",
    "category": "Accessories",
    "description": "The finishing touch for everyday looks",
    "price": 704,
    "oldPrice": 904,
    "tag": "EDITOR’S PICK",
    "image": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=85",
    "bg": "#e8dfd4",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 60,
    "name": "Everyday Pendant Necklace",
    "category": "Accessories",
    "description": "The finishing touch for everyday looks",
    "price": 870,
    "oldPrice": 1070,
    "tag": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=85",
    "bg": "#e9e3d9",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 61,
    "name": "Layered Chain Set",
    "category": "Accessories",
    "description": "The finishing touch for everyday looks",
    "price": 1036,
    "oldPrice": 1286,
    "tag": "JUST IN",
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85",
    "bg": "#dedfd6",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 62,
    "name": "Chunky Link Bracelet",
    "category": "Accessories",
    "description": "The finishing touch for everyday looks",
    "price": 1202,
    "oldPrice": 1502,
    "tag": "POPULAR",
    "image": "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=85",
    "bg": "#e4d9ce",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 63,
    "name": "Minimal Cuff Bracelet",
    "category": "Accessories",
    "description": "The finishing touch for everyday looks",
    "price": 1368,
    "oldPrice": 1718,
    "tag": "EVERYDAY PICK",
    "image": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=85",
    "bg": "#e8dfd4",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 64,
    "name": "Beaded Bracelet Set",
    "category": "Accessories",
    "description": "The finishing touch for everyday looks",
    "price": 333,
    "oldPrice": 483,
    "tag": "EDITOR’S PICK",
    "image": "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=85",
    "bg": "#e9e3d9",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 65,
    "name": "Classic Analog Watch",
    "category": "Accessories",
    "description": "The finishing touch for everyday looks",
    "price": 499,
    "oldPrice": 649,
    "tag": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85",
    "bg": "#dedfd6",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 66,
    "name": "Minimal Dial Watch",
    "category": "Accessories",
    "description": "The finishing touch for everyday looks",
    "price": 665,
    "oldPrice": 815,
    "tag": "JUST IN",
    "image": "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=85",
    "bg": "#e4d9ce",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 67,
    "name": "Sporty Digital Watch",
    "category": "Accessories",
    "description": "The finishing touch for everyday looks",
    "price": 831,
    "oldPrice": 1031,
    "tag": "POPULAR",
    "image": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=85",
    "bg": "#e8dfd4",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 68,
    "name": "Leather Strap Watch",
    "category": "Accessories",
    "description": "The finishing touch for everyday looks",
    "price": 997,
    "oldPrice": 1247,
    "tag": "EVERYDAY PICK",
    "image": "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=85",
    "bg": "#e9e3d9",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 69,
    "name": "Adjustable Baseball Cap",
    "category": "Accessories",
    "description": "The finishing touch for everyday looks",
    "price": 1163,
    "oldPrice": 1463,
    "tag": "EDITOR’S PICK",
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85",
    "bg": "#dedfd6",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 70,
    "name": "Classic Dad Cap",
    "category": "Accessories",
    "description": "The finishing touch for everyday looks",
    "price": 1329,
    "oldPrice": 1679,
    "tag": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=85",
    "bg": "#e4d9ce",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 71,
    "name": "Embroidered Cap",
    "category": "Accessories",
    "description": "The finishing touch for everyday looks",
    "price": 1495,
    "oldPrice": 1845,
    "tag": "JUST IN",
    "image": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=85",
    "bg": "#e8dfd4",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 72,
    "name": "Ribbed Beanie",
    "category": "Accessories",
    "description": "The finishing touch for everyday looks",
    "price": 460,
    "oldPrice": 610,
    "tag": "POPULAR",
    "image": "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=85",
    "bg": "#e9e3d9",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 73,
    "name": "Lightweight Bucket Hat",
    "category": "Accessories",
    "description": "The finishing touch for everyday looks",
    "price": 626,
    "oldPrice": 776,
    "tag": "EVERYDAY PICK",
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85",
    "bg": "#dedfd6",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 74,
    "name": "Printed Bandana",
    "category": "Accessories",
    "description": "The finishing touch for everyday looks",
    "price": 792,
    "oldPrice": 992,
    "tag": "EDITOR’S PICK",
    "image": "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=85",
    "bg": "#e4d9ce",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 75,
    "name": "Silk-Feel Scarf",
    "category": "Accessories",
    "description": "The finishing touch for everyday looks",
    "price": 958,
    "oldPrice": 1208,
    "tag": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=85",
    "bg": "#e8dfd4",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 76,
    "name": "Everyday Hair Claw Set",
    "category": "Accessories",
    "description": "The finishing touch for everyday looks",
    "price": 1124,
    "oldPrice": 1424,
    "tag": "JUST IN",
    "image": "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=85",
    "bg": "#e9e3d9",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 77,
    "name": "Satin Scrunchie Set",
    "category": "Accessories",
    "description": "The finishing touch for everyday looks",
    "price": 1290,
    "oldPrice": 1590,
    "tag": "POPULAR",
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85",
    "bg": "#dedfd6",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 78,
    "name": "Minimal Hair Clips",
    "category": "Accessories",
    "description": "The finishing touch for everyday looks",
    "price": 1456,
    "oldPrice": 1806,
    "tag": "EVERYDAY PICK",
    "image": "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=85",
    "bg": "#e4d9ce",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 79,
    "name": "Padded Headband",
    "category": "Accessories",
    "description": "The finishing touch for everyday looks",
    "price": 421,
    "oldPrice": 571,
    "tag": "EDITOR’S PICK",
    "image": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=85",
    "bg": "#e8dfd4",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 80,
    "name": "Slim Leather Belt",
    "category": "Accessories",
    "description": "The finishing touch for everyday looks",
    "price": 587,
    "oldPrice": 737,
    "tag": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=85",
    "bg": "#e9e3d9",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 81,
    "name": "Reversible Casual Belt",
    "category": "Accessories",
    "description": "The finishing touch for everyday looks",
    "price": 753,
    "oldPrice": 953,
    "tag": "JUST IN",
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85",
    "bg": "#dedfd6",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 82,
    "name": "Braided Belt",
    "category": "Accessories",
    "description": "The finishing touch for everyday looks",
    "price": 919,
    "oldPrice": 1169,
    "tag": "POPULAR",
    "image": "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=85",
    "bg": "#e4d9ce",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 83,
    "name": "Card Holder Wallet",
    "category": "Accessories",
    "description": "The finishing touch for everyday looks",
    "price": 1085,
    "oldPrice": 1335,
    "tag": "EVERYDAY PICK",
    "image": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=85",
    "bg": "#e8dfd4",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 84,
    "name": "Classic Bifold Wallet",
    "category": "Accessories",
    "description": "The finishing touch for everyday looks",
    "price": 1251,
    "oldPrice": 1551,
    "tag": "EDITOR’S PICK",
    "image": "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=85",
    "bg": "#e9e3d9",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 85,
    "name": "Zip-Around Wallet",
    "category": "Accessories",
    "description": "The finishing touch for everyday looks",
    "price": 1417,
    "oldPrice": 1767,
    "tag": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85",
    "bg": "#dedfd6",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 86,
    "name": "Compact Coin Purse",
    "category": "Accessories",
    "description": "The finishing touch for everyday looks",
    "price": 382,
    "oldPrice": 532,
    "tag": "JUST IN",
    "image": "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=85",
    "bg": "#e4d9ce",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 87,
    "name": "Keychain Set",
    "category": "Accessories",
    "description": "The finishing touch for everyday looks",
    "price": 548,
    "oldPrice": 698,
    "tag": "POPULAR",
    "image": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=85",
    "bg": "#e8dfd4",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 88,
    "name": "Minimal Lapel Pin",
    "category": "Accessories",
    "description": "The finishing touch for everyday looks",
    "price": 714,
    "oldPrice": 914,
    "tag": "EVERYDAY PICK",
    "image": "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=85",
    "bg": "#e9e3d9",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 89,
    "name": "Fashion Brooch",
    "category": "Accessories",
    "description": "The finishing touch for everyday looks",
    "price": 880,
    "oldPrice": 1080,
    "tag": "EDITOR’S PICK",
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85",
    "bg": "#dedfd6",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 90,
    "name": "Statement Ring Set",
    "category": "Accessories",
    "description": "The finishing touch for everyday looks",
    "price": 1046,
    "oldPrice": 1296,
    "tag": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=85",
    "bg": "#e4d9ce",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 91,
    "name": "Minimal Stack Rings",
    "category": "Accessories",
    "description": "The finishing touch for everyday looks",
    "price": 1212,
    "oldPrice": 1512,
    "tag": "JUST IN",
    "image": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=85",
    "bg": "#e8dfd4",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 92,
    "name": "Everyday Anklet",
    "category": "Accessories",
    "description": "The finishing touch for everyday looks",
    "price": 1378,
    "oldPrice": 1728,
    "tag": "POPULAR",
    "image": "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=85",
    "bg": "#e9e3d9",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 93,
    "name": "Charm Bracelet",
    "category": "Accessories",
    "description": "The finishing touch for everyday looks",
    "price": 343,
    "oldPrice": 493,
    "tag": "EVERYDAY PICK",
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85",
    "bg": "#dedfd6",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 94,
    "name": "Tie and Pocket Square Set",
    "category": "Accessories",
    "description": "The finishing touch for everyday looks",
    "price": 509,
    "oldPrice": 659,
    "tag": "EDITOR’S PICK",
    "image": "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=85",
    "bg": "#e4d9ce",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 95,
    "name": "Classic Necktie",
    "category": "Accessories",
    "description": "The finishing touch for everyday looks",
    "price": 675,
    "oldPrice": 825,
    "tag": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=85",
    "bg": "#e8dfd4",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 96,
    "name": "Knit Tie",
    "category": "Accessories",
    "description": "The finishing touch for everyday looks",
    "price": 841,
    "oldPrice": 1041,
    "tag": "JUST IN",
    "image": "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=85",
    "bg": "#e9e3d9",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 97,
    "name": "Cufflinks Set",
    "category": "Accessories",
    "description": "The finishing touch for everyday looks",
    "price": 1007,
    "oldPrice": 1257,
    "tag": "POPULAR",
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85",
    "bg": "#dedfd6",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 98,
    "name": "Travel Passport Cover",
    "category": "Accessories",
    "description": "The finishing touch for everyday looks",
    "price": 1173,
    "oldPrice": 1473,
    "tag": "EVERYDAY PICK",
    "image": "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=85",
    "bg": "#e4d9ce",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 99,
    "name": "Compact Makeup Pouch",
    "category": "Accessories",
    "description": "The finishing touch for everyday looks",
    "price": 1339,
    "oldPrice": 1689,
    "tag": "EDITOR’S PICK",
    "image": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=85",
    "bg": "#e8dfd4",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 100,
    "name": "Everyday Phone Strap",
    "category": "Accessories",
    "description": "The finishing touch for everyday looks",
    "price": 304,
    "oldPrice": 454,
    "tag": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=85",
    "bg": "#e9e3d9",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 101,
    "name": "Everyday Tote Bag",
    "category": "Bags & extras",
    "description": "Practical details for life on the go",
    "price": 1227,
    "oldPrice": 1527,
    "tag": "JUST IN",
    "image": "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=85",
    "bg": "#e4d9ce",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 102,
    "name": "Minimal Crossbody Bag",
    "category": "Bags & extras",
    "description": "Practical details for life on the go",
    "price": 1393,
    "oldPrice": 1743,
    "tag": "POPULAR",
    "image": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=85",
    "bg": "#dedfd6",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 103,
    "name": "Classic Shoulder Bag",
    "category": "Bags & extras",
    "description": "Practical details for life on the go",
    "price": 1559,
    "oldPrice": 1959,
    "tag": "EVERYDAY PICK",
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85",
    "bg": "#e9e3d9",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 104,
    "name": "Quilted Shoulder Bag",
    "category": "Bags & extras",
    "description": "Practical details for life on the go",
    "price": 1725,
    "oldPrice": 2175,
    "tag": "EDITOR’S PICK",
    "image": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85",
    "bg": "#e8dfd4",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 105,
    "name": "Everyday Sling Bag",
    "category": "Bags & extras",
    "description": "Practical details for life on the go",
    "price": 1891,
    "oldPrice": 2341,
    "tag": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=85",
    "bg": "#e4d9ce",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 106,
    "name": "Compact Belt Bag",
    "category": "Bags & extras",
    "description": "Practical details for life on the go",
    "price": 2057,
    "oldPrice": 2557,
    "tag": "JUST IN",
    "image": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=85",
    "bg": "#dedfd6",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 107,
    "name": "Canvas Shopper Tote",
    "category": "Bags & extras",
    "description": "Practical details for life on the go",
    "price": 2223,
    "oldPrice": 2773,
    "tag": "POPULAR",
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85",
    "bg": "#e9e3d9",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 108,
    "name": "Structured Mini Tote",
    "category": "Bags & extras",
    "description": "Practical details for life on the go",
    "price": 2389,
    "oldPrice": 2989,
    "tag": "EVERYDAY PICK",
    "image": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85",
    "bg": "#e8dfd4",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 109,
    "name": "Roomy Work Tote",
    "category": "Bags & extras",
    "description": "Practical details for life on the go",
    "price": 454,
    "oldPrice": 604,
    "tag": "EDITOR’S PICK",
    "image": "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=85",
    "bg": "#e4d9ce",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 110,
    "name": "Foldable Shopping Bag",
    "category": "Bags & extras",
    "description": "Practical details for life on the go",
    "price": 620,
    "oldPrice": 770,
    "tag": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=85",
    "bg": "#dedfd6",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 111,
    "name": "Everyday Backpack",
    "category": "Bags & extras",
    "description": "Practical details for life on the go",
    "price": 786,
    "oldPrice": 986,
    "tag": "JUST IN",
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85",
    "bg": "#e9e3d9",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 112,
    "name": "Minimal Laptop Backpack",
    "category": "Bags & extras",
    "description": "Practical details for life on the go",
    "price": 952,
    "oldPrice": 1202,
    "tag": "POPULAR",
    "image": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85",
    "bg": "#e8dfd4",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 113,
    "name": "Canvas Daypack",
    "category": "Bags & extras",
    "description": "Practical details for life on the go",
    "price": 1118,
    "oldPrice": 1418,
    "tag": "EVERYDAY PICK",
    "image": "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=85",
    "bg": "#e4d9ce",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 114,
    "name": "Compact Travel Backpack",
    "category": "Bags & extras",
    "description": "Practical details for life on the go",
    "price": 1284,
    "oldPrice": 1584,
    "tag": "EDITOR’S PICK",
    "image": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=85",
    "bg": "#dedfd6",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 115,
    "name": "Gym Duffel Bag",
    "category": "Bags & extras",
    "description": "Practical details for life on the go",
    "price": 1450,
    "oldPrice": 1800,
    "tag": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85",
    "bg": "#e9e3d9",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 116,
    "name": "Weekend Duffle Bag",
    "category": "Bags & extras",
    "description": "Practical details for life on the go",
    "price": 1616,
    "oldPrice": 2016,
    "tag": "JUST IN",
    "image": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85",
    "bg": "#e8dfd4",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 117,
    "name": "Carry-On Travel Bag",
    "category": "Bags & extras",
    "description": "Practical details for life on the go",
    "price": 1782,
    "oldPrice": 2232,
    "tag": "POPULAR",
    "image": "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=85",
    "bg": "#e4d9ce",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 118,
    "name": "Lightweight Weekender",
    "category": "Bags & extras",
    "description": "Practical details for life on the go",
    "price": 1948,
    "oldPrice": 2448,
    "tag": "EVERYDAY PICK",
    "image": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=85",
    "bg": "#dedfd6",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 119,
    "name": "Mini Crossbody Purse",
    "category": "Bags & extras",
    "description": "Practical details for life on the go",
    "price": 2114,
    "oldPrice": 2664,
    "tag": "EDITOR’S PICK",
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85",
    "bg": "#e9e3d9",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 120,
    "name": "Camera Crossbody Bag",
    "category": "Bags & extras",
    "description": "Practical details for life on the go",
    "price": 2280,
    "oldPrice": 2830,
    "tag": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85",
    "bg": "#e8dfd4",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 121,
    "name": "Phone Crossbody Pouch",
    "category": "Bags & extras",
    "description": "Practical details for life on the go",
    "price": 2446,
    "oldPrice": 3046,
    "tag": "JUST IN",
    "image": "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=85",
    "bg": "#e4d9ce",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 122,
    "name": "Half-Moon Shoulder Bag",
    "category": "Bags & extras",
    "description": "Practical details for life on the go",
    "price": 511,
    "oldPrice": 661,
    "tag": "POPULAR",
    "image": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=85",
    "bg": "#dedfd6",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 123,
    "name": "Bucket Bag",
    "category": "Bags & extras",
    "description": "Practical details for life on the go",
    "price": 677,
    "oldPrice": 827,
    "tag": "EVERYDAY PICK",
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85",
    "bg": "#e9e3d9",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 124,
    "name": "Woven Summer Tote",
    "category": "Bags & extras",
    "description": "Practical details for life on the go",
    "price": 843,
    "oldPrice": 1043,
    "tag": "EDITOR’S PICK",
    "image": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85",
    "bg": "#e8dfd4",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 125,
    "name": "Raffia-Style Tote",
    "category": "Bags & extras",
    "description": "Practical details for life on the go",
    "price": 1009,
    "oldPrice": 1259,
    "tag": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=85",
    "bg": "#e4d9ce",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 126,
    "name": "Quilted Mini Bag",
    "category": "Bags & extras",
    "description": "Practical details for life on the go",
    "price": 1175,
    "oldPrice": 1475,
    "tag": "JUST IN",
    "image": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=85",
    "bg": "#dedfd6",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 127,
    "name": "Chain Strap Evening Bag",
    "category": "Bags & extras",
    "description": "Practical details for life on the go",
    "price": 1341,
    "oldPrice": 1691,
    "tag": "POPULAR",
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85",
    "bg": "#e9e3d9",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 128,
    "name": "Classic Clutch Bag",
    "category": "Bags & extras",
    "description": "Practical details for life on the go",
    "price": 1507,
    "oldPrice": 1907,
    "tag": "EVERYDAY PICK",
    "image": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85",
    "bg": "#e8dfd4",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 129,
    "name": "Envelope Evening Clutch",
    "category": "Bags & extras",
    "description": "Practical details for life on the go",
    "price": 1673,
    "oldPrice": 2073,
    "tag": "EDITOR’S PICK",
    "image": "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=85",
    "bg": "#e4d9ce",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 130,
    "name": "Compact Wristlet",
    "category": "Bags & extras",
    "description": "Practical details for life on the go",
    "price": 1839,
    "oldPrice": 2289,
    "tag": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=85",
    "bg": "#dedfd6",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 131,
    "name": "Travel Toiletry Bag",
    "category": "Bags & extras",
    "description": "Practical details for life on the go",
    "price": 2005,
    "oldPrice": 2505,
    "tag": "JUST IN",
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85",
    "bg": "#e9e3d9",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 132,
    "name": "Makeup Organizer Bag",
    "category": "Bags & extras",
    "description": "Practical details for life on the go",
    "price": 2171,
    "oldPrice": 2721,
    "tag": "POPULAR",
    "image": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85",
    "bg": "#e8dfd4",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 133,
    "name": "Jewellery Travel Case",
    "category": "Bags & extras",
    "description": "Practical details for life on the go",
    "price": 2337,
    "oldPrice": 2937,
    "tag": "EVERYDAY PICK",
    "image": "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=85",
    "bg": "#e4d9ce",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 134,
    "name": "Tech Accessories Pouch",
    "category": "Bags & extras",
    "description": "Practical details for life on the go",
    "price": 402,
    "oldPrice": 552,
    "tag": "EDITOR’S PICK",
    "image": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=85",
    "bg": "#dedfd6",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 135,
    "name": "Cable Organizer Pouch",
    "category": "Bags & extras",
    "description": "Practical details for life on the go",
    "price": 568,
    "oldPrice": 718,
    "tag": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85",
    "bg": "#e9e3d9",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 136,
    "name": "Laptop Sleeve",
    "category": "Bags & extras",
    "description": "Practical details for life on the go",
    "price": 734,
    "oldPrice": 934,
    "tag": "JUST IN",
    "image": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85",
    "bg": "#e8dfd4",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 137,
    "name": "Tablet Sleeve",
    "category": "Bags & extras",
    "description": "Practical details for life on the go",
    "price": 900,
    "oldPrice": 1100,
    "tag": "POPULAR",
    "image": "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=85",
    "bg": "#e4d9ce",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 138,
    "name": "Reusable Water Bottle",
    "category": "Bags & extras",
    "description": "Practical details for life on the go",
    "price": 1066,
    "oldPrice": 1316,
    "tag": "EVERYDAY PICK",
    "image": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=85",
    "bg": "#dedfd6",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 139,
    "name": "Insulated Travel Tumbler",
    "category": "Bags & extras",
    "description": "Practical details for life on the go",
    "price": 1232,
    "oldPrice": 1532,
    "tag": "EDITOR’S PICK",
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85",
    "bg": "#e9e3d9",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 140,
    "name": "Compact Umbrella",
    "category": "Bags & extras",
    "description": "Practical details for life on the go",
    "price": 1398,
    "oldPrice": 1748,
    "tag": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85",
    "bg": "#e8dfd4",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 141,
    "name": "Everyday Key Organizer",
    "category": "Bags & extras",
    "description": "Practical details for life on the go",
    "price": 1564,
    "oldPrice": 1964,
    "tag": "JUST IN",
    "image": "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=85",
    "bg": "#e4d9ce",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 142,
    "name": "Travel Luggage Tag Set",
    "category": "Bags & extras",
    "description": "Practical details for life on the go",
    "price": 1730,
    "oldPrice": 2180,
    "tag": "POPULAR",
    "image": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=85",
    "bg": "#dedfd6",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 143,
    "name": "Packing Cube Set",
    "category": "Bags & extras",
    "description": "Practical details for life on the go",
    "price": 1896,
    "oldPrice": 2346,
    "tag": "EVERYDAY PICK",
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85",
    "bg": "#e9e3d9",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 144,
    "name": "Passport and Card Holder Set",
    "category": "Bags & extras",
    "description": "Practical details for life on the go",
    "price": 2062,
    "oldPrice": 2562,
    "tag": "EDITOR’S PICK",
    "image": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85",
    "bg": "#e8dfd4",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 145,
    "name": "Compact Shoe Bag",
    "category": "Bags & extras",
    "description": "Practical details for life on the go",
    "price": 2228,
    "oldPrice": 2778,
    "tag": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=85",
    "bg": "#e4d9ce",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 146,
    "name": "Shoe Care Kit",
    "category": "Bags & extras",
    "description": "Practical details for life on the go",
    "price": 2394,
    "oldPrice": 2994,
    "tag": "JUST IN",
    "image": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=85",
    "bg": "#dedfd6",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 147,
    "name": "Reusable Lunch Tote",
    "category": "Bags & extras",
    "description": "Practical details for life on the go",
    "price": 459,
    "oldPrice": 609,
    "tag": "POPULAR",
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85",
    "bg": "#e9e3d9",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 148,
    "name": "Picnic Essentials Pouch",
    "category": "Bags & extras",
    "description": "Practical details for life on the go",
    "price": 625,
    "oldPrice": 775,
    "tag": "EVERYDAY PICK",
    "image": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85",
    "bg": "#e8dfd4",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 149,
    "name": "Foldable Travel Organizer",
    "category": "Bags & extras",
    "description": "Practical details for life on the go",
    "price": 791,
    "oldPrice": 991,
    "tag": "EDITOR’S PICK",
    "image": "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=85",
    "bg": "#e4d9ce",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 150,
    "name": "Giftable Accessory Set",
    "category": "Bags & extras",
    "description": "Practical details for life on the go",
    "price": 957,
    "oldPrice": 1207,
    "tag": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=85",
    "bg": "#dedfd6",
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 151,
    "name": "Oversized Graphic Streetwear Tee",
    "category": "Clothing",
    "description": "Relaxed streetwear fit",
    "price": 699,
    "oldPrice": 849,
    "tag": "TRENDING 2026",
    "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85",
    "bg": "#e9e3d9",
    "trending": true,
    "audience": [
      "Men"
    ],
    "section": "Clothing"
  },
  {
    "id": 152,
    "name": "Heavyweight Boxy Tee",
    "category": "Clothing",
    "description": "Structured premium cotton look",
    "price": 899,
    "oldPrice": 1099,
    "tag": "TRENDING 2026",
    "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85",
    "bg": "#e9e3d9",
    "trending": true,
    "audience": [
      "Men"
    ],
    "section": "Clothing"
  },
  {
    "id": 153,
    "name": "Vintage Wash Baby Tee",
    "category": "Clothing",
    "description": "Y2K-inspired fitted staple",
    "price": 599,
    "oldPrice": 729,
    "tag": "TRENDING 2026",
    "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85",
    "bg": "#e9e3d9",
    "trending": true,
    "audience": [
      "Women"
    ],
    "section": "Clothing"
  },
  {
    "id": 154,
    "name": "Contrast Stitch Cargo Pants",
    "category": "Clothing",
    "description": "Utility-inspired everyday style",
    "price": 1299,
    "oldPrice": 1589,
    "tag": "TRENDING 2026",
    "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=85",
    "bg": "#e9e3d9",
    "trending": true,
    "audience": [
      "Men"
    ],
    "section": "Clothing"
  },
  {
    "id": 155,
    "name": "Relaxed Wide-Leg Jeans",
    "category": "Clothing",
    "description": "Easy wide-leg denim silhouette",
    "price": 1499,
    "oldPrice": 1829,
    "tag": "TRENDING 2026",
    "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=85",
    "bg": "#e9e3d9",
    "trending": true,
    "audience": [
      "Men"
    ],
    "section": "Clothing"
  },
  {
    "id": 156,
    "name": "Baggy Denim Jeans",
    "category": "Clothing",
    "description": "Streetwear-inspired relaxed denim",
    "price": 1399,
    "oldPrice": 1709,
    "tag": "TRENDING 2026",
    "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=85",
    "bg": "#e9e3d9",
    "trending": true,
    "audience": [
      "Men"
    ],
    "section": "Clothing"
  },
  {
    "id": 157,
    "name": "Linen Blend Co-Ord Set",
    "category": "Clothing",
    "description": "Breathable matching set",
    "price": 1599,
    "oldPrice": 1949,
    "tag": "TRENDING 2026",
    "image": "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=900&q=85",
    "bg": "#e9e3d9",
    "trending": true,
    "audience": [
      "Women"
    ],
    "section": "Clothing"
  },
  {
    "id": 158,
    "name": "Textured Resort Shirt",
    "category": "Clothing",
    "description": "Holiday-ready statement shirt",
    "price": 999,
    "oldPrice": 1219,
    "tag": "TRENDING 2026",
    "image": "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=900&q=85",
    "bg": "#e9e3d9",
    "trending": true,
    "audience": [
      "Men"
    ],
    "section": "Clothing"
  },
  {
    "id": 159,
    "name": "Striped Oversized Shirt",
    "category": "Clothing",
    "description": "Layer-friendly relaxed tailoring",
    "price": 1099,
    "oldPrice": 1339,
    "tag": "TRENDING 2026",
    "image": "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=900&q=85",
    "bg": "#e9e3d9",
    "trending": true,
    "audience": [
      "Men"
    ],
    "section": "Clothing"
  },
  {
    "id": 160,
    "name": "Satin Halter Top",
    "category": "Clothing",
    "description": "Going-out satin finish",
    "price": 799,
    "oldPrice": 979,
    "tag": "TRENDING 2026",
    "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85",
    "bg": "#e9e3d9",
    "trending": true,
    "audience": [
      "Women"
    ],
    "section": "Clothing"
  },
  {
    "id": 161,
    "name": "Corset-Style Evening Top",
    "category": "Clothing",
    "description": "Structured partywear silhouette",
    "price": 899,
    "oldPrice": 1099,
    "tag": "TRENDING 2026",
    "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85",
    "bg": "#e9e3d9",
    "trending": true,
    "audience": [
      "Women"
    ],
    "section": "Clothing"
  },
  {
    "id": 162,
    "name": "Floral Midi Dress",
    "category": "Clothing",
    "description": "Soft vintage-inspired floral print",
    "price": 1399,
    "oldPrice": 1709,
    "tag": "TRENDING 2026",
    "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85",
    "bg": "#e9e3d9",
    "trending": true,
    "audience": [
      "Women"
    ],
    "section": "Clothing"
  },
  {
    "id": 163,
    "name": "Bubble-Hem Mini Skirt",
    "category": "Clothing",
    "description": "Playful sculptural silhouette",
    "price": 999,
    "oldPrice": 1219,
    "tag": "TRENDING 2026",
    "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85",
    "bg": "#e9e3d9",
    "trending": true,
    "audience": [
      "Women"
    ],
    "section": "Clothing"
  },
  {
    "id": 164,
    "name": "Sporty Track Jacket",
    "category": "Clothing",
    "description": "Athleisure layering piece",
    "price": 1299,
    "oldPrice": 1589,
    "tag": "TRENDING 2026",
    "image": "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=900&q=85",
    "bg": "#e9e3d9",
    "trending": true,
    "audience": [
      "Men"
    ],
    "section": "Clothing"
  },
  {
    "id": 165,
    "name": "Indo-Western Printed Co-Ord",
    "category": "Clothing",
    "description": "Modern ethnic-inspired matching set",
    "price": 1699,
    "oldPrice": 2069,
    "tag": "TRENDING 2026",
    "image": "https://images.unsplash.com/photo-1583391733956-6c78276477e3?auto=format&fit=crop&w=900&q=85",
    "bg": "#e9e3d9",
    "trending": true,
    "audience": [
      "Women"
    ],
    "section": "Clothing"
  },
  {
    "id": 166,
    "name": "Bag Charm Stack",
    "category": "Accessories",
    "description": "Personalise your everyday bag",
    "price": 299,
    "oldPrice": 369,
    "tag": "TRENDING 2026",
    "image": "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=85",
    "bg": "#e6e5df",
    "trending": true,
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 167,
    "name": "Chunky Silver Hoop Earrings",
    "category": "Accessories",
    "description": "Bold everyday statement",
    "price": 399,
    "oldPrice": 489,
    "tag": "TRENDING 2026",
    "image": "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=85",
    "bg": "#e6e5df",
    "trending": true,
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 168,
    "name": "Oversized Jhumka Earrings",
    "category": "Accessories",
    "description": "Festive statement accessory",
    "price": 499,
    "oldPrice": 609,
    "tag": "TRENDING 2026",
    "image": "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=85",
    "bg": "#e6e5df",
    "trending": true,
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 169,
    "name": "Layered Chain Necklace Set",
    "category": "Accessories",
    "description": "Mix-and-match layered look",
    "price": 449,
    "oldPrice": 549,
    "tag": "TRENDING 2026",
    "image": "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=85",
    "bg": "#e6e5df",
    "trending": true,
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 170,
    "name": "Beaded Bracelet Stack",
    "category": "Accessories",
    "description": "Colourful stacking accessory",
    "price": 299,
    "oldPrice": 369,
    "tag": "TRENDING 2026",
    "image": "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=85",
    "bg": "#e6e5df",
    "trending": true,
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 171,
    "name": "Statement Cuff Bracelet",
    "category": "Accessories",
    "description": "Sculptural wristwear",
    "price": 399,
    "oldPrice": 489,
    "tag": "TRENDING 2026",
    "image": "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=85",
    "bg": "#e6e5df",
    "trending": true,
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 172,
    "name": "Polki-Inspired Stud Earrings",
    "category": "Accessories",
    "description": "Occasion-ready sparkle",
    "price": 599,
    "oldPrice": 729,
    "tag": "TRENDING 2026",
    "image": "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=85",
    "bg": "#e6e5df",
    "trending": true,
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 173,
    "name": "Pearl Drop Earrings",
    "category": "Accessories",
    "description": "Modern classic jewellery",
    "price": 349,
    "oldPrice": 429,
    "tag": "TRENDING 2026",
    "image": "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=85",
    "bg": "#e6e5df",
    "trending": true,
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 174,
    "name": "Brown Retro Oval Sunglasses",
    "category": "Accessories",
    "description": "Vintage-inspired eyewear",
    "price": 599,
    "oldPrice": 729,
    "tag": "TRENDING 2026",
    "image": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=85",
    "bg": "#e6e5df",
    "trending": true,
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 175,
    "name": "Slim Rectangle Sunglasses",
    "category": "Accessories",
    "description": "Y2K-inspired eyewear",
    "price": 499,
    "oldPrice": 609,
    "tag": "TRENDING 2026",
    "image": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=85",
    "bg": "#e6e5df",
    "trending": true,
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 176,
    "name": "Tinted Lens Sunglasses",
    "category": "Accessories",
    "description": "Colour-tinted statement frames",
    "price": 549,
    "oldPrice": 669,
    "tag": "TRENDING 2026",
    "image": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=85",
    "bg": "#e6e5df",
    "trending": true,
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 177,
    "name": "Minimal Dial Everyday Watch",
    "category": "Accessories",
    "description": "Clean versatile watch style",
    "price": 999,
    "oldPrice": 1219,
    "tag": "TRENDING 2026",
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85",
    "bg": "#e6e5df",
    "trending": true,
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 178,
    "name": "Sporty Digital Watch",
    "category": "Accessories",
    "description": "Casual utility-inspired wristwear",
    "price": 799,
    "oldPrice": 979,
    "tag": "TRENDING 2026",
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85",
    "bg": "#e6e5df",
    "trending": true,
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 179,
    "name": "Reversible Statement Belt",
    "category": "Accessories",
    "description": "Style-defining waist accessory",
    "price": 499,
    "oldPrice": 609,
    "tag": "TRENDING 2026",
    "image": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=900&q=85",
    "bg": "#e6e5df",
    "trending": true,
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 180,
    "name": "Printed Silk-Look Scarf",
    "category": "Accessories",
    "description": "Versatile neck or hair accessory",
    "price": 399,
    "oldPrice": 489,
    "tag": "TRENDING 2026",
    "image": "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=85",
    "bg": "#e6e5df",
    "trending": true,
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 181,
    "name": "Mini Shoulder Bag",
    "category": "Bags & extras",
    "description": "Compact going-out bag",
    "price": 999,
    "oldPrice": 1219,
    "tag": "TRENDING 2026",
    "image": "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=85",
    "bg": "#dedfd6",
    "trending": true,
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 182,
    "name": "Oversized Soft Tote",
    "category": "Bags & extras",
    "description": "Roomy everyday carryall",
    "price": 899,
    "oldPrice": 1099,
    "tag": "TRENDING 2026",
    "image": "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=85",
    "bg": "#dedfd6",
    "trending": true,
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 183,
    "name": "Quilted Crossbody Bag",
    "category": "Bags & extras",
    "description": "Textured hands-free style",
    "price": 1099,
    "oldPrice": 1339,
    "tag": "TRENDING 2026",
    "image": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=85",
    "bg": "#dedfd6",
    "trending": true,
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 184,
    "name": "Utility Sling Bag",
    "category": "Bags & extras",
    "description": "Compact streetwear essential",
    "price": 799,
    "oldPrice": 979,
    "tag": "TRENDING 2026",
    "image": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=85",
    "bg": "#dedfd6",
    "trending": true,
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 185,
    "name": "Convertible Backpack Tote",
    "category": "Bags & extras",
    "description": "Two-way everyday carry",
    "price": 1299,
    "oldPrice": 1589,
    "tag": "TRENDING 2026",
    "image": "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=85",
    "bg": "#dedfd6",
    "trending": true,
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 186,
    "name": "Woven Texture Tote",
    "category": "Bags & extras",
    "description": "Textured warm-weather accessory",
    "price": 999,
    "oldPrice": 1219,
    "tag": "TRENDING 2026",
    "image": "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=85",
    "bg": "#dedfd6",
    "trending": true,
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 187,
    "name": "Metallic Party Clutch",
    "category": "Bags & extras",
    "description": "Evening-ready statement bag",
    "price": 899,
    "oldPrice": 1099,
    "tag": "TRENDING 2026",
    "image": "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=85",
    "bg": "#dedfd6",
    "trending": true,
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 188,
    "name": "Novelty Mini Bag",
    "category": "Bags & extras",
    "description": "Playful conversation-piece bag",
    "price": 799,
    "oldPrice": 979,
    "tag": "TRENDING 2026",
    "image": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=85",
    "bg": "#dedfd6",
    "trending": true,
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 189,
    "name": "Personalised-Style Canvas Tote",
    "category": "Bags & extras",
    "description": "Customisable-look everyday tote",
    "price": 499,
    "oldPrice": 609,
    "tag": "TRENDING 2026",
    "image": "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=85",
    "bg": "#dedfd6",
    "trending": true,
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 190,
    "name": "Travel Organiser Pouch Set",
    "category": "Bags & extras",
    "description": "Keep small essentials together",
    "price": 599,
    "oldPrice": 729,
    "tag": "TRENDING 2026",
    "image": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=85",
    "bg": "#dedfd6",
    "trending": true,
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 191,
    "name": "Sporty Nylon Shoulder Bag",
    "category": "Bags & extras",
    "description": "Lightweight casual shoulder bag",
    "price": 799,
    "oldPrice": 979,
    "tag": "TRENDING 2026",
    "image": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=85",
    "bg": "#dedfd6",
    "trending": true,
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 192,
    "name": "Structured Work Tote",
    "category": "Bags & extras",
    "description": "Polished everyday carry",
    "price": 1399,
    "oldPrice": 1709,
    "tag": "TRENDING 2026",
    "image": "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=85",
    "bg": "#dedfd6",
    "trending": true,
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 193,
    "name": "Drawstring Gym Sack",
    "category": "Bags & extras",
    "description": "Easy athleisure carry",
    "price": 399,
    "oldPrice": 489,
    "tag": "TRENDING 2026",
    "image": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=85",
    "bg": "#dedfd6",
    "trending": true,
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 194,
    "name": "Retro Baseball Cap",
    "category": "Bags & extras",
    "description": "Streetwear-ready headwear",
    "price": 399,
    "oldPrice": 489,
    "tag": "TRENDING 2026",
    "image": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=900&q=85",
    "bg": "#dedfd6",
    "trending": true,
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  },
  {
    "id": 195,
    "name": "Colour-Block Dad Cap",
    "category": "Bags & extras",
    "description": "Casual colour-pop accessory",
    "price": 449,
    "oldPrice": 549,
    "tag": "TRENDING 2026",
    "image": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=900&q=85",
    "bg": "#dedfd6",
    "trending": true,
    "audience": [
      "Men",
      "Women"
    ],
    "section": "Accessories"
  }
];
const money = n => new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(n);
let cart = [];
let activeCategory = "All";
let searchTerm = "";
const grid = document.getElementById("product-grid");
const emptyState = document.getElementById("empty-state");
const toast = document.getElementById("toast");
let toastTimer;

function renderProducts(){
  document.querySelectorAll(".category-chip").forEach(button=>{
    const category=button.dataset.category;
    const count=category==="All"?products.length:category==="Trending Now"?products.filter(p=>p.trending).length:category==="Men"||category==="Women"?products.filter(p=>p.section==="Clothing"&&p.audience&&p.audience.includes(category)).length:products.filter(p=>p.section==="Accessories").length;
    let badge=button.querySelector(".category-count");
    if(!badge){badge=document.createElement("span");badge.className="category-count";button.appendChild(badge);}
    badge.textContent=String(count);
  });
  const filtered = products.filter(p => (activeCategory==="All" || (activeCategory==="Trending Now" ? p.trending : activeCategory==="Men"||activeCategory==="Women" ? p.section==="Clothing"&&p.audience&&p.audience.includes(activeCategory) : p.section==="Accessories")) && (p.name+" "+p.description+" "+p.category+" "+p.tag+" "+(p.audience||[]).join(" ")).toLowerCase().includes(searchTerm.toLowerCase()));
  grid.innerHTML = filtered.map(p => `<article class="product-card">
    <div class="product-visual" style="background:${p.bg}">
      <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.style.display='none';this.parentElement.style.background='${p.bg}'">
      <span class="product-tag">${p.tag}</span><button class="quick-add" data-add="${p.id}" aria-label="Add ${p.name} to bag">+</button>
    </div>
    <div class="product-info"><div><h3>${p.name}</h3><p>${p.description}</p></div><div class="product-price">${money(p.price)}<del>${money(p.oldPrice)}</del></div></div>
  </article>`).join("");
  emptyState.hidden = filtered.length !== 0;
}
function showToast(message){
  toast.textContent = message; toast.classList.add("show");
  clearTimeout(toastTimer); toastTimer = setTimeout(()=>toast.classList.remove("show"),2400);
}
function addToCart(id){
  const item = cart.find(i=>i.id===id);
  if(item) item.qty++; else cart.push({id,qty:1});
  renderCart(); showToast(`${products.find(p=>p.id===id).name} added to your bag`);
}
function changeQty(id,delta){
  const item=cart.find(i=>i.id===id); if(!item)return;
  item.qty+=delta; if(item.qty<=0)cart=cart.filter(i=>i.id!==id);
  renderCart();
}
function renderCart(){
  const count=cart.reduce((s,i)=>s+i.qty,0);
  document.getElementById("cart-count").textContent=count;
  document.getElementById("drawer-count").textContent=`(${count})`;
  const itemsEl=document.getElementById("cart-items");
  itemsEl.innerHTML=cart.map(i=>{
    const p=products.find(p=>p.id===i.id);
    return `<div class="cart-item"><img src="${p.image}" alt=""><div><h3>${p.name}</h3><p>${money(p.price)}</p><div class="quantity-controls"><button data-qty="${p.id}" data-delta="-1" aria-label="Decrease quantity">−</button><span>${i.qty}</span><button data-qty="${p.id}" data-delta="1" aria-label="Increase quantity">+</button></div></div><span class="line-price">${money(p.price*i.qty)}</span></div>`;
  }).join("");
  const empty=cart.length===0;
  document.getElementById("cart-empty").style.display=empty?"block":"none";
  document.getElementById("cart-footer").style.display=empty?"none":"block";
  document.getElementById("cart-subtotal").textContent=money(cart.reduce((s,i)=>s+products.find(p=>p.id===i.id).price*i.qty,0));
}
function openCart(){
  document.getElementById("cart-drawer").classList.add("open");
  document.getElementById("cart-overlay").classList.add("open");
  document.getElementById("cart-drawer").setAttribute("aria-hidden","false");
  document.body.style.overflow="hidden";
}
function closeCart(){
  document.getElementById("cart-drawer").classList.remove("open");
  document.getElementById("cart-overlay").classList.remove("open");
  document.getElementById("cart-drawer").setAttribute("aria-hidden","true");
  document.body.style.overflow="";
}
grid.addEventListener("click",e=>{const b=e.target.closest("[data-add]");if(b)addToCart(Number(b.dataset.add));});
document.getElementById("cart-items").addEventListener("click",e=>{const b=e.target.closest("[data-qty]");if(b)changeQty(Number(b.dataset.qty),Number(b.dataset.delta));});
document.getElementById("cart-open").addEventListener("click",openCart);
document.getElementById("cart-close").addEventListener("click",closeCart);
document.getElementById("cart-overlay").addEventListener("click",closeCart);
document.getElementById("continue-shopping").addEventListener("click",()=>{closeCart();document.getElementById("shop").scrollIntoView({behavior:"smooth"});});
document.getElementById("checkout-button").addEventListener("click",()=>showToast("Demo checkout only — connect a payment provider before launch."));
function selectCategory(category, options={}){
  activeCategory=category;
  document.querySelectorAll(".category-chip").forEach(c=>c.classList.toggle("active",c.dataset.category===category));
  const heading=document.querySelector(".section-heading h2");
  if(heading){
    const titles={All:'Shop <em>your style.</em>',Men:'The men’s <em>edit.</em>',Women:'The women’s <em>edit.</em>',Accessories:'The finishing <em>touch.</em>',"Trending Now":'<em>Trending</em> right now.'};
    heading.innerHTML=titles[category]||titles.All;
  }
  renderProducts();
  if(options.scroll){document.getElementById("shop").scrollIntoView({behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"start"});}
  if(options.hash){
    const slug=category==="All"?"shop":category==="Trending Now"?"trending":category.toLowerCase();
    history.pushState({category},"",`#${slug}`);
  }
}
document.querySelectorAll(".category-chip").forEach(b=>b.addEventListener("click",()=>selectCategory(b.dataset.category)));
document.querySelectorAll("[data-category-choice]").forEach(link=>link.addEventListener("click",e=>{
  e.preventDefault();
  selectCategory(link.dataset.categoryChoice,{scroll:true,hash:true});
  document.getElementById("mobile-nav")?.classList.remove("open");
}));
window.addEventListener("popstate",()=>{
  const slug=location.hash.replace(/^#/,"").toLowerCase();
  const map={men:"Men",women:"Women",accessories:"Accessories",trending:"Trending Now",shop:"All",welcome:"All"};
  if(map[slug])selectCategory(map[slug]);
});
document.getElementById("search-toggle").addEventListener("click",()=>{
  const panel=document.getElementById("search-panel");panel.classList.toggle("open");
  if(panel.classList.contains("open"))document.getElementById("search-input").focus();
});
document.getElementById("search-input").addEventListener("input",e=>{searchTerm=e.target.value;renderProducts();});
document.getElementById("search-clear").addEventListener("click",()=>{document.getElementById("search-input").value="";searchTerm="";renderProducts();});
document.getElementById("view-all").addEventListener("click",()=>{activeCategory="All";document.querySelectorAll(".category-chip").forEach(c=>c.classList.toggle("active",c.dataset.category==="All"));renderProducts();});
document.getElementById("menu-toggle").addEventListener("click",()=>document.getElementById("mobile-nav").classList.toggle("open"));
document.getElementById("mobile-nav").querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>document.getElementById("mobile-nav").classList.remove("open")));
document.getElementById("newsletter-form").addEventListener("submit",e=>{
  e.preventDefault();document.getElementById("newsletter-message").textContent="Thanks! Connect an email platform to collect real subscribers.";e.target.reset();
});
const initialSlug=location.hash.replace(/^#/,"").toLowerCase();
const initialCategory={men:"Men",women:"Women",accessories:"Accessories",trending:"Trending Now"}[initialSlug];
if(initialCategory)selectCategory(initialCategory);else renderProducts();
renderCart();
