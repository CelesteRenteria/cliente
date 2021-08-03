import { Component, OnInit } from '@angular/core';
import { YachtResult } from 'src/app/interfaces/yachtsAPT';
import { YachtsService } from 'src/app/services/yachts.service';

@Component({
  selector: 'app-yachts',
  templateUrl: './yachts.component.html',
  styleUrls: ['./yachts.component.css']
})
export class YachtsComponent implements OnInit {

  constructor(private service:YachtsService) { }
  yachts:YachtResult

  ngOnInit(): void {
    this.service.getYachts().subscribe((result:YachtResult)=>{
      this.yachts = result;
      console.log(result)
    })
  }

}
