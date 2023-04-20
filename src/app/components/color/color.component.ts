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
  currentColor: Color | null = null;
  filterText: string = "";

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
}
