import { TodoItemRepository } from "./application/TodoItemRepository";
import { EventEmitter } from "./EventEmitter";
import { TodoItemModel } from "./model/TodoItemModel";
import { TodoListModel } from "./model/TodoListModel";
import { TodoItemView } from "./view/TodoItemView";
import { TodoListView } from "./view/TodoListView";
import { nSQL } from "@nano-sql/core";
import { TodoService } from "./application/TodoService";

const spyLog = jest.spyOn(console, "log");
spyLog.mockImplementation((x) => x);

describe("EvenEmitterの実行サンプル", () => {
  test("イベントをディスパッチする", () => {
    const event = new EventEmitter();
    event.addEventListener("test-event", () => console.log("One!"));
    event.addEventListener("test-event", () => console.log("Two!"));
    event.emit("test-event");

    expect(console.log).toBeCalled();
    expect(spyLog.mock.calls[0][0]).toEqual("One!");
    expect(spyLog.mock.calls[1][0]).toEqual("Two!");
  });
});

describe("TodoItemModelを利用するサンプルコード", () => {
  test("それぞれIDは異なる", () => {
    const item = new TodoItemModel({
      title: "未完了のTodoアイテム",
      completed: false,
    });
    const completedItem = new TodoItemModel({
      title: "完了済みのTodoアイテム",
      completed: true,
    });

    expect(item.id).not.toEqual(completedItem.id);
  });
});

describe("TodoListModelを利用するサンプルコード", () => {
  test("Todoリストにアイテムが増える", () => {
    const todoListModel = new TodoListModel();
    todoListModel.onChange(() => {
      console.log("TodoListの状態が変わりました");
    });
    todoListModel.addTodo(
      new TodoItemModel({
        title: "新しいTodoアイテム",
        completed: false,
      })
    );

    expect(console.log).toBeCalled();
    expect(todoListModel.getTotalCount()).toEqual(1);
  });
});

describe("TodoItemViewを利用するサンプルコード", () => {
  test("要素が入る", () => {
    const todoItemView = new TodoItemView();
    const todoItemModel = new TodoItemModel({
      title: "あたらしいTodo",
      completed: false,
    });
    const todoItemElement = todoItemView.createElement(todoItemModel, {
      onUpdateTodo: () => {},
      onDeleteTodo: () => {},
    });

    expect(todoItemElement.textContent).toMatch(/あたらしいTodo/);
  });
});

describe("TodoListViewを利用するサンプルコード", () => {
  test("要素が入る", () => {
    const todoListView = new TodoListView();
    const todoListModel = new TodoListModel();
    [...Array(10).keys()]
      .map((i) => new TodoItemModel({ title: `Todo${i}`, completed: false }))
      .map((j) => todoListModel.addTodo(j));
    const todoListElement = todoListView.createElement(
      todoListModel.getTodoItems(),
      {
        onUpdateTodo: () => {},
        onDeleteTodo: () => {},
      }
    );

    expect(todoListElement.textContent).toMatch(/Todo9/);
  });
});

describe("TodoItemRepositoryを利用するサンプルコード", () => {
  let repository;

  test("Setup", () => {
    repository = new TodoItemRepository("todo_test", "todo_items");
  });

  test("Create", () => {
    const expected = new TodoItemModel({
      title: "新しいTodoアイテム",
      completed: false,
    });

    return repository.create(expected).then(() => {
      return repository.selectAll().then((result) => {
        return expect(result[0]).toEqual(expected);
      });
    });
  });

  test("Delete", () => {
    const expected = new TodoItemModel({
      title: "新しいTodoアイテム",
      completed: false,
    });

    return repository.create(expected).then(() => {
      return repository.selectAll().then((result) => {
        const id = result[result.length - 1].id;
        return repository.find(id).then((result) => {
          return repository.delete(id).then(() => {
            return repository.find(id).then((result) => {
              expect(result).toBe(null);
            });
          });
        });
      });
    });
  });

  test("Destroy", () => {
    const todoListModel = new TodoListModel();
    [...Array(10).keys()]
      .map((i) => new TodoItemModel({ title: `Todo${i}`, completed: false }))
      .map((j) => todoListModel.addTodo(j));

    return repository.createBatch(todoListModel.getTodoItems()).then(() => {
      return repository.destroy().then(() => {
        return repository.selectAll().then((result) => {
          expect(result).toEqual([]);
        });
      });
    });
  });

  test("Save", () => {
    const entity = new TodoItemModel({
      title: "新しいTodoアイテム",
      completed: false,
    });

    return repository.create(entity).then(() => {
      return repository.selectAll().then((result) => {
        const id = result[result.length - 1].id;
        return repository.find(id).then((result) => {
          const updateEntity = new TodoItemModel({
            id,
            title: "更新したTodoアイテム",
            completed: true,
          });
          return repository.save(updateEntity).then(() => {
            return repository.find(id).then((result) => {
              expect(result.title).toEqual("更新したTodoアイテム");
              expect(result.completed).toBe(true);
            });
          });
        });
      });
    });
  });
});

describe("TodoServiceを利用するサンプルコード", () => {
  let service = new TodoService();

  beforeEach(() => {
    service.deleteAll();
  });

  test("CreateTodoItem", () => {
    const expected = new TodoItemModel({
      title: "新しいTodoアイテム",
      completed: false,
    });

    return service.createTodoItem(expected).then(() => {
      return service.selectAll().then((result) => {
        return expect(result[0]).toEqual(expected);
      });
    });
  });

  test("Delete", () => {
    const entity = new TodoItemModel({
      title: "新しいTodoアイテム",
      completed: false,
    });

    return service.createTodoItem(entity).then(() => {
      return service.find(entity).then((result) => {
        return service.delete(entity).then(() => {
          return service.find(entity).then((result) => {
            expect(result).toBe(null);
          });
        });
      });
    });
  });

  test("DeleteAll", () => {
    const todoListModel = new TodoListModel();
    [...Array(10).keys()]
      .map((i) => new TodoItemModel({ title: `Todo${i}`, completed: false }))
      .map((j) => todoListModel.addTodo(j));

    return service.createTodoList(todoListModel.getTodoItems()).then(() => {
      return service.deleteAll().then(() => {
        return service.selectAll().then((result) => {
          expect(result).toEqual([]);
        });
      });
    });
  });

  test("Save", () => {
    const entity = new TodoItemModel({
      title: "新しいTodoアイテム",
      completed: false,
    });

    return service.createTodoItem(entity).then(() => {
      return service.selectAll().then((result) => {
        const id = result[result.length - 1].id;
        return service.find(entity).then((result) => {
          const updateEntity = new TodoItemModel({
            id,
            title: "更新したTodoアイテム",
            completed: true,
          });
          return service.save(updateEntity).then(() => {
            return service.find(updateEntity).then((result) => {
              expect(result.title).toEqual("更新したTodoアイテム");
              expect(result.completed).toBe(true);
            });
          });
        });
      });
    });
  });
});
