import {Component, OnInit} from '@angular/core';
import { navItems } from '../../_nav';
import {WebSocketServiceService} from "../../Services/web-socket-service.service";
import {RdvServiceService} from "../../Services/rdv-service.service";
import {Notification} from "../../Modals/Notification"
import {ToastrService} from "ngx-toastr";
import {UserServiceService} from "../../Services/user-service.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent implements OnInit{
  notifications:Notification[]
  nbnotif:number=0
  public sidebarMinimized = false;
  public navItems = navItems;
  constructor(private webSocketService:WebSocketServiceService, private service:RdvServiceService, private toastsr:ToastrService, private userservice:UserServiceService
  , private router:Router) {


    let stompClient = this.webSocketService.connect();
    stompClient.connect({}, frame => {

      // Subscribe to notification topic
      stompClient.subscribe('/topic/notification', notifications => {
        if(!(sessionStorage.getItem("role")=="PARTICULIER")){
        let notif:Notification=new Notification();
        notif.title=(JSON.parse(notifications.body)).title
        notif.content=(JSON.parse(notifications.body)).content
        notif.date=(JSON.parse(notifications.body)).date
          notif.idNotif=(JSON.parse(notifications.body)).idNotif


        this.toastsr.info(notif.content,notif.title)

        this.notifications.unshift(notif)
          this.nbnotif++;
        }

        // Update notifications attribute with the recent messsage sent from the server




      })

    });
  }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  ngOnInit(): void {
    this.service.getUserNotification(1).subscribe(notifs=>{
      this.notifications=notifs
      this.nbnotif=notifs.length
    })
  }

  initNbNotif(){
    if (this.nbnotif != 0){
      this.nbnotif=0
    }
    for(let i=0;i<this.notifications.length;i++){
      this.service.updateNotification(this.notifications[i]).subscribe()
    }
    this.service.getUserNotification(1).subscribe(notifs=>{
      this.notifications=notifs
      this.nbnotif=notifs.length
    })

  }


  logout(){
    this.userservice.logout();
    sessionStorage.clear()
    this.router.navigate(['/login'])
  }
}
