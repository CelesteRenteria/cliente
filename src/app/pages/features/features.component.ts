import { Component, OnInit } from '@angular/core';
import { FeaturesResult } from 'src/app/interfaces/featuresAPI';
import { FeaturesService } from 'src/app/services/features.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  constructor(private service:FeaturesService) { }
  features:FeaturesResult

  ngOnInit(): void {
    this.service.getFeatures().subscribe((
      result:FeaturesResult
    )=>{
      this.features = result;
      console.log(result)
    })
  }

}
