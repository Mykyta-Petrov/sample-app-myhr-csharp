import { Component } from "@angular/core";
import {
  FormControl,
  Validators,
  FormGroup,
  AbstractControl,
} from "@angular/forms";
import { ActionsService } from "../actions.service";
import { DocumentType } from "../document-type.enum";

@Component({
  selector: "app-manager-actions",
  templateUrl: "./manager-actions.component.html",
  styleUrls: ["./manager-actions.component.css"],
})
export class ManagerActionsComponent {
  documentType = DocumentType;
  type: DocumentType;

  additionalUserForm: FormGroup = new FormGroup({
    Name: new FormControl("", Validators.required),
    Email: new FormControl("", [Validators.required, Validators.email]),
  });

  constructor(private actionServise: ActionsService) {}

  setDocumentType(type: DocumentType) {
    this.type = type;
  }

  sendEnvelope() {
    this.actionServise
      .sendEnvelope(this.type, this.additionalUserForm.value)
      .subscribe((payload) => {
        window.location.href = payload.redirectUrl;
      });
    this.additionalUserForm.reset();
  }

  isInvalid(control: AbstractControl) {
    const form = <FormGroup>control;
    return form.invalid && form.touched;
  }
}
