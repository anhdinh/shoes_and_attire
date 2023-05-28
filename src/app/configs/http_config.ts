import {HttpHeaders} from "@angular/common/http";

export class APIConfig{
  public static SERVER_API_URL:string  = "http://localhost:8080/";
  public static getHeader():HttpHeaders{
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    headers = headers.set('DEVICE', 'web');
    //headers = headers.set('Authorization:', ' Bearer <token>');
    return headers;
  }
}
