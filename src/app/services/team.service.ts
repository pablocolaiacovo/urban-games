import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

import { Team } from "../models/Team";
import { MessageService } from "./message.service";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({ providedIn: "root" })
export class TeamService {
  private teamsUrl = "api/teams"; // URL to web api

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) {}

  /* GET Teams from server */
  getTeams(): Observable<Team[]> {
    return this.http
      .get<Team[]>(this.teamsUrl)
      .pipe(
        tap(teams => this.log(`fetched teams`)),
        catchError(this.handleError("getTeams", []))
      );
  }

  /** GET team by id. Return `undefined` when id not found */
  getTeamNo404<Data>(id: number): Observable<Team> {
    const url = `${this.teamsUrl}/?id=${id}`;
    return this.http.get<Team[]>(url).pipe(
      map(teams => teams[0]), // returns a {0|1} element array
      tap(t => {
        const outcome = t ? `fetched` : `did not find`;
        this.log(`${outcome} team id=${id}`);
      }),
      catchError(this.handleError<Team>(`getTeam id=${id}`))
    );
  }

  /** GET team by id. Will 404 if id not found */
  getTeam(id: number): Observable<Team> {
    const url = `${this.teamsUrl}/?id=${id}`;
    return this.http
      .get<Team>(url)
      .pipe(
        tap(_ => this.log(`fetched team id=${id}`)),
        catchError(this.handleError<Team>(`getTeam id=${id}`))
      );
  }

  /* GET teams whose name contains search term */
  searchTeams(term: string): Observable<Team[]> {
    if (!term.trim()) {
      // if not search term, return empty team array.
      return of([]);
    }
    return this.http
      .get<Team[]>(`${this.teamsUrl}/?name=${term}`)
      .pipe(
        tap(_ => this.log(`found teams matching "${term}"`)),
        catchError(this.handleError<Team[]>("searchTeams", []))
      );
  }

  /* POST: add a new team to the server */
  addTeam(team: Team): Observable<Team> {
    return this.http
      .post<Team>(this.teamsUrl, team, httpOptions)
      .pipe(
        tap((team: Team) => this.log(`added team w/ id=${team.id}`)),
        catchError(this.handleError<Team>("addHero"))
      );
  }

  /* DELETE: delete the team from the server */
  deleteHero(team: Team | number): Observable<Team> {
    const id = typeof team === "number" ? team : team.id;
    const url = `${this.teamsUrl}/${id}`;

    return this.http
      .delete<Team>(url, httpOptions)
      .pipe(
        tap(_ => this.log(`deleted team id=${id}`)),
        catchError(this.handleError<Team>("deleteHero"))
      );
  }

  /* PUT: update the team on the server */
  updateHero(team: Team): Observable<any> {
    return this.http
      .put(this.teamsUrl, team, httpOptions)
      .pipe(
        tap(_ => this.log(`updated team id=${team.id}`)),
        catchError(this.handleError<any>("updateHero"))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a TeamService message with the MessageService */
  private log(message: string) {
    this.messageService.add("TeamService: " + message);
  }
}
