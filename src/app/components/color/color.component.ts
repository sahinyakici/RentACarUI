import {Component, OnInit, ViewChild} from '@angular/core';
import {Color} from "../../models/color";
import {ColorService} from "../../services/color/color.service";
import {BrandComponent} from "../brand/brand.component";

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  @ViewChild(BrandComponent) brandComponent: BrandComponent;
  colors: Color[] = [];
  colorLoaded: boolean = false;
  currentColor: Color | null;

  constructor(private colorService: ColorService) {
  }

  ngOnInit(): void {
    this.getColors();
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
      this.colorLoaded = true;
    })
  }

  setCurrentColor(color: Color | null) {
    this.currentColor = color;
  }

  getCurrentColor(color: Color) {
    if (this.currentColor == color) {
      return "list-group-item active"
    } else {
      return "list-group-item"
    }
  }

  clearColorFilter(color: Color | null) {
    if (!this.currentColor) {
      return "list-group-item active"
    } else {
      return "list-group-item"
    }
  }
}
