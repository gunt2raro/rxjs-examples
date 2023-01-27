import { fromFetch } from "rxjs/fetch";
import { retryWhen, tap, delayWhen, timer, switchMap } from "rxjs";

const getSecondChar$ = fromFetch(
  "https://rickandmortyapi.com/api/character/2"
).pipe(
  switchMap((response: any) => response.json()),
  retryWhen((errors) => {
    return errors.pipe(
      delayWhen(() => timer(2000)), // just in case we are dealing with high traffic
      tap(() => console.log("retrying..."))
    );
  })
);

getSecondChar$.subscribe(
  (res) => console.log("HTTP response", res),
  (err) => console.log("HTTP Error", err),
  () => console.log("HTTP request completed.")
);
