import { fromEvent, from, debounceTime } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { getAsObservable, httpClient } from './httpClient';

export function setup() {
  const url = '/posts';

  fromEvent<Event>(document.getElementById('getUsers') as HTMLElement, 'click')
    .pipe(switchMap(() => getAsObservable(url)))
    .subscribe((res) => console.log('res', res));
  // .subscribe(({ data }) => {
  //   console.log('getUsers', data);
  // });
}
