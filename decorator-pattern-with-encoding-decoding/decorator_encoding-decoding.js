"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.decoder = exports.encoder = exports.Decoretor = exports.UserText = exports.Writingplace = void 0;
var CryptoJS = require("crypto-js");
var Writingplace = /** @class */ (function () {
    function Writingplace() {
        this.description = "";
    }
    Writingplace.prototype.getDescription = function () {
        return this.description;
    };
    return Writingplace;
}());
exports.Writingplace = Writingplace;
var UserText = /** @class */ (function (_super) {
    __extends(UserText, _super);
    function UserText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserText.prototype.getDescription = function () {
        return this.description = "this text ->";
    };
    UserText.prototype.gettext = function (text) {
        return text;
    };
    return UserText;
}(Writingplace));
exports.UserText = UserText;
var Decoretor = /** @class */ (function (_super) {
    __extends(Decoretor, _super);
    function Decoretor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Decoretor;
}(Writingplace));
exports.Decoretor = Decoretor;
var encoder = /** @class */ (function (_super) {
    __extends(encoder, _super);
    function encoder(writingplace) {
        var _this = _super.call(this) || this;
        _this.writingplace = writingplace;
        return _this;
    }
    encoder.prototype.getDescription = function () {
        return "encrypting " + this.writingplace.getDescription();
    };
    encoder.prototype.gettext = function (text) {
        var input = this.writingplace.gettext(text);
        var encripted = CryptoJS.AES.encrypt(input, "CSE4502").toString();
        //return encripted;
        return encripted.replace(/(.)\1+/g, function (capture) { return (capture.length > 1 ? capture.length : "") + capture[0]; });
    };
    return encoder;
}(Decoretor));
exports.encoder = encoder;
var decoder = /** @class */ (function (_super) {
    __extends(decoder, _super);
    function decoder(writingplace) {
        var _this = _super.call(this) || this;
        _this.writingplace = writingplace;
        return _this;
    }
    decoder.prototype.getDescription = function () {
        return "decrypting " + this.writingplace.getDescription();
    };
    decoder.prototype.gettext = function (text) {
        var input1 = this.writingplace.gettext(text);
        var decomposed = input1.replace(/([0-9]+)(.)/g, function (_match, count, char) {
            return char.repeat(Number(count));
        });
        //return decomposed;
        var q = CryptoEncoding.decode(input1);
        return q;
    };
    return decoder;
}(Decoretor));
exports.decoder = decoder;
var CryptoEncoding = /** @class */ (function () {
    function CryptoEncoding() {
    }
    // decode encoded message to original text
    CryptoEncoding.decode = function (encodedText) {
        var bytes = CryptoJS.AES.decrypt(encodedText, "CSE4502");
        return bytes.toString(CryptoJS.enc.Utf8);
    };
    return CryptoEncoding;
}());
exports["default"] = CryptoEncoding;
