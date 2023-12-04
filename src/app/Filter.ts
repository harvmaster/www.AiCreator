class Filter {
  private field: string;
  private value: string;

  constructor(name: string, value: string) {
    this.field = name;
    this.value = value;
  }

  getName() {
    return this.field;
  }

  getValue() {
    return this.value;
  }

  setName(name: string) {
    this.field = name;
  }

  setValue(value: string) {
    this.value = value;
  }

  toString() {
    return this.field + '=' + this.value;
  }

  execute(data: any[]) {
    const filteredData = data.filter((row) => {
      return row[this.field] == this.value;
    });

    return filteredData;
  }

  static fromString(filterString: string) {
    const name = filterString.split('=')[0];
    const value = filterString.split('=')[1];
    return new Filter(name, value);
  }

  static fromObject(filterObject: { name: string, value: string }) {
    return new Filter(filterObject.name, filterObject.value);
  }
}

export default Filter;