import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { list } from './list-items/list-items.component';

@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {


  readonly apiUrl = 'https://66791c5718a459f6394e0b19.mockapi.io/Lists';

  constructor(private _http: HttpClient) { }

  getLists(): Observable<list[]> {
    return this._http.get<list[]>(`${this.apiUrl}`)
  }

  createList(item: any): Observable<any> {
    console.log('here', item);
    return this._http.post(this.apiUrl, item)
  }

  deleteItem(item_id:string): Observable<any> {
    return this._http.delete(`${this.apiUrl}/${item_id}`)
  }
}
