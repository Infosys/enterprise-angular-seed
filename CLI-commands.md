# CLI commands

Here I will try to document the commands used to generate the scaffoldings.

````
ng new angular-cli-seed --style scss --skip-test --skip-install --routing
ng g module --routing Home
ng g c home/components/Home --m home --spec false
ng g module appcommon --module app
ng g module appcommon --module app

ng g i home/models/Post
ng g s home/services/JsonServer --spec false

````

### prod build with stats.json generated.
````
ng build --prod --stats-json
````