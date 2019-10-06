import { Component, OnInit } from "@angular/core";
import { QrCodeReader } from "src/app/qr-code.service";
import { Router, ActivatedRoute } from "@angular/router";

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
    private router: Router
  ) {

  }

  ngOnInit() {}

  onSwitchMode() {
    const indexUser = this.qrReader.scanQrCode();
    if (indexUser !== -1) {
      this.router.navigate(['./', indexUser], { relativeTo: this.route });
    } else {
      this.userNotFound = true;
    }
  }
}
