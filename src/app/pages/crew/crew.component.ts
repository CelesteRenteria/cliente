import { Component, OnInit } from '@angular/core';
import { CrewResult } from 'src/app/interfaces/crewAPI';
import { CrewsService } from 'src/app/services/crews.service';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  constructor(private service:CrewsService) { }
  crew:CrewResult

  ngOnInit(): void {
    this.service.getCrew().subscribe((result:CrewResult)=>{
      this.crew = result;
      console.log(result)
    })
  }

}
