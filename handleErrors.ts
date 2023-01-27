import { fromFetch } from "rxjs/fetch";
import { take, catchError, EMPTY, throwError, finalize, switchMap } from "rxjs";

const getSecondChar$ = fromFetch(
// "https://rickandmortyapi.com/api/character/2"
  "https://localhost:1234"
).pipe(
  take(1),
  switchMap((response: any) => response.json()),
  catchError((error) => {
    console.log("handle error");
    // return throwError(error);
    return EMPTY;
  }),
  finalize(() => console.log("this is finished!!!"))
);

getSecondChar$.subscribe(
  (res) => console.log("HTTP response", res),
  (err) => console.log("HTTP Error", err),
  () => console.log("HTTP request completed.")
);
