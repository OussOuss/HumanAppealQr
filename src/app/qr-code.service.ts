import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

declare const qrcode: any;
declare const varScanApp: any;

@Injectable({ providedIn: 'root' })
export class QrCodeReader {

  decode(file: any): Observable<string> {

    return new Observable(observer => {

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e: any) => {
        const data = e.target.result;
        qrcode.callback = (res) => {
          observer.next(res);
          observer.complete();
        };
        qrcode.decode(data);
      };

    });
  }

  scanQrCode(): void {
    varScanApp.scan();
  }
}