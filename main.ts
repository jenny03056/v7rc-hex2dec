// HEX2DEC function 
// FB link : https://www.facebook.com/mason.chen.1420
//% weight=12 color=#ff3333 icon="\uf2d6" block="HEX2DEC"
namespace HEX2DEC {
        
    let hex_array = "0123456789ABCDEF"
    let hex_array_2 = "0123456789abcdef"
    let dec_out = 0   
        
    //% blockId="hex2dec_func" block="convert HEX %hex_in | to DEC"
    //% weight=90
    export function hex2dec_func(hex_in: string): number  {
       dec_out = 0
        for (let bit = 0; bit <= hex_in.length - 1; bit++) {
            let char = hex_in.charAt(hex_in.length - 1 - bit)
              for (let ii = 0; ii < 16; ii++) {
                   if ((char.compare(hex_array.charAt(ii)) == 0) || (char.compare(hex_array_2.charAt(ii)) == 0)) {
                      dec_out = dec_out + ii * Math.pow(16, bit)
                   }
              }
        }
        return dec_out
    }
 }
