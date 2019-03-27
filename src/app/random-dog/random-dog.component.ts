import { Component, OnInit } from '@angular/core';
import {DogService} from '../dog.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-random-dog',
  templateUrl: './random-dog.component.html',
  styleUrls: ['./random-dog.component.scss']
})
export class RandomDogComponent implements OnInit {
  dogUrl: string;
  dogName: string;
  constructor(private dogFetcher: DogService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.dogName = params.get('name');
    });
  }

  ngOnInit() {
    this.dogFetcher.getRandomDog().subscribe(
      (result) => {
        this.dogUrl = result.message;
      }
    );
  }

}
