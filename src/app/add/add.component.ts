import { Component, OnInit } from '@angular/core';
import {Profile} from '../profile';
import {Router} from '@angular/router';
import {ProfileService} from '../demo/profile.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  model = new Profile();
  constructor(private router: Router, private profileService: ProfileService) { }

  ngOnInit() {
  }

  onSubmit(formValue) {
    this.profileService.addProfile(formValue).subscribe(
      response => {
       console.log(response);
      });

  }

}
