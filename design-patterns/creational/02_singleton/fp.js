const createDatabase = () => {
  let instance = null;

  return () => {
    if (!instance) {
      instance = {
        data: [],
        add(item) {
          this.data.push(item);
        },
      };
    }

    return instance;
  };
};

const getDatabase = createDatabase();

const db1 = getDatabase();
const db2 = getDatabase();

console.log(db1 === db2);
