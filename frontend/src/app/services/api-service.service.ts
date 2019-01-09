import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http:HttpClient) { }

//function to post a question to the API server
postQuestion(question){
this.http.post('',question).subscribe(res=>{
console.log(res);
});
}

}
