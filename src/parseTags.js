const inputRealUser1 = {
    tags: ['happy', 'good', 'fine']
}
const inputRealUser2 = {
    tags: ['foo', 'good', 'bar']
}

// 算出兩個用戶的標籤維度
function countDimensions(inputRealUser1, inputRealUser2) {
    let t1 = inputRealUser1.tags;
    let t2 = inputRealUser2.tags;
    const alltags = new Set(t1.concat(t2)); // 更正拼寫並使用 new Set()
    return Array.from(alltags); // 轉換集合為數組
}

const uniqueTags = countDimensions(inputRealUser1, inputRealUser2);
// console.log("合併後的標籤（無重複）:", uniqueTags);
// 這個函數將標籤字串轉換為標籤數組






// add Error case ....
function parseTags(tags) {
    return (tags || '').split(',').filter(x => x.trim());
}

module.exports = { 
    parseTags
}