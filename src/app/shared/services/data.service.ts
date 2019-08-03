import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Phim } from 'src/app/commom/models/Phim';

let urlApi = '';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
    urlApi = environment.urlApi;
  }

    get(uri: string): Observable<any> {
      return this.http.get(urlApi + '/' + uri).pipe(
        tap(
          (data: Phim) => {
          },
          catchError(err => {
            return this.handleErr(err);
          })
        )
      );
    }
    handleErr(err) {
      return err;
    }
}
