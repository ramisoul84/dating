import { Component } from '@angular/core';
import { MatchesComponent } from "../../components/matches/matches.component";
import { MessagesComponent } from "../../components/messages/messages.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-chats',
  imports: [MatchesComponent, MessagesComponent, FooterComponent],
  templateUrl: './chats.component.html',
  styleUrl: './chats.component.scss'
})
export class ChatsComponent {

}
