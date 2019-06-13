import { OnInit, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngx-lib-app';
  cardNumber: string;
  form: FormGroup;
  withoutMaterialForm: FormGroup;
  appearance = new FormControl();
  html = `
  <form class="cc-form" [formGroup]="form">
    <mat-form-field class="ngx-cc-form-field">
      <ngx-cc name="cardNumber" styleClass="card" formControlName="creditCard" #creditCard></ngx-cc>
      <mat-placeholder>0000 0000 0000 0000</mat-placeholder>
      <mat-error *ngIf="form.controls.creditCard.invalid">Card number is not valid</mat-error>
    </mat-form-field>
    <div class="cc-date-cvv-container">
      <mat-form-field class="ngx-cc-form-field">
          <ngx-cc-date formControlName="creditCardDate"></ngx-cc-date>
          <mat-placeholder>MM / YY</mat-placeholder>
          <mat-error *ngIf="form.controls.creditCardDate.invalid">Expiration date is not valid</mat-error>
      </mat-form-field>
      <mat-form-field class="ngx-cc-form-field">
          <ngx-cc-cvv formControlName="creditCardCvv" [cvv-size]="creditCard.card?.code.size"></ngx-cc-cvv>
          <mat-placeholder>CVV</mat-placeholder>
          <mat-error *ngIf="form.controls.creditCardCvv.invalid">Security code is not valid</mat-error>
      </mat-form-field>
    </div>
    <div class="btn-container">
        <button [disabled]="form.invalid" mat-raised-button color="primary">Purchase</button>
    </div>
  </form>`;

  code = `
  import { OnInit, Component } from '@angular/core';
  import { FormBuilder, FormGroup } from '@angular/forms';
  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
  })
  export class AppComponent implements OnInit {
    constructor(private fb: FormBuilder) { }

    ngOnInit() {
      this.form = this.fb.group({
        creditCard: [],
        creditCardDate: [],
        creditCardCvv: [],
      });
  }`;

  htmlWithouMaterial = `
    <form class="cc-form" [formGroup]="withoutMaterialForm">
        <div class="form-group">
            <ngx-cc defaultStyles placeholder="0000 0000 0000 0000" required="true" styleClass="default-input"
                name="cardNumber" formControlName="creditCardeWithoutMaterial" #creditCard></ngx-cc>
            <span
                *ngIf="withoutMaterialForm.controls.creditCardeWithoutMaterial.invalid && withoutMaterialForm.controls.creditCardeWithoutMaterial.touched">
                Card number is not valid
            </span>
        </div>
        <div class="cc-date-cvv-container space-even">
            <div class="form-group">
                <ngx-cc-date defaultStyles styleClass="default-input" placeholder="MM / YY"
                    formControlName="creditCardDateWithoutMaterial">
                </ngx-cc-date>
                <span
                    *ngIf="withoutMaterialForm.controls.creditCardDateWithoutMaterial.invalid && withoutMaterialForm.controls.creditCardDateWithoutMaterial.touched">
                    Expiration date is not valid
                </span>
            </div>
            <div class="form-group">
                <ngx-cc-cvv defaultStyles styleClass="default-input" placeholder="CVV"
                    [cvv-size]="creditCard.card?.code.size"
                    formControlName="creditCardCvvWithoutMaterial"></ngx-cc-cvv>
                <span
                    *ngIf="withoutMaterialForm.controls.creditCardCvvWithoutMaterial.invalid && withoutMaterialForm.controls.creditCardCvvWithoutMaterial.touched">
                    Security code is not valid
                </span>
            </div>
        </div>
        <button class="btn-purchase" [disabled]="withoutMaterialForm.invalid">Purchase</button>
    </form>
  `;

  codeWithoutMaterial = `
  import { OnInit, Component } from '@angular/core';
  import { FormBuilder, FormGroup } from '@angular/forms';
  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
  })
  export class AppComponent implements OnInit {
    constructor(private fb: FormBuilder) { }

    ngOnInit() {
      this.withoutMaterialForm = this.fb.group({
        creditCardeWithoutMaterial: [],
        creditCardDateWithoutMaterial: [],
        creditCardCvvWithoutMaterial: []
      });
  }`;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // this.appearance.setValue('standard');
    this.form = this.fb.group({
      creditCard: [],
      creditCardDate: [],
      creditCardCvv: [],
    });

    this.withoutMaterialForm = this.fb.group({
      creditCardeWithoutMaterial: [],
      creditCardDateWithoutMaterial: [],
      creditCardCvvWithoutMaterial: []
    });
  }

  getError() {
    console.log(this.withoutMaterialForm.controls.creditCardCvvWithoutMaterial);
  }
}
