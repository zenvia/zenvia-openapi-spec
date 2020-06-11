git clone --branch gh-pages "https://${GH_TOKEN}@github.com/hmagarotto/zenvia-openapi-spec.git"  gh-pages
cp -RT web_deploy gh-pages
cd gh-pages
git add .
git commit -m'Deploy'
git push "https://${GH_TOKEN}@github.com/hmagarotto/zenvia-openapi-spec.git"
