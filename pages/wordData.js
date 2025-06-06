// 单词数据库
const wordData = {
    fruits: {
        name: "水果",
        icon: "🍎",
        words: [
            { id: 1, word: "apple", chinese: "苹果", emoji: "🍎", audio: "apple.mp3", difficulty: 1 },
            { id: 2, word: "banana", chinese: "香蕉", emoji: "🍌", audio: "banana.mp3", difficulty: 1 },
            { id: 3, word: "orange", chinese: "橙子", emoji: "🍊", audio: "orange.mp3", difficulty: 1 },
            { id: 4, word: "strawberry", chinese: "草莓", emoji: "🍓", audio: "strawberry.mp3", difficulty: 2 },
            { id: 5, word: "grape", chinese: "葡萄", emoji: "🍇", audio: "grape.mp3", difficulty: 1 },
            { id: 6, word: "watermelon", chinese: "西瓜", emoji: "🍉", audio: "watermelon.mp3", difficulty: 2 },
            { id: 7, word: "pear", chinese: "梨", emoji: "🍐", audio: "pear.mp3", difficulty: 1 },
            { id: 8, word: "peach", chinese: "桃子", emoji: "🍑", audio: "peach.mp3", difficulty: 1 }
        ]
    },
    animals: {
        name: "动物",
        icon: "🐶",
        words: [
            { id: 1, word: "dog", chinese: "狗", emoji: "🐶", audio: "dog.mp3", difficulty: 1 },
            { id: 2, word: "cat", chinese: "猫", emoji: "🐱", audio: "cat.mp3", difficulty: 1 },
            { id: 3, word: "rabbit", chinese: "兔子", emoji: "🐰", audio: "rabbit.mp3", difficulty: 1 },
            { id: 4, word: "elephant", chinese: "大象", emoji: "🐘", audio: "elephant.mp3", difficulty: 2 },
            { id: 5, word: "tiger", chinese: "老虎", emoji: "🐯", audio: "tiger.mp3", difficulty: 1 },
            { id: 6, word: "bear", chinese: "熊", emoji: "🐻", audio: "bear.mp3", difficulty: 1 },
            { id: 7, word: "monkey", chinese: "猴子", emoji: "🐵", audio: "monkey.mp3", difficulty: 1 },
            { id: 8, word: "bird", chinese: "鸟", emoji: "🐦", audio: "bird.mp3", difficulty: 1 }
        ]
    },
    colors: {
        name: "颜色",
        icon: "🎨",
        words: [
            { id: 1, word: "red", chinese: "红色", emoji: "🔴", audio: "red.mp3", difficulty: 1 },
            { id: 2, word: "blue", chinese: "蓝色", emoji: "🔵", audio: "blue.mp3", difficulty: 1 },
            { id: 3, word: "yellow", chinese: "黄色", emoji: "🟡", audio: "yellow.mp3", difficulty: 1 },
            { id: 4, word: "green", chinese: "绿色", emoji: "🟢", audio: "green.mp3", difficulty: 1 },
            { id: 5, word: "purple", chinese: "紫色", emoji: "🟣", audio: "purple.mp3", difficulty: 1 },
            { id: 6, word: "orange", chinese: "橙色", emoji: "🟠", audio: "orange.mp3", difficulty: 1 },
            { id: 7, word: "black", chinese: "黑色", emoji: "⚫", audio: "black.mp3", difficulty: 1 },
            { id: 8, word: "white", chinese: "白色", emoji: "⚪", audio: "white.mp3", difficulty: 1 }
        ]
    },
    numbers: {
        name: "数字",
        icon: "🔢",
        words: [
            { id: 1, word: "one", chinese: "一", emoji: "1️⃣", audio: "one.mp3", difficulty: 1 },
            { id: 2, word: "two", chinese: "二", emoji: "2️⃣", audio: "two.mp3", difficulty: 1 },
            { id: 3, word: "three", chinese: "三", emoji: "3️⃣", audio: "three.mp3", difficulty: 1 },
            { id: 4, word: "four", chinese: "四", emoji: "4️⃣", audio: "four.mp3", difficulty: 1 },
            { id: 5, word: "five", chinese: "五", emoji: "5️⃣", audio: "five.mp3", difficulty: 1 },
            { id: 6, word: "six", chinese: "六", emoji: "6️⃣", audio: "six.mp3", difficulty: 1 },
            { id: 7, word: "seven", chinese: "七", emoji: "7️⃣", audio: "seven.mp3", difficulty: 1 },
            { id: 8, word: "eight", chinese: "八", emoji: "8️⃣", audio: "eight.mp3", difficulty: 1 }
        ]
    }
};

// 游戏进度存储
let gameProgress = {
    totalXP: 0,
    level: 1,
    streak: 0,
    lastPlayDate: null,
    achievements: [],
    wordsMastered: []
};