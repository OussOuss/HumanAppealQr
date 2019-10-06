import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { userService } from "./users/user.service";
import { DataStorageService } from "./shared/data-storage.service";
import { QrCode } from "./shared/qr-code.model";
import { user } from './users/user.model';

declare const varScanApp: any;

@Injectable({ providedIn: "root" })
export class QrCodeReader {
  constructor(
    private dataStorageService: DataStorageService,
    private usersService: userService
  ) {}

  scanQrCode(): number {
    const qrCodeValue = varScanApp.scan();
    console.log('Value of QrCode scanned : ' + qrCodeValue);
    const qrCode = this.resovleQrCode(qrCodeValue);
    const users = this.usersService.getusers();

    if (users && qrCode) {
      return users.findIndex(
        u => u.typeIdentifiant === qrCode.typeIdentifiant && u.identifiant === qrCode.identifiant
      );
    }
  }

  resovleQrCode(qrCode: string) {
    if (qrCode && qrCode.length > 0 && qrCode.includes('-')) {
      const splitted = qrCode.split('-');
      return new QrCode(splitted[0], splitted[1]);
    }
  }
}
