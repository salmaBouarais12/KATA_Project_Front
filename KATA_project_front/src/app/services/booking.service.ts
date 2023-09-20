import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { configEndpointsApi } from '../api/config-endpoints-api';
import { Booking } from '../domain/booking';
import { BookingsResponse } from './dtos/BookingsResponse';
import { BookingResponse } from './dtos/BookingResponse';

@Injectable({
  providedIn: 'root'
})

export class BookingService {
    constructor(private http: HttpClient) { }

  getBookings(): Observable<Booking[]> {
    return this.http.get<BookingsResponse>(configEndpointsApi.endpoints.bookings.read)
      .pipe(map(this.mapBookingsResponseToBookings));
  }

  getBookingById(id : number): Observable<Booking> {
    return this.http.get<BookingResponse>(configEndpointsApi.endpoints.bookings.read + "/" + id);
  }

  deleteBooking(booking: Booking) : Observable<Booking> {
    return this.http.delete<BookingResponse>(configEndpointsApi.endpoints.bookings.edit + booking.id);
  }

  mapBookingsResponseToBookings(response: BookingsResponse): Booking[] {
    return response.bookings.map(b =>({
      id:b.id,
      roomId:b.roomId,
      personId: b.personId,
      bookingDate: b.bookingDate,
      startSlot: b.startSlot,
      endSlot: b.endSlot
    }));
  }
}