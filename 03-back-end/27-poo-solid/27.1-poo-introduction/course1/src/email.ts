class Email {
  private _from: string;
  private _to: string;
  private _subject: string;
  private _message: string;

  constructor(fr: string, to: string, sub: string, msg: string) {
    this._from = fr;
    this._to = to;
    this._subject = sub;
    this._message = msg;
  }

  get getsub() {
    return this._subject;
  }

  set setsub(newSub: string) {
    if (newSub.length <= 40) this._subject = newSub;
    else console.log('Subject is too long');
  }

  get getfrom() { return this._from }

  get getto() { return this._to }

  get content() {
    return `
      FROM: ${this._from}\n
      TO: ${this._to}\n
      SUBJECT: ${this._subject}\n
      MESSAGE: ${this._message}
    `;
  }
}

const msg1 = new Email(
  'primeiro@email.com',
  'jose@jose.com',
  'olá, td bem?',
  'por favor mande noticias estou aguardando!'
);

const msg2 = new Email(
  'segundo@email.com',
  'jose@jose.com',
  'olá, td bem?olá, td bem?olá, td bem?olá, td bem?',
  'por favor mande noticias estou aguardando!'
);

console.log(msg1.content);
console.log(msg2.content);

const newSubject = 'olá, td bem? mais de quarenta caracteres vamos testar para ver como fica um assunto grande';
msg2.setsub = newSubject;
console.log(msg2.content);

const newSubject2 = 'olá, td bem? menos de quarenta';
msg2.setsub = newSubject2;
console.log(msg2.content);


class MailList {
  private _mailList: Email[] = [];

  constructor(e: Email[]) { }

  get allEmails(): Email[] { return this._mailList }

  addEmail(newEmail: Email): void {
    this._mailList.push(newEmail);
  }

  getEmailFrom(from: string): Email[] {
    return this._mailList.filter((email) => email.getfrom === from);
  }
}

const msg3 = new Email(
  'terceiro@email.com',
  'joao@joao.com',
  'olá, td bem?',
  'por favor mande noticias estou aguardando!'
)

const msg4 = new Email(
  'quarto@email.com',
  'penelope@email.com',
  'olá, td bem?',
  'por favor mande noticias estou aguardando!'
)

const list = new MailList([msg1, msg2, msg3]);

list.addEmail(msg4);

console.log(list.allEmails);
