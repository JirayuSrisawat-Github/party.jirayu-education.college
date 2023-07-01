prettier -w "src/**/*.*"
yarn build && \
git add . && \
git commit -m "Update" && \
git push -u origin main