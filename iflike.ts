import { filter, map, of, tap } from "rxjs";

// filter instead of ifs on subscribe
of(1, 2, 3, 4, 5, 6)
  .pipe(map((n) => n * 3))
  .subscribe((n) => {
    if (n % 2 === 0) {
      console.log(n);
    }
  });

// right solution
of(1, 2, 3, 4, 5, 6)
  .pipe(
    map((n) => n * 3),
    filter((n) => n % 2 === 0),
    tap(console.log)
  )
  .subscribe();
