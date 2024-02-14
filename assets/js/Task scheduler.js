function calculateTime() {
    const tasksInput = document.getElementById('tasksInput').value;
    const tasks = tasksInput.split(',');
    const n = parseInt(document.getElementById('cooldownInput').value);
  
    const result = leastTimeToFinish(tasks, n);
  
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `<p>Least number of units of time: ${result}</p>`;
  }
  
  function leastTimeToFinish(tasks, n) {
    const taskCount = new Array(26).fill(0);
    for (const task of tasks) {
      const index = task.charCodeAt(0) - 'A'.charCodeAt(0);
      taskCount[index]++;
    }
  
    taskCount.sort((a, b) => b - a);
  
    let maxCount = taskCount[0] - 1;
    let idleSlots = maxCount * n;
  
    for (let i = 1; i < taskCount.length; i++) {
      idleSlots -= Math.min(taskCount[i], maxCount);
    }
  
    return Math.max(0, tasks.length + idleSlots);
  }