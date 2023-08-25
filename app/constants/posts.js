import React from 'react'


const posts = [
    {
        imagePath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/DSC_0005.jpg",
        thumbnailPath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/thumbnails/DSC_0005.jpg",
        tags: ["nature"]
    },
    {
        imagePath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/DSC_0038.jpg",
        thumbnailPath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/thumbnails/DSC_0038.jpg",
        tags: ["nature"]
    },
    {
        imagePath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/DSC_0060 (2).jpg",
        thumbnailPath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/thumbnails/DSC_0060 (2).jpg",
        tags: ["nature"]
    },
    {
        imagePath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/DSC_0095.jpg",
        thumbnailPath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/thumbnails/DSC_0095.jpg",
        tags: ["nature"]
    },
    {
        imagePath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/DSC_0100.jpg",
        thumbnailPath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/thumbnails/DSC_0100.jpg",
        tags: ["macro"]
    },
    {
        imagePath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/DSC_0117.jpg",
        thumbnailPath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/thumbnails/DSC_0117.jpg",
        tags: ["nature", "mountain-strawberries"]
    },
    {
        imagePath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/DSC_0120.jpg",
        thumbnailPath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/thumbnails/DSC_0120.jpg",
        tags: ["nature"]
    },
    {
        imagePath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/DSC_0144.jpg",
        thumbnailPath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/thumbnails/DSC_0144.jpg",
        tags: ["nature"]
    },

    {
        imagePath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/DSC_0148.jpg",
        thumbnailPath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/thumbnails/DSC_0148.jpg",
        tags: ["nature"]
    },
    {
        imagePath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/DSC_0156.jpg",
        thumbnailPath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/thumbnails/DSC_0156.jpg",
        tags: ["nature"]
    },
    {
        imagePath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/DSC_0164.jpg",
        thumbnailPath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/thumbnails/DSC_0164.jpg",
        tags: ["macro", "mountain-strawberries"]
    },
    {
        imagePath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/DSC_0165.jpg",
        thumbnailPath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/thumbnails/DSC_0165.jpg",
        tags: ["macro", "mountain-strawberries"]
    },
    {
        imagePath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/DSC_0167.jpg",
        thumbnailPath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/thumbnails/DSC_0167.jpg",
        tags: ["nature"]
    },
    {
        imagePath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/DSC_0168.jpg",
        thumbnailPath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/thumbnails/DSC_0168.jpg",
        tags: ["mountain-strawberries"]
    },
    {
        imagePath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/DSC_0171.jpg",
        thumbnailPath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/thumbnails/DSC_0171.jpg",
        tags: ["macro", "mountain-strawberries"]
    },
    {
        imagePath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/DSC_0197.jpg",
        thumbnailPath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/thumbnails/DSC_0197.jpg",
        tags: ["nature"]
    },
    {
        imagePath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/DSC_0559.jpg",
        thumbnailPath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/thumbnails/DSC_0559.jpg",
        tags: ["nature", "snow"]
    },
    {
        imagePath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/DSC_0774.jpg",
        thumbnailPath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/thumbnails/DSC_0774.jpg",
        tags: ["nature", "tree-inside-trees"]
    },
    {
        imagePath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/DSC_0785.jpg",
        thumbnailPath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/thumbnails/DSC_0785.jpg",
        tags: ["macro"]
    },
    {
        imagePath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/DSC_0794.jpg",
        thumbnailPath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/thumbnails/DSC_0794.jpg",
        tags: ["macro"]
    },
    {
        imagePath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/DSC_0799.jpg",
        thumbnailPath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/thumbnails/DSC_0799.jpg",
        tags: ["macro"]
    },
    {
        imagePath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/DSC_0810.jpg",
        thumbnailPath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/thumbnails/DSC_0810.jpg",
        tags: ["macro"]
    },
    {
        imagePath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/DSC_0960.jpg",
        thumbnailPath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/thumbnails/DSC_0960.jpg",
        tags: ["macro", "mountain-strawberries"]
    },
    {
        imagePath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/DSC_1039.jpg",
        thumbnailPath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/thumbnails/DSC_1039.jpg",
        tags: ["macro"]
    },
    {
        imagePath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/DSC_1072.jpg",
        thumbnailPath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/thumbnails/DSC_1072.jpg",
        tags: ["nature", "buildings"]
    },
    {
        imagePath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/DSC_1076.jpg",
        thumbnailPath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/thumbnails/DSC_1076.jpg",
        tags: ["buildings"]
    },
    {
        imagePath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/DSC_1079.JPG",
        thumbnailPath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/thumbnails/DSC_1079.JPG",
        tags: ["buildings"]
    },
    {
        imagePath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/DSC_1103.jpg",
        thumbnailPath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/thumbnails/DSC_1103.jpg",
        tags: ["nature", "tree-inside-trees"]
    },
    {
        imagePath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/DSC_1221.jpg",
        thumbnailPath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/thumbnails/DSC_1221.jpg",
        tags: ["nature", "tree-inside-trees"]
    },
    {
        imagePath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/DSC_1234.jpg",
        thumbnailPath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/thumbnails/DSC_1234.jpg",
        tags: ["nature", "tree-inside-trees"]
    },
    {
        imagePath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/DSC_1237 (2).jpg",
        thumbnailPath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/thumbnails/DSC_1237 (2).jpg",
        tags: ["nature", "tree-inside-trees"]
    },
    {
        imagePath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/DSC_1237.jpg",
        thumbnailPath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/thumbnails/DSC_1237.jpg",
        tags: ["nature", "snow"]
    },
    {
        imagePath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/DSC_1248.jpg",
        thumbnailPath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/thumbnails/DSC_1248.jpg",
        tags: ["nature", "tree-inside-trees"]
    },
    {
        imagePath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/DSC_1251.jpg",
        thumbnailPath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/thumbnails/DSC_1251.jpg",
        tags: ["nature", "tree-inside-trees"]
    },
    {
        imagePath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/DSC_1252.jpg",
        thumbnailPath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/thumbnails/DSC_1252.jpg",
        tags: ["nature", "tree-inside-trees"]
    },
    {
        imagePath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/DSC_1259.jpg",
        thumbnailPath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/thumbnails/DSC_1259.jpg",
        tags: ["nature", "tree-inside-trees"]
    },
    {
        imagePath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/DSC_1909.jpg",
        thumbnailPath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/thumbnails/DSC_1909.jpg",
        tags: ["macro"]
    },
    {
        imagePath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/DSC_1911.jpg",
        thumbnailPath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/thumbnails/DSC_1911.jpg",
        tags: ["macro"]
    },
    {
        imagePath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/DSC_3444.jpg",
        thumbnailPath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/thumbnails/DSC_3444.jpg",
        tags: ["buildings"]
    },
    {
        imagePath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/DSC_3445.jpg",
        thumbnailPath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/thumbnails/DSC_3445.jpg",
        tags: ["buildings"]
    },
    {
        imagePath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/DSC_3446.jpg",
        thumbnailPath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/thumbnails/DSC_3446.jpg",
        tags: ["buildings"]
    },
    {
        imagePath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/DSC_3447.jpg",
        thumbnailPath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/thumbnails/DSC_3447.jpg",
        tags: ["buildings"]
    },
    {
        imagePath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/DSC_3449.jpg",
        thumbnailPath: "https://raw.githubusercontent.com/serkankaragoz/kastamonu-images/master/thumbnails/DSC_3449.jpg",
        tags: ["buildings"]
    },
]

export default posts