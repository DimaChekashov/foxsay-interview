function createCommandHistory() {
  const history = [];

  const execute = (command) => {
    command.execute();
    history.push(command);
  };

  const undo = () => {
    const command = history.pop();
    command?.undo();
  };

  return {
    undo,
    execute,
  };
}

const createInsertCommand = (editor, text) => ({
  execute: () => editor.insert(text),
  undo: () => editor.delete(text.length),
});

const history = createCommandHistory();
const editor = {
  text: "",
  insert(text) {
    this.text += text;
    console.log(`Текст: "${this.text}"`);
  },
  delete(length) {
    this.text = this.text.slice(0, -length);
    console.log(`Текст: "${this.text}"`);
  },
};

history.execute(createInsertCommand(editor, "Привет"));
history.execute(createInsertCommand(editor, ", мир"));
history.undo();
history.undo();
