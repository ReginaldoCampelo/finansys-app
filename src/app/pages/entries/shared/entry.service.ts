import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable, throwError } from "rxjs";
import { map, catchError, flatMap } from "rxjs/operators";

import { Entry } from "../../entries/shared/entry.model";
import { CategoryService } from "../../categories/shared/category.service";

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  private apiPath: string = 'api/entries'

  constructor(private http: HttpClient, private categoryService: CategoryService) { }

  getAll(): Observable<Entry[]> {
    return this.http.get(this.apiPath).pipe(
      map(this.jsonDataToEntries),
      catchError(this.handleError)
    )
  }

  getById(id: number): Observable<Entry> {
    const url = `${this.apiPath}/${id}`;

    return this.http.get(url).pipe(
      map(this.jsonDataToEntry),
      catchError(this.handleError)
    )
  }

  create(entry: Entry): Observable<Entry> {

    return this.categoryService.getById(entry.categoryId).pipe(
      flatMap(category => {
        entry.category = category;
        return this.http.post(this.apiPath, entry).pipe(
          map(this.jsonDataToEntry),
          catchError(this.handleError)
        )
      })
    )
  }


  update(entry: Entry): Observable<Entry> {
    const url = `${this.apiPath}/${entry.id}`;

    return this.categoryService.getById(entry.categoryId).pipe(
      flatMap(category => {
        entry.category = category;
        return this.http.put(url, entry).pipe(
          map(() => entry),
          catchError(this.handleError)
        )
      })
    )


  }

  delete(id: number): Observable<any> {
    const url = `${this.apiPath}/${id}`;
    return this.http.delete(url).pipe(
      map(() => null),
      catchError(this.handleError)
    )
  }

  // Private Methods

  private jsonDataToEntries(jsonData: any[]): Entry[] {
    const entries: Entry[] = [];

    jsonData.forEach(element => {
      const entry = Object.assign(new Entry(), element);
      entries.push(entry);

    });
    return entries;
  }

  private jsonDataToEntry(jsonData: any): Entry {
    return Object.assign(new Entry(), jsonData)
  }

  private handleError(error: any): Observable<any> {
    console.log("ERRO NA REQUISIÇÃO => ", error);
    return throwError(error);
  }


}
