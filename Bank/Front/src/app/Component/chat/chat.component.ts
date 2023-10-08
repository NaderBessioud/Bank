import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
import {User} from "../../Modals/user";
import {UserServiceService} from "../../Services/user-service.service";
import {ChatService} from "../../Services/chat.service";
import {Message} from "../../Modals/message";
import {WebSocketServiceService} from "../../Services/web-socket-service.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit,AfterViewInit {

  userOnLine:User[]
  messages:Message[]=[]
  username:any
  nb:number
  idc:any
  content:any;
  idre:any;
  lastid:any
  constructor(private service:ChatService,private userservice:UserServiceService,private webSocketService:WebSocketServiceService) {
    let stompClient = this.webSocketService.connect();
    stompClient.connect({}, frame => {

      // Subscribe to notification topic
      stompClient.subscribe('/topic/messages', notifications => {
        if((sessionStorage.getItem("id")==(JSON.parse(notifications.body)).sender.idEmployee ||
          sessionStorage.getItem("id")==(JSON.parse(notifications.body)).receiver.idEmployee)){
          let messageS:Message=new Message();
          messageS.content=(JSON.parse(notifications.body)).content
          messageS.date=(JSON.parse(notifications.body)).date
          messageS.hour=(JSON.parse(notifications.body)).hour
          messageS.sender=(JSON.parse(notifications.body)).sender
          messageS.receiver=(JSON.parse(notifications.body)).receiver
          messageS.dateForTaday="Today"

          this.messages.push(messageS)

        }

        // Update notifications attribute with the recent messsage sent from the server




      })

      stompClient.subscribe('/topic/online', notifications => {
        let exist=0
        if(sessionStorage.getItem("email")!=(JSON.parse(notifications.body)).email){
          let newuser:User=new User();
          newuser.nom=(JSON.parse(notifications.body)).nom
          newuser.prenom=(JSON.parse(notifications.body)).prenom
          newuser.email=(JSON.parse(notifications.body)).email
          newuser.idEmployee=(JSON.parse(notifications.body)).idEmployee
          newuser.online=true
          for(let i=0; i<this.userOnLine.length; i++){
            if(this.userOnLine[i].email==newuser.email){
           console.log(this.userOnLine[i].idEmployee)
             const el= document.getElementById(this.userOnLine[i].idEmployee) as HTMLElement
              el.className="online_icon"
              console.log(el.className)
              exist=1
            }
          }
          if(exist==0){
         this.userOnLine= this.userOnLine.concat(newuser)
          }


        }

        // Update notifications attribute with the recent messsage sent from the server




      })

      stompClient.subscribe('/topic/offline', notifications => {
        console.log()
        let exist=0
        if(sessionStorage.getItem("email")!=(JSON.parse(notifications.body)).email){
          let newuser:User=new User();
          newuser.nom=(JSON.parse(notifications.body)).nom
          newuser.prenom=(JSON.parse(notifications.body)).prenom
          newuser.email=(JSON.parse(notifications.body)).email
          newuser.idEmployee=(JSON.parse(notifications.body)).idEmployee
          newuser.online=false
          for(let i=0; i<this.userOnLine.length; i++){
            if(this.userOnLine[i].email==newuser.email){
              console.log(this.userOnLine[i].idEmployee)
              const ele= document.getElementById(this.userOnLine[i].idEmployee) as HTMLElement
              ele.className="online_icon offline"
              console.log(ele.className)

              exist=1
            }
          }
          if(exist==0){
            this.userOnLine= this.userOnLine.concat(newuser)
          }


        }

        // Update notifications attribute with the recent messsage sent from the server




      })

    });
  }

  ngAfterViewInit(): void{
    this.service.getUserOnLine(sessionStorage.getItem("id")).subscribe(li=>{



      const element=document.getElementsByClassName('active'+li[0].idEmployee)[0] as HTMLElement


      element.style.backgroundColor='rgba(0,0,0,0.3)'
    })
  }
  ngOnInit(): void {

    this.service.getUserOnLine(sessionStorage.getItem("id")).subscribe(li=>{
      this.userOnLine=li;
      this.lastid=li[0].idEmployee
      console.log(this.userOnLine)
      const boxes = Array.from(
        document.getElementsByClassName('active'+li[0].idEmployee) as HTMLCollectionOf<HTMLElement>,
      );

      boxes.forEach(box => {
        console.log(box.innerText);
      });



      this.service.getMessage(sessionStorage.getItem("id"),this.userOnLine[0].idEmployee).subscribe(lms=>{
        this.messages=lms;
        this.nb=lms.length
        this.username=this.userOnLine[0].nom+" "+this.userOnLine[0].prenom
        this.idre=this.userOnLine[0].idEmployee
      })
    })


  this.idc=sessionStorage.getItem("id")
      $('#action_menu_btn').click(function(){
        $('.action_menu').toggle();
      });






  }

  ChangeUser(id) {

    this.idre = id

    if (this.lastid != null) {

    const element2 = document.getElementsByClassName('active' + this.lastid)[0] as HTMLElement
    element2.style.backgroundColor = 'transparent'
  }
this.lastid=id

    const element1=document.getElementsByClassName('active'+id)[0] as HTMLElement
    element1.style.backgroundColor='rgba(0,0,0,0.3)'

    this.service.getMessage(sessionStorage.getItem("id"),id).subscribe(lms=>{
      this.messages=lms;
      this.nb=lms.length
      this.userservice.getUser(id).subscribe(u=>{
        this.username=u.nom+" "+u.prenom
      })

    })

  }


  sendMessage(){
    this.service.sendMessage(this.content,sessionStorage.getItem("id"),this.idre).subscribe(  m=>{
      this.content=""
      this.nb=this.nb+1
    });
  }

}
