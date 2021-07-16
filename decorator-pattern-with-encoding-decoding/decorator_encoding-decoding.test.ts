import {
    Writingplace,
    UserText,
    Decoretor,
    encoder,
    decoder,
    } from "./decorator_encoding-decoding";


describe("encode a text", () => {
    it("empty string", () => {
       let writingplace1 = new UserText();
        writingplace1 =new encoder(writingplace1);
      const expected = "";
      expect(writingplace1.gettext("")).toEqual(expected);
    });
  
    it("encoding after decoding bring back same string", () => {
        let writingplace1 = new UserText();
        writingplace1 =new encoder(writingplace1);
        let writingplace2 = new UserText();
        writingplace2 =new decoder(writingplace2);
      const expected = "XYZ";
      expect(writingplace2.gettext(writingplace1.gettext("XYZ"))).toEqual(expected);
    });
  
    
});