import * as CryptoJS from "crypto-js";

export abstract class Writingplace{
    description: string="";
    getDescription(): string{
        return this.description;
    }
    abstract gettext(text: string): string;
}

export class UserText extends Writingplace{
    
    getDescription(): string{
        return this.description="this text ->";
    }
    gettext(text: string): string{
        return text;
    }
}


export abstract class Decoretor extends Writingplace{
    abstract getDescription(): string;
}



export class encoder extends Decoretor{
    
 writingplace: Writingplace;
 constructor (writingplace: Writingplace){
     super();
     this.writingplace=writingplace;
 }
 getDescription(): string{
        return "encrypting "+this.writingplace.getDescription();
    }
 gettext(text: string): string{
     let input = this.writingplace.gettext(text);
     let encripted=CryptoJS.AES.encrypt(input, "CSE4502").toString();
     //return encripted;
     return encripted.replace(
      /(.)\1+/g,
      (capture) => (capture.length > 1 ? capture.length : "") + capture[0]
    );
 }
}

export class decoder extends Decoretor{
 crypdec: CryptoEncoding;    
 writingplace: Writingplace;
 constructor (writingplace: Writingplace){
     super();
     this.writingplace=writingplace;
 }
 getDescription(): string{
        return "decrypting "+this.writingplace.getDescription();
    }
 gettext(text: string): string{
     let input1 = this.writingplace.gettext(text);
     var decomposed = input1.replace(/([0-9]+)(.)/g, (_match, count, char) =>
      char.repeat(Number(count))
    );
    //return decomposed;
    var q= CryptoEncoding.decode(input1);
     return q;
 }
}

export default class CryptoEncoding {
    
    // decode encoded message to original text
    static decode(encodedText: string): string {
      const bytes = CryptoJS.AES.decrypt(encodedText, "CSE4502");
      return bytes.toString(CryptoJS.enc.Utf8);
    }
  }