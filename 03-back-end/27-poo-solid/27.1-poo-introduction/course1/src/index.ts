class Data {
  private _day: number;
  private _month: number;
  private _year: number;

  constructor(day: number, month: number, year: number) {
    const date = `${year}-${month}-${day}`;
    console.log(new Date(date).getDate(), 'D1');
    console.log(day, 'D2');

    if (new Date(date).getDate() !== day) {
      this._day = 1;
      this._month = 1;
      this._year = 1990;
    } else {
      this._day = day;
      this._month = month;
      this._year = year;
    }
  }

  public get day(): number {
    return this._day;
  }
  
  public set day(value: number) {
    this._day = value;
  }

  public get month(): number {
    return this._month;
  }
  
  public set month(value: number) {
    this._month = value;
  }

  public get year(): number {
    return this._year;
  }

  public set year(value: number) {
    this._year = value;
  }

  public getMonthName(): string {
    const date = new Date(this.year, this.month, this.day);
    const monthName = date.toLocaleDateString('pt-BR', { month: 'long' });
    return monthName;
  }

  public isLeapYear(): boolean {
    if (this.year % 4 === 0) return true;
    return false;
  }

  public compareDate() {
    console.log(this.year, this.month, this.day);
    const date = new Date(this.year, this.month, this.day);
    const date1 = `${this.year}-${this.month}-${this.day}`;
    const today = new Date().toLocaleDateString();
    console.log(date, 'date', today, 'today');
    console.log(new Date(date1));
    // if (date > today) return 1;
    // else if (date < today) return -1;
    // else return 0;
  }
}

const date1 = new Data(27, 10, 2021);
console.log(date1.getMonthName());
console.log(date1.isLeapYear());
console.log(date1.compareDate());
