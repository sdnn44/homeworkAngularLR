import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {

  screen: string;
  model: string;
  smarttv: string;
  androidtv: string;
  frequency: string;
  wire: string;
  functions: Functions;
  // functions: string;
  colored: string;
  comments: string[];
  editMode = false;
  editModeButton = false;
  constructor() {
  }

  ngOnInit(): void {
    this.screen = '55", UHD/4K, 3840 x 2160px';
    this.model = 'Telewizor LG 55BX3LB';
    this.smarttv = 'Tak';
    this.androidtv = 'Nie';
    this.frequency = '120 Hz';
    this.wire = 'HDMI x4, USB x3';
    this.functions = {
      wifi: 'Tak',
      bluetooth: 'Tak',
      usb: 'Nagrywanie na USB',
      dlna: 'Nie'
    };
    // this.functions = 'Wi-Fi, Bluetooth, Nagrywanie na USB';
    this.colored = 'Czarny';
    this.comments = ['Świetny produkt', 'Pierwsze 3 dni użytkowania po zmianie z LCD na OLED i nie chce odchodzić się od TV. On naprawdę może wszystko. Wygląda pięknie. POLECAM'];
  }

  addComment(comment): void {
    this.comments.push(comment);
  }

  deleteComment(comment): void {
    for (let i = 0; i < this.comments.length; i++) {
      if (this.comments[i] === comment) {
        this.comments.splice(i, 1);
      }
    }
  }

  editComment(): void{
    this.editModeButton = !this.editModeButton;
    }

  changeEditMode(): void {
    this.editMode = !this.editMode;
  }

  trackByFn(index: any, item: any): number {
    return index;
  }

  setButton(element, text): void{
    if (!this.editModeButton) {
      element.textContent = 'Moderuj wpisy';
    }
    else { element.textContent = text; }
  }
}

interface Functions {
  wifi: string;
  bluetooth: string;
  usb: string;
  dlna: string;
}
