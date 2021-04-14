(ﾉ ´ ヮ`)ﾉ\*: ･ﾟ Kaomoji cheatsheet

_Developed using [Next.js](https://nextjs.org/)_

_Deployed using [Vercel](https://vercel.com/)_

## Start locally

```bash
npm run dev
# or
yarn dev
```

## Graphql API

### Playground

[Production playgroud](https://hellokaomoji.com/api/graphql)

[Development playgorund](http://localhost:3000/api/graphql)

### Have fun

#### Configure random kaomoji terminal greeting for fish

<img width="721" alt="Screen Shot 2021-04-13 at 21 40 02" src="https://user-images.githubusercontent.com/14827835/114641850-d4927300-9ca0-11eb-90e4-84bcf767b56a.png">


```
vim ~/.config/fish/config.fish
```

Copy the following to your fish config:
```
function random_kaomoji
  set kaomoji_raw (curl -s --header "Content-Type: application/json" \
    --request POST \
    --data '{ "query": "{ randomKaomoji }" }'  \
    https://hellokaomoji.com/api/graphql)

  set -x -g kaomoji (echo $kaomoji_raw | sed -e 's/.*{"data":{"randomKaomoji":"\(.*\)"}}.*/\1/')

  echo "Hello!!" $kaomoji
end

function fish_greeting
  random_kaomoji
end
```
