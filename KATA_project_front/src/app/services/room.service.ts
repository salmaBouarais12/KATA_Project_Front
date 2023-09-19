import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Room } from '../domain/room';
import { Observable, map } from 'rxjs';
import { RoomsResponse } from './dtos/RoomsResponse';
import { configEndpointsApi } from '../api/config-endpoints-api';

@Injectable({
  providedIn: 'root'
})

export class RoomService {

  constructor(private http: HttpClient) { }

  getRooms(): Observable<Room[]> {
    return this.http.get<RoomsResponse>(configEndpointsApi.endpoints.rooms.read)
      .pipe(map(this.mapRoomsResponseToRooms));
  }

  mapRoomsResponseToRooms(response: RoomsResponse): Room[] {
    return response.rooms.map(r => ({
      id:r.id,
      roomName: r.roomName,
    }));
  }
}
