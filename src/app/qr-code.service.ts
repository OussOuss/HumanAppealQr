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
  ) {}

  scanQrCode() : Promise<string> {

    return varScanApp.scan();
}
}
