module.exports = function (ad, soyad) {

    this._ad = ad
    this._soyad = soyad

    this.adsoyad = function()  {
        return this._ad + this._soyad
    }
}

// module.exports = function (adi, soyadi) {
//     this._adi = adi;
//     this._soyadi = soyadi;
//     this.adiSoyadi = function () {
//       return this._adi + ' ' + this._soyadi;
//     }
//   }