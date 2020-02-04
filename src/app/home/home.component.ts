import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
declare var $: any;
import 'jquery';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
   allPosts=[];
   allComments=[];
   allUsers=[
     {
     id:0,
     name:''
     }
  ];
   allPhotoes=[];

     
   
  constructor(private _ApiService:ApiService) { 
     
  _ApiService.getUsers().subscribe( (data) =>{

    this.allUsers = data;
  });

  _ApiService.getPosts().subscribe( (data) => {
     this.allPosts = data
  });

  _ApiService .getComments().subscribe( (data) =>{
    this.allComments=data;
  });

  _ApiService .getPhtoes().subscribe( (data) =>{
    this.allPhotoes=data;
  });


  for (var i = 0; i < this.allPosts.length; i++) {
    if (this.allPosts[i].id == undefined) {
      this.allPosts[i].id = 0;
    }
  }


  
  for (var i = 0; i < this.allPhotoes.length; i++) {
    if (this.allPhotoes[i].thumbnailUrl == undefined && this.allPhotoes[i].url) {
      this.allPhotoes[i].thumbnailUrl = " ";
      this.allPhotoes[i].url = " ";



    }
  }

}



  ngOnInit() {

    
    for (var i = 0; i < this.allPhotoes.length; i++) {
      if (this.allPhotoes[i].thumbnailUrl == undefined && this.allPhotoes[i].url == undefined) {
        this.allPhotoes[i].thumbnailUrl = " ";
        this.allPhotoes[i].url = " ";
      }

    }

    $(document).ready(function () {
      $(".owl-carousel").owlCarousel({
        // autoWidth:true
        items: 10,
        nav: true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
      });
    });




    for (var i = 0; i < this.allPosts.length; i++) {
      if (this. allPosts[i].id == undefined && this. allPosts[i].body == undefined) {
        this. allPosts[i].id = 0;
        this. allPosts[i].body = ' ';



      }
    }


    for (var i = 0; i < this.allUsers.length; i++) {
      if (this.allUsers[i].id == undefined && this.allUsers[i].name == undefined) {
        this.allPosts[i].id = 0;
        this.allUsers[i].name = " ";




      }
    }


  }

}
