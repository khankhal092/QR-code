import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, Validators } from "@angular/forms";
import {
  createQRCodeValidator,
  QRCodeEncoding,
} from "@progress/kendo-angular-barcodes";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  encoding: QRCodeEncoding = "ISO_8859_1";
  options: any;
  ngOnInit() {
    this.options = this.fb.group({
      value: [
        "Ф",
        Validators.compose([
          Validators.required,
          createQRCodeValidator(this.encoding),
        ]),
      ]
    });
  }

  get value(): AbstractControl {
    return this.options.controls["value"];
  }

  constructor(private fb: FormBuilder) { }
}
