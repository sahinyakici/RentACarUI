import {Component, OnInit} from '@angular/core';
import {Brand} from "../../models/brand";
import {BrandService} from "../../services/brand/brand.service";

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  brands: Brand[] = [];
  brandLoaded: boolean = false;
  currentBrand: Brand | null;

  constructor(private brandService: BrandService) {
  }

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data
      this.brandLoaded = true
    })
  }

  setCurrentBrand(brand: Brand | null) {
    this.currentBrand = brand;
  }

  getCurrentBrand(brand: Brand | null) {
    if (this.currentBrand == brand) {
      return "list-group-item active"
    } else {
      return "list-group-item"
    }
  }
}
