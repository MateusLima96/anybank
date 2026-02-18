import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass } from "../../../../node_modules/@angular/common/common_module.d-NEF7UaHr";

@Component({
  selector: 'app-form-nova-transacao',
  imports: [FormsModule],
  templateUrl: './form-nova-transacao.component.html',
  styleUrl: './form-nova-transacao.component.css'
})
export class FormNovaTransacaoComponent {
  tipoTransacao = "";
  valorTransacao = "";

  aoSubmeter() {
    this.tipoTransacao = "";
    this.valorTransacao = "";
  }
}
