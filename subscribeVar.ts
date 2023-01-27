@AutoUnsubscribe()
@Component()
export class SomeComponent implements OnDestroy {
    private subCatalog$: Subscription;
    private allSubscriptions = new Subecription();

    constructor() {
        this.subCatalog$ = someFetch().subscribe()
        this.allSubscriptions.add(
            someFetch2().subscribe()
        )
    }
    public ngOnDestroy(): void {
        /** directive will act alone and will destroy all Subscription */
    }
}