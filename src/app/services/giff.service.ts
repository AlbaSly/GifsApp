import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../gifs/interfaces/SearchGifsResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class GiffService {
  private gifUrlService = 'https://api.giphy.com/v1/gifs';
  private apiKey:string = 'o9AONzH2uaV4Mz5O27x9OtLkVml2dLKK';
  private _historial: string[] = [];

  //TODO: Cambiar any por su tipo correspondiente
  public results: Gif[] = [];

  get historial():string[] {
    return [...this._historial];
  }

  constructor(private http:HttpClient) {
    this._historial = JSON.parse(localStorage.getItem('gifSearchHistorial')!)??[];
    this.results = JSON.parse(localStorage.getItem('recentGifSearch')!) ?? [];
  }

  searchGifs(query:string) {

    const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('limit', '10')
    .set('q', query);

    this.http.get<SearchGifsResponse>(`${this.gifUrlService}/search`, {params})
    .subscribe((res) => {
      this.results = res.data;
      localStorage.setItem('recentGifSearch', JSON.stringify(this.results));
    })

    const searchIndex = this._historial.indexOf(query);

    if (searchIndex >= 0) {
      this._historial.splice(searchIndex, 1)
    }

    this._historial.unshift(query);
    this._historial = this._historial.splice(0,6);
    localStorage.setItem('gifSearchHistorial', JSON.stringify(this._historial));
  }
}
