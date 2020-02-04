import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router'
import {ApiService} from '../api.service'

@Component({
  selector: 'app-postdetail',
  templateUrl: './postdetail.component.html',
  styleUrls: ['./postdetail.component.scss']
})
export class PostdetailComponent implements OnInit {

postId ; // id of clicked post

post = {
  id:0,
  body:" "
}; // which are clicked

user = {
  name:" ",
  id:0
};

photos={
  url:" ",
  thumbnailUrl:" "
};

comentOfOnePost=[]; // comments of clicked post

allComments:any[]=[]; // all comments returned from service 

  constructor(private _ApiService:ApiService , private _ActivatedRoute:ActivatedRoute ) { 

    this._ApiService.getPosts().subscribe( data => this.post = data[this.postId-1]);

    this._ApiService.getUsers().subscribe( data =>this.user = data[this.postId-1] );

    this._ApiService.getPhtoes().subscribe(data => this.photos = data[this.postId-1]);

   this._ApiService.getComments().subscribe(data =>{
            
         this.allComments = data;

         for(let i=0;i < this.allComments.length ;i++){
                  
               if(this.allComments[i].postId == this.postId ){
                   this.comentOfOnePost.push(this.allComments[i].body)
               }
         }
            
     });

   
  }


  getIdOfUrl(){
    this.postId = this._ActivatedRoute.snapshot.params.id;
    console.log(this.postId)
  }

  ngOnInit() {
    this.getIdOfUrl();
  }

}
