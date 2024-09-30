function doJob(job, time, cb) {
  setTimeout(() => {
    // 只有在這裡，才能知道這個非同步的 setTimeout 已經做完事情了
    let now = new Date();
    cb(`完成工作 ${job} at ${now.toISOString()}`);
  }, time);
}

// 刷牙 1sec -> 吃早餐 3 sec -> 寫功課 1sec -> 吃午餐 2sec
let now = new Date();
console.log(`開始工作 at ${now.toISOString()}`);
// write your code here
// 以下是使用範例

class Timer{
  #scheduled_time = 0
  constructor () {
    this.#scheduled_time = 0
  }
  
  add_time (time) {
    this.#scheduled_time += time
    return this.#scheduled_time
  }
}

timer = new Timer()

// 1 秒後完成刷牙
doJob('刷牙', timer.add_time(1000), function (data) {
  console.log(data);
});

// 3 秒後完成吃早餐
doJob('吃早餐', timer.add_time(3000), function (data) {
  console.log(data);
});

// 1 秒後完成寫功課
doJob('寫功課', timer.add_time(1000), function (data) {
  console.log(data);
});

// 2 秒後完成寫功課
doJob('吃午餐', timer.add_time(2000), function (data) {
  console.log(data);
});


// array.shift() 可用來移除 array 的第一個 item，並回傳被移除的 item 給變數
/**
 * const array1 = [1, 2, 3];
 * const firstElement = array1.shift();
 * 
 * console.log(array1);
 * // Expected output: Array [2, 3]
 * console.log(firstElement);
 * // Expected output: 1
 */

// 原本打算建立一個 TaskQueue 解決，尚未完成
/*
class TaskQueue {
  constructor() {
    this.queue = [];
    this.isRunning = false;
  }

  // Add tasks to the queue (but don't execute yet)
  enqueue(tasks) {
    this.queue = this.queue.concat(tasks);
    if (!this.isRunning) {
      this.runNext(); // Start processing the tasks if not already running
    }
  }

  // Runs the next task in the queue
  runNext() {
    if (this.queue.length === 0) {
      this.isRunning = false;
      return;
    }
    
    this.isRunning = true;
    
    const task = this.queue.shift(); // Get the first task in the queue
    const func = task.bind(null); // Rebind it without altering arguments
    
    // Execute the task, then wait for it to complete
    func(() => {
      this.runNext(); // Run the next task after current one is done
    });
  }
}
*/