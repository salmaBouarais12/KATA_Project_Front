import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './components/users-list/users-list.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { RoomsListComponent } from './components/rooms-list/rooms-list.component';
import { EditRoomComponent } from './components/edit-room/edit-room.component';
import { AddRoomComponent } from './components/add-room/add-room.component';

const routes: Routes = [
  {
    path : 'users',component : UsersListComponent
  },
  {
    path: "edit-user/:id", component: EditUserComponent
  },
  {
    path: "add-user", component: AddUserComponent
  },
  {
    path : 'rooms',component : RoomsListComponent
  },
  {
    path: "edit-room/:id", component: EditRoomComponent
  },
  {
    path: "add-room", component: AddRoomComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
