class Procedure {
    constructor(name, paramCount, parameters) {
      this.name = name;
      this.paramCount = paramCount;
      this.parameters = parameters;
    }
  }
  
  class Stack {
    constructor() {
      this.stack = [];
    }
  
    pushProcedure(name, paramCount, parameters) {
      const procedure = new Procedure(name, paramCount, parameters);
      this.stack.push(procedure);
    }
  
    ifStackEmpty() {
      if (this.isEmpty()) {
        console.log("Стек порожній");
      }
    }
  
    printStack() {
      this.stack.forEach((procedure, index) => {
        console.log(`Процедура #${index + 1}`);
        console.log(`Ім'я: ${procedure.name}`);
        console.log(`Кількість параметрів: ${procedure.paramCount}`);
        console.log(`Параметри: ${procedure.parameters.join(", ")}`);
      });
    }
  
    getMemoryUsage() {
      const memoryUsage = JSON.stringify(this.stack).length;
      return memoryUsage;
    }
  
    getProcedureCount() {
      return this.stack.length;
    }
  
    isEmpty() {
      return this.stack.length === 0;
    }
  }
  
  const stack = new Stack();
  stack.pushProcedure("Процедура1", 3, [10, 20, 30]);
  stack.pushProcedure("Процедура2", 2, [40, 50]);
  stack.pushProcedure("Процедура3", 5, [40, 50, 30, 20, 10]);
  stack.printStack();
  console.log(`Розмір пам'яті, зайнятої стеком: ${stack.getMemoryUsage()} байт`);
  console.log(`Кількість процедур у стеці: ${stack.getProcedureCount()}`);
  stack.ifStackEmpty();
  