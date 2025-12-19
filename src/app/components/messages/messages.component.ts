import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-messages',
  imports: [CommonModule],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss'
})
export class MessagesComponent {
  messages = [
    { img: "", text: "Hello", time: "12.03", status: "read" },
    { img: "", text: "Hi!", time: "12.03", status: "read" },
    { img: "", text: "How are you?", time: "12.03", status: "read" },
    { img: "", text: "Hello", time: "12.03", status: "read" },
    { img: "", text: "Hello", time: "12.03", status: "read" },
    { img: "", text: "Hello", time: "12.03", status: "read" },
    { img: "", text: "Hello", time: "12.03", status: "read" },
     { img: "", text: "Hello", time: "12.03", status: "read" },
  ]
}
