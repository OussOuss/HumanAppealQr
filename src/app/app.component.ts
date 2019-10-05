import { Component, OnDestroy } from '@angular/core';
import { QrCodeReader } from './qr-code.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'app works!';

  subscription: Subscription;

  constructor(private qrReader: QrCodeReader) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onFileChange(event) {
    const file = event.target.files[0];
    this.subscription = this.qrReader.decode(file)
      .subscribe(decodedString => console.log(decodedString));
  }

  onSwitchMode() {
    this.qrReader.scanQrCode();
  }
}
