class TextEditor {
  text = "";

  insertText(text) {
    this.text += text;
    console.log(`Текст: "${this.text}"`);
  }

  deleteText(length) {
    this.text = this.text.slice(0, -length);
    console.log(`Текст: "${this.text}"`);
  }

  getText() {
    return this.text;
  }
}

class InsertCommand {
  constructor(editor, text) {
    this.editor = editor;
    this.text = text;
  }

  execute() {
    this.editor.insertText(this.text);
  }

  undo() {
    this.editor.deleteText(this.text.length);
  }
}

class CommandHistory {
  history = [];

  execute(command) {
    command.execute();
    this.history.push(command);
  }

  undo() {
    const command = this.history.pop();
    command?.undo();
  }
}

const editor = new TextEditor();
const history = new CommandHistory();

history.execute(new InsertCommand(editor, "Привет,"));
history.execute(new InsertCommand(editor, " мир!"));

history.undo();
history.undo();
