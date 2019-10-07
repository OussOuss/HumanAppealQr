import { Component, OnInit } from "@angular/core";
import { QrCodeReader } from "src/app/qr-code.service";
import { Router, ActivatedRoute } from "@angular/router";
import { QrCode } from 'src/app/shared/qr-code.model';
import { userService } from '../user.service';
import { user } from '../user.model';

@Component({
  selector: "app-user-start",
  templateUrl: "./user-start.component.html",
  styleUrls: ["./user-start.component.css"]
})
export class userStartComponent implements OnInit {
  userNotFound = false;
  constructor(
    private qrReader: QrCodeReader,
    private route: ActivatedRoute,
    private router: Router,
    private usersService: userService
  ) {

  }

  ngOnInit() {}

  onSwitchMode() {

    const indexUser = this.qrReader.scanQrCode().then(result => {
      let qrCodeValue;
      let index = -1;
      let utilisateur;
      qrCodeValue = result;
      console.log('Value of QrCode scanned : ' + qrCodeValue);
      if(qrCodeValue) {
        const qrCode = this.resovleQrCode(qrCodeValue);
        const users = this.usersService.getusers();

        if (users && qrCode) {
          index =  users.findIndex(
            u => u.typeIdentifiant === qrCode.typeIdentifiant && u.identifiant === qrCode.identifiant
          );
          if (index !== -1) {
            utilisateur = users[index];
            
            this.router.navigate(['./', index], { relativeTo: this.route });
          } else {
            this.userNotFound = true;
          }
        }
      }
  });
  }
  private resovleQrCode(qrCode: string) {
    if (qrCode && qrCode.length > 0 && qrCode.includes('-')) {
      const splitted = qrCode.split('-');
      return new QrCode(splitted[0], splitted[1]);
    }
  }
}
