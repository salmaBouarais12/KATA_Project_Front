import { Component, OnInit } from '@angular/core';
import { FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from 'src/app/domain/booking';
import { Room } from 'src/app/domain/room';
import { User } from 'src/app/domain/user';
import { BookingService } from 'src/app/services/booking.service';
import { RoomService } from 'src/app/services/room.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.css']
})
export class AddBookingComponent implements OnInit{
  bookingForm: FormGroup;
  bookings: Booking[] = [];
  rooms: Room[] = [];
  users: User[] = [];

  constructor(private activatedRoute: ActivatedRoute,
    private bookingService: BookingService,private roomService: RoomService,private userService: UserService,
    private formBuilder: UntypedFormBuilder,
    private router: Router) {
    this.bookingForm = this.formBuilder.group(
      {
        roomId: ['', Validators.required],
        personId: ['', Validators.required],
        bookingDate: ['', Validators.required],
        startSlot: ['', Validators.required],
        endSlot: ['', Validators.required],
      }
    )
  }

  ngOnInit(): void {
    this.loadRooms();
    this.loadUsers();
  }

  loadRooms() {
    this.roomService.getRooms()
      .subscribe(rooms => {
        this.rooms = rooms;
      });
  }
  loadUsers() {
    this.userService.getUsers()
      .subscribe(users => {
        this.users = users;
      });
  }

  onSubmit() {
    if (this.bookingForm.valid) {
     
    }
  }

  backHome(){
    this.router.navigateByUrl("bookings");
  }
}
