# CLI commands

Here I will try to document the commands used to generate the scaffoldings.

````
ng new angular-cli-seed --style scss --skip-test --skip-install --routing
ng g m --routing Home
ng g c home/components/Home --m home --spec false
````

### prod build with stats.json generated.
````
ng build --prod --stats-json
````