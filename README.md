初回実行コマンド
1) docker-compose build
2) docker-compose run --rm front sh -c 'yarn create react-app frontend --template typescript'
3) docker-compose run react_app sh -c "cd  /front/frontend/ && yarn build"
