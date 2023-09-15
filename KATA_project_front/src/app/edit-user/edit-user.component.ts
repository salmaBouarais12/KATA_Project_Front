import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { configEndpointsApi } from '../api/config-endpoints-api';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  userForm: FormGroup;
  user : any;

  constructor(private activatedRoute: ActivatedRoute,
    private formBuilder: UntypedFormBuilder,
    private httpClient: HttpClient,
    private router: Router) {
    this.userForm = this.formBuilder.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
      }
    )
  }
  ngOnInit(): void {
    this.loadUser();
  }

  onSubmit() {
    if (this.userForm.valid) {
      const user = this.userForm.value;
      this.httpClient.put(configEndpointsApi.endpoints.users.edit + this.user.id, {
        ...user,
        id: this.user.id
      }).subscribe(data => {
        this.router.navigateByUrl("users");
      })
    }
  }
  loadUser() {
    let id = this.activatedRoute.snapshot.params['id'];
    this.httpClient.get(configEndpointsApi.endpoints.users.read + "/" + id).subscribe((data: any) => {
      this.user = data
      this.userForm.patchValue({
        firstName: this.user.firstName,
        lastName: this.user.lastName,
      })
    })
  }
}
