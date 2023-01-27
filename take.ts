import { fromFetch } from "rxjs/fetch";
import { concat, of, switchMap, take } from "rxjs";

const characters$ = concat([
  of(1000),
  of(1000),
  fromFetch("https://rickandmortyapi.com/api/character"),
]).pipe(
  take(1),
  switchMap((response) => response)
);

characters$.subscribe({
  next: (result) => console.log(result),
  complete: () => console.log("done"),
});
