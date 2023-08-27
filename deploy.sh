prettier -w "src/**/*.*"
pnpm build && \
git add . && \
git commit -m "Update" && \
git push -u origin main
