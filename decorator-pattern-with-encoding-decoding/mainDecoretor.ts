import {
  Writingplace,
  UserText,
  Decoretor,
  encoder,
  decoder,
  } from "./decorator_encoding-decoding";

let writingplace1 = new UserText();
writingplace1 =new encoder(writingplace1);
let b1= writingplace1.gettext("aabbbcccc");
let a1= writingplace1.getDescription();
console.log(a1+" "+b1);

let writingplace2 = new UserText();
writingplace2 =new decoder(writingplace2);
let b2= writingplace2.gettext(b1);
let a2 = writingplace2.getDescription();
console.log(a2+" "+b2);