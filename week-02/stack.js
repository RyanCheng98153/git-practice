// stack.js
// 完成以下 TODO 的部分，並且以 Module 的方式匯出 (ESM)
export default class Stack {
	// TODO: # 有特別的意思嗎？請以註解回覆。
  #items;
  /* hashtag (#)
  *   JavaScript using the hashtag (#) in front of the method or property name when it is "private method" or "private variable"
  *   (#items) works like (private int[] items) in C/C++, nearly equals to (__items: list[int]) in Python 
  *   # 在 javascript 中 (#) 用來表示此 "變數" 或 "函數" 為 private (私有類別)
  *   private (私有類別):
  *   定義成private(私有類別)，可以用來避免任何人"從物件外部" 存取、引用此變數、呼叫此函式，並且此變數或函數"僅在物件內可見"
  */

  constructor() {
    this.#items = [];
  }

  // 在 stack 頂部加入元素i
  push(element) {
    /* [ Other Implementation ]
     * this.#items.concat(element) // array.concat 合併兩個 array 的 items 成一個新array
    */

    this.#items = [...this.#items, element]; // spread (...) operator
  }

  // 移除並回傳 stack 頂部的元素
  pop() {
    if (this.isEmpty()) return undefined; // 確保陣列不為空
    const lastElement = this.peek(); // peek 已經實例過了，可以直接使用
    
    /* [ Other Implementation ]
     *  this.#items.splice(-1) // splice(start=-1) 會刪除從 start 開始的 item，start = -1，從倒數第1個element開始(負索引)
    */
    
    this.#items.length -= 1 
    // shorten the array by cutting off the array length 
    // 減少 array 的長度，會同時刪除 array 多餘的 item
    return lastElement
  }

  // 回傳 stack 頂部的元素，但不移除它
  peek() {
    if (this.isEmpty()) return undefined; // 確保陣列不為空
    
    // [ Other Implementation ]
    //  return this.#items[this.#items.length -1] // 回傳陣列最後一個的值
    //  return this.#items.slice(-1)[0] // 回傳 slice 
    //  Note: Array 不支持負索引，所以用slice => arr[-1] = undefined

    return this.#items.slice(-1)[0]
  }

  // 檢查 stack 是否為空
  isEmpty() {
    return this.#items.length === 0 
    // strict equality to prevent undefined
    // 使用嚴格等於 (===) 避免型別為 False 或 undefined
  }

  // 回傳 stack 中元素的個數
  size() {
    return this.#items.length
  }

  // 清空 stack 
  clear() {
    this.#items = []
  }

  // 印出 stack 內容
  print() {
    let str = this.isEmpty() ? '[]' : `[ ${(this.#items).join(', ')} ]`
    console.log(str) // 用 join 把 stack 中每個 item 分開並插入 ", "
  }
}

// 學習筆記
/*  [Splice Usage]
  *    this.#items.splice(this.#items.length, 0, element)
  *    Note: Removes [-deleteCount] items starting from [-start]
  *          then add [-addItem] at [-start]
  *
  *    Parameters:
  *      - start (number): start index(position) to remove or add items.
  *      - deleteCount (number): number of delete items, if no deletion only addition set to 0
  *      - addItem (...any): Optional. Items to add starting at startPosition.
  *    
  *    Assign:
  *      - Array: modified array is assign back to the original array
  *      
  *    Returns:
  *      - Reduce Array: Reduce item array.
  *    
  *    Other Usage: 
  *     - this.#items.splice(-1) // splice(start=-1) 
  *      Note: delete the items after [-start] 
  *            (負索引)部分用中文說明：
  *            若是 [-start] 為負數，則 start 從陣列後方往前數(負索引)
  *            ex: [-start] = -2, 倒數第 2 個 item
  */
  /* [Slice Usage]
  *      this.#items.slice(0, -1) 
  *      Note: 有點難理解，用中文表示
  *            當 [-start] 為 0 時，[-deleteCount]為負數時，
  *            可用於負索引(從陣列後方往前數)，進行刪除
  *            [-deletecount] = -1，刪除最後 1 個 item
  *            [-deletecount] = -2，刪除倒數 2 個 item
  */
  